<script>
	import Header from '$lib/components/Header.svelte'
	import { ki, kd } from '$lib/utilities';

	 const topMatter = {
        description: "worked examples",
        course: "fluids", // statics, strength, fluids
        courseModule: "12.2 Open Channel Flow",
	};

	
	const pset = [`what the phuck ${ki('a^2')}`, `who the heck ${kd('b^c+d^3')}`];
</script>


<div class="page {topMatter.course}">
<Header {topMatter} />

channel (2)
{@html pset[1]}

</div>