<script>
  import ExamplePartAnswer from "$lib/components/ExamplePartAnswer.svelte";
  import ExamplePartSolution from "$lib/components/ExamplePartSolution.svelte";
  import ExamplePartStatement from "$lib/components/ExamplePartStatement.svelte";
  import PartShowHideControl from "$lib/components/PartShowHideControl.svelte";
  import { fade } from "svelte/transition";
  export let part;
  export let type; // problem[0]: "example", "proof"

  let showHide = {
    displayAnswer: false,
    displaySolution: false,
  };

  $: displaySolution = showHide.displaySolution;
  $: displayAnswer = showHide.displayAnswer;
  // $: either = displaySolution || displayAnswer;

  let statement = part[0];
  let solution = part[1];
  let answer = part[2];
</script>

<div class="part">
  <div class="statement-line">
    <div class="statement"><ExamplePartStatement {statement} /></div>
    <div class="show-hide">
      <PartShowHideControl bind:showHide {type} />
    </div>
  </div>

  {#if displaySolution}
    <div transition:fade>
      <ExamplePartSolution {solution} />
    </div>
  {/if}
  {#if displayAnswer}
    <div transition:fade={{ duration: 500 }}>
      <ExamplePartAnswer {answer} />
    </div>
  {/if}
</div>

<style lang="scss">
  .part {
    border: 2px solid violet;
  }
</style>
