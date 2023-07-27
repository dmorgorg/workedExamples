<script>
  import { fade } from "svelte/transition";

  import Statement from "./Statement.svelte";
  import ShowHideControl from "./ShowHideControl.svelte";
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

  {#if displayAnswer}
    <div transition:fade>
      <ExampleAnswer {problem} />
    </div>
  {/if}
</section>
