import storageImage from './storageImage';
import storageText from './storageText';

const root = {

  _requestFileSystem() {
    return new Promise((resolve, reject) => {
      window.requestFileSystem(window.PERSISTENT, 5*1024*1024, resolve, reject);
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

  _writer(writer, value) {
    return new Promise((resolve, reject) => {
      writer.onwriteend = function(e) {
        console.log('Write completed.');
        resolve(e);
      };
      writer.onerror = function(e) {
        console.log('Write failed: ' + e.toString());
        reject(e);
      };
      const blob = new Blob([value], {type: 'text/plain'});
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

export default Object.assign(root, storageText, storageImage);
