<script>
	export let showHide;

	$: displaySolution = showHide.displaySolution;
	$: displayAnswer = showHide.displayAnswer;

	function toggleAnswer(event) {
		showHide.displayAnswer = !displayAnswer;
	}
	function toggleSolution(event) {
		showHide.displaySolution = !displaySolution;
	}
</script>

<div class="show-hide-control">
	<button on:click={toggleSolution}>
		{#if displaySolution}
			Hide Solution
		{:else}
			Show Solution
		{/if}
	</button>
	<button on:click={toggleAnswer}>
		{#if displayAnswer}
			Hide Answer
		{:else}
			Check Answer
		{/if}
	</button>
</div>

<style lang="scss">
	.show-hide-control {
		// flex-grow: 10;
		text-align: right;
		padding: 0;
        // padding-right: 1rem;
        // border: 1px solid black;
	}
</style>
