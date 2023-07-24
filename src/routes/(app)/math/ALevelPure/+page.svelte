<script>
  import Header from "$lib/components/Header.svelte";
  const topMatter = {
    theme: "math",
    headerLeft: ["Mathematics", true, "/math"], // to help with navigation and color styling
    headerRight: ["A-level Pure Math (Year 1)", false], // statics, strength, fluids
  };
</script>

<div class="container {topMatter.theme}">
  <Header {topMatter} />
  <main class="linknav">
    <ul>
      <li>
        <a href="/"><h5>Home Page</h5></a>
      </li>
      <li>
        <h4>A-Level Pure Mathematics (Year 1)</h4>
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
    </ul>
  </main>
</div>
