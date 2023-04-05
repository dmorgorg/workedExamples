<script>
  export let topMatter;
  $: tm = topMatter;
</script>

<header class={tm.theme}>
  <div class="left  ">
    {#if tm.theme === "all"}
      <h3>Worked Examples & Proofs</h3>
    {:else if tm.subject[1]}
      <!-- if is linked -->
      <h3><a href={tm.subject[2]}>{tm.subject[0]}</a></h3>
    {:else}
      <h3>{tm.subject[0]}</h3>
    {/if}
  </div>
  {#if tm.module[1]}
    <!-- if is linked -->
    <h3><a href={tm.module[2]}>{tm.module[0]}</a></h3>
  {:else}
    <h3>{tm.module[0]}</h3>
  {/if}
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
