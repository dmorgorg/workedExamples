<script>
	import ShowHideControl from "$lib/components/ShowHideControl.svelte";
	let showHide = {
		displayAnswer: false,
		displaySolution: false,
	};

	// $: displaySolution = showHide.displaySolution;
	// $: displayAnswer = showHide.displayAnswer;
</script>

<article class="statement">
	<p>
		<slot />
	</p>

</article>

<style lang="scss">
	.statement {
		line-height: 1.2;

		p {
			margin: 0.5em;
			margin-top: -0.5em;
		}

		&::before {
			margin: 0.5em;
			position: relative;
			font-size: 115%;
			font-weight: bold;
			counter-increment: problem-counter;
			content: "Problem " counter(section-counter)"."counter(problem-counter) " ";
		}
	}
</style>
