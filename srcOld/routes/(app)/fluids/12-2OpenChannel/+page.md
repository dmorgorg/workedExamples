<script>
    import Header from '$lib/components/Header.svelte'
    import problemSet from './problems.js'
    const topMatter = {
		description: "worked examples",
		course: "fluids", // statics, strength, fluids
		courseModule: "12.2 Open Channel Flow",
	};
</script>

<div class="page {topMatter.course}">
<Header {topMatter} />

<main>

{@html problemSet[1]}
hello $x^2$

    'Some inline math: $ax^2+bx+c=0$'
    $$ x = \frac{-b\pm\sqrt{b^2-4ac}}{2a}
    $$

</main>
</div>