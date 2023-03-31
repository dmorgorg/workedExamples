<script>
  import Header from "$lib/components/Header.svelte";
  import SubsectionHeader from "$lib/components/SubsectionHeader.svelte";
  import Problem from "$lib/components/Problem.svelte";
  import problems from "./problems";

  const topMatter = {
    subject: "math", // statics, strength, fluids
    title: "mathematics",
    module: "01.1 Pythagorean Theorem Proofs",
  };
</script>

<div class="page {topMatter.subject}">
  <Header {topMatter} />

  <div class="wrapper">
    <main>
      {#each problems as problem}
        {#if typeof problem === "string"}
          <!-- e.g. Rectangular Channel, Triangular Channel, ... -->
          <SubsectionHeader subsectionHeader={problem} />
        {:else}
          <Problem {problem} />
        {/if}
      {/each}
    </main>
  </div>
</div>
