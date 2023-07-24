<script>
  export let topMatter;
  $: tm = topMatter;
</script>

<header>
  <div class="left">
    <!-- if is linked -->
    {#if tm.headerLeft[1]}
      <h3>
        <a href={tm.headerLeft[2]}>{@html tm.headerLeft[0]}</a>
      </h3>
    {:else}
      <h3>{tm.headerLeft[0]}</h3>
    {/if}
  </div>
  <!-- if is linked -->
  {#if tm.headerRight[1]}
    <h3>
      <a href={tm.headerRight[2]}>{@html tm.headerRight[0]}</a>
    </h3>
  {:else}
    <h3>{@html tm.headerRight[0]}</h3>
  {/if}
</header>
