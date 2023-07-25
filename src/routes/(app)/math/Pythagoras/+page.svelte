<script>
  import Header from "$lib/components/Header.svelte";
  let topMatter = {
    theme: "math",
    headerLeft: ["Mathematics", true, "/math"], // to help with navigation and color styling
    headerRight: ["Proofs of the Pythagorean Theorem", false], // statics, strength, fluids
  };
</script>

<div class="container {topMatter.theme}">
  <Header {topMatter} />

  <main class="linknav">
    <ul>
      <li><a href="/"><h5>Home Page</h5></a></li>
      <li>
        <h4>{topMatter.headerRight[0]}</h4>
      </li>
      <ul>
        <li>
          <a href="/math/Pythagoras/Misc"><h5>1 Miscellaneous</h5></a>

          <a href="/math/Pythagoras/Trigonometric"
            ><h5>2 A Trigonometric Proof</h5></a
          >

          <a href="/math/Pythagoras/Algebraic"
            ><h5><s>3 Algebraic Proofs</s></h5></a
          >

          <a href="/math/Pythagoras/Geometric"
            ><h5><s>4 Geometric Proofs</s></h5></a
          >
        </li>
      </ul>
    </ul>
  </main>
</div>

<style>
  li a {
    display: block;
  }
</style>
