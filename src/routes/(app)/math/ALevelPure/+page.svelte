<!-- 

<div class="container">
  <Header {topMatter} />

  <main class="linknav {tm.theme}">
    <ul>
      <li class="homeLink header3"><a href="/">Home Page</a></li>
      <li class="header2">
        A-Level Pure Mathematics (Year 1)

        <ul>
          <li class="header3">
            <div>
              <a href="/math/ALevelPure/10Differentiation">10 Differentiation</a
              >
            </div>
            <div>
              <a href="/math/ALevelPure/11Integration"><s>11 Integration</s></a>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </main>
</div>

<style>
  .homeLink {
    margin-top: 2em;
    text-decoration: none;
  }
</style> -->

<script>
  import Header from "$lib/components/Header.svelte";
  const topMatter = {
    theme: "math",
    headerLeft: ["Mathematics", true, "/math"], // to help with navigation and color styling
    headerRight: ["A-level Pure Math (Year 1)", false], // statics, strength, fluids
  };
</script>

<div class="container">
  <Header {topMatter} />
  <main class="linknav {topMatter.theme}">
    <ul>
      <li class="homeLink header3">
        <a href="/">Worked Examples Home Page</a>
      </li>
      <li class="header2">
        A-Level Pure Mathematics (Year 1)

        <ul>
          <li class="header3">
            <div>
              <a href="/math/ALevelPure/10Differentiation">10 Differentiation</a
              >
            </div>
            <div>
              <a href="/math/ALevelPure/11Integration"><s>11 Integration</s></a>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </main>
</div>
