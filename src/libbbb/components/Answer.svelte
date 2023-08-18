<script>
  export let problem;
</script>

<div class="answer-title" />
<div class="answer">{@html problem[3]}</div>

<style lang="scss">
  .answer-title {
    margin: 0;
    margin-top: 1rem;
    padding: 0;
    font-size: 95%;
    &::before {
      content: "Answer";
      font-size: 0.9rem;
      font-weight: bold;
    }
  }
  .answer {
    color: black;
    font-size: 1rem;
    margin: 0.125rem 0;
  }
</style>
