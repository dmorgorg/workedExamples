<script>
  import Header from "$lib/components/Header.svelte";
  import Navigation from "$lib/components/Navigation.svelte";
  const topMatter = {
    theme: "fluids",
    subject: ["worked examples & proofs", true, "/"],
    module: ["Fluids & Water Resources", false],
  };
</script>

<div class="page ">
  <Header {topMatter} />

  <ul class="page {topMatter.theme}">
    <li>
      <div>
        <a href="fluids/121-OpenChannel">12.1 Open Channel Flow</a>
        <!-- <a href="/math/calculus/012-Differentiation">01.2 Differentiation</a> -->
      </div>
    </li>
  </ul>
</div>
