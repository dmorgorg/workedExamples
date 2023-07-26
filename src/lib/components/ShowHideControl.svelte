<script>
  export let showHide;
  export let problem;

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
  {#if problem[0] === "example"}
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
  {:else if problem[0] === "proof"}
    <button on:click={toggleSolution}>
      {#if displaySolution}
        Hide Proof
      {:else}
        Show Proof
      {/if}
    </button>
  {/if}
</div>
