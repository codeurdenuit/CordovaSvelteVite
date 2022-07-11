<script>
  import api from "../api"
  async function onBuildForWindows() {
    await api.buildElectronApp();
  }
  async function onBuildForAndroid() {
    await api.buildApk();
  }
</script>


<div class="poc">
  <div class="poc__title" >Poc BuildApp</div>
  <div class="poc__block">
    <button on:click={onBuildForWindows}> Build Windows App</button>
  </div>
  <div class="poc__block">
    <button on:click={onBuildForAndroid}> Build Android App</button>
  </div>
</div>
