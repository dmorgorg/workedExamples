<script>
  import { fade } from "svelte/transition";

  import ExampleStatement from "./ExampleStatement.svelte";
  import ProofStatement from "./ProofStatement.svelte";
  import ProofShowHideControl from "./ProofShowHideControl.svelte";
  import ExampleShowHideControl from "./ExampleShowHideControl.svelte";
  import ProofParts from "./ProofParts.svelte";
  import ExampleParts from "./ExampleParts.svelte";
  import ExampleAnswer from "./ExampleAnswer.svelte";
  export let problem;

  let showHide = {
    displayAnswer: false,
    displaySolution: false,
  };

  $: displaySolution = showHide.displaySolution;
  $: displayAnswer = showHide.displayAnswer;
</script>

<section class="problem" transition:fade>
  {#if problem[0] === "proof"}
    <ProofStatement {problem} />
    <!-- show or hide solution parts or answer  -->
    <div class="show-hide-control">
      <ProofShowHideControl bind:showHide />
    </div>
    <!-- 	creating solution in {#if ...} doesn't render the latex so use
			css to hide/show the solution 		-->
    <div class:show={displaySolution} class:hide={!displaySolution}>
      <ProofParts {problem} />
    </div>
  {:else if problem[0] === "example"}
    <ExampleStatement {problem} />
    <!-- show or hide solution parts or answer  -->
    <div class="show-hide-control">
      <ExampleShowHideControl bind:showHide />
      <!-- check whether there are solutions provided -->
      {#if problem[1]}
        <!-- 	creating solution in {#if ...} doesn't render the latex so use
			  	css to hide/show the solution 		-->
        <div class:show={displaySolution} class:hide={!displaySolution}>
          <ExampleParts {problem} />
        </div>
        <div class:show={displayAnswer} class:hide={!displayAnswer}>
          <ExampleAnswer {problem} />
        </div>
      {/if}
    </div>
  {/if}
</section>

<style lang="scss">
  section {
    &.problem {
      // box-shadow: 0.125rem 0.125rem 0.5rem 0.125rem rgba(0, 0, 0, 0.25);
      border: 1px #999 solid;
      // border-radius: 6px;
      margin: 1.25em auto;
      overflow-x: auto;
      padding: 1em;
      background: white;
    }

    // .show-hide-control {
    //   margin-right: 0.5em;
    // }
  }
</style>
