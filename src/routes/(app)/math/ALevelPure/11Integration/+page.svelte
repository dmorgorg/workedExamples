<script>
  import Header from "$lib/components/Header.svelte";
  const topMatter = {
    theme: "math",
    section: ["a-level pure math (year 1)", true, "/math/ALevelPure"], // to help with navigation and color styling
    // subsect: ["Year 1", false],
    subsubsect: ["11 Integration", false], // statics, strength, fluids
  };
  let tm = topMatter;
</script>

<div class="container">
  <Header {topMatter} />

  <h1>coming soon</h1>
</div>
