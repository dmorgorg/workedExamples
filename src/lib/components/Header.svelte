<script>
  export let topMatter;
  $: tm = topMatter;
  export let unlinkTitle = false;
</script>

<header>
  <div class="left">
    {#if tm.subject === "all"}
      <h3>Worked Examples & Proofs</h3>
    {:else if unlinkTitle}
      <h3>{tm.title}</h3>
    {:else}
      <h3><a href="/{tm.subject}">{tm.title}</a></h3>
    {/if}
    <!-- <h3><a href='/'>{tm.description}</a> ::</h3>  -->
  </div>
  <h3 class="module">{tm.module}</h3>
</header>

<style>
  header {
    background: var(--primary-grey);
    box-shadow: -0.25px 5px 15px 0px rgba(0, 0, 0, 0.5);
    display: flex;
    font-size: 150%;
    justify-content: space-between;
    margin-bottom: 1em;
    padding: 1rem 2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.75);
    color: black;
  }
  h3 {
    display: inline-block;
    text-transform: capitalize;
    letter-spacing: 0.05rem;
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .left {
    margin-right: 2em;
  }
  /* .courseModule {
    text-align: right;
  } */
</style>
