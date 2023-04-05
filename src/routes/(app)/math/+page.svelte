<script>
  import Header from "$lib/components/Header.svelte";
  const topMatter = {
    theme: "math",
    subject: ["worked examples & proofs", true, "/"],
    module: ["mathematics", false],
  };
</script>

<div>
  <Header {topMatter} />

  <ul class="page {topMatter.theme}">
    <li>
      <a href="/math/calculus">A-level Calculus</a>
      <div>
        <a href="/math/calculus/011-DifferentiationFromFirstPrinciples"
          >01.1 Differentiation From First Principles</a
        >
        <a href="/math/calculus/012-Differentiation">01.2 Differentiation</a>
      </div>
    </li>
    <li>
      <a href="/math/misc">Miscellaneous</a>
      <div>
        <a href="/math/misc/011-pythagoreanThm"
          >01.1 Proofs of the Pythagorean Theorem</a
        >
        <a href="/math/misc/012-pythagoreanThmAlgebraic"
          ><s
            >01.2&nbsp;Algebraic&nbsp;Proofs&nbsp;of&nbsp;the&nbsp;Pythagorean&nbsp;Theorem</s
          ></a
        >
        <a href="/math/misc/013-pythagoreanThmGeometric"
          ><s
            >01.3&nbsp;Geometric&nbsp;Proofs&nbsp;of&nbsp;the&nbsp;Pythagorean&nbsp;Theorem</s
          ></a
        >
      </div>
    </li>
  </ul>
</div>

<style lang="scss">
  div.page {
    margin-left: 4em;
    margin-left: 2em;
  }

  ul {
    list-style: none;

    &.math {
      color: var(--math-light);
    }

    li {
      display: block;
      font-size: 1.75rem;
      font-weight: bold;
      margin: 0;
      padding: 0;

      a {
        color: inherit;
        text-decoration: none;
      }

      div {
        margin: 0;
        margin-left: 2rem;
        margin-bottom: 2rem;
        // border: 1px solid red;
        padding: 0;
        // background: orange;
        line-height: 1;

        a {
          color: black;
          font-size: 1.25rem;
          margin: 0;
          padding: 0;
          padding-right: 2em;

          // border: 1px solid purple;
          // background: yellow;
        }
      }
    }
  }

  // a {
  //   margin-top: 1em;
  //   // border: 1px solid black;
  //   text-decoration: none;
  //   color: inherit;
  // }

  // div {
  //   margin-left: 1em;
  //   font-size: 1.25rem;
  //   display: flex;
  //   flex-wrap: wrap;

  //   a {
  //     margin: 0.125rem 1rem 0.125rem 1em;
  //     font-weight: normal;
  //     color: inherit;
  //     // margin-left: 1em;
  //   }
  // }

  // &.fluids {
  //   color: var(--fluids-primary);
  //   margin-top: 1em;
  // }
  // &.statics {
  //   color: var(--statics-primary);
  //   margin-top: 2em;
  // }
  // &.strength {
  //   color: var(--strength-primary);
  //   margin-top: 2em;
  // }
  // &.math {
  //   color: var(--math-light);
  //   margin-top: 2em;
  // }
</style>
