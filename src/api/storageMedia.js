export default {
  async uploadMedia(path, name) {
    const options = {
      types: [{accept: {'media/*': ['.mp3', '.mp4']}}],
    };
    const [fileHandle] = await window.showOpenFilePicker(options);
    const file = await fileHandle.getFile();
    return await this.creatFileMedia(path, name, file);
  },

  async creatFileMedia(path, name, file) {
    console.log('creatFileMedia : ', path, name);
    return await this.creatFile(path, name, file, file.type);
  },

  async loadFileMedia(path, name) {
    console.log('loadFileMedia : ', path, name);
    const file = await this.loadFile(path, name);
    return await this._readAsMedia(file);
  },

  _readAsMedia(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = function() {
        console.log('Read completed.');
        const blob = new Blob([this.result]);
        resolve(URL.createObjectURL(blob));
      };
      reader.onerror = function(e) {
        console.log('Read failed: ' + e.toString());
        reject(e);
      };
      reader.readAsArrayBuffer(file);
    });
  },
};
