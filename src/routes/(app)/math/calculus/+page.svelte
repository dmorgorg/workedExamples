<script>
  import Header from "$lib/components/Header.svelte";
  import Navigation from "$lib/components/Navigation.svelte";
  const topMatter = {
    subject: "all",
    title: "a-level calculus", // statics, strength, fluids
    module: "",
  };
  let unlinkTitle = true;
</script>

<div class="page {topMatter.subject}">
  <Header {topMatter} {unlinkTitle} />
  <Navigation {topMatter} />
</div>
