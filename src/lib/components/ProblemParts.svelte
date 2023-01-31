<script>
    // import ProblemPartStatement from "./ProblemPartStatement.svelte";
    import ProblemPart from "$lib/components/ProblemPart.svelte";
    export let problem;
</script>

<!-- problem[0] is the main problem statement,
    problem[1] is the array of solution and answer parts
    and problem[2] is the main problem answer  -->
<section>
    {#each problem[1] as part}
        <ProblemPart {part} />        
    {/each}
</section>

<style>
    section {
        counter-reset: part-counter;
        margin: 0.5em;
        margin-top: 4.5em;
    }
</style>
