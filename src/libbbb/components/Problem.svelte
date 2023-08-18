<script>
  import { fade } from "svelte/transition";

  import Statement from "./Statement.svelte";
  import ShowHideControl from "./ShowHideControl.svelte";
  import Parts from "./Parts.svelte";
  import Answer from "./Answer.svelte";
  import Formulae from "./Formulae.svelte";
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

<section class="problem" transition:fade>
  {#if problem[0] === "formulae" || problem[0] === "table"}
    <Formulae {problem} />
  {:else}
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
  {/if}
</section>
