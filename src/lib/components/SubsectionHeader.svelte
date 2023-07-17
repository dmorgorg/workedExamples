<script>
  export let subsectionHeader;
</script>

<slot>
  <h3 class="subsectionHeader">
    <!-- {#if subsectionHeader.length >= 1} -->
    <span>{subsectionHeader}</span>
    <!-- {/if} -->
  </h3>
</slot>

<style>
  /* e.g. Rectangular Channel, subsection of Open Channel Flow */
  h3.subsectionHeader {
    counter-reset: problem-counter;
    font-size: 150%;
    margin: 3em auto 0 auto;
    margin: 0;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.75);
    text-transform: capitalize;
  }

  h3:first-of-type {
    margin-top: 1em;
  }

  span::before {
    counter-increment: subsection-counter;
    content: counter(subsection-counter) " ";
  }
</style>
