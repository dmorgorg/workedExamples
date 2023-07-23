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
      <li><a href="/"><h5>Home Page</h5></a></li>
      <li>
        <h4>{topMatter.headerRight[0]}</h4>
      </li>
      <ul>
        <li>
          <a href="/math/Pythagoras/Misc"><h5>1&nbsp;Miscellaneous</h5></a>

          <a href="/math/Pythagoras/Trigonometric"
            ><h5>2&nbsp;A&nbsp;Trigonometric&nbsp;Proof</h5></a
          >

          <a href="/math/Pythagoras/Algebraic"
            ><h5><s>3&nbsp;Algebraic&nbsp;Proofs</s></h5></a
          >

          <a href="/math/Pythagoras/Geometric"
            ><h5><s>4&nbsp;Geometric&nbsp;Proofs</s></h5></a
          >
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
