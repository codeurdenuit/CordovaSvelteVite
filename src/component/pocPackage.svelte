<script>
  import api from "../api"

  let dirName = 'save'
  let list = [];
  let packName = 'package.vn';
  let filePath1 = '/test/file01.json';
  let filePath2 = '/images/mypic.png';
  let filePath3 = '/media/audio01.mp3';

  let fileValue1;
  let fileValue2;
  let fileValue3;
  let player;

  async function onClickShowDirectory() {
    list = await api.dirDirectory(dirName)
  }

  async function onClickBuild() {
    await api.createPackage(dirName, packName, filePath1, filePath2, filePath3);
  }

  async function onClickDownload() {
    await api.downloadPackage(dirName, packName);
  }

  async function onClickUploadFromDick() {
    [fileValue1,fileValue2,fileValue3] = await api.unpackage();
    startAudio();
  }
  async function onClickUploadFromLocal() {
    [fileValue1,fileValue2,fileValue3] = await api.unpackage('/'+dirName+'/'+packName);
    startAudio();
  }



  function startAudio() {
    if(!player) {
      console.log('play', fileValue3)
      player = new Audio(fileValue3);
      player.setAttribute('crossorigin', 'anonymous');
      player.crossOrigin = 'anonymous';
      player.play();
    } else {
      player.pause();
      player = null;
    }
  }



</script>


<div class="poc">
  <div class="poc__title" >Poc Package</div>
  <p>json, png and mp3 are mandatory for the demo</p>
  <div class="poc__block">
    <button on:click={onClickShowDirectory}> Show Directory </button>
    <input  bind:value={dirName}  placeholder="pack"/>
    {#each list as item}
    <span>{item.fullPath} , </span>
    {/each}
  </div>
  <div class="poc__block">
    <button on:click={onClickBuild}> Create Package </button>
    <input  bind:value={packName}  placeholder="package.vn"/>
    <input  bind:value={filePath1}  placeholder="file02.json"/>
    <input  bind:value={filePath2}  placeholder="file01.png"/>
    <input  bind:value={filePath3}  placeholder="file02.mp3"/>
  </div>

  <div class="poc__block">
    <button on:click={onClickDownload}> Download Package </button>
  </div>
  <div class="poc__block">
    <button on:click={onClickUploadFromDick}> Upload Package from disk</button>
  </div>
  <div class="poc__block">
    <button on:click={onClickUploadFromLocal}> Upload Package from local </button>
  </div>
  <input  bind:value={fileValue1} />
  <img src={fileValue2} alt="pic">
</div>