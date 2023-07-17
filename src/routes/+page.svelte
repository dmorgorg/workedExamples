<script>
  import Header from "$lib/components/Header.svelte";
  const topMatter = {
    theme: "all",
    headerLeft: ["worked examples & proofs", false], // to help with navigation and color styling
    headerRight: ["a selection", false], // statics, strength, fluids
  };
</script>

<div class="container">
  <Header {topMatter} />

  <main class="linknav">
    <ul>
      <li class="math header1">
        <a href="/math">Mathematics</a>
        <ul>
          <li class="header2">
            <a href="/math/ALevelPure">A-Level Pure Mathematics (Year 1)</a>
          </li>
          <ul>
            <li class="header3">
              <a href="/math/ALevelPure/10Differentiation">10 Differentiation</a
              >
              <a href="/math/ALevelPure/11Integration"><s>11 Integration</s></a>
            </li>
          </ul>

          <li class="header2">
            <a href="/math/Pythagoras">Proofs of the Pythagorean Theorem</a>
            <ul>
              <li class="header3">
                <a href="/math/Pythagoras/Misc">Misc</a>
                <a href="/math/Pythagoras/Trigonometric">Trigonometric Proof</a>
                <a href="/math/Pythagoras/Algebraic"><s>Algebraic Proofs</s></a>
                <a href="/math/Pythagoras/Geometric"><s>Geometric Proofs</s></a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="fluids header1">
        <a href="/fluids">Fluids & Water Resources</a>
        <ul>
          <li class="header3">
            <a href="/fluids/121-OpenChannel">12.1 Open Channel</a>
          </li>
        </ul>
      </li>
    </ul>
  </main>
</div>
