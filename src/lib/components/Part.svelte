<script>
  import PartAnswer from "$lib/components/PartAnswer.svelte";
  import PartSolution from "$lib/components/PartSolution.svelte";
  import PartStatement from "$lib/components/PartStatement.svelte";
  import PartShowHideControl from "$lib/components/PartShowHideControl.svelte";
  import { fade } from "svelte/transition";
  let { part, problemType } = $props();

  let showHide = $state({
    displayAnswer: false,
    displaySolution: false,
  });

  let displaySolution = $derived(showHide.displaySolution);
  let displayAnswer = $derived(showHide.displayAnswer);

  let statement = part[0];
  let solution = part[1];
  let answer = part[2];
</script>

<div class="part" transition:fade|global>
  <PartStatement {statement} />
  <PartShowHideControl bind:showHide {problemType} />

  {#if displaySolution}
    <div transition:fade|global>
      <PartSolution {solution} />
    </div>
  {/if}
  <!-- proofs only have proof `solutions``, not answers -->
  {#if displayAnswer && problemType === "example"}
    <div transition:fade|global={{ duration: 1000 }}>
      <PartAnswer {answer} />
    </div>
  {/if}
</div>
