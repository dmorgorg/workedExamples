<script>
  import Header from "$lib/components/Header.svelte";
  import SubsubsectionHeader from "$lib/components/SubsubsectionHeader.svelte";
  import Problem from "$lib/components/Problem.svelte";
  import problems from "./problems";

  const topMatter = {
    theme: "fluids",
    headerLeft: ["Fluids & Water Resources", true, "/fluids"],
    headerRight: ["1 The Nature of Fluids & Pressure Measurement", false],
  };
  let levels = 3; // module-counter, section-counter, subsection-counter, problem-counter
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
    counter-set: section-counter 1 subsection-counter 1 subsubsection-counter 0
      problem-counter 0;
  }
</style>
