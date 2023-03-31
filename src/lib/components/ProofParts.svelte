<script>
  import ProofPart from "$lib/components/ProofPart.svelte";
  export let problem;
</script>

<!-- problem[1] is the main problem statement,
    problem[2] is the array of solution and answer parts
    and problem[3] is the main problem answer  -->
<section>
  <!-- don't need problem statement and show-hide button if only one part to the proof  -->
  {#if problem[2].length <= 1}
    <div class="single">{@html problem[2][0][1]}</div>
  {:else}
    {#each problem[2] as part}
      <ProofPart {part} />
    {/each}
  {/if}
</section>

<style>
  section {
    counter-reset: part-counter;
    margin: 0.5em;
  }
  .single {
    /* width: 80%; */
    margin: 1em 2em;
  }
</style>
