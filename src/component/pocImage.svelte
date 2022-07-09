<script>
  import api from "../api"

  let dirName = 'images'
  let list = [];
  let picName = 'mypic.png';
  let picPath = '';

  async function onClickShowDirectory() {
    list = await api.dirDirectory(dirName)
  }

  async function onClickUpload() {
    await api.uploadImage(dirName, picName);
  }

  async function onClickLoad() {
    picPath = await api.loadFileImage(dirName, picName);
  }

</script>


<div class="poc">
  <div class="poc__title" >Poc Image</div>
  <div class="poc__block">
    <button on:click={onClickShowDirectory}> Show Directory </button>
    <input  bind:value={dirName}  placeholder="test"/>
    {#each list as item}
    <span>{item.fullPath} , </span>
    {/each}
  </div>
  <div class="poc__block">
    <button on:click={onClickUpload}> Upload </button>
    <input  bind:value={dirName}  placeholder="test"/>
    <input  bind:value={picName}  placeholder="mypic.png"/>
  </div>
  <div class="poc__block">
    <button on:click={onClickLoad}> Load </button>
    <input  bind:value={dirName}  placeholder="test"/>
    <input  bind:value={picName}  placeholder="mypic.png"/>
    <img src={picPath} alt="pic">
  </div>
</div>