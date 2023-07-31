<script>
  export let problem;
  export let levels;
</script>

<article
  class="problem-statement"
  class:twoProof={levels == 2 && problem[0] === "proof"}
  class:threeProof={levels == 3 && problem[0] === "proof"}
  class:fourProof={levels == 4 && problem[0] === "proof"}
  class:twoExample={levels == 2 && problem[0] === "example"}
  class:threeExample={levels == 3 && problem[0] === "example"}
  class:fourExample={levels == 4 && problem[0] === "example"}
>
  <span>
    {@html problem[1]}
  </span>
</article>

<style lang="scss">
  .problem-statement::before {
    font-weight: bold;
    counter-increment: problem-counter;
    margin-right: 0.5em;
  }
  .twoProof::before {
    content: "Proof " counter(section-counter) "." counter(problem-counter) ". ";
  }
  .threeProof::before {
    content: "Proof " counter(section-counter) "."
      counter(subsubsection-counter) "." counter(problem-counter) ". ";
  }
  .fourProof::before {
    content: "Proof " counter(section-counter) "." counter(subsection-counter)
      "." counter(subsubsection-counter) "." counter(problem-counter) ". ";
  }
  .twoExample::before {
    content: "Example " counter(section-counter) "." counter(problem-counter)
      ". ";
  }
  .threeExample::before {
    content: "Example " counter(section-counter) "."
      counter(subsubsection-counter) "." counter(problem-counter) ". ";
  }
  .fourExample::before {
    content: "Example " counter(section-counter) "." counter(subsection-counter)
      "." counter(subsubsection-counter) "." counter(problem-counter) ". ";
  }

  span {
    color: black;
    font-size: 90%;
  }
</style>
