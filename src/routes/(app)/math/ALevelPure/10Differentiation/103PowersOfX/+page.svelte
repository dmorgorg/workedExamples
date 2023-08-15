<script>
  import { ki } from "$lib/utilities";
  import Header from "$lib/components/Header.svelte";
  import SubsubsectionHeader from "$lib/components/SubsubsectionHeader.svelte";
  import Problem from "$lib/components/Problem.svelte";
  import problems from "./problems";

  const topMatter = {
    theme: "math",
    headerLeft: [
      "10 Differentiation",
      true,
      "/math/ALevelPure/10Differentiation",
    ],
    headerRight: [`10.3 Powers of ${ki("\\bm x")}`, false],
  };
  let levels = 2; // section-counter, subsection-counter, problem-counter
</script>

<div class="container {topMatter.theme}">
  <Header {topMatter} />

  <main>
    {#each problems as problem}
      {#if typeof problem === "string"}
        {#if problem.length > 0}
          <!-- e.g. Rectangular Channel, Triangular Channel, ... -->
          <SubsubsectionHeader subsubsectionHeader={problem} />
        {/if}
      {:else}
        <Problem {problem} {levels} />
      {/if}
    {/each}
  </main>
</div>

<style>
  main {
    counter-set: none;
    counter-set: section-counter 10 subsection-counter 3 subsubsection-counter
      42 problem-counter 0;
  }
</style>
