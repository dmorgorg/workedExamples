<script>
  export let statement;
</script>

<div>
  <div class="problem-part-statement">{@html statement}</div>
</div>

<style lang="scss">
  div {
    color: black;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
</style>
