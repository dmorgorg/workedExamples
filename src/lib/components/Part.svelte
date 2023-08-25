<script>
  import PartAnswer from "$lib/components/PartAnswer.svelte";
  import PartSolution from "$lib/components/PartSolution.svelte";
  import PartStatement from "$lib/components/PartStatement.svelte";
  import PartShowHideControl from "$lib/components/PartShowHideControl.svelte";
  import { fade } from "svelte/transition";
  export let part;
  export let problemType;

  let showHide = {
    displayAnswer: false,
    displaySolution: false,
  };

  $: displaySolution = showHide.displaySolution;
  $: displayAnswer = showHide.displayAnswer;

  let statement = part[0];
  let solution = part[1];
  let answer = part[2];
</script>

<div class="part" transition:fade>
  <PartStatement {statement} />
  <PartShowHideControl bind:showHide {problemType} />

  {#if displaySolution}
    <div transition:fade>
      <PartSolution {solution} />
    </div>
  {/if}
  <!-- proofs only have proof `solutions``, not answers -->
  {#if displayAnswer && problemType === "example"}
    <div transition:fade={{ duration: 1000 }}>
      <PartAnswer {answer} />
    </div>
  {/if}
</div>
