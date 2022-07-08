<script>
  import api from "../api"

  let dirName = 'images'
  let list = []

  async function onClickShowDirectory() {
    list = await api.dirDirectory(dirName)
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
</div>