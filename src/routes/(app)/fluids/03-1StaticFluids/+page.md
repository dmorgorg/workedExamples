<script>
    import Header from '$lib/components/Header.svelte'
    const topMatter = {
		description: "worked examples",
		course: "fluids", // statics, strength, fluids
		courseModule: "03.1 Forces Due to Static Fluids",
	};
</script>

<div class="page {topMatter.course}">
<Header {topMatter} />

<main>

    Some inline math: $ax^2+bx+c=0$    
    $$ x = \frac{-b\pm\sqrt{b^2-4ac}}{2a}     
    $$
</main>
</div>
