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
  // .show-hide-control {
  //   // border: 1px solid green;
  //   display: flex;
  //   justify-content: end;
  //   align-self: center;
  //   padding: 0;
  //   padding-top: 0.5em;
  //   margin-right: -0.5rem;

  //   button {
  //     font-size: 0.8rem;
  //     align-self: flex-end;
  //     border-radius: 0.2rem;
  //     padding: 0.075rem;
  //     margin-left: 1em;
  //     // margin-bottom: 1em;
  //     min-width: 8em;

  //     &:hover {
  //       color: black;
  //       background: pink;
  //     }
  //   }
  // }
</style>
