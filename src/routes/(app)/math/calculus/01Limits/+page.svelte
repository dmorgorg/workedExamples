<script>
  import Header from "$lib/components/Header.svelte";
  import { ki } from "$lib/utilities";

  const topMatter = {
    theme: "math",
    headerLeft: ["A-Level Pure Maths (Year 1)", true, "/math/ALevelPure"], // to help with navigation and color styling
    headerRight: ["10 Differentiation", false], // statics, strength, fluids
  };
  let tm = topMatter;
</script>

<div class="container {tm.theme}">
  <Header {topMatter} />

  <main class="linknav">
    <ul>
      <li>
        <a href="/"><h5>Home Page</h5></a>
      </li>
      <li>
        <h4>10 Differentiation</h4>

        <ul>
          <li>
            <a href="/math/ALevelPure/10Differentiation/101Gradient">
              <h5><s>10.1 Gradient of a Curve</s></h5>
            </a>

            <a href="/math/ALevelPure/10Differentiation/102FromFirstPrinciples">
              <h5>10.2 From First Principles</h5>
            </a>

            <a href="/math/ALevelPure/10Differentiation/103PowersOfX">
              <h5>10.3 Powers of {@html `${ki(`x`)}`}</h5>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </main>
</div>

<style>
  li a {
    display: block;
  }
</style>
