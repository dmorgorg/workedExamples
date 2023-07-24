<script>
  import { ki } from "$lib/utilities";
  import Header from "$lib/components/Header.svelte";
  import SubsectionHeader from "$lib/components/SubsectionHeader.svelte";
  import Problem from "$lib/components/Problem.svelte";
  import problems from "./problems";

  const topMatter = {
    theme: "math",
    headerLeft: ["The Pythagorean Theorem", true, "/math/Pythagoras"],
    headerRight: [`1 Miscellaneous`, false],
  };
</script>

<div class="container {topMatter.theme}">
  <Header {topMatter} />

  <main>
    {#each problems as problem}
      {#if typeof problem === "string"}
        {#if problem.length > 0}
          <!-- e.g. Rectangular Channel, Triangular Channel, ... -->
          <SubsectionHeader subsectionHeader={problem} />
        {/if}
      {:else}
        <Problem {problem} />
      {/if}
    {/each}
  </main>
</div>

<style>
  main {
    counter-set: none;
    counter-set: chapter-counter 1 subChapter-counter 1 problem-counter 0;
  }
</style>
