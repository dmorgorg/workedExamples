<script>
  import Header from "$lib/components/Header.svelte";
  import { ki, kd } from "$lib/utilities";

  const topMatter = {
    theme: "fluids",
    headerLeft: [
      "Formul&aelig;: Units, Nature of Fluids & Pressure Measurement",
      true,
      "/fluids/01-NOFandPM",
    ], // to help with navigation and color styling
    headerRight: ["Fluids", true, "/fluids"], // statics, strength, fluids
  };
</script>

<div class="container {topMatter.theme}">
  <Header {topMatter} />
  <main class="black">
    {@html `${kd(`
        \\begin{aligned} 
            1\\,\\mathsf{m^3} &= 1000\\,\\text{L} \\quad (\\textsf{litres}) \\\\
            1\\,\\mathsf{kg\\cdot m/s^2} &= 1\\,\\text{N} \\quad (\\textsf{Newton}) \\\\
            1\\,\\mathsf{N/m^2} &= 1\\,\\text{Pa} \\quad (\\textsf{Pascal}) \\\\
            1\\,\\mathsf{kN/m^2} &= 1\\,\\text{kPa} \\quad (\\textsf{kilopascal}) \\\\
            1\\,\\mathsf{N/mm^2} &= 1\\,\\text{MPa} \\quad (\\textsf{megapascal}) \\\\
            \\textsf{Pressure:} \\quad P &= \\frac{F}{A} \\quad \\left(= \\frac{\\textsf{force}}{\\textsf{area}}\\right) \\\\
            \\textsf{Density:} \\quad \\rho \\textsf{ (rho)} &= \\frac{m}{V} \\quad \\left(= \\frac{\\textsf{mass}}{\\textsf{volume}}\\right) \\\\
            \\textsf{Specific Weight:} \\quad \\gamma \\textsf{ (gamma)} &= \\frac{w}{V} \\quad \\left(= \\frac{\\textsf{weight}}{\\textsf{volume}}\\right) \\\\
            \\gamma &= \\rho{}g \\\\
            \\textsf{Specific Gravity:} \\quad  \\textsf{sg} &= \\frac{\\rho_s}{\\rho_{w@4\\degree\\! C}} \\quad \\small\\left(= \\frac{\\textsf{density of substance}}{\\textsf{density of water at } 4\\degree\\! C}\\right) \\\\
            &= \\frac{\\gamma_s}{\\gamma_{w@4\\degree\\! C}} \\quad \\small\\left(= \\frac{\\textsf{spec.wt of substance}}{\\textsf{spec.wt of water at } 4\\degree\\! C}\\right) \\\\
            p_{abs} &= p_{atm} + p_{gauge} \\\\
            \\Delta p &= \\gamma h 
        \\end{aligned}`)}`}
    <div class="width65">
      <p />
      &nbsp;
      <p />
      <h4>Pascal's Laws:</h4>
      <ol>
        <li>
          Pressure acts uniformly in all directions on a small volume of liquid.
        </li>
        <li>
          Pressure acts perpendicular to the solid boundaries that contain a
          fluid.
        </li>
      </ol>
    </div>
  </main>
</div>

<style>
  .black {
    color: black;
  }
  h4 {
    color: var(--fluids-primary);
  }
</style>
