<script>
  export let showHide;

  $: displaySolution = showHide.displaySolution;
  $: displayAnswer = showHide.displayAnswer;

  function toggleAnswer() {
    showHide.displayAnswer = !displayAnswer;
  }
  function toggleSolution() {
    showHide.displaySolution = !displaySolution;
  }
</script>

<div class="show-hide-control">
  <button on:click={toggleSolution}>
    {#if displaySolution}
      Hide Solution
    {:else}
      Show Solution
    {/if}
  </button>
  <button on:click={toggleAnswer}>
    {#if displayAnswer}
      Hide Answer
    {:else}
      Check Answer
    {/if}
  </button>
</div>

<style lang="scss">
  .show-hide-control {
    // border: 1px solid green;
    display: flex;
    justify-content: end;
    align-self: center;
    padding: 0;
    padding-top: 0.25em;

    button {
      font-size: 1em;
      align-self: flex-end;
      padding: 0.075rem;
      margin-left: 1em;
      margin-bottom: 1em;
      min-width: 8em;

      &:hover {
        color: white;
      }
    }
  }
</style>
