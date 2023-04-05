<script>
  import Header from "$lib/components/Header.svelte";
  import Navigation from "$lib/components/Navigation.svelte";
  const topMatter = {
    theme: "all",
    subject: ["worked examples & proofs", false], // to help with navigation and color styling
    title: ["", false],
    module: ["a selection", false], // statics, strength, fluids
  };
</script>

<div class={topMatter.subject}>
  <Header {topMatter} />
  <ul class="page">
    <li class="fluids">
      <a href="/fluids">Fluids and Water Resources</a>
      <div>
        <a href="/fluids/121-OpenChannel">12.1 Open Channel Flow</a>
        <a href="/fluids/121-OpenChannel"><s>12.2 Open Channel Flow</s></a>
      </div>
    </li>
    <li class="math">
      <a href="/math">Mathematics</a>
      <ul>
        <li>
          <a href="/math">A-level Calculus</a>
          <div>
            <a href="/math/calculus/011-DifferentiationFromFirstPrinciples"
              >01.1 Differentiation From First Principles</a
            >
          </div>
        </li>
        <li>
          <a href="/math">Miscellaneous</a>
          <div>
            <a href="/math/misc/011-pythagoreanThm"
              >01.1 Proofs of the Pythagorean Theorem</a
            >
            <a href="/math/misc/012-pythagoreanThmAlgebraic"
              ><s>01.2 Algebraic Proofs of the Pythagorean Theorem</s></a
            >
            <a href="/math/misc/013-pythagoreanThmGeometric"
              ><s>01.3 Geometric of the Pythagorean Theorem</s></a
            >
          </div>
        </li>
      </ul>
    </li>
  </ul>
</div>

<style lang="scss">
  .page {
    margin-left: 2em;
  }
  ul {
    list-style: none;
    // margin-left: 1em;
  }
  li {
    display: block;
    padding: 1em;
    padding: 0;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: bold;

    a {
      margin-top: 1em;
      // border: 1px solid black;
      text-decoration: none;
      color: inherit;
    }

    div {
      margin-left: 1em;
      font-size: 1.25rem;
      display: flex;
      flex-wrap: wrap;

      a {
        margin: 0.125rem 1rem 0.125rem 1em;
        font-weight: normal;
        color: inherit;
        // margin-left: 1em;
      }
    }

    // li + li {
    //   margin-top: 3em;
    // }

    &.fluids {
      color: var(--fluids-primary);
      margin-top: 1em;
    }
    &.statics {
      color: var(--statics-primary);
      margin-top: 2em;
    }
    &.strength {
      color: var(--strength-primary);
      margin-top: 2em;
    }
    &.math {
      color: var(--math-light);
      margin-top: 2em;
    }
  }
</style>
