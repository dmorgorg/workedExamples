<script>
  import { fade } from "svelte/transition";

  import ExampleStatement from "./ExampleStatement.svelte";
  import ProofStatement from "./ProofStatement.svelte";
  import ProofShowHideControl from "./ProofShowHideControl.svelte";
  import ExampleShowHideControl from "./ExampleShowHideControl.svelte";
  import ProofParts from "./ProofParts.svelte";
  import ExampleParts from "./ExampleParts.svelte";
  import ExampleAnswer from "./ExampleAnswer.svelte";
  export let problem;

  let showHide = {
    displayAnswer: false,
    displaySolution: false,
  };

  $: displaySolution = showHide.displaySolution;
  $: displayAnswer = showHide.displayAnswer;
</script>

<section class="problem" transition:fade>
  {#if problem[0] === "proof"}
    <ProofStatement {problem} />
    <!-- show or hide solution parts or answer  -->
    <div class="show-hide-control">
      <ProofShowHideControl bind:showHide />
    </div>
    {#if displaySolution}
      <div transition:fade={{ duration: 1000 }}>
        <ProofParts {problem} />
      </div>
    {/if}
  {:else if problem[0] === "example"}
    <ExampleStatement {problem} />
    <!-- show or hide solution parts or answer  -->
    <div class="show-hide-control">
      <ExampleShowHideControl bind:showHide />
      <!-- check whether there are solutions provided -->
      {#if problem[1]}
        {#if displaySolution}
          <div transition:fade={{ duration: 1000 }}>
            <ExampleParts {problem} />
          </div>
        {/if}
        {#if displayAnswer}
          <div transition:fade={{ duration: 1000 }}>
            <ExampleAnswer {problem} />
          </div>
        {/if}
      {/if}
    </div>
  {/if}
</section>

<style lang="scss">
</style>
