<script>
  import Header from "$lib/components/Header.svelte";
  import { ki, kd } from "$lib/utilities";

  const topMatter = {
    theme: "fluids",
    headerLeft: ["Table: Dimensions of Steel Tubing"], // to help with navigation and color styling
    headerRight: ["Fluids", true, "/fluids"], // statics, strength, fluids
  };
</script>

<div class="container {topMatter.theme}">
  <Header {topMatter} />
  <main class="black">
    {@html `${kd(`
    \\footnotesize
          \\begin{array}{ccc}
            \\textsf{Outside} & \\textsf{Outside} & \\textsf{Wall} & \\textsf{Inside} \\\\
            \\textsf{Diameter} & \\textsf{Diameter} & \\textsf{Thickness}& \\textsf{Diameter} \\\\
            \\textsf{(in.)} & \\textsf{(mm)} & \\textsf{(mm)}& \\textsf{(mm)} \\\\
            \\\\\\\\
            \\frac{1}{8}   &   3.18    & 0.813		& 1.549 \\\\
                            & 			    & 0.889  	& 1.397 \\\\[0.125cm]
            \\frac{3}{16} 	&   4.76 	  & 0.813		& 3.137 \\\\
		 					              & 			    & 0.889  	& 2.985 \\\\[0.125cm]
            \\frac{1}{4} 	&   6.35 	  & 0.889		& 4.572 \\\\
		 					              & 			    & 1.24  	& 3.861 \\\\[0.125cm]
            \\frac{5}{16} 	&   7.94 		& 0.889		& 6.160 \\\\
                            & 			    & 1.24  	& 5.448 \\\\[0.125cm]
            \\frac{3}{8} 	&   9.53 		& 0.889		& 7.747 \\\\
                            & 			    & 1.24  	& 7.036 \\\\[0.125cm]
            \\frac{1}{2} 	&   12.70		& 1.24		& 10.21 \\\\
                            & 			    & 1.65  	& 9.46 \\\\[0.125cm]	
            \\frac{5}{8} 	&   15.88		& 1.24		& 13.39 \\\\
                            & 			    & 1.65  	& 12.57 \\\\[0.125cm]
            \\frac{3}{4} 	&   19.05 	& 1.24		& 16.56 \\\\
                            & 			    & 1.65  	& 15.75 \\\\[0.125cm]
            \\frac{7}{8} 	&   22.23 	& 1.24		& 19.74 \\\\
		 					              & 			    & 1.65  	& 18.92 \\\\[0.125cm]
		        1			 		      &   25.40		& 1.65		& 22.10 \\\\
		 					              & 			    & 2.11  	& 21.18 \\\\[0.125cm]
		        1\\frac{1}{4} 	&   31.75		& 1.65		& 28.45 \\\\
		 					              & 			    & 2.11  	& 27.53 \\\\[0.125cm]
		        1\\frac{1}{2} 	&   38.10		& 1.65		& 34.80 \\\\
		 					              & 			    & 2.11  	& 33.88 \\\\[0.125cm]
		        1\\frac{3}{4} 	&   44.45		& 1.65		& 41.15 \\\\
		 					              & 			    & 2.11  	& 40.23 \\\\[0.125cm]	
		        2 					    &   50.80		& 1.65		& 47.50 \\\\
		 					              & 			    & 2.11  	& 46.587 
          \\end{array}`)}`}
  </main>
</div>

<style>
  .black {
    color: black;
  }
</style>
