<script>
  import Header from "$lib/components/Header.svelte";
  import { ki } from "$lib/utilities";

  const topMatter = {
    theme: "math",
    headerLeft: ["A-Level Pure Maths (Year 1)", true, "/math/ALevelPure"], // to help with navigation and color styling
    headerRight: ["11 Integration", false], // statics, strength, fluids
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
        <h4>11 Integration</h4>

        <ul>
          <li>
            <a href="/math/ALevelPure/10Differentiation/101Gradient">
              <h5><s>11.1 Integration</s></h5>
            </a>

            <a href="/math/ALevelPure/10Differentiation/102FromFirstPrinciples">
              <h5><s>11.2 Integration of {@html `${ki(`x^n`)}`} </s></h5>
            </a>

            <a href="/math/ALevelPure/10Differentiation/103PowersOfX">
              <h5><s>11.3 Integration of Functions</s></h5>
            </a>

            <a href="/math/ALevelPure/10Differentiation/103PowersOfX">
              <h5><s>11.4 Finding the Equation of Curves</s></h5>
            </a>

            <a href="/math/ALevelPure/10Differentiation/103PowersOfX">
              <h5><s>11.5 Evaluation of Definite Integrals</s></h5>
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
