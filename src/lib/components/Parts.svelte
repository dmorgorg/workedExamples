<script>
  // import ProofPart from "$lib/components/ProofPart.svelte";
  import Part from "$lib/components/Part.svelte";
  export let problem;
  let problemType = problem[0];
</script>

<!-- problem[1] is the main problem statement,
      problem[2] is the array of solution and answer parts
      and problem[3] is the main problem answer  -->
<section class="problem-parts">
  <!-- don't need problem statement and show-hide button if only one part to the proof  -->
  {#if problem[2].length <= 1}
    <div class="single">{@html problem[2][0][0]}</div>
  {:else}
    {#each problem[2] as part}
      <Part {part} {problemType} />
    {/each}
  {/if}
</section>
