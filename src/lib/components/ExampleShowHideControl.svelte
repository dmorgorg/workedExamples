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

<div class="part-show-hide-control">
  <button on:click={toggleSolution}>
    {#if displaySolution}
      <div class="hide-part-solution" />
    {:else}
      <div class="show-part-solution" />
    {/if}
  </button>
  <button on:click={toggleAnswer}>
    {#if displayAnswer}
      <div class="hide-part-answer" />
    {:else}
      <div class="check-part-answer" />
    {/if}
  </button>
</div>

<style lang="scss">
  .part-show-hide-control {
    display: flex;
    justify-content: center;
    align-self: center;
    margin-bottom: 1.5rem;
    padding: 0;

    button {
      font-size: 0.8rem;
      align-self: flex-end;
      color: white;
      border-radius: 0.2rem;
      padding: 0.075rem 1rem;
      margin: 0 0.5rem;
      min-width: 10rem;

      div.check-part-answer::before {
        content: "Check Part " counter(part-counter) " Answer";
      }
      div.hide-part-answer::before {
        content: "Hide Part " counter(part-counter) " Answer";
      }
      div.show-part-solution::before {
        content: "Show Part " counter(part-counter) " Solution";
      }
      div.hide-part-solution::before {
        content: "Hide Part " counter(part-counter) " Solution";
      }
    }
  }
</style>
