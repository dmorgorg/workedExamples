<h3 class="subsectionHeader">
	<slot />
</h3>

<style>
	/* e.g. Rectangular Channel, subsection of Open Channel Flow */
	h3.subsectionHeader {
		counter-reset: problem-counter;
		font-size: 150%;
		margin: 3em auto 0 auto;
		text-shadow: 0 0 1px rgba(0, 0, 0, 0.75);
		text-transform: capitalize;
	}

	h3:first-of-type {
		margin-top: 1em;
	}

	h3::before {
		counter-increment: section-counter;
		content: counter(section-counter) ". ";
	}
</style>
