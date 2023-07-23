<script>
  export let topMatter;
  $: tm = topMatter;
</script>

<header class={tm.theme}>
  <div class="left">
    {#if tm.headerLeft[1]}
      <!-- if is linked -->
      <h3 class="section">
        <a href={tm.headerLeft[2]}>{@html tm.headerLeft[0]}</a>
      </h3>
    {:else}
      <h3 class="section">{tm.headerLeft[0]}</h3>
    {/if}
  </div>
  {#if tm.headerRight[1]}
    <h3 class="section">
      <a href={tm.headerRight[2]}>{@html tm.headerRight[0]}</a>
    </h3>
  {:else}
    <h3 class="section">{@html tm.headerRight[0]}</h3>
  {/if}
</header>

<style lang="scss">
  h3 {
    display: inline-block;
    letter-spacing: 0.075rem;
    margin: 0;
    a {
      color: inherit;
      text-decoration: none;
    }
  }

  .left {
    margin-right: 2em;
    line-height: 1.5;
  }
</style>
