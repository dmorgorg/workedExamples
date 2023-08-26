<script>
  import { fade } from "svelte/transition";

  import Statement from "./Statement.svelte";
  import ShowHideControl from "./ShowHideControl.svelte";
  import Parts from "./Parts.svelte";
  import Answer from "./Answer.svelte";
  import FormTabLink from "./FormTabLink.svelte";
  export let problem;
  export let levels;

  let showHide = {
    displayAnswer: false,
    displaySolution: false,
  };
  // let show = false;

  $: displaySolution = showHide.displaySolution;
  $: displayAnswer = showHide.displayAnswer;
</script>

{#if problem[0] === "formulae" || problem[0] === "table"}
  <FormTabLink {problem} />
{:else}
  <section class="problem" transition:fade>
    <Statement {problem} {levels} />
    <ShowHideControl {problem} bind:showHide />

    {#if displaySolution}
      <div transition:fade>
        <Parts {problem} />
      </div>
    {/if}
    {#if displayAnswer}
      <div transition:fade>
        <Answer {problem} />
      </div>
    {/if}
  </section>
{/if}
