<script>
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
    headerRight: ["10.2 From first principles", false],
  };
  let tm = topMatter;
</script>

<div class="container">
  <Header {topMatter} />

  <main class={topMatter.theme}>
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
  .container {
    counter-set: none;
    counter-set: module-counter 10 section-counter 2 subsection-counter 1
      problem-counter 0;
  }
</style>
