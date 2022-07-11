<script>
  import api from "../api"

  let videoPlayer;
  let dirName = 'media'
  let list = [];
  let picName = 'video.mp4';
  let audioUrl = '/image/audiotesst.mp3';
  let videoUrl = '';
  let player = null;


  async function onClickShowDirectory() {
    list = await api.dirDirectory(dirName)
  }

  async function onClickUpload() {
    await api.uploadMedia(dirName, picName);
  }

  async function onClickLoadAudio() {
    audioUrl = await api.loadFileMedia(dirName, picName);
    startAudio()
  }

  async function onClickLoadVideo() {
    videoUrl = await api.loadFileMedia(dirName, picName);
    startVideo()
  }

  //https://learn.svelte.dev/tutorial/media-elements
  function startAudio() {
    if(!player) {
      console.log('play', audioUrl)
      player = new Audio(audioUrl);
      player.setAttribute('crossorigin', 'anonymous');
      player.crossOrigin = 'anonymous';
      player.play();
    } else {
      player.pause();
      player = null;
    }
  }

  function startVideo() {
    if(videoPlayer.paused) {
      videoPlayer.src = videoUrl;
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }

  }

</script>


<div class="poc">
  <div class="poc__title" >Poc Media</div>
  <div class="poc__block">
    <button on:click={onClickShowDirectory}> Show Directory </button>
    <input  bind:value={dirName}  placeholder="media"/>
    {#each list as item}
    <span>{item.fullPath} , </span>
    {/each}
  </div>
  <div class="poc__block">
    <button on:click={onClickUpload}> Upload Media </button>
    <input  bind:value={dirName}  placeholder="media"/>
    <input  bind:value={picName}  placeholder="audio.mp3"/>
  </div>
  <div class="poc__block">
    <button on:click={onClickLoadAudio}> Load Audio </button>
    <input  bind:value={dirName}  placeholder="media"/>
    <input  bind:value={picName}  placeholder="audio.mp3"/>
  </div>
  <div class="poc__block">
    <button on:click={onClickLoadVideo}> Load Video </button>
    <input  bind:value={dirName}  placeholder="media"/>
    <input  bind:value={picName}  placeholder="video.mp4"/>
    <!-- svelte-ignore a11y-media-has-caption -->
    <video bind:this={videoPlayer}>
  </div>
</div>