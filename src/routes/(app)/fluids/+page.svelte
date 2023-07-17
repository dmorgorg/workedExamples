<script>
  import Header from "$lib/components/Header.svelte";
  const topMatter = {
    theme: "fluids",
    headerLeft: ["worked examples & proofs", true, "/"], // to help with navigation and color styling
    // subsect: ["wef stuff", false],
    headerRight: ["Fluids & Water Resources", false], // statics, strength, fluids
  };
  let tm = topMatter;
</script>

<div class="container">
  <Header {topMatter} />

  <main class="linknav fluids">
    <ul>
      <li class="header3"><a href="/">Site Home Page</a></li>
      <li class="header2">
        Fluids & Water Resources
        <ul>
          <li class="header3">
            <a href="/fluids/121-OpenChannel">12.1 Open Channel Flow</a>
          </li>
        </ul>
      </li>
    </ul>
  </main>
</div>
