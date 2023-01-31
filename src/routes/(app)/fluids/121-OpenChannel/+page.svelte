<script>
	import Header from "$lib/components/Header.svelte";
	import SubsectionHeader from "$lib/components/SubsectionHeader.svelte";
	import Problem from "$lib/components/Problem.svelte";
	// import { ki, kd } from "$lib/utilities";
	import problems from "./problems";

	const topMatter = {
		description: "worked examples",
		course: "fluids", // statics, strength, fluids
		courseModule: "12.1 Open Channel Flow",
	};
</script>

<div class="page {topMatter.course}">
	<Header {topMatter} />

	

	<div class="wrapper">
		<main>
			{#each problems as problem}
				{#if typeof problem === "string"}
					<!-- e.g. Rectangular Channel, Triangular Channel, ... -->
					<SubsectionHeader subsectionHeader={problem} />
				{:else}
					<Problem {problem} />
				{/if}
			{/each}
		</main>
	</div>
</div>
