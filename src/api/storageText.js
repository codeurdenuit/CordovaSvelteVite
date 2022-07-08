
window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
// https://udn.realityripple.com/docs/Web/API/FileSystemDirectoryEntry/getFile
// https://web.dev/file-system-access

export default {
  async dirDirectory(path) {
    console.log('dirDirectory : ', path);
    const fs = await this._requestFileSystem();
    const directoryEntry = await this._getDirectory(fs.root, path, {create: true});
    const result = await this._readEntries(directoryEntry);
    console.log(result);
    return result;
  },

  async creatFile(path, name, value) {
    console.log('creatFile : ', path, name, value);
    const fs = await this._requestFileSystem();
    const directoryEntry = await this._getDirectory(fs.root, path, {create: true});
    const fileEntry = await this._getFile(directoryEntry, name, {create: true, exclusive: false});
    const writer = await this._createWriter(fileEntry);
    await this._writer(writer, value);
  },

  async readFile(path, name, value) {
    console.log('readFile : ', path, name);
    const fs = await this._requestFileSystem();
    const directoryEntry = await this._getDirectory(fs.root, path, {create: false});
    const fileEntry = await this._getFile(directoryEntry, name, {create: false});
    const file = await this._file(fileEntry);
    return await this._readAsText(file);
  },

  async remove(path, name) {
    console.log('removeFile : ', path, name);
    const fs = await this._requestFileSystem();
    const directoryEntry = await this._getDirectory(fs.root, path, {create: false});
    const fileEntry = await this._getFile(directoryEntry, name, {create: false});
    return await this._remove(fileEntry);
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


