<script>
  export let topMatter;
  let tm = topMatter;
</script>

<ul>
  {#if tm.subject === "all" || tm.subject === "fluids"}
    <li class="fluids">
      {#if tm.subject === "fluids"}
        <div><a href="/">Home</a></div>
        <p />
      {:else}
        <a href="/fluids">Fluids and Water Resources</a>
      {/if}
      <div>
        <a href="/fluids/121-OpenChannel">12.1 Open Channel Flow</a>
        <!-- <a href="/fluids/122-OpenChannel">12.2 Open Channel Flow</a> -->
      </div>
    </li>
  {/if}
  {#if tm.subject === "all" || tm.subject === "math"}
    <li class="math">
      {#if tm.subject === "math"}
        <div><a href="/">Home</a></div>
        <p />
      {:else}
        <a href="/math">Mathematics (Miscellaneous)</a>
      {/if}
      <div>
        <a href="/math/011-pythagoreanThm">01.1 Pythagorean Theorem Proofs</a>
      </div>
    </li>
  {/if}
  {#if tm.subject === "all" || tm.subject === "calculus"}
    <li class="math">
      {#if tm.subject === "calculus"}
        <div><a href="/">Home</a></div>
      {:else}
        <a href="/math/calculus">A-level Calculus</a>
      {/if}
      <div>
        <a href="/math/calculus/011-DifferentiationFromFirstPrinciples"
          >01.1 Differentiation From First Principles</a
        >
      </div>
    </li>
  {/if}
  <!-- {#if course === "all" || course === "strength"}
		<li class="strength">
			{#if course === "strength"}
				Strength of Materials
			{:else}
				<a href="/strength">Strength of Materials</a>
			{/if}
			<div>
				<a href="/strength/01Stress"><s>01 Stress</s></a>
				<a href="/strength/02Strain"><s>02 Strain</s></a>
				<a href="/strength/04AxialDeformation"><s>04.1 Axial Deformation</s></a>
				<a href="/strength/042AxialDeformation"><s>04.2 Axial Deformation</s></a>
			</div>
		</li>
	{/if} -->
  <!-- {#if course === "all"}
		<li class="howTo">
			How this site was built...
			<div>
				<a href="/howTo/01">How To part I</a>
				<a href="/howTo/02">How To part II</a>
				<a href="/howTo/03">How To part III</a>
			</div>
		</li>
	{/if} -->
</ul>

<style lang="scss">
  ul {
    list-style: none;
  }
  li {
    display: block;
    padding: 1em;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: bold;

    a {
      text-decoration: none;
      color: inherit;
    }

    div {
      margin-left: 2em;
      font-size: 1.25rem;
      display: flex;
      flex-wrap: wrap;
      // margin-bottom: 1em;

      a {
        margin: 0.25rem 2rem 0.25rem 0;
        font-weight: normal;
        color: inherit;
      }
    }

    &.fluids {
      color: var(--fluids-primary);
    }
    &.statics {
      color: var(--statics-primary);
    }
    &.strength {
      color: var(--strength-primary);
    }
    &.math {
      color: var(--math-light);
    }
  }
</style>
