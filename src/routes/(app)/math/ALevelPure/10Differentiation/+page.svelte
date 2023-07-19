<script>
  import Header from "$lib/components/Header.svelte";
  // import SubsectionHeader from "$lib/components/SubsectionHeader.svelte";
  // import Problem from "$lib/components/Problem.svelte";
  // import problems from "./problems";

  const topMatter = {
    theme: "math",
    headerLeft: ["A-Pevel Pure Maths (Year 1)", true, "/math/ALevelPure"], // to help with navigation and color styling
    headerRight: ["10 Differentiation", false], // statics, strength, fluids
  };
  let tm = topMatter;
</script>

<div class="container">
  <Header {topMatter} />

  <main class="linknav {tm.theme}">
    <ul>
      <li class="homeLink header3">
        <a href="/">Worked Examples Home Page</a>
      </li>
      <li class="header2">
        10 Differentiation

        <ul>
          <li class="header3">
            <div>
              <a href="/math/ALevelPure/10Differentiation/101Gradient">
                <s>10.1 Gradient of a Curve</s>
              </a>
            </div>
            <div>
              <a
                href="/math/ALevelPure/10Differentiation/102FromFirstPrinciples"
              >
                10.2 Differentiation from First Principles
              </a>
            </div>
            <div>
              <a href="/math/ALevelPure/10Differentiation/103PowersOfX">
                10.3 Differentiating Powers of X
              </a>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </main>
</div>
