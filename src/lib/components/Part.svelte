<script>
  import ExamplePartAnswer from "$lib/components/ExamplePartAnswer.svelte";
  import ExamplePartSolution from "$lib/components/ExamplePartSolution.svelte";
  import PartStatement from "$lib/components/PartStatement.svelte";
  import ExampleShowHideControl from "$lib/components/ExampleShowHideControl.svelte";
  // import ProofShowHideControl from "$lib/components/ProofShowHideControl.svelte";
  import { fade } from "svelte/transition";
  export let part;
  export let problemType; // "example", "proof"

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
    <div class="statement"><PartStatement {statement} /></div>
    {#if problemType === "example"}
      <div class="show-hide">
        <ExampleShowHideControl bind:showHide />
      </div>
      <!-- {:else if problemType === "proof"}
      <ProofShowHideControl bind:showHide /> -->
    {/if}
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
