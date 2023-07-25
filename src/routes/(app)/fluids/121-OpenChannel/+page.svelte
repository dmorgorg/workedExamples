<script>
  import Header from "$lib/components/Header.svelte";
  import SubsectionHeader from "$lib/components/SubsectionHeader.svelte";
  import Problem from "$lib/components/Problem.svelte";
  import problems from "./problems";

  const topMatter = {
    theme: "fluids",
    headerLeft: ["Fluids & Water Resources", true, "/fluids"],
    headerRight: ["12.1 Open Channel Flow", false],
  };
  let levels = 4; // module-counter, section-counter, subsection-counter, problem-counter
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
        <Problem {problem} {levels} />
      {/if}
    {/each}
  </main>
</div>

<style>
  .container {
    counter-set: none;
    counter-set: module-counter 12 section-counter 1 subsection-counter 0
      problem-counter 0;
  }
</style>
