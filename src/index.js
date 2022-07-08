import Svelte from './component/app.svelte';

document.addEventListener('deviceready', () => {
  console.log('RUNNING CORDOVA-' + cordova.platformId + '@' + cordova.version);
}, false);

new Svelte({
  target: document.body,
});
