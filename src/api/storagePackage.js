import JsZip from 'jszip';

export default {

  async createPackage(path, name, filePath1, filePath2, filePath3) {
    console.log('createPackage : ', path, name);

    const file1 = await this.loadFile(filePath1);
    const file1Value = await this._readAsblob(file1);

    const file2 = await this.loadFile(filePath2);
    const file2Value = await this._readAsblob(file2);

    const file3 = await this.loadFile(filePath3);
    const file3Value = await this._readAsblob(file3);

    const pack = new JsZip();
    pack.file(file1.name, file1Value);
    pack.file(file2.name, file2Value);
    pack.file(file3.name, file3Value);

    const packValue = await pack.generateAsync({type: 'blob'});

    await this.creatFile(path, name, packValue, packValue.type);
    // await this._saveAs(packValue, name); //download pack
  },

  async downloadPackage(path, name) {
    const file = await this.loadFile(path, name);
    const packValue = await this._readAsblob(file);
    await this._saveAs(packValue, name);
  },

  async unpackage(path) {
    let file;
    if (!path) {
      file = await this._openPackFromDick();
    } else {
      file = await this._openPackFromLocal(path);
    }

    const zip = new JsZip();
    const pack = await zip.loadAsync(file);

    const list = [];

    for (const name in pack.files) {
      if (Object.prototype.hasOwnProperty.call(pack.files, name)) {
        const file = pack.files[name];
        const blob = await file.async('blob');
        if (name.includes('.mp3')) {
          list[2] = await this._readAsMedia(blob);
        }
        if (name.includes('.png')) {
          list[1] = await this._readAsImage(blob);
        }
        if (name.includes('.json')) {
          list[0] = await this._readAsText(blob);
        }
      }
    }
    return list;
  },

  async _openPackFromDick() {
    const options = {
      types: [{accept: {'pack/*': ['.vn']}}],
    };
    const [fileHandle] = await window.showOpenFilePicker(options);
    return await fileHandle.getFile();
  },

  async _openPackFromLocal(path) {
    const file = await this.loadFile(path);
    const packValue = await this._readAsblob(file);
    return packValue;
  },

  async _saveAs(blob, name) {
    const options = {suggestedName: name};
    const fileHandle = await window.showSaveFilePicker(options);
    const writable = await fileHandle.createWritable();
    await writable.write(blob);
    await writable.close();
  },

  _readAsblob(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = function() {
        const blob = new Blob([this.result], {type: file.type});
        resolve(blob);
      };
      reader.onerror = function(e) {
        reject(e);
      };
      reader.readAsArrayBuffer(file);
    });
  },

};
