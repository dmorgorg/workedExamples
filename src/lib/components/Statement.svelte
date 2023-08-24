<script>
  export let problem;
  export let levels;
</script>

<article
  class="problem-statement"
  class:zeroProof={levels == 0 && problem[0] === "proof"}
  class:oneProof={levels == 1 && problem[0] === "proof"}
  class:twoProof={levels == 2 && problem[0] === "proof"}
  class:threeProof={levels == 3 && problem[0] === "proof"}
  class:zeroExample={levels == 0 && problem[0] === "example"}
  class:oneExample={levels == 1 && problem[0] === "example"}
  class:twoExample={levels == 2 && problem[0] === "example"}
  class:threeExample={levels === 3}
>
  <span>
    {@html problem[1]}
  </span>
</article>

<style lang="scss">
  .problem-statement {
    // background: pink;
    &::before {
      font-weight: bold;
      counter-increment: problem-counter;
      margin-right: 0.5em;
    }
    &.zeroProof::before {
      content: "Proof " counter(section-counter) "." counter(problem-counter)
        ". ";
    }
    &.oneProof::before {
      content: "Proof " counter(section-counter) "."
        counter(subsubsection-counter) "." counter(problem-counter) ". ";
    }
    &.twoProof::before {
      content: "Proof " counter(section-counter) "." counter(subsection-counter)
        "." counter(problem-counter) ". ";
    }
    &.threeProof::before {
      content: "Proof " counter(section-counter) "." counter(subsection-counter)
        "." counter(subsubsection-counter) "." counter(problem-counter) ". ";
    }

    &.zeroExample::before {
      content: "Example " counter(section-counter) "." counter(problem-counter)
        ". ";
    }
    &.oneExample::before {
      content: "Example " counter(section-counter) "."
        counter(subsubsection-counter) "." counter(problem-counter) ". ";
    }
    &.twoExample::before {
      content: "Example " counter(section-counter) "."
        counter(subsection-counter) "." counter(problem-counter) ". ";
    }
    &.threeExample::before {
      content: "Example  " counter(section-counter) "."
        counter(subsection-counter) "." counter(subsubsection-counter) "."
        counter(problem-counter) ". ";
    }
    span {
      color: black;
      font-size: 90%;
    }
  }
</style>
