export default {
  async uploadImage(path, name) {
    const options = {
      types: [
        {
          accept: {
            'image/*': ['.png', '.jpeg', '.jpg']
          },
        },
      ],
    };
    let fileHandle;
    [fileHandle] = await window.showOpenFilePicker(options);
    debugger;
    const file = await fileHandle.getFile();
    await this.creatFileImage(path, name, file);
  },

  async creatFileImage(path, name, file) {
    console.log('creatFileImage : ', path, name);
    return await this.creatFile(path, name, file, file.type);
  },

  async loadFileImage(path, name) {
    console.log('loadText : ', path, name);
    const file = await this.loadFile(path, name);
    return await this._readAsImage(file);
  },

  _readAsImage(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = function() {
        console.log('Read completed.');
        resolve(this.result);
      };
      reader.onerror = function(e) {
        console.log('Read failed: ' + e.toString());
        reject(e);
      };
      reader.readAsDataURL(file);
    });
  },
};
