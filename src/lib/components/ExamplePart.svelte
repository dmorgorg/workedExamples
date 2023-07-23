<script>
  import ExamplePartAnswer from "$lib/components/ExamplePartAnswer.svelte";
  import ExamplePartSolution from "$lib/components/ExamplePartSolution.svelte";
  import ExamplePartStatement from "$lib/components/ExamplePartStatement.svelte";
  import ExampleShowHideControl from "$lib/components/ExampleShowHideControl.svelte";
  import { fade } from "svelte/transition";
  export let part;

  let showHide = {
    displayAnswer: false,
    displaySolution: false,
  };

  $: displaySolution = showHide.displaySolution;
  $: displayAnswer = showHide.displayAnswer;
  $: either = displaySolution || displayAnswer;

  let statement = part[0];
  let solution = part[1];
  let answer = part[2];
</script>

<div class="statement-line">
  <div class="statement"><ExamplePartStatement {statement} /></div>
  <div class="show-hide">
    <ExampleShowHideControl bind:showHide />
  </div>
</div>

<div class:box={either}>
  {#if displaySolution}
    <div transition:fade={{ duration: 500 }}>
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
  div.box {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  div.show-hide {
    font-size: 0.9em;
    padding-right: 0;
    flex-grow: 1;
    align-self: flex-end;
  }

  div.statement-line {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2em;
    padding: 0;

    .statement {
      flex-grow: 1;
      margin-bottom: 0.5em;
    }
  }
</style>
