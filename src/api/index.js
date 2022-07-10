import storageImage from './storageImage';
import storageText from './storageText';
import storageMedia from './storageMedia';
import storagePackage from './storagePackage';

const root = {

  async dirDirectory(path) {
    console.log('dirDirectory : ', path);
    const fs = await this._requestFileSystem();
    const directoryEntry = await this._getDirectory(fs.root, path, {create: true});
    const result = await this._readEntries(directoryEntry);
    console.log(result);
    return result;
  },

  async creatFile(path, name, file, type) {
    console.log('creatFile : ', path, name, file);
    debugger;
    const fs = await this._requestFileSystem();
    const directoryEntry = await this._getDirectory(fs.root, path, {create: true});
    const fileEntry = await this._getFile(directoryEntry, name, {create: true, exclusive: false});
    debugger;
    const writer = await this._createWriter(fileEntry);
    await this._writer(writer, file, {type});
  },

  async loadFile(path, name) {
    console.log('readFile : ', path, name);
    const fs = await this._requestFileSystem();
    if (name) {
      const directoryEntry = await this._getDirectory(fs.root, path, {create: false});
      const fileEntry = await this._getFile(directoryEntry, name, {create: false});
      return await this._file(fileEntry);
    } else {
      const fileEntry = await this._getFile(fs.root, path, {create: false});
      return await this._file(fileEntry);
    }
  },

  async removeFile(path, name) {
    console.log('removeFile : ', path, name);
    const fs = await this._requestFileSystem();
    const directoryEntry = await this._getDirectory(fs.root, path, {create: false});
    const fileEntry = await this._getFile(directoryEntry, name, {create: false});
    return await this._remove(fileEntry);
  },

  _requestFileSystem() {
    return new Promise((resolve, reject) => {
      window.requestFileSystem(window.PERSISTENT, 100*1024*1024, resolve, reject);
    });
  },

  _getDirectory(directory, path, option) {
    return new Promise((resolve, reject) => {
      directory.getDirectory(path, option, resolve, reject);
    });
  },

  _readEntries(directoryEntry) {
    return new Promise((resolve, reject) => {
      const reader = directoryEntry.createReader();
      reader.readEntries(resolve, reject);
    });
  },

  _getFile(directory, name, option) {
    return new Promise((resolve, reject) => {
      directory.getFile(name, option, resolve, reject);
    });
  },

  _createWriter(fileEntry) {
    return new Promise((resolve, reject) => {
      fileEntry.createWriter(resolve, reject);
    });
  },

  _writer(writer, file, type) {
    return new Promise((resolve, reject) => {
      writer.onwriteend = function(e) {
        console.log('Write completed.');
        resolve(e);
      };
      writer.onerror = function(e) {
        console.log('Write failed: ' + e.toString());
        reject(e);
      };
      const blob = new Blob([file], type);
      writer.write(blob);
    });
  },

  _file(fileEntry) {
    return new Promise((resolve, reject) => {
      fileEntry.file(resolve, reject);
    });
  },

  _remove(fileEntry) {
    return new Promise((resolve, reject) => {
      fileEntry.remove(resolve, reject);
    });
  },

};

export default Object.assign(root, storageText, storageImage, storageMedia, storagePackage);
