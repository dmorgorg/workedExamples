<script>
  import Header from "$lib/components/Header.svelte";
  import Navigation from "$lib/components/Navigation.svelte";
  const topMatter = {
    subject: "fluids",
    title: "fluids & water resources", // statics, strength, fluids
    module: "",
  };
  let unlinkTitle = true;
</script>

<div class="page {topMatter.subject}">
  <Header {topMatter} {unlinkTitle} />
  <Navigation {topMatter} />
</div>
