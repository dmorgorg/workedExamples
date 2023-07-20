<script>
  import Header from "$lib/components/Header.svelte";
  const topMatter = {
    theme: "all",
    headerLeft: ["Worked Examples & Proofs", false], // to help with navigation and color styling
    headerRight: ["A Selection", false], // statics, strength, fluids
  };
</script>

<div class="container">
  <Header {topMatter} />

  <main class="linknav">
    <ul>
      <li class="math">
        <a href="/math"><h3>Mathematics</h3></a>
        <ul>
          <li>
            <a href="/math/ALevelPure"
              ><h4>A-Level Pure Mathematics (Year 1)</h4></a
            >
          </li>
          <ul>
            <li>
              <a href="/math/ALevelPure/10Differentiation"
                ><h5>10 Differentiation</h5></a
              >
              <a href="/math/ALevelPure/11Integration"
                ><h5><s>11 Integration</s></h5></a
              >
            </li>
          </ul>

          <li>
            <a href="/math/Pythagoras"
              ><h4>Proofs of the Pythagorean Theorem</h4></a
            >
            <ul>
              <li>
                <a href="/math/Pythagoras/Misc"><h5>Misc</h5></a>
                <a href="/math/Pythagoras/Trigonometric"
                  ><h5>Trigonometric Proof</h5></a
                >
                <a href="/math/Pythagoras/Algebraic"
                  ><h5><s>Algebraic Proofs</s></h5></a
                >
                <a href="/math/Pythagoras/Geometric"
                  ><h5><s>Geometric Proofs</s></h5></a
                >
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="fluids">
        <a href="/fluids"><h3>Fluids & Water Resources</h3></a>
        <!-- <br /> -->
        <!-- because there is no second list before final list -->
        <ul>
          <li>
            <a href="/fluids/121-OpenChannel"><h5>12.1 Open Channel</h5></a>
            <a href="/fluids/122-OpenChannel"
              ><h5><s>12.2 Open Channel (2)</s></h5></a
            >
          </li>
        </ul>
      </li>
    </ul>
  </main>
</div>
