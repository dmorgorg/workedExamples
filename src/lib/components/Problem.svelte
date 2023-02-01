<script>
	import { fade } from "svelte/transition";

	import ProblemStatement from "./ProblemStatement.svelte";
	import ShowHideControl from "./ShowHideControl.svelte";
	import ProblemParts from "./ProblemParts.svelte";
    import ProblemAnswer from "./ProblemAnswer.svelte";
	export let problem;

	let showHide = {
		displayAnswer: false,
		displaySolution: false,
	};

	$: displaySolution = showHide.displaySolution;
	$: displayAnswer = showHide.displayAnswer;
</script>

<section class="problem" transition:fade>
	<ProblemStatement {problem} />

	<!-- check whether there are solutions provided -->
	{#if problem[1]}
		<!-- show or hide solution parts or answer  -->
		<div class="show-hide-control">
			<ShowHideControl bind:showHide />
		</div>
		<!-- 	creating solution in {#if ...} doesn't render the latex so use
				css to hide/show the solution 		-->
		<div class:show={displaySolution} class:hide={!displaySolution}>
			<ProblemParts {problem} />
		</div>
	{/if}

	<div class:show={displayAnswer} class:hide={!displayAnswer}>
		<ProblemAnswer {problem} />
	</div>
</section>

<style lang="scss">
	section {
		&.problem {
			box-shadow: 0.125rem 0.125rem 0.5rem 0.125rem rgba(0, 0, 0, 0.25);
			margin: 1.25em 1.75em;
			overflow-x: auto;
			padding: 1rem;
			padding-bottom: 1em;

		}

		
		.show-hide-control {
			margin-right: 0.5em;
		}
	}
</style>
