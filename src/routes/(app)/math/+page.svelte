<script>
  import Header from "$lib/components/Header.svelte";
  const topMatter = {
    theme: "math",
    headerLeft: ["worked examples & proofs", true, "/"], // to help with navigation and color styling
    // subsect: ["wef stuff", false],
    headerRight: ["mathematics", false], // statics, strength, fluids
  };
  let tm = topMatter;
</script>

<div class="container">
  <Header {topMatter} />

  <main class="linknav math">
    <ul>
      <li class="header3"><a href="/">Worked Examples Home Page</a></li>
      <li class="header2">
        <a href="/math/ALevelPure">A-Level Pure Mathematics (Year 1)</a>
        <ul>
          <li class="header3">
            <a href="/math/ALevelPure/10Differentiation">10 Differentiation</a>
            <a href="/math/ALevelPure/11Integration"><s>11 Integration</s></a>
          </li>
        </ul>
      </li>

      <li class="header2">
        <a href="/math/Pythagoras">Proofs of the Pythagorean Theorem</a>
        <ul>
          <li class="header3">
            <a href="/math/Pythagoras/Misc">1 Misc.</a>
            <a href="/math/Pythagoras/Trigonometric">2 Trigonometric Proof</a>
            <a href="/math/Pythagoras/Algebraic"><s>3 Algebraic Proofs</s></a>
            <a href="/math/Pythagoras/Geometric"
              ><s>4&nbsp;Geometric Proofs</s></a
            >
          </li>
        </ul>
      </li>
    </ul>
  </main>
</div>
