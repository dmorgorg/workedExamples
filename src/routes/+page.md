<script>
	import Header from "$lib/components/Header.svelte";
	import Navigation from "$lib/components/Navigation.svelte";
    const topMatter = {
		description: "worked examples",
		course: "A selection", // statics, strength, fluids
		courseModule: "",
	};
</script>

<div class="page {topMatter.course}">

<Header {topMatter} />
<Navigation  />

$$ 
a=\sqrt{b^2+c^2} 
$$

</div>