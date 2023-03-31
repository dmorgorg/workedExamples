<script>
  import Header from "$lib/components/Header.svelte";
  import Navigation from "$lib/components/Navigation.svelte";
  const topMatter = {
    subject: "math",
    title: "mathematics", // statics, strength, fluids
    module: "",
  };
</script>

<div class="page {topMatter.subject}">
  <Header {topMatter} />
  <Navigation {topMatter} />
</div>
