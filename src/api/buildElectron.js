import JsZip from 'jszip';
export default {
  async buildElectronApp() {
    const blob = await this._getByXhr('./package/electron.zip');
    const zip = new JsZip();
    const pack = await zip.loadAsync(blob); // open zip
    pack.files['electron/resources/app/image/logo.png'];
    const fileNew = await this.loadFile('/images/mypic.png');
    const fileNewValue = await this._readAsblob(fileNew);
    pack.folder('electron').folder('resources').folder('app').folder('image').file('logo.png', fileNewValue);
    const packValue = await pack.generateAsync({type: 'blob'});
    await this._saveAs(packValue, 'electron.zip');
  },

  async buildApk() {
    const blob = await this._getByXhr('./package/android.apk');
    const zip = new JsZip();
    const pack = await zip.loadAsync(blob); // open zip
    pack.files['assets/www/image/logo.png'];
    const fileNew = await this.loadFile('/images/mypic.png');
    const fileNewValue = await this._readAsblob(fileNew);
    pack.folder('assets').folder('www').folder('image').file('logo.png', fileNewValue);
    const packValue = await pack.generateAsync({type: 'blob'});
    await this._saveAs(packValue, 'android.apk');
  },

  async _getByXhr(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';
      xhr.onload = function() {
        if (this.status == 200) {
          resolve(this.response);
        }
      };
      xhr.send();
    });
  },


};
