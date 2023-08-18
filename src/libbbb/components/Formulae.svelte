<script>
  import { fade } from "svelte/transition";
  import ShowHideControl from "./ShowHideControl.svelte";
  let showHide = {
    displaySolution: false,
  };
  export let problem;

  $: displaySolution = showHide.displaySolution;
</script>

<div class="skinny formulae">
  {#if problem[0] === "table"}
    <div class="table-title">
      <span class="content">{@html problem[1]}</span>
    </div>
  {:else if problem[0] === "formulae"}
    <div class="formulae-title" />
  {/if}
  <ShowHideControl {problem} bind:showHide />
</div>
{#if displaySolution && problem[0] === "table"}
  <div transition:fade class="content">{@html problem[2]}</div>
{:else if displaySolution && problem[0] === "formulae"}
  <div transition:fade class="content">{@html problem[1]}</div>
{/if}

<style lang="scss">
  .skinny {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .formulae-title::before {
    font-weight: bold;
    content: "Formul\0000e6";
    // margin-right: 0.5rem;
    // margin-bottom: 1rem;
    // text-decoration: underline;
  }
  .table-title::before {
    font-weight: bold;
    content: "Table:";
    // margin-right: 0.5rem;
    // text-decoration: underline;
  }
  span.content {
    // text-decoration: underline;
    color: black;
    font-weight: bold;
    margin-left: 0.5rem;
    // margin-bottom: 1rem;
  }
  .content {
    color: black;
    display: inline;
    font-size: 90%;
  }
</style>
