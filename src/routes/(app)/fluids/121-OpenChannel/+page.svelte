<script>
    import Header from '$lib/components/Header.svelte'
	import { ki, kd } from '$lib/utilities';

	const topMatter = {
		description: 'worked examples',
		course: 'fluids', // statics, strength, fluids
		courseModule: '12.1 Open Channel Flow'
	};

	const pset = [`what the phuck ${ki('a^2')}`, `who the heck ${kd('b^c')}`];
</script>

<div class="page {topMatter.course}">
<Header {topMatter} />
channel (1)
{@html pset[0]}

</div>
