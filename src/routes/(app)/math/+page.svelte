<script>
  import Header from "$lib/components/Header.svelte";
  const topMatter = {
    theme: "math",
    headerLeft: ["Worked Examples & Proofs", true, "/"], // to help with navigation and color styling
    headerRight: ["Mathematics", false],
  };
</script>

<div class="container {topMatter.theme}">
  <Header {topMatter} />

  <main class="linknav">
    <ul>
      <li><a href="/"><h5>Home Page</h5></a></li>
      <li>
        <a href="/math/ALevelPure"><h4>A-Level Pure Mathematics (Year 1)</h4></a
        >
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
      </li>

      <li>
        <a href="/math/Pythagoras"><h4>Proofs of the Pythagorean Theorem</h4></a
        >
        <ul>
          <li>
            <a href="/math/Pythagoras/Misc"><h5>1 Misc.</h5></a>
            <a href="/math/Pythagoras/Trigonometric"
              ><h5>2 Trigonometric Proof</h5></a
            >
            <a href="/math/Pythagoras/Algebraic"
              ><h5><s>3 Algebraic Proofs</s></h5></a
            >
            <a href="/math/Pythagoras/Geometric"
              ><h5><s>4 Geometric Proofs</s></h5></a
            >
          </li>
        </ul>
      </li>
    </ul>
  </main>
</div>
