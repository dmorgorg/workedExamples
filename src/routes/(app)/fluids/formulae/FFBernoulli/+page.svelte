<script>
  import Header from "$lib/components/Header.svelte";
  import { ki, kd } from "$lib/utilities";

  const topMatter = {
    theme: "fluids",
    headerLeft: [
      "Formul&aelig;: Flow of Fluids & Bernoulli's Equation",
      true,
      "/fluids/03-FFBernoulli",
    ], // to help with navigation and color styling
    headerRight: ["Fluids", true, "/fluids"], // statics, strength, fluids
  };
</script>

<div class="container {topMatter.theme}">
  <Header {topMatter} />
  <main class="black">
    {@html `${kd(`
        \\begin{array} {rrcl}
           \\textsf{Volume Flow Rate}: & Q & = & Av \\quad\\left(\\mathsf{m^3/s}\\right)\\\\[0.25cm] 
           \\textsf{Mass Flow Rate}: & M & = & \\rho Q \\quad\\left(\\mathsf{kg/s}\\right)\\\\[0.25cm] 
           \\textsf{Weight Flow Rate}: & W & = & \\gamma Q \\quad\\left(\\mathsf{kN/s}\\right)\\\\[0.5cm] 
           \\textsf{Continuity Equation}: & A_1v_1 & = & A_2v_2\\\\[0.5cm]
           \\textsf{General Energy Equation}: & \\frac{P_A}{\\gamma}+z_A+\\frac{v_A^2}{2g} & = & \\frac{P_B}{\\gamma}+z_B+\\frac{v_B^2}{2g}
        \\end{array}`)}`}
  </main>
</div>

<style>
  .black {
    color: black;
  }
</style>
