<script>
  export let showHide;

  $: displaySolution = showHide.displaySolution;

  function toggleSolution(event) {
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

<style lang="scss">
  .show-hide-control {
    flex-grow: 10;
    text-align: right;
    padding: 0;

    button {
      font-size: 1em;
      vertical-align: middle;
      padding: 0.075rem;
      margin-left: 1em;
      margin-bottom: 0.5em;
      min-width: 8em;
      border: 1px solid black;

      &:hover {
        color: white;
      }
    }
  }
</style>
