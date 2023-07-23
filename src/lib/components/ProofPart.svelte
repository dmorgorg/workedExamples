<script>
  import ProofPartSolution from "$lib/components/ProofPartSolution.svelte";
  import ProofPartStatement from "$lib/components/ProofPartStatement.svelte";
  import ProofShowHideControl from "$lib/components/ProofShowHideControl.svelte";
  import { fade } from "svelte/transition";
  export let part;

  let showHide = {
    displayAnswer: false,
    // displaySolution: false,
  };

  $: displaySolution = showHide.displaySolution;
  // $: displayAnswer = showHide.displayAnswer;
  // $: either = displaySolution || displayAnswer;

  let statement = part[0];
  let solution = part[1];
</script>

<div class="statement-line">
  <div class="statement"><ProofPartStatement {statement} /></div>

  <div class="show-hide">
    <ProofShowHideControl bind:showHide />
  </div>
  <br />
  <!-- {@html statement} -->
</div>
{#if displaySolution}
  <div transition:fade={{ duration: 3500 }}>
    <ProofPartSolution {solution} />
  </div>
{/if}

<style lang="scss">
  div.show-hide {
    font-size: 0.75em;
    padding-right: 0;
    flex-grow: 1;
    align-self: flex-end;
  }

  div.statement-line {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    /* margin-top: 1em; */
    margin-bottom: 2em;
    padding: 0;

    .statement {
      flex-grow: 1;
    }
  }
</style>
