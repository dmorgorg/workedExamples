<script>
  export let showHide;

  $: displaySolution = showHide.displaySolution;

  function toggleSolution() {
    showHide.displaySolution = !displaySolution;
  }
</script>

<div class="show-hide-control">
  <button on:click={toggleSolution}>
    {#if displaySolution}
      Hide Proof
    {:else}
      Show Proof
    {/if}
  </button>
</div>
