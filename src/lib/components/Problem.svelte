<script>
  import { fade } from "svelte/transition";

  import ExampleStatement from "./ExampleStatement.svelte";
  import ProofStatement from "./ProofStatement.svelte";
  import Statement from "./Statement.svelte";
  import ProofShowHideControl from "./ProofShowHideControl.svelte";
  import ExampleShowHideControl from "./ExampleShowHideControl.svelte";
  import ShowHideControl from "./ShowHideControl.svelte";
  import ProofParts from "./ProofParts.svelte";
  import ExampleParts from "./ExampleParts.svelte";
  import Parts from "./Parts.svelte";
  import ExampleAnswer from "./ExampleAnswer.svelte";
  export let problem;
  export let levels;

  let showHide = {
    displayAnswer: false,
    displaySolution: false,
  };

  $: displaySolution = showHide.displaySolution;
  $: displayAnswer = showHide.displayAnswer;
</script>

<section class="problem" transition:fade>
  <Statement {problem} {levels} />
  <ShowHideControl {problem} bind:showHide />
  {#if displaySolution}
    <div transition:fade>
      <Parts {problem} />
    </div>
  {/if}

  <!-- {#if problem[1]} -->
  <!-- {#if displaySolution}
        <div transition:fade={{ duration: 1000 }}>
          <ExampleParts {problem} />
        </div>
      {/if} -->
  {#if displayAnswer}
    <div transition:fade>
      <ExampleAnswer {problem} />
    </div>
  {/if}
  <!-- {/if} -->
</section>
