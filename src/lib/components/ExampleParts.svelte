<script>
  import ExamplePart from "$lib/components/ExamplePart.svelte";
  export let problem;
</script>

<!-- problem[1] is the main problem statement,
    problem[2] is the array of solution and answer parts
    and problem[3] is the main problem answer  -->
<section>
  {#each problem[2] as part}
    <ExamplePart {part} />
  {/each}
</section>

<style>
  section {
    counter-reset: part-counter;
    margin-top: 2em;
    margin-left: 0.5em;
  }
</style>
