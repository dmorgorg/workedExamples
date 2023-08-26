<script>
  import Header from "$lib/components/Header.svelte";
  import { ki, kd } from "$lib/utilities";

  const topMatter = {
    theme: "fluids",
    headerLeft: ["Table: Schedule 40 Steel Pipe"], // to help with navigation and color styling
    headerRight: ["Fluids", true, "/fluids"], // statics, strength, fluids
  };
</script>

<div class="container {topMatter.theme}">
  <Header {topMatter} />
  <main class="black">
    {@html `${kd(`

          \\begin{array}{ccccc}
            \\scriptsize
            \\textsf{Nominal} & \\textsf{Inside} & \\quad\\qquad\\qquad & \\textsf{Nominal} & \\textsf{Inside} \\\\
            \\textsf{Size} & \\textsf{Diameter} & \\quad\\qquad\\qquad & \\textsf{Size} & \\textsf{Diameter} \\\\
            \\textsf{(in)} & \\textsf{(mm)} & \\quad\\qquad\\qquad & \\textsf{(in)} & \\textsf{(mm)} \\\\[0.5cm]
            
           
            \\frac18 	& 6.8 	&  	& 4 	&	102.3	\\\\[0.25cm]
		        \\frac14 	& 9.2 	&  	& 5 	&	128.2	\\\\[0.25cm]
            \\frac38 	& 12.5 	& 	& 6 	&	154.1	\\\\[0.25cm]
            \\frac12 	& 15.8 	&  	& 8 	&	202.7	\\\\[0.25cm]
            \\frac34 	& 20.9 	&  	& 10 	&	254.5	\\\\[0.25cm]
            1 			  & 26.6 	& 	& 12 	&	303.2	\\\\[0.25cm]
            1\\frac14 & 35.1 	&  	& 14 	&	333.4	\\\\[0.25cm]
            1\\frac12 & 40.9 	& 	& 16 	&	381.0	\\\\[0.25cm]
            2 			  & 52.5 	& 	& 18 	&	428.7	\\\\[0.25cm]
            2\\frac12 & 62.7 	&  	& 20 	&	477.9	\\\\[0.25cm]
            3 			  & 77.9 	&  	& 24 	&	574.7	\\\\[0.25cm]
            3\\frac12 & 90.1 \\
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
