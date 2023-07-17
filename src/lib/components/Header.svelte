<script>
  export let topMatter;
  $: tm = topMatter;
</script>

<header class={tm.theme}>
  <div>
    <div class="left">
      {#if tm.headerLeft[1]}
        <!-- if is linked -->
        <h3 class="section">
          <a href={tm.headerLeft[2]}>{@html tm.headerLeft[0]}</a>
        </h3>
      {:else}
        <h3 class="section">{tm.headerLeft[0]}</h3>
      {/if}
      <!-- {#if tm.subsect}
        {#if tm.subsect[1]}
          <div>
            <h3 class="section">
              <a href={tm.subsect[2]}> {@html tm.subsect[0]}</a>
            </h3>
          </div>
        {:else}
          <div><h3 class="section">{@html tm.subsect[0]}</h3></div>
        {/if}
      {/if} -->
    </div>
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
  header {
    align-items: center;
    background: var(--primary-grey);
    // box-shadow: -0.25px 5px 15px 0px rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid #666;
    display: flex;
    font-size: 150%;
    justify-content: space-between;
    overflow-y: hidden;
    padding: 1rem 2rem;
    text-shadow: 0 0 0.75px rgba(0, 0, 0, 1);
    // text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000,
    // 0.5px 0.5px 0 #000;
  }
  h3 {
    display: inline-block;
    // text-transform: capitalize;
    letter-spacing: 0.075rem;
    margin: 0;
    a {
      color: inherit;
      text-decoration: none;
    }

    // &.subsection::before {
    //   content: counter(subsection-counter) " ";
    // }
    // &.subsection::before {
    //   content: counter(subsection-counter) "." counter(section-counter) " ";
    // }
  }

  .left {
    margin-right: 2em;
    line-height: 1.5;
  }
</style>
