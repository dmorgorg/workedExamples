<script>
  export let problem;
</script>

<article class="statement">
  <span>
    {@html problem[1]}
  </span>
</article>

<style lang="scss">
  .statement {
    &::before {
      font-weight: bold;
      counter-increment: problem-counter;
      content: "Example " counter(module-counter) "." counter(section-counter)
        "." counter(subsection-counter) "." counter(problem-counter) "  ";
    }

    span {
      margin-left: 1em;
      color: black;
      font-size: 90%;
    }
  }
</style>
