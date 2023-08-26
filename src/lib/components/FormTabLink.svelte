<script>
  //   import { fade } from "svelte/transition";
  export let problem;
  let title = problem[1];
  let path = problem[2];
</script>

<span>
  <a class="form-tab-link" href={path} target="_blank" rel="noreferrer noopener"
    >{@html title}</a
  >
</span>

<style>
  span {
    display: inline-block;
    font-size: 90%;
    margin-bottom: 0.5rem;
    margin-right: 1rem;
  }
</style>
