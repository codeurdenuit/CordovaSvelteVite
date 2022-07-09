<script>
  import api from "../api";

  let dirName = 'test';
  let list = [];
  let fileValue = '{test:0}';
  let fileName = 'file01.json';
  let fileValueRead = '';
  let fileNameRead = '';
  let fileNameRemove = '';

  async function onClickShowDirectory() {
    list = await api.dirDirectory(dirName);
  }

  async function onClickWrite() {
    await api.creatFileText(dirName, fileName, fileValue);
    fileValue = '';
    fileName = '';
  }

  async function onClickRead() {
    fileValueRead = await api.loadFileText(dirName, fileNameRead);
  }

  async function onClickRemove() {
    await api.removeFile(dirName, fileNameRemove);
    fileNameRemove = '';
  }
</script>


<div class="poc">
  <div class="poc__title" >Poc File</div>
  <div class="poc__block">
    <button on:click={onClickShowDirectory}> Show Directory </button>
    <input  bind:value={dirName}  placeholder="test"/>
    {#each list as item}
    <span>{item.fullPath} , </span>
    {/each}
  </div>
  <div class="poc__block">
    <button on:click={onClickWrite}> Write file </button>
    <input  bind:value={fileName}  placeholder="file.txt"/>
    <input  bind:value={fileValue}  placeholder="aaa aaaa azaeaa"/>
  </div>
  <div class="poc__block">
    <button on:click={onClickRead}> Read file </button>
    <input  bind:value={fileNameRead}  placeholder="file.txt"/>
    <input  bind:value={fileValueRead} />
  </div>
  <div class="poc__block">
    <button on:click={onClickRemove}> Remove file </button>
    <input  bind:value={fileNameRemove}  placeholder="file2.txt"/>
  </div>
</div>



