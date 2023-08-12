<script>
  import ProofPart from "$lib/components/ProofPart.svelte";
  import ExamplePart from "$lib/components/ExamplePart.svelte";
  export let problem;
</script>

<!-- problem[1] is the main problem statement,
      problem[2] is the array of solution and answer parts
      and problem[3] is the main problem answer  -->
<section class="problem-parts">
  <!-- don't need problem statement and show-hide button if only one part to the proof  -->
  {#if problem[2].length <= 1}
    <div class="single-title">
      <div class="single">{@html problem[2][0][0]}</div>
    </div>
  {:else}
    {#each problem[2] as part}
      {#if problem[0] === "proof"}
        <ProofPart {part} />
      {:else if problem[0] === "example"}
        <ExamplePart {part} />
      {/if}
    {/each}
  {/if}
</section>

<style lang="scss">
  section {
    counter-reset: part-counter;
  }
  .single-title::before {
    content: "Solution";
    font-weight: bold;
  }
  .single {
    color: black;
  }
</style>
