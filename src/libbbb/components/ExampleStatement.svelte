<script>
  export let problem;
  export let levels;
</script>

<article
  class="statement"
  class:two={levels == 2}
  class:three={levels == 3}
  class:four={levels == 4}
>
  <span>
    {@html problem[1]}
  </span>
</article>

<!-- <style lang="scss">
  .two::before {
    font-weight: bold;
    counter-increment: problem-counter;
    content: "Example " counter(section-counter) "." counter(problem-counter)
      ".  ";
  }
  .three::before {
    font-weight: bold;
    counter-increment: problem-counter;
    content: "Exampleasda " counter(section-counter) "."
      counter(subsection-counter) "." counter(problem-counter) ".  ";
  }
  .four::before {
    font-weight: bold;
    counter-increment: problem-counter;
    content: "Example " counter(section-counter) "." counter(subsection-counter)
      "." counter(subsubsection-counter) "." counter(problem-counter) ".  ";
  }
  span {
    margin-left: 1em;
    color: black;
    font-size: 90%;
  }
</style> -->
