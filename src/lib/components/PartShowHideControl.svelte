<script>
  let { showHide = $bindable(), problemType } = $props();

  let displaySolution = $derived(showHide.displaySolution);
  let displayAnswer = $derived(showHide.displayAnswer);

  function toggleAnswer() {
    showHide.displayAnswer = !displayAnswer;
  }
  function toggleSolution() {
    showHide.displaySolution = !displaySolution;
  }
</script>

<div class="part-show-hide-control">
  {#if problemType === "example"}
    <button onclick={toggleSolution}>
      {#if displaySolution}
        <div class="example-hide-part-solution"></div>
      {:else}
        <div class="example-show-part-solution"></div>
      {/if}
    </button>
    <button onclick={toggleAnswer}>
      {#if displayAnswer}
        <div class="example-hide-part-answer"></div>
      {:else}
        <div class="example-check-part-answer"></div>
      {/if}
    </button>
  {:else if problemType === "proof"}
    <button onclick={toggleSolution}>
      {#if displaySolution}
        <div class="proof-hide-part-solution"></div>
      {:else}
        <div class="proof-show-part-solution"></div>
      {/if}
    </button>
  {/if}
</div>
