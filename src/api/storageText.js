
window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
// https://udn.realityripple.com/docs/Web/API/FileSystemDirectoryEntry/getFile
// https://web.dev/file-system-access

export default {

  async loadFileText(path, name) {
    console.log('loadText : ', path, name);
    const file = await this.loadFile(path, name);
    return await this._readAsText(file);
  },

  async creatFileText(path, name, file) {
    console.log('creatFileText : ', path, name);
    return await this.creatFile(path, name, file, 'text/plain');
  },

  _readAsText(file) {
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
      reader.readAsText(file);
    });
  },

};


