<script>
  export let showHide;
  export let problemType;

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
  {#if problemType === "example"}
    <button on:click={toggleSolution}>
      {#if displaySolution}
        <div class="example-hide-part-solution" />
      {:else}
        <div class="example-show-part-solution" />
      {/if}
    </button>
    <button on:click={toggleAnswer}>
      {#if displayAnswer}
        <div class="example-hide-part-answer" />
      {:else}
        <div class="example-check-part-answer" />
      {/if}
    </button>
  {:else if problemType === "proof"}
    <button on:click={toggleSolution}>
      {#if displaySolution}
        <div class="proof-hide-part-solution" />
      {:else}
        <div class="proof-show-part-solution" />
      {/if}
    </button>
  {/if}
</div>
