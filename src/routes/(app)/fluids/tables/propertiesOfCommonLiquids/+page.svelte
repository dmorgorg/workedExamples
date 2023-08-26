<script>
  import Header from "$lib/components/Header.svelte";
  import { ki, kd } from "$lib/utilities";

  const topMatter = {
    theme: "fluids",
    headerLeft: ["Table: Properties of Common Liquids", true, "/fluids/"], // to help with navigation and color styling
    headerRight: ["Fluids", true, "/fluids"], // statics, strength, fluids
  };
</script>

<div class="container {topMatter.theme}">
  <Header {topMatter} />
  <main class="black">
    {@html `${kd(`
          \\textsf{(All Liquids at 25\\degree C and 101 kpa)} \\\\
    \\begin{array}{rcccc}
    \\\\
    & \\textsf{Specific} & \\textsf{Specific} &  \\\\% & \\textsf{Dynamic }  \\\\
    \\textsf{Liquid} & \\textsf{Gravity} & \\textsf{Weight},\\,\\gamma & \\textsf{Density},\\,\\rho \\\\% & \\textsf{Viscosity} \\\\
     % & &	 \\gamma & \\rho \\\\% & \\eta \\\\
    & & \\mathsf{(kN/m^3)} & \\mathsf{(kg/m^3)} \\\\\\\\% & \\mathsf{(Pa\\cdot s)} \\\\\\\\

    \\textsf{Acetone}           & 0.787 	& 7.72    & 787   \\\\% & 3.16 \\times 10^{-4} \\\\    
    \\textsf{Alcohol, Ethyl} 		& 0.789 	& 7.74 		& 789		\\\\% & 5.60 \\times 10^{-4} \\\\
    \\textsf{Alcohol, Propyl} 	& 0.802 	& 7.87 		& 802		\\\\% & 1.92 \\times 10^{-3} \\\\
    \\textsf{Benzene} 				  & 0.876 	& 8.59 		& 876		\\\\% & 6.03 \\times 10^{-4} \\\\
    \\textsf{Carbon Tetrachloride} & 1.590 & 15.60   & 1590	\\\\% & 9.10 \\times 10^{-4} \\\\
    \\textsf{Castor Oil} 			  & 0.960 	& 9.42 		& 960		\\\\% & 6.51 \\times 10^{-1} \\\\
    \\textsf{Ethylene Glycol}   & 1.100 	& 10.79 	& 1100	\\\\% & 1.62 \\times 10^{-2} \\\\
    \\textsf{Gasoline} 				  & 0.68 		& 6.67 		& 680		\\\\% & 2.87 \\times 10^{-4} \\\\
    \\textsf{Glycerine} 			  & 1.258 	& 12.34 	& 1258	\\\\% & 9.60 \\times 10^{-1} \\\\
    \\textsf{Kerosene} 				  & 0.823 	& 8.07 		& 823		\\\\% & 1.64 \\times 10^{-3} \\\\
    \\textsf{Linseed Oil} 		  & 0.930 	& 9.12 		& 930		\\\\% & 3.31 \\times 10^{-2} \\\\
    \\textsf{Mercury} 				  & 13.54 	& 132.8 	& 13540	\\\\% & 1.53 \\times 10^{-3} \\\\
    \\textsf{Propane} 				  & 0.495 	& 4.86 		& 495		\\\\% & 1.10 \\times 10^{-4} \\\\
    \\textsf{Seawater} 				  & 1.030 	& 10.10 	& 1030	\\\\% & 1.03 \\times 10^{-3} \\\\
    \\textsf{Turpentine} 			  & 0.870 	& 8.53 		& 870		\\\\% & 1.37 \\times 10^{-3} \\\\
    \\textsf{Fuel Oil, medium}  & 0.852 	& 8.36 		& 852		\\\\% & 2.99 \\times 10^{-3} \\\\
    \\textsf{Fuel Oil, heavy}   & 0.906 	& 8.89 		& 906		\\\\% & 1.07 \\times 10^{-1} \\\\
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
