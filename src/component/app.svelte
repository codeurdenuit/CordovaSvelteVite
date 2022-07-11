<script>
	import PocFile from './pocFile.svelte';
	import PocImage from './pocImage.svelte';
	import PocMedia from './pocMedia.svelte';
	import PocPackage from './pocPackage.svelte';
	import PocBuild from './pocBuildApp.svelte';
</script>

<h1>POC CORDOVA</h1>
<img src="./image/logo.png" alt="pic">
<PocFile />
<PocImage />
<PocMedia />
<PocPackage />
<PocBuild />

<style type='scss' global >
	.poc {
		border: solid 1px;
		padding: 1rem;
		margin-bottom: 1rem;
		&__block {
			background-color: gray;
			padding: 1rem;
		}
		&__title {
			margin-bottom: 1rem;
		}
	}
</style>
