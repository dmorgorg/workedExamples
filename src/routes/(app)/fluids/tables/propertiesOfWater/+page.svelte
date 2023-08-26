<script>
  import Header from "$lib/components/Header.svelte";
  import { ki, kd } from "$lib/utilities";

  const topMatter = {
    theme: "fluids",
    headerLeft: ["Table: Properties of Water", true, "/fluids/"], // to help with navigation and color styling
    headerRight: ["Fluids", true, "/fluids"], // statics, strength, fluids
  };
</script>

<div class="container {topMatter.theme}">
  <Header {topMatter} />
  <main class="black">
    {@html `${kd(`
          \\begin{array}{cccc}
            \\\\
            % & \\textsf{Specific} & & \\\\% \\textsf{Dynamic} \\\\
            \\textsf{Temperature} & \\mathsf{Specific Weight, \\gamma} & \\mathsf{Density, \\rho} \\\\% & \\textsf{Viscosity} \\\\
            \\degree\\! C & \\mathsf{(kN/m^3)} & \\mathsf{(kg/m^3)}  \\\\\\\\% & \\mathsf{(Pa\\cdot s)} \\\\\\\\
            0 & 9.81 & 1000 & \\\\% 1.75 \\times 10^{-3} \\\\
            5 & 9.81 & 1000 & \\\\% 1.52 \\times 10^{-3} \\\\ 
            10 & 9.81 & 1000 & \\\\% 1.30 \\times 10^{-3} \\\\ 
            15 & 9.81 & 1000 & \\\\% 1.15 \\times 10^{-3} \\\\ 
            20 & 9.79 & 998 & \\\\% 1.02 \\times 10^{-3} \\\\ 
            25 & 9.78 & 997 & \\\\%8.91 \\times 10^{-4} \\\\ 
            30 & 9.77 & 996 & \\\\%9.00 \\times 10^{-4} \\\\ 
            35 & 9.75 & 994 & \\\\%7.18 \\times 10^{-4} \\\\ 
            40 & 9.73 & 992 & \\\\%6.51 \\times 10^{-4} \\\\ 
            45 & 9.71 & 990 & \\\\%5.94 \\times 10^{-4} \\\\ 
            50 & 9.69 & 988 & \\\\%5.41 \\times 10^{-4} \\\\ 
            55 & 9.67 & 986 & \\\\% 4.98 \\times 10^{-4} \\\\ 
            60 & 9.65 & 984 & \\\\%4.60 \\times 10^{-4} \\\\ 
            65 & 9.62 & 981 & \\\\%4.31 \\times 10^{-4} \\\\ 
            70 & 9.59 & 978 & \\\\%4.02 \\times 10^{-4} \\\\ 
            75 & 9.56 & 975 & \\\\%3.73 \\times 10^{-4} \\\\ 
            80 & 9.53 & 971 & \\\\%3.50 \\times 10^{-4} \\\\ 
            85 & 9.50 & 968 & \\\\%3.30 \\times 10^{-4} \\\\ 
            90 & 9.47 & 965 & \\\\%3.11 \\times 10^{-4} \\\\ 
            95 & 9.44 & 962 & \\\\%2.92 \\times 10^{-4} \\\\ 
            100 & 9.40 & 958 & \\\\%2.82 \\times 10^{-4} 
            \\end{array}`)}`}
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
