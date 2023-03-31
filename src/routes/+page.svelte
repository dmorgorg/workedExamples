<script>
  import Header from "$lib/components/Header.svelte";
  import Navigation from "$lib/components/Navigation.svelte";
  const topMatter = {
    subject: "all", // to help with navigation and color styling
    title: "Worked Examples and Proofs",
    module: "a selection", // statics, strength, fluids
  };
</script>

<div class="page {topMatter.subject}">
  <Header {topMatter} />
  <Navigation {topMatter} />
</div>
