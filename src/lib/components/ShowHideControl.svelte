<script>
    export let showHide;

    $: displaySolution = showHide.displaySolution;
    $: displayAnswer = showHide.displayAnswer;

    function toggleAnswer(event) {
        showHide.displayAnswer = !displayAnswer;
    }
    function toggleSolution(event) {
        showHide.displaySolution = !displaySolution;
    }
</script>

<div class="show-hide-control">
    <button on:click={toggleSolution}>
        {#if displaySolution}
            Hide Solution
        {:else}
            Show Solution
        {/if}
    </button>
    <button on:click={toggleAnswer}>
        {#if displayAnswer}
            Hide Answer
        {:else}
            Check Answer
        {/if}
    </button>
</div>

<style lang="scss">
    .show-hide-control {  
        flex-grow:10;     
        text-align: right;
        // margin: 0 0.5em;
        padding: 0;
        // border: 1px solid green;

        button {
            font-size: 1em;
            vertical-align: middle;
            padding: 0.075rem;
            margin-left: 1em;
            margin-bottom: 0.5em;
            min-width: 8em;
            border: 1px solid black;

            &:hover {
                color: white;
            }
        }
    }
</style>
