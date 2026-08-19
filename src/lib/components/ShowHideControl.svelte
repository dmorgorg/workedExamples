<script>
  let { showHide = $bindable(), problem } = $props();

  let displaySolution = $derived(showHide.displaySolution);
  let displayAnswer = $derived(showHide.displayAnswer);

  function toggleAnswer() {
    showHide.displayAnswer = !displayAnswer;
  }
  function toggleSolution() {
    showHide.displaySolution = !displaySolution;
  }
</script>

<div class="show-hide-control">
  {#if problem[0] === "example"}
    <button onclick={toggleSolution}>
      {#if displaySolution}
        Hide Solution
      {:else}
        Show Solution
      {/if}
    </button>
    <button onclick={toggleAnswer}>
      {#if displayAnswer}
        Hide Answer
      {:else}
        Check Answer
      {/if}
    </button>
  {:else if problem[0] === "proof"}
    <button onclick={toggleSolution}>
      {#if displaySolution}
        Hide Proof
      {:else}
        Show Proof
      {/if}
    </button>
  {:else if problem[0] === "formulae" || problem[0] === "table"}
    <button class="inline" onclick={toggleSolution}>
      {#if displaySolution}
        Hide
      {:else}
        Show
      {/if}
    </button>
  {/if}
</div>
