<script>
  import Header from "$lib/components/Header.svelte";
  import SubsubsectionHeader from "$lib/components/SubsubsectionHeader.svelte";
  import Problem from "$lib/components/Problem.svelte";
  import problems from "./problems";

  const topMatter = {
    theme: "fluids",
    headerLeft: ["Fluids & Water Resources", true, "/fluids"],
    headerRight: ["12.1 Open Channel Flow", false],
  };
  // all levelshave top-level and problem counter
  // 00 = 0, no sub, no subsub
  // 01 = 1, no sub, yes subsub
  // 10 = 2, yes sub, no subsub
  // 11 = 3, yes sub, yes subsub
  let levels = "11";
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
    counter-set: section-counter 12 subsection-counter 1 subsubsection-counter 0
      problem-counter 0;
  }
</style>
