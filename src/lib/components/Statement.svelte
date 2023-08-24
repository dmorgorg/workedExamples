<script>
  export let problem;
  export let levels;
</script>

<article
  class="problem-statement"
  class:_00-Proof={levels === "00" && problem[0] === "proof"}
  class:_01-Proof={levels === "01" && problem[0] === "proof"}
  class:_10-Proof={levels === "10" && problem[0] === "proof"}
  class:_11-Proof={levels === "11" && problem[0] === "proof"}
  class:_00-Example={levels === "00" && problem[0] === "example"}
  class:_01-Example={levels === "01" && problem[0] === "example"}
  class:_10-Example={levels === "10" && problem[0] === "example"}
  class:_11-Example={levels === "11" && problem[0] === "example"}
>
  <span>
    {@html problem[1]}
  </span>
</article>

<style lang="scss">
  .problem-statement {
    &::before {
      font-weight: bold;
      counter-increment: problem-counter;
      margin-right: 0.5em;
    }
    &._00-Proof::before {
      content: "Proof " counter(section-counter) "." counter(problem-counter)
        ". ";
    }
    &._01-Proof::before {
      content: "Proof " counter(section-counter) "."
        counter(subsubsection-counter) "." counter(problem-counter) ". ";
    }
    &._10-Proof::before {
      content: "Proof " counter(section-counter) "." counter(subsection-counter)
        "." counter(problem-counter) ". ";
    }
    &._11-Proof::before {
      content: "Proof " counter(section-counter) "." counter(subsection-counter)
        "." counter(subsubsection-counter) "." counter(problem-counter) ". ";
    }

    &._00-Example::before {
      content: "Example " counter(section-counter) "." counter(problem-counter)
        ". ";
    }
    &._01-Example::before {
      content: "Example " counter(section-counter) "."
        counter(subsubsection-counter) "." counter(problem-counter) ". ";
    }
    &._10-Example::before {
      content: "Example " counter(section-counter) "."
        counter(subsection-counter) "." counter(problem-counter) ". ";
    }
    &._11-Example::before {
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
