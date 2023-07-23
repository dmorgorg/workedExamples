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

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
    integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn"
    crossorigin="anonymous"
  />
  <script
    defer
    src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"
    integrity="sha384-cpW21h6RZv/phavutF+AuVYrr+dA8xD9zs6FwLpaCct6O9ctzYFfFr4dgmgccOTx"
    crossorigin="anonymous"
  ></script>
  <script
    defer
    src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"
    integrity="sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05"
    crossorigin="anonymous"
  ></script>
  <script>
    document.addEventListener("DOMContentLoaded", function () {
      renderMathInElement(document.body, {
        // customised options
        // • auto-render specific keys, e.g.:
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true },
        ],
        // • rendering keys, e.g.:
        throwOnError: false,
      });
    });
  </script>
</svelte:head>

<div class="container">
  <Header {topMatter} />

  <main class="linknav {tm.theme}">
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
              <h5>10.3&nbsp;Powers&nbsp;of&nbsp;{@html `${ki(`x`)}`}</h5>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </main>
</div>
