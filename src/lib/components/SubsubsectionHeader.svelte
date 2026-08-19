<script>
  let { subsubsectionHeader, children } = $props();
</script>

{#if children}{@render children()}{:else}
  <h3 class="subsubsectionHeader">
    <span>{subsubsectionHeader}</span>
  </h3>
{/if}

<style>
  h3 {
    margin: 1.5rem auto 0.5rem auto;
  }
  .subsubsectionHeader {
    counter-reset: problem-counter;
  }
  span::before {
    counter-increment: subsubsection-counter;
    content: counter(subsubsection-counter) " ";
  }
</style>
