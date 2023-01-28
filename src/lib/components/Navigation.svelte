<script>
	export let course = "all";
</script>

<ul>
	{#if course === "all" || course === "fluids"}
		<li class="fluids">
			{#if course === "fluids"}
				Fluids & Water Resources
			{:else}
				<a href="/fluids">Fluids & Water Resources</a>
			{/if}
			<div>
				<!-- <a href="/fluids/01PressureMeasurement"><s>01 Pressure Measurement</s></a>
				<a href="/fluids/03-1StaticFluids"><s>03.1 Forces Due to Static Fluids</s></a>
				<a href="/fluids/03-2StaticFluids"><s>03.2 Forces Due to Static Fluids</s></a> -->
				<a href="/fluids/12-1OpenChannel">12.1 Open Channel Flow</a>
				<!-- <a href="/fluids/12-2OpenChannel"><s>12.2 Open Channel Flow</s></a> -->
			</div>
		</li>
	{/if}
	<!-- {#if course === "all" || course === "statics"}
		<li class="statics">
			{#if course === "statics"}
				Structural Statics
			{:else}
				<a href="/statics">Structural Statics</a>
			{/if}
			<div>
				<a href="/statics/01MathReview"><s>01 Math Review</s></a>
				<a href="/statics/09ComplexFrames"><s>09.1 Complex Frames</s></a>
				<a href="/statics/092ComplexFrames"><s>09.2 Complex Frames</s></a>
			</div>
		</li>
	{/if} -->
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

<style>
	ul {
		list-style: none;
	}
	li {
		display: block;
		padding: 1em;
		font-size: 1.5rem;
		text-decoration: none;
		font-weight: bold;
	}
	li a {
		text-decoration: none;
		color: inherit;
	}
	li div {
		margin-left: 2em;
		font-size: 1.125rem;
		display: flex;
		flex-wrap: wrap;
	}
	li div a {
		/* text-decoration: underline; */
		margin: 0.25rem 2rem 0.25rem 0;
		font-weight: normal;
		color: inherit;
	}
	li.fluids {
		color: var(--fluids-primary);
	}
	li.statics {
		color: var(--statics-primary);
	}
	li.strength {
		color: var(--strength-primary);
	}
	li.howTo {
		color: var(--dark-grey);
		font-size: 100%;
		font-weight: normal;
	}
	li.howTo div {
		font-size: 80%;
	}
</style>
