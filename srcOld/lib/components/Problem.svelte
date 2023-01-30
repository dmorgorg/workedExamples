<script>
	import ShowHideControl from "$lib/components/ShowHideControl.svelte";
		let showHide = {
			displayAnswer: false,
			displaySolution: false,
		};
	
		// $: displaySolution = showHide.displaySolution;
		// $: displayAnswer = showHide.displayAnswer;
</script>



<section class="problem">
	<slot />
	<!-- <div class="show-hide-control"> -->
		<ShowHideControl bind:showHide />
	<!-- </div> -->
</section>



<style lang="scss">
	section {
		&.problem {
			box-shadow: 0.125rem 0.125rem 0.5rem 0.125rem rgba(0, 0, 0, 0.25);
			margin: 1.25em 1.75em;
			overflow-x: auto;
			padding: 1rem;
			padding-right: 1.5rem;
		}
	}
</style>
