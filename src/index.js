import Svelte from './component/app.svelte';

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}

new Svelte({
  target: document.body,
});
