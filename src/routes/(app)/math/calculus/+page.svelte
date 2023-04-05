<script>
  import Header from "$lib/components/Header.svelte";
  const topMatter = {
    theme: "math",
    title: ["a-level calculus[0]", false],
    module: ["diffentiation[0]", false],
  };
</script>

<div class="page {topMatter.subject}">
  <Header {topMatter} />
  <ul>
    <li class="math">
      <a href="/math/calculus">A-level Calculus</a>
      <div>
        <a href="/math/calculus/011-DifferentiationFromFirstPrinciples"
          >01.1 011-DifferentiationFromFirstPrinciples</a
        >
        <a href="/math/calculus/011-DifferentiationFromFirstPrinciples"
          ><s>01.2 Differentiation</s></a
        >
      </div>
    </li>
  </ul>
</div>
