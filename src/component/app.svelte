<script>
	import PocFile from './pocFile.svelte';
	import PocImage from './pocImage.svelte';
	import PocMedia from './pocMedia.svelte';
	import PocPackage from './pocPackage.svelte';
</script>

<h1>POC CORDOVA</h1>
<PocFile />
<PocImage />
<PocMedia />
<PocPackage />

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
