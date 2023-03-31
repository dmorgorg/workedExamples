<script>
  export let statement;
</script>

<article>
  <div class="left-matter">
    <h4>&nbsp;</h4>
    <div class="problem-part-statement">{@html statement}</div>
  </div>
</article>

<style lang="scss">
  article {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    // margin-top: 1em;
    padding: 0;

    h4 {
      padding: 0;
      display: inline;

      &::before {
        counter-increment: part-counter;
        content: "Part " counter(part-counter) ": ";
      }
    }

    div.problem-part-statement {
      display: inline;
    }
  }
</style>
