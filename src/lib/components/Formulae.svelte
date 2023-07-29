<script>
  import { fade } from "svelte/transition";
  import ShowHideControl from "./ShowHideControl.svelte";
  let showHide = {
    displaySolution: false,
  };
  export let problem;

  $: displaySolution = showHide.displaySolution;
  //   $: displayAnswer = showHide.displayAnswer;
</script>

<!-- <div
  class:table-title={problem[0] === "table"}
  class:formulae-title={problem[0] === "formulae"}
>
  <span class="content">{@html problem[1]}</span>
</div> -->

<div class="skinny">
  {#if problem[0] === "table"}
    <div class="table-title">
      <span class="content">{@html problem[1]}</span>
    </div>
  {:else if problem[0] === "formulae"}
    <div class="formulae-title" />
  {/if}
  <ShowHideControl {problem} bind:showHide />
</div>
{#if displaySolution}
  <div transition:fade class="content">{@html problem[2]}</div>
{/if}

<style lang="scss">
  .skinny {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .formulae-title::before {
    display: inline;
    font-weight: bold;
    content: "Formul\0000e6";
    margin-right: 0.5rem;
    text-decoration: underline;
  }
  .table-title::before {
    font-weight: bold;
    content: "Table: ";
    // margin-right: 0.5rem;
    text-decoration: underline;
  }
  span.content {
    text-decoration: underline;
    color: inherit;
    font-weight: bold;
  }
  .content {
    color: black;
    display: inline;
    font-size: 90%;
  }
</style>
