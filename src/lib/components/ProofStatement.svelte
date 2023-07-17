<script>
  export let problem;
</script>

<div class="statement">
  <p>
    {@html problem[1]}
  </p>
</div>

<style lang="scss">
  .statement {
    color: black;
    // p {
    //   margin: 0.5em;
    // }

    &::before {
      // margin: 0.5em;
      margin-top: -1em;
      position: relative;
      font-size: 115%;
      font-weight: bold;
      counter-increment: problem-counter;
      // content: "Proof " counter(problem-counter) ". ";
      content: "Proof " counter(chapter-counter) "." counter(subChapter-counter)
        "." counter(problem-counter) ". ";
    }
  }
</style>
