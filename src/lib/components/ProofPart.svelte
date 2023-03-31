<script>
  import ProofPartSolution from "$lib/components/ProofPartSolution.svelte";
  import ProofPartStatement from "$lib/components/ProofPartStatement.svelte";
  import ProofShowHideControl from "$lib/components/ProofShowHideControl.svelte";
  export let part;

  let showHide = {
    displayAnswer: false,
  };

  $: displaySolution = showHide.displaySolution;

  let statement = part[0];
  let solution = part[1];
</script>

<div class="statement-line ">
  <div class="statement"><ProofPartStatement {statement} /></div>

  <div class="show-hide">
    <ProofShowHideControl bind:showHide />
  </div>
  <br />
  <!-- {@html statement} -->
</div>
<div class:show={displaySolution} class:hide={!displaySolution}>
  <ProofPartSolution {solution} />
</div>

<style lang="scss">
  // div.box {
  //   width: 90%;
  //   margin: -1em auto 2em auto;
  //   padding: 0 1em;
  //   padding-bottom: 0;
  // }
  div.show-hide {
    font-size: 0.75em;
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
    }
  }
</style>
