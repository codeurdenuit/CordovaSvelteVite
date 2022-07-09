<script>
	import PocFile from './pocFile.svelte';
	import PocImage from './pocImage.svelte';
</script>

<h1>POC CORDOVA</h1>
<PocFile />
<PocImage />


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
