<script>
  import Header from "$lib/components/Header.svelte";
  let topMatter = {
    theme: "math",
    headerLeft: ["Mathematics", true, "/math"], // to help with navigation and color styling
    headerRight: ["Proofs of the Pythagorean Theorem", false], // statics, strength, fluids
  };
</script>

<div class="container">
  <Header {topMatter} />

  <main class="linknav {topMatter.theme}">
    <ul>
      <li class="homeLink header3"><a href="/">Worked Example Home Page</a></li>
      <li class="header2">
        {topMatter.headerRight[0]}
      </li>
      <ul>
        <li class="header3">
          <div>
            <a href="/math/Pythagoras/Misc">Misc.</a>
          </div>
          <div>
            <a href="/math/Pythagoras/Trigonometric">Trigonometric Proof</a>
          </div>
          <div>
            <a href="/math/Pythagoras/Algebraic">Algebraic Proofs</a>
          </div>
          <div>
            <a href="/math/Pythagoras/Geometric">Geometric Proofs</a>
          </div>
        </li>
      </ul>
    </ul>
  </main>
</div>

<style>
  .homeLink {
    margin-top: 2em;
    text-decoration: none;
    color: purple;
  }
</style>
