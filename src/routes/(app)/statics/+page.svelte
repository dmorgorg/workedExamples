<script>
	import Header from '$lib/components/Header.svelte'
	const topMatter = {
		theme: 'statics',
		headerLeft: ['Worked Examples', true, '/'], // to help with navigation and color styling
		headerRight: ['Engineering Statics', false], // statics, strength, fluids
	}
	let tm = topMatter
</script>

<div class="container {topMatter.theme}">
	<Header {topMatter} />

	<main class="linknav">
		<ul>
			<li><a href="/"><h5>Home Page</h5></a></li>
			<li>
				<h4>Engineering Statics</h4>
				<ul>
					<li>
						<a href="/statics/01-MathReview"><h5><s>1 Math Review</s></h5></a>
					</li>
					<li>
						<a href="/statics/09-ComplexFrames"><h5>9 Complex Frames</h5></a>
					</li>
				</ul>
			</li>
		</ul>
		<!-- </li> -->
		<!-- </ul> -->
	</main>
</div>
