<script>
  export let problem;
</script>

<article class="statement">
  <p>
    {@html problem[1]}
  </p>
</article>

<style lang="scss">
  .statement {
    // line-height: 1;

    p {
      margin: 0.5em;
    }

    &::before {
      margin: 0.5em;
      position: relative;
      font-size: 115%;
      font-weight: bold;
      counter-increment: problem-counter;
      content: "Example " counter(section-counter) "." counter(problem-counter)
        ". ";
    }
  }
</style>
