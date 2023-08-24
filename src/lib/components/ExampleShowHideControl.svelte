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
    justify-content: end;
    align-self: center;
    margin-bottom: 0.5rem;
    padding: 0;

    button {
      cursor: pointer;
      font-size: 0.7rem;
      align-self: flex-end;
      color: white;
      border-radius: 0.2rem;
      padding: 0.125rem;
      margin-left: 0.5rem;
      min-width: 8rem;

      &:hover {
        box-shadow: 0.1rem 0.1rem 0.125rem 0.125rem var(--primary-grey);
        color: black;

        outline: 2px inset black;
      }

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
