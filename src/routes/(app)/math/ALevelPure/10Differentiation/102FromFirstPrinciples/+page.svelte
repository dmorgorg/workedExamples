<script>
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
    headerRight: ["10.2 From First Principles", false],
  };
  let levels; // module-counter, section-counter, problem-counter
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
  .container {
    counter-set: none;
    counter-set: section-counter 10 subsection-counter 2 subsubsection-counter 1
      problem-counter 0;
  }
</style>
