<script>
  import { ki } from "$lib/utilities";
  import Header from "$lib/components/Header.svelte";
  import SubsectionHeader from "$lib/components/SubsectionHeader.svelte";
  import Problem from "$lib/components/Problem.svelte";
  import problems from "./problems";

  const topMatter = {
    theme: "math",
    headerLeft: [
      "10 Differentiation",
      true,
      "/math/ALevelPure/10Differentiation",
    ],
    headerRight: [`10.3 Powers of ${ki("x")}`, false],
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
    counter-reset: subsection-counter;
    /* counter-set: none; */
    counter-set: module-counter 10 section-counter 3 subsection-counter 0
      problem-counter 0;
  }
</style>
