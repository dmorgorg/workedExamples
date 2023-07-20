<script>
  import Header from "$lib/components/Header.svelte";
  const topMatter = {
    theme: "fluids",
    headerLeft: ["Worked Examples & Proofs", true, "/"], // to help with navigation and color styling
    headerRight: ["Fluids & Water Resources", false], // statics, strength, fluids
  };
  let tm = topMatter;
</script>

<div class="container">
  <Header {topMatter} />

  <main class="linknav fluids">
    <ul>
      <li><a href="/"><h5>Home Page</h5></a></li>
      <li>
        <h4>Fluids & Water Resources</h4>
        <ul>
          <li>
            <a href="/fluids/121-OpenChannel"><h5>12.1 Open Channel Flow</h5></a
            >
            <a href="/fluids/122-OpenChannel"
              ><h5><s>12.2 Open Channel Flow (2)</s></h5></a
            >
          </li>
        </ul>
      </li>
    </ul>
  </main>
</div>
