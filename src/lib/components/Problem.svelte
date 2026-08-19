<script>
  import { fade } from "svelte/transition";

  import Statement from "./Statement.svelte";
  import ShowHideControl from "./ShowHideControl.svelte";
  import Parts from "./Parts.svelte";
  import Answer from "./Answer.svelte";
  import FormTabLink from "./FormTabLink.svelte";
  let { problem, levels } = $props();

  let showHide = $state({
    displayAnswer: false,
    displaySolution: false,
  });
  // let show = false;

  let displaySolution = $derived(showHide.displaySolution);
  let displayAnswer = $derived(showHide.displayAnswer);
</script>

{#if problem[0] === "formulae" || problem[0] === "table"}
  <FormTabLink {problem} />
{:else}
  <section class="problem" transition:fade|global>
    <Statement {problem} {levels} />
    <ShowHideControl {problem} bind:showHide />

    {#if displaySolution}
      <div transition:fade|global>
        <Parts {problem} />
      </div>
    {/if}
    {#if displayAnswer}
      <div transition:fade|global>
        <Answer {problem} />
      </div>
    {/if}
  </section>
{/if}
