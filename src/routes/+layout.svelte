<script>
  import "$lib/styles/global.scss";
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
  // export const prerender = true;
</script>

{@render children?.()}
