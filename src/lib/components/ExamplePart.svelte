<script>
  import ExamplePartAnswer from "$lib/components/ExamplePartAnswer.svelte";
  import ExamplePartSolution from "$lib/components/ExamplePartSolution.svelte";
  import ExamplePartStatement from "$lib/components/ExamplePartStatement.svelte";
  import ExampleShowHideControl from "$lib/components/ExampleShowHideControl.svelte";
  export let part;

  let showHide = {
    displayAnswer: false,
    displaySolution: false,
  };

  $: displaySolution = showHide.displaySolution;
  $: displayAnswer = showHide.displayAnswer;
  $: either = displaySolution || displayAnswer;

  let statement = part[0];
  let solution = part[1];
  let answer = part[2];
</script>

<div class="statement-line">
  <div class="statement"><ExamplePartStatement {statement} /></div>
  <div class="show-hide">
    <ExampleShowHideControl bind:showHide />
  </div>
</div>

<div class:box={either}>
  <div class:show={displaySolution} class:hide={!displaySolution}>
    <ExamplePartSolution {solution} />
  </div>
  <div class:show={displayAnswer} class:hide={!displayAnswer}>
    <ExamplePartAnswer {answer} />
  </div>
</div>

<style lang="scss">
  div.box {
    // border: 1px solid red;
    width: 80%;
    margin: -1em auto 3em auto;
    padding: 0;
    // padding-bottom: 0;
  }
  div.show-hide {
    font-size: 0.9em;
    padding-right: 0;
    flex-grow: 1;
    align-self: flex-end;
  }
  .show ~ .show {
    padding-top: 0;
    border: none;
  }
  div.statement-line {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    /* margin-top: 1em; */
    margin-bottom: 2em;
    padding: 0;

    .statement {
      flex-grow: 1;
      margin-bottom: 0.5em;
    }
  }
</style>
