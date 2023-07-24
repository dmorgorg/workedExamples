<script>
  export let subsectionHeader;
</script>

<slot>
  <h3 class="subsectionHeader">
    <span>{subsectionHeader}</span>
  </h3>
</slot>

<style>
  .subsectionHeader {
    counter-reset: problem-counter;
  }
  span::before {
    counter-increment: subsection-counter;
    content: counter(subsection-counter) " ";
  }
</style>
