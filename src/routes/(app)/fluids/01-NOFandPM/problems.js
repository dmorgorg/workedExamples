import { ki, kd } from "$lib/utilities";

export default [
  // section, or sub-type of course module
  "",

  // first problem
  [
    "formulae",

    // formulae list
    `<br/>Input values and answers are specified to 3 significant digits (unless the first non-zero digit is a 1, in which case 4 significant digits are used). Interim calculations are accurate to 5 significant digits to prevent the accumulation of rounding errors.
    
    ${kd(`
      \\begin{aligned}
        \\\\
        1\\,\\mathsf{m^3} &= 1000\\,\\text{L} \\quad (\\textsf{litres}) \\\\
        1\\,\\mathsf{kg\\cdot m/s^2} &= 1\\,\\text{N} \\quad (\\textsf{Newton}) \\\\
        1\\,\\mathsf{N/m^2} &= 1\\,\\text{Pa} \\quad (\\textsf{Pascal}) \\\\
        1\\,\\mathsf{kN/m^2} &= 1\\,\\text{kPa} \\quad (\\textsf{kiloascal}) \\\\
        1\\,\\mathsf{N/mm^2} &= 1\\,\\text{MPa} \\quad (\\textsf{megapascal}) \\\\
        \\textsf{Pressure:} \\quad P &= \\frac{F}{A} \\quad \\left(= \\frac{\\textsf{force}}{\\textsf{area}}\\right) \\\\
        \\textsf{Density:} \\quad \\rho \\textsf{ (rho)} &= \\frac{m}{V} \\quad \\left(= \\frac{\\textsf{mass}}{\\textsf{volume}}\\right) \\\\
        \\textsf{Specific Weight:} \\quad \\gamma \\textsf{ (gamma)} &= \\frac{w}{V} \\quad \\left(= \\frac{\\textsf{weight}}{\\textsf{volume}}\\right) \\\\
        \\gamma &= \\rho{}g \\\\
        \\textsf{Specific Gravity:} \\quad  \\textsf{sg} &= \\frac{\\rho_s}{\\rho_{w@4\\degree\\! C}} \\quad \\small\\left(= \\frac{\\textsf{density of substance}}{\\textsf{density of water at } 4\\degree\\! C}\\right) \\\\
        &= \\frac{\\gamma_s}{\\gamma_{w@4\\degree\\! C}} \\quad \\small\\left(= \\frac{\\textsf{spec.wt of substance}}{\\textsf{spec.wt of water at } 4\\degree\\! C}\\right) \\\\
        p_{abs} &= p_{atm} + p_{gauge} \\\\
        \\Delta p &= \\gamma h        
      \\end{aligned}
		`)}
    <p>&nbsp;</p>
    <div class="width60">Pascal's Laws:
    <ol>
    <li>Pressure acts uniformly in all directions on a small volume of liquid.</li>
    <li>Pressure acts perpendicular to the solid boundaries that contain a fluid.</li>
    </ol>
    </div>`,
  ],

  [
    "table",

    "Properties of Water",

    // formulae list
    `${kd(`
      \\begin{array}{cccc}
      \\\\
      & \\textsf{Specific} & & \\textsf{Dynamic} \\\\
      \\textsf{Temperature} & \\textsf{Weight} & \\textsf{Density} & \\textsf{Viscosity} \\\\
      \\degree\\! C & \\mathsf{(kN/m^3)} & \\mathsf{(kg/m^3)} & \\mathsf{(Pa\\cdot s)} \\\\\\\\
       0 & 9.81 & 1000 & 1.75 \\times 10^{-3} \\\\
       5 & 9.81 & 1000 & 1.52 \\times 10^{-3} \\\\ 
			10 & 9.81 & 1000 & 1.30 \\times 10^{-3} \\\\ 
			15 & 9.81 & 1000 & 1.15 \\times 10^{-3} \\\\ 
			20 & 9.79 & 998 & 1.02 \\times 10^{-3} \\\\ 
			25 & 9.78 & 997 & 8.91 \\times 10^{-4} \\\\ 
			30 & 9.77 & 996 & 9.00 \\times 10^{-4} \\\\ 
			35 & 9.75 & 994 & 7.18 \\times 10^{-4} \\\\ 
			40 & 9.73 & 992 & 6.51 \\times 10^{-4} \\\\ 
			45 & 9.71 & 990 & 5.94 \\times 10^{-4} \\\\ 
			50 & 9.69 & 988 & 5.41 \\times 10^{-4} \\\\ 
			55 & 9.67 & 986 & 4.98 \\times 10^{-4} \\\\ 
			60 & 9.65 & 984 & 4.60 \\times 10^{-4} \\\\ 
			65 & 9.62 & 981 & 4.31 \\times 10^{-4} \\\\ 
			70 & 9.59 & 978 & 4.02 \\times 10^{-4} \\\\ 
			75 & 9.56 & 975 & 3.73 \\times 10^{-4} \\\\ 
			80 & 9.53 & 971 & 3.50 \\times 10^{-4} \\\\ 
			85 & 9.50 & 968 & 3.30 \\times 10^{-4} \\\\ 
			90 & 9.47 & 965 & 3.11 \\times 10^{-4} \\\\ 
			95 & 9.44 & 962 & 2.92 \\times 10^{-4} \\\\ 
			100 & 9.40 & 958 & 2.82 \\times 10^{-4} \\\\ 
      \\end{array}
		`)}
    `,
  ],
  [
    "table",

    "Properties of Common Liquids",

    // formulae list
    `${kd(`
    \\textsf{(All Liquids at 25\\degree C and 101 kpa)} \\\\
    \\begin{array}{rcccc}
    \\\\
    & \\textsf{Specific} & \\textsf{Specific} &  & \\textsf{Dynamic }  \\\\
    \\textsf{Liquid} & \\textsf{Gravity} & \\textsf{Weight} & \\textsf{Density} & \\textsf{Viscosity} \\\\
    & &	 \\gamma & \\rho & \\eta \\\\
    & & \\mathsf{(kN/m^3)} & \\mathsf{(kg/m^3)} & \\mathsf{(Pa\\cdot s)} \\\\\\\\

    \\textsf{Acetone}           & 0.787 	& 7.72    & 787   & 3.16 \\times 10^{-4} \\\\    
    \\textsf{Alcohol, Ethyl} 		& 0.789 	& 7.74 		& 789		& 5.60 \\times 10^{-4} \\\\
    \\textsf{Alcohol, Propyl} 	& 0.802 	& 7.87 		& 802		& 1.92 \\times 10^{-3} \\\\
    \\textsf{Benzene} 				  & 0.876 	& 8.59 		& 876		& 6.03 \\times 10^{-4} \\\\
    \\textsf{Carbon Tetrachloride} & 1.590 & 15.60   & 1590	& 9.10 \\times 10^{-4} \\\\
    \\textsf{Castor Oil} 			  & 0.960 	& 9.42 		& 960		& 6.51 \\times 10^{-1} \\\\
    \\textsf{Ethylene Glycol}   & 1.100 	& 10.79 	& 1100	& 1.62 \\times 10^{-2} \\\\
    \\textsf{Gasoline} 				  & 0.68 		& 6.67 		& 680		& 2.87 \\times 10^{-4} \\\\
    \\textsf{Glycerine} 			  & 1.258 	& 12.34 	& 1258	& 9.60 \\times 10^{-1} \\\\
    \\textsf{Kerosene} 				  & 0.823 	& 8.07 		& 823		& 1.64 \\times 10^{-3} \\\\
    \\textsf{Linseed Oil} 		  & 0.930 	& 9.12 		& 930		& 3.31 \\times 10^{-2} \\\\
    \\textsf{Mercury} 				  & 13.54 	& 132.8 	& 13540	& 1.53 \\times 10^{-3} \\\\
    \\textsf{Propane} 				  & 0.495 	& 4.86 		& 495		& 1.10 \\times 10^{-4} \\\\
    \\textsf{Seawater} 				  & 1.030 	& 10.10 	& 1030	& 1.03 \\times 10^{-3} \\\\
    \\textsf{Turpentine} 			  & 0.870 	& 8.53 		& 870		& 1.37 \\times 10^{-3} \\\\
    \\textsf{Fuel Oil, medium}  & 0.852 	& 8.36 		& 852		& 2.99 \\times 10^{-3} \\\\
    \\textsf{Fuel Oil, heavy}   & 0.906 	& 8.89 		& 906		& 1.07 \\times 10^{-1} \\\\
    \\end{array}
		`)}`,
  ],

  "Nature of Fluids",

  // PROBLEM

  [
    "example",

    `A mass of ${ki(
      " 95.0\\,\\mathsf{kg} "
    )} is supported by a piston over oil in a circular cylinder with inside diameter of  ${ki(
      "d = 7.35\\, \\mathsf{cm} "
    )}. What is the oil pressure at the piston?`,

    // part solutions
    [
      [
        `${kd(`
			\\begin{aligned}
				P &= \\frac{F}{A} \\\\ 
				&= \\frac{95.0\\,\\textsf{kg} \\times 9.81\\,\\mathsf{m/s^2}}{(0.0735 \\,\\mathsf {m)^2}\\times\\pi/4} \\\\
				&= \\frac{931.95\\,\\textsf{N}}{ 0.0042429\\,\\mathsf{m^2}} \\\\
				&= 219650 \\,\\mathsf{Pa} \\\\ 
				&= 219.65 \\,\\mathsf{kPa} \\\\ 
				
			\\end{aligned}
		`)}`,
      ],
    ],

    // the answer
    `${kd(`
		  220 \\, \\textsf{kPa}
	`)}`,
  ],
  [
    "example",

    `A Boeing 737 jet's fuel has a density of ${ki(
      "810\\,\\mathsf{kg/m^3}"
    )}. The jet has a fuel capacity of ${ki(
      "26000\\, \\mathsf{L} "
    )}. What is the mass and the weight of this fuel when the plane is full?`,

    // part solutions
    [
      [
        `${kd(`
			\\begin{aligned}
				V &= 26000\\,\\textsf{L} \\\\ 
				&= 26.0\\,\\mathsf{m^3} \\\\\\\\ 
				m &= \\rho V \\\\
				&= 810\\,\\mathsf{kg/m^3}\\times 26.0\\,\\mathsf{m^3} \\\\
				&= 21060 \\,\\mathsf{kg} \\\\\\\\ 
				W &= mg  \\\\ 
				 &= 21060 \\,\\mathsf{kg}\\times 9.81\\,\\mathsf{m/s^2}  \\\\ 
				 &= 206600 \\,\\mathsf{N}  \\\\ 
				 &= 206.60 \\,\\mathsf{kN}  \\\\ 
				
			\\end{aligned}
		`)}`,
      ],
    ],

    // the answer
    `${kd(`
		  207 \\, \\textsf{kN}
	`)}`,
  ],
  [
    "example",

    `An oil tanker carries  ${ki(
      `1.500\\times 10^6`
    )} barrels of medium fuel oil at ${ki(
      `25\\degree\\!\\mathsf{C}`
    )} where ${ki(
      `1\\textsf{ barrel }= 159.0\\,\\textsf{L}`
    )}. Determine the weight of the oil.`,

    // part solutions
    [
      [
        `${kd(`
			\\begin{aligned}
				V &= 1.500\\times 10^6 \\textsf{ barrels }\\times 159.0\\,\\textsf{L/barrel} \\\\ 
				&= 238.50\\times 10^6 \\,\\mathsf{L} \\\\ 
				&= 238.50\\times 10^3 \\,\\mathsf{m^3} \\\\\\\\ 
				W &= \\gamma V \\\\
				&= 8.36\\,\\mathsf{kN/m^3}\\times 238.50\\times 10^3 \\,\\mathsf{m^3} \\\\
				&= 1993.9\\times 10^3 \\,\\mathsf{kN} \\\\
				&= 1993.9\\,\\mathsf{MN} \\\\
				&= 1.9939\\,\\mathsf{GN} \\\\
								
			\\end{aligned}
		`)}`,
      ],
    ],

    // the answer
    `${kd(`
		  1.994 \\, \\textsf{GN}
	`)}`,
  ],
  [
    "example",

    `An flat-bottomed cylindrical vessel, open at the top, contains   ${ki(
      `360\\,\\textsf{L}`
    )} of water at ${ki(
      `20\\degree\\!\\mathsf{C}`
    )}. At this temperature, the depth of water, ${ki(
      `h_{20}`
    )}, in the vessel is ${ki(`650\\,\\textsf{mm}`)}. 
    <div class="width85">
      <ol>
      <li>Determine the inside diameter of the vessel.</li>
      <li>The water is heated to ${ki(
        `55\\degree\\! C`
      )}. Determine the new depth, ${ki(`h_{55}`)}.</li>
      <li>The water is heated further, to ${ki(
        `90\\degree\\! C`
      )}. At the temperature of ${ki(
      `75\\degree\\! C`
    )}, water begins to flow over the open top of the vessel. Determine the height of the vessel.</li>
        <li>The water remaining in the vessel cools to ${ki(
          `25\\degree\\! C`
        )}. What is the height, ${ki(`h_{25}`)}, at this temperature?</li>
      </ol>
    </div>
    
    
    <p></p>(Assume that there is no evaporation and that the dimensions of the vessel remain constant throughout.)`,

    // part solutions
    [
      [
        `Find the diameter of the vessel.`,

        `${kd(`
            \\begin{aligned}
              V &= \\frac{\\pi d^2 h_{10}}{4} \\\\ 
              \\Rightarrow d &= \\sqrt{\\frac{4V}{\\pi h_{10}}} \\\\ 
              &= \\sqrt{\\frac{4(360/\\cancel{1000}\\,\\mathsf{m^3})}{\\pi (650/\\cancel{1000}\\,\\mathsf{m})}}  \\\\
              &= 0.83975\\,\\mathsf{m}  \\\\ 
              &= 839.75\\,\\mathsf{mm}  \\\\ 							
			      \\end{aligned}
		`)}`,

        `${ki(`839.75\\,\\mathsf{mm}`)}`,
      ],
      [
        `Determine the depth of the water at ${ki(`55\\degree\\! C.`)}`,

        `${kd(`
            \\begin{aligned}
              m &= \\rho_{20} V_{20} \\\\ 
              &= 998\\,\\mathsf{kg/m^3}\\cdot 360/1000\\,\\mathsf{m^3} \\\\ 
              &= 359.28\\,\\mathsf{kg} \\\\ \\\\
              V_{75} &= \\frac{m}{\\rho_{75}} \\\\
             	&= \\frac{359.28\\,\\mathsf{kg}}{986\\,\\mathsf{kg/m^3}} \\\\
             	&= 0.36438\\,\\mathsf{m^3} \\\\\\\\
              h_{55} &= \\frac{4V_{55}}{\\pi d^2} \\\\
              &= \\frac{4(0.36438\\,\\mathsf{m^3})}{\\pi(0.83975\\,\\mathsf{m})^2} \\\\
              &= 0.65791\\,\\mathsf{m} \\\\
              &= 657.91\\,\\mathsf{mm} \\\\
			      \\end{aligned}
		      `)}`,

        `${ki(`657.91\\,\\mathsf{mm}`)}`,
      ],
      [
        `Determine the height of the vessel.`,

        `${kd(`
            \\begin{aligned}
              V_{75} &= \\frac{m}{\\rho_{75}} \\\\
             	&= \\frac{359.28\\,\\mathsf{kg}}{975\\,\\mathsf{kg/m^3}} \\\\
             	&= 0.36849\\,\\mathsf{m^3} \\\\\\\\
              h_{75} &= \\frac{4V_{75}}{\\pi d^2} \\\\
              &= \\frac{4(0.36849\\,\\mathsf{m^3})}{\\pi(0.83975\\,\\mathsf{m})^2} \\\\
              &= 0.66533\\,\\mathsf{m} \\\\
              &= 665.33\\,\\mathsf{mm} \\\\
			      \\end{aligned}
		      `)}
          
            At ${ki(`75\\degree\\! C`)}, the height of the water is ${ki(
          `665.33\\,\\mathsf{mm}`
        )}. At this height, the water begins to overflow the top of the vessel so this is the       height of the vessel.
         `,

        `${ki(`665.33\\,\\mathsf{mm}`)}`,
      ],
      [
        `What is the height of the remaining water at ${ki(
          `25\\degree\\! C.`
        )}`,

        `Find the mass of the water in the vessel at ${ki(
          `90\\degree\\! C\\!:`
        )}
        ${kd(`
            \\begin{aligned}
              m' &=  \\frac{\\rho_{90}\\pi d^2 h_{\\textsf{vessel}}}{4} \\\\
              &=  \\frac{(965\\,\\mathsf{kg/m^3})\\pi (839.75/1000\\,\\mathsf{m})^2 (665.33/1000\\,\\mathsf{m})}{4} \\\\
             	&= 355.59\\,\\mathsf{kg}\\\\\\\\
              V_{25} &= \\frac{m'}{\\rho_{25}} \\\\
              &= \\frac{355.59\\,\\mathsf{kg}}{997\\,\\mathsf{kg/m^3}} \\\\
              &= 0.35666\\,\\mathsf{m^3} \\\\\\\\
              h_{25} &= \\frac{4V_{25}}{\\pi d^2} \\\\
              &= \\frac{4(0.35666\\,\\mathsf{m^3})}{\\pi (0.83975\\,\\mathsf{m})^2} \\\\
              &= 0.64397\\,\\mathsf{m} \\\\
              &= 643.97\\,\\mathsf{mm} \\\\
			      \\end{aligned}
		      `)} `,

        `${ki(`643.97\\,\\mathsf{mm}`)}`,
      ],
    ],

    // the answer
    `<div class="centered-list">
        <ol>
          <li>${ki(`d=840\\,\\mathsf{mm}`)}</li>
          <li>${ki(`h_{55}=658\\,\\mathsf{mm}`)}</li>
          <li>${ki(`h_{\\mathsf{vessel}}=665\\,\\mathsf{mm}`)}</li>
          <li>${ki(`h_{\\mathsf{25}}=644\\,\\mathsf{mm}`)}</li>
        </ol>
    </div>`,
  ],

  "Pressure Measurement",

  [
    "example",

    `A rectangular flume is built out of wood ${ki(
      "{(n=0.012)}"
    )} and has a base width of ${ki("1.250\\,\\mathsf{m}")}. 
        The flume has a longitudinal slope of ${ki(
          "0.14\\%"
        )} and a flow depth of ${ki("950\\,\\mathsf{mm}")}. 
        Determine ${ki("Q")}, the discharge, and the slope ${ki(
      "S_c"
    )} at which this flow becomes critical.
        What is the critical depth ${ki("y_c")} and the critical velocity ${ki(
      "v_c"
    )} for this ${ki("Q")}?`,

    [
      [
        `Use ${ki("A")} and ${ki("R")} to find ${ki("Q")}.`,
        `${kd(`
			\\begin{aligned}
				A &= b \\cdot y \\\\
				&=1.250\\,\\mathsf{m} \\times 0.900\\,\\mathsf{m} \\\\
				&= 1.1250 \\,\\mathsf{m} \\\\\\\\
				P &= b+2y \\\\
				&= 1.250\\,\\mathsf{m} + 2(0.900\\,\\mathsf{m}) \\\\
				&= 3.0500\\,\\mathsf{m} \\\\\\\\
				R &= A/P \\\\
				&= \\frac{1.1250 \\,\\mathsf{m}}{3.0500 \\, \\mathsf{m}} \\\\
				&= 0.36885\\,\\mathsf{m} \\\\\\\\
				Q &= \\frac 1n AR^{2/3} S^{1/2} \\\\
				&= \\frac 1{0.012} (1.1250)(0.36885)^{2/3} (0.0014)^{1/2} \\\\ 
				&= 1.8041\\,\\mathsf{m^3\\!/s} 
			\\end{aligned}
		`)}`,

        `${kd(`
			Q=1.8041\\,\\mathsf{m^3/s} 
		`)}`,
      ],

      [
        `Solve for ${ki("y_c")}.`,

        `Under critical conditions, ${ki(`N_F=1`)}:
				
		${kd(`
			\\begin{aligned}
				N_F &= \\frac v{\\sqrt{g(A/T)}}=1 \\\\
				\\Rightarrow v_c &= \\sqrt{g(A_c/T_c)} \\\\\\\\ 
				\\Rightarrow \\left(\\frac Q{A_c}\\right)^2 &= g(A_c/T_c) \\\\
				\\Rightarrow \\frac{Q^2}g &= \\frac{A_c^3}{T_c} \\\\
				&= \\frac{\\left(b\\cdot y_c\\right)^3}{b} \\\\
				&= b^2 y_c^3 \\\\
				\\Rightarrow y_c &= \\left(\\frac{Q^2}{b^2g}\\right)^{1/3} \\\\
				&= \\left(\\frac{(1.8041)^2}{(1.250)^2(9.81)}\\right)^{1/3} \\\\
				&=0.59659\\,\\mathsf{m}
			\\end{aligned}
		`)}`,

        `${kd(`
			y_c=0.59659 \\,\\mathsf{m}
		`)} `,
      ],
      [
        `Calculate ${ki("v_c")}.`,

        `${kd(`
			\\begin{aligned}
				v_c &= \\frac{Q}{A_c} \\\\
				&= \\frac{Q}{b\\cdot y_c} \\\\
				&= \\frac{(1.8041\\,\\mathsf{m^3/s})}{(1.250\\,\\mathsf{m})\\cdot (0.59659 \\,\\mathsf{m})} \\\\
				&= 2.4192 \\,\\mathsf{m/s}
			\\end{aligned}
		`)}`,

        `${kd(`
			v_c = 2.4192 \\,\\mathsf{m/s} 
		`)} `,
      ],
      [
        `Determine the slope ${ki(
          "S_c"
        )} that generates these critical conditions.`,
        `${kd(`
			\\begin{aligned}
				v_c &= \\frac 1n R_c^{2/3} S_c^{1/2} \\\\
				&= \\frac 1n \\left(\\frac{A_c}{P_c}\\right)^{2/3}\\!\\! S_c^{1/2} \\\\ 
				&= \\frac 1n \\left(\\frac{by_c}{b+2y_c}\\right)^{2/3}S_c^{1/2} \\\\
				\\Rightarrow S_c &= \\left(nv_c \\left( \\frac{b+2y_c}{by_c}\\right)^{2/3} \\right)^2 \\\\
				&= \\left(0.012\\cdot 2.4192 \\left( \\frac{1.250+2\\cdot 0.59659}{1.250\\cdot 0.59659}\\right)^{2/3}\\right)^2 \\\\
				&= 0.0041008 \\\\ 
				&=0.41008\\%
			\\end{aligned}
		`)}`,

        `${kd(`
			S_c =0.41008\\%
		`)}`,
      ],
    ],
    // the answer
    `${kd(`
			Q=1.804\\,\\mathsf{m^3/s},\\; S_c=0.410\\%,\\; y_c=0.597 \\,\\mathsf{m},\\; v_c= 2.42\\,\\mathsf{m/s}
	`)}`,
  ],

  [
    "example",

    // problem statement
    `For discharge ${ki(
      "Q"
    )} in a rectangular channel, the velocity of flow under critical conditions is ${ki(
      "1.900\\,\\mathsf{m/s}"
    )}. If the channel is ${ki("4.50\\,\\mathsf{m}")} in width, determine ${ki(
      "Q"
    )}.`,

    // solution parts
    [
      // part 1
      [
        `Determine the critical depth, ${ki("y_c")}`,

        `Under critical conditions,
		${kd(`\\begin{aligned}
			v_c &= \\sqrt{g(A_c/T_c)} \\\\
			\\Rightarrow v_c^2 &= g\\cdot\\frac{by_c}{b} \\\\
			\\Rightarrow (1.900)^2 &= 9.81 y_c \\\\
			\\Rightarrow y_c &= \\frac{(1.900)^2}{9.81} \\\\
			&= 0.36799\\,\\mathsf{m}
		\\end{aligned}`)}`,

        `${ki(`y_c = 0.36799\\,\\mathsf{m} `)}`,
      ],

      //part 2
      [
        `Determine ${ki("Q")}`,

        `${kd(`\\begin{aligned}
			Q &= A_c\\cdot v_c \\\\
			&= \\left(4.50\\cdot y_c \\right)\\cdot v_c \\\\
			&= 4.50\\cdot 0.36799 \\cdot 1.900 \\\\
			&= 3.1463\\,\\mathsf{m^3\\!/s} 
		\\end{aligned}`)}`,

        `${kd(` Q= 3.1463\\,\\mathsf{m^3\\!/s} `)}`,
      ],
    ],

    //the answer
    `${kd(` Q= 3.15\\,\\mathsf{m^3\\!/s}`)}`,
  ],

  // ----------------------------------------------------------------------------------------------------------------
  "Triangular Channel",
  // ----------------------------------------------------------------------------------------------------------------

  [
    "example",

    // problem statement
    `A triangular flume, built from unplaned wood ${ki(
      "(n=0.013)"
    )}, has a design flow of ${ki(
      "3.25\\,\\mathsf{m^3\\!\\!/s}"
    )}. The sidewalls of the flume are inclined at ${ki(
      "45^{\\circ}"
    )} to the horizontal (i.e., ${ki(
      "z=1"
    )}). If the slope of the flume is ${ki(
      "S=0.001"
    )}, determine the depth ${ki("y")} of normal flow. Classify this flow. 
    <div class="width70"><img src="/images/triangularGuidedPractice1.png" /></div><div class="clear" />`,

    // solution parts
    [
      [
        `Determine ${ki("A")} and ${ki("R")} in terms of the depth ${ki("y")}.`,

        `${kd(`
			\\begin{aligned}
				A &= \\frac{2y\\cdot y}{2} \\\\
				&= y^2 \\\\\\\\
				P &= 2\\sqrt{y^2+y^2} \\\\
				&= 2\\sqrt{2y^2} \\\\
				&= 2\\sqrt{2}\\cdot y \\\\\\\\
				R &= A/P \\\\
				&= \\frac{y^2}{2\\sqrt{2}\\cdot y} \\\\
				&= \\frac{y}{2\\sqrt{2}} \\\\
			\\end{aligned}`)}`,

        `${kd(` A=y^2,\\quad R=\\frac{y}{2\\sqrt{2}}`)}`,
      ],

      [
        `Use Manning's Equation to solve for ${ki("y")}.`,

        `${kd(`
			\\begin{aligned}
				Q &= \\frac 1n AR^{2/3}S^{1/2} \\\\
				\\Rightarrow 3.25 &= \\frac 1{0.013}\\left(y^2\\right)\\left(\\frac{y}{2\\sqrt{2}}\\right)^{2/3}\\!\\!\\left(0.001\\right)^{1/2} \\\\
				\\Rightarrow y^{8/3} &= \\frac{3.25\\cdot 0.013\\cdot \\left(2\\sqrt{2}\\right)^{2/3}}{(0.001)^{1/2}} \\\\
				\\Rightarrow y &= \\left(2.6721\\right)^{3/8} \\\\
				&= 1.4457\\,\\mathsf{m}                
			\\end{aligned}`)}`,

        `${kd(`y = 1.4457\\,\\mathsf{m}`)}}  `,
      ],

      [
        `Determine the Froude number to determine the flow type.`,

        `${kd(`
			\\begin{aligned}
				A &= y^2 \\\\
				&= \\left(1.4457\\right)^2 \\\\
				&= 2.0900\\,\\mathsf{m^2} \\\\\\\\
				v &= Q/A \\\\
				&= \\frac{3.25}{2.0900} \\\\
				&= 1.5550\\,\\mathsf{m/s} \\\\\\\\
				T &= 2y \\\\
				&= 2.8914\\,\\mathsf{m} \\\\\\\\
				N_F &= \\frac{v}{\\sqrt{g(A/T)}} \\\\
				N_F &= \\frac{1.5550}{\\sqrt{9.81(2.0900/2.8914)}} \\\\
				&= 0.58395 \\\\
				&< 1\\quad(\\textsf{Flow is sub-critical})
			\\end{aligned}`)}`,

        `${kd(`\\textsf{Flow is sub-critical}`)}`,
      ],
    ],
    // the big answer
    `${kd(`y = 1.446\\,\\mathsf{m}, \\quad\\textsf{Flow is sub-critical}`)}`,
  ],

  "Trapezoidal Section",

  [
    // type: worked example or proof
    "example",

    // main problem statement
    `A portion of the Colorado River Aquaduct conveys ${ki(
      "45.3\\,\\mathsf{m^3\\!/s}"
    )} at a depth of ${ki("3.10\\,\\mathsf{m}")} in a concrete (${ki(
      "n=0.014"
    )}) trapezoidal channel, as shown. Determine the channel slope for this flow. <br/><div class="width90"><img src="/images/trapezoidalGuidedPractice3.png" /></div><div class="clear" />`,

    // solution parts
    [
      // part 1
      [
        `Determine ${ki("A")} and ${ki("R")} in terms of the depth ${ki("y")}.`,

        `${kd(`
			\\begin{aligned}
				A &= \\frac{2y\\cdot y}{2} \\\\
				&= y^2 \\\\\\\\
				P &= 2\\sqrt{y^2+y^2} \\\\
				&= 2\\sqrt{2y^2} \\\\
				&= 2\\sqrt{2}\\cdot y \\\\\\\\
				R &= A/P \\\\
				&= \\frac{y^2}{2\\sqrt{2}\\cdot y} \\\\
				&= \\frac{y}{2\\sqrt{2}} \\\\
			\\end{aligned}`)}`,

        `${kd(`A=y^2,\\quad R=\\frac{y}{2\\sqrt{2}}`)}`,
      ],

      //part 2
      [
        `Use Manning's Equation to solve for ${ki("y")}.`,

        `${kd(`
			\\begin{aligned}
				Q &= \\frac 1n AR^{2/3}S^{1/2} \\\\
				\\Rightarrow 3.25 &= \\frac 1{0.013}\\left(y^2\\right)\\left(\\frac{y}{2\\sqrt{2}}\\right)^{2/3}\\!\\!\\left(0.001\\right)^{1/2} \\\\
				\\Rightarrow y^{8/3} &= \\frac{3.25\\cdot 0.013\\cdot \\left(2\\sqrt{2}\\right)^{2/3}}{(0.001)^{1/2}} \\\\
				\\Rightarrow y &= \\left(2.6721\\right)^{3/8} \\\\
				&= 1.4457\\,\\mathsf{m}                
			\\end{aligned}`)}`,

        `${kd(`y = 1.4457\\,\\mathsf{m}`)}`,
      ],

      [
        `Determine the average flow velocity, ${ki(`v`)}.`,

        `${kd(`
			\\begin{aligned}
				A &= by + zy^2 \\\\
				&= 6.10(3.10)+1.5(3.10)^2 \\\\
				&= 33.325\\,\\mathsf{m^2} \\\\\\\\
				v &= Q/A \\\\
				&= \\frac{45.3}{33.325} \\\\
				&= 1.3593\\,\\mathsf{m/s}
		  \\end{aligned}
		`)}`,

        `${kd(`v=1.3593\\,\\mathsf{m/s}`)}`,
      ],

      [
        `Determine the hydraulic radius, ${ki("R")}.`,

        `${kd(`
			\\begin{aligned}
				P &= b + 2y\\sqrt{1+z^2} \\\\
				&= 6.10 + 2(3.10)\\sqrt{1+1.5^2} \\\\
				&= 17.277 \\,\\mathsf{m} \\\\\\\\
				R &= A/P \\\\
				&= \\frac{33.325}{17.277} \\\\
				&= 1.9289 \\,\\mathsf{m}
			\\end{aligned}`)}`,

        `${kd(`R=1.9289\\,\\mathsf{m}`)}`,
      ],

      [
        `Determine the required slope, ${ki("S")}`,

        `${kd(`
			\\begin{aligned}
				v &= \\frac 1n R^{2/3}S^{1/2}\\\\
				S &= \\left[\\frac {nv}{R^{2/3}} \\right]^2\\\\
				&= \\left[\\frac {(0.014)(1.3593)}{(1.9289)^{2/3}} \\right]^2\\\\
				&= 0.00015083
		  	\\end{aligned}`)}`,

        `${kd(`S=0.00015083 `)}`,
      ],
    ],

    //the big answer
    `${kd(`S=0.00015083`)}`,
  ],

  [
    "example",

    `A concrete-lined trapezoidal channel has a bed width of ${ki(
      "6.00\\,\\mathsf{m}"
    )} and side slopes of ${ki("z=0.5")}, a longitudinal slope of ${ki(
      "1"
    )} in ${ki("850")} and a Manning's coefficient of ${ki(
      "n=0.014"
    )}. Calculate the discharge and average flow velocity for normal flow with a depth of ${ki(
      "2.30\\,\\mathsf{m}"
    )}. Classify this flow.<br/> <div class="width70"><img src="/images/trapezoidalGuidedPractice2.png" /></div><div class="clear" />`,

    [
      [
        `Determine ${ki("A")} and ${ki("R")}.`,

        `${kd(`
			\\begin{aligned}
				A &= by + zy^2 \\\\
				&= 6.00(2.30)+0.5(2.30)^2 \\\\
				&= 16.445\\,\\mathsf{m^2} \\\\\\\\
				P &= b + 2y\\sqrt{1+z^2} \\\\
				&= 6.00 + 2(2.30)\\sqrt{1+0.5^2} \\\\
				&= 11.143 \\,\\mathsf{m} \\\\\\\\
				R &= A/P \\\\
				&= \\frac{16.445}{11.143} \\\\
				&= 1.4758 \\,\\mathsf{m}
			\\end{aligned}`)}`,

        `${kd(`A=16.445\\,\\mathsf{m^2}, R=1.4758 \\,\\mathsf{m}`)}`,
      ],

      [
        `Determine ${ki("Q")} and ${ki("v")}.`,

        `${kd(`
			\\begin{aligned}
				v &= \\frac 1n R^{2/3}S^{1/2}\\\\
				&= \\frac 1{0.014} (1.4758)^{2/3} (1/850)^{1/2}\\\\
				&= 3.1758\\,\\mathsf{m/s}\\\\\\\\
				Q &= Av\\\\
				&= 16.445\\cdot 3.1758\\\\
				&= 52.226\\,\\mathsf{m^3/s}
			\\end{aligned}`)}`,

        `${kd(`Q=52.226\\,\\mathsf{m^3/s}, v=3.1758\\,\\mathsf{m/s}`)}`,
      ],

      [
        `Classify the flow.`,

        `${kd(`
			\\begin{aligned}
				T &= 6.00 + 2(0.5)(2.30)\\\\
				&= 8.3000\\,\\mathsf{m}\\\\\\\\
				N_F &= \\frac{v}{\\sqrt{g(A/T)}}\\\\
				&= \\frac{3.1758}{\\sqrt{9.81(16.445/8.30)}}\\\\
				&= 0.72035\\\\
				&< 1
			\\end{aligned}`)}`,

        `${kd(`\\textsf{Flow is sub-critical.}`)}`,
      ],
    ],

    `${kd(
      `Q=52.2\\,\\mathsf{m^3/s}, v=3.18\\,\\mathsf{m/s}, \\textsf{flow is sub-critical.}`
    )}`,
  ],

  [
    "example",

    `A rough-formed concrete-lined trapezoidal channel ${ki("(n=0.015)")}
	has a bed width of ${ki("3.50\\,\\mathsf{m}")} and side slopes of ${ki(
      "3H\\!\\!:\\!\\!2V"
    )} (i.e., three horizontal units for each two vertical units, or ${ki(
      `z=1.5`
    )}). The bed slope is ${ki("S=0.05\\%")}. Determine the depth ${ki(`y`)}
	 when the discharge is ${ki(" Q=32.0\\,\\mathsf{m^3/s}")}. <br/><br/>
	 <div class="width85"><img src="/images/trapezoidalGuidedPractice1.png" /></div><div class="clear" />
	 `,

    [
      [
        `Use Manning's Equation to develop an expression for ${ki(
          "Q"
        )} as a function of ${ki("y")}.`,

        `${kd(`
			\\begin{aligned}
				A &= by + zy^2 \\\\
				&= 3.50y+1.5y^2 \\\\\\\\
				P &= b + 2y\\sqrt{1+z^2} \\\\
				&= 3.50 + 2y\\sqrt{1+1.5^2} \\\\
				&= 3.50 + 3.6056y \\\\\\\\
				Q &= \\frac 1n AR^{2/3} S^{1/2} \\\\
				&= \\frac 1n A(A/P)^{2/3} S^{1/2} \\\\
				&= \\frac 1n \\cdot \\frac{A^{5/3}}{P^{2/3}} \\cdot S^{1/2} \\\\
				&= \\frac 1{0.015} \\cdot \\frac{\\left( 3.50y+1.5y^2\\right)^{5/3}}{\\left(3.50+3.6056y\\right)^{2/3}} \\cdot (0.0005)^{1/2} \\\\
				Q &=  1.4907 \\cdot \\frac{\\left( 3.50y+1.5y^2\\right)^{5/3}}{\\left(3.50+3.6056y\\right)^{2/3}}  \\\\
			\\end{aligned}`)}`,

        `${kd(
          `Q = 1.4907 \\cdot \\frac{\\left( 3.50y+1.5y^2\\right)^{5/3}}{\\left(3.50+3.6056y\\right)^{2/3}}`
        )}`,
      ],

      [
        `Find ${ki("y")} that yields a discharge of ${ki(
          "Q=32.0\\,\\mathsf{m^3/s}"
        )}`,

        `We are looking for ${ki("y")} that satisfies:
		${kd(
      `32.0 = 1.4907 \\cdot \\frac{\\left( 3.50y+1.5y^2\\right)^{5/3}}{\\left(3.50+3.6056y\\right)^{2/3}}`
    )}
	This expression cannot be solved analytically for ${ki(
    "y"
  )}. Classically, this problem would be solved using 'trial-and-error', evaluating the right hand side of the expression for different values of ${ki(
          "y"
        )} until the corresponding discharge of ${ki(
          "Q=32.0\\,\\mathsf{m^3\\!/s}"
        )} is found. Trial-and-error remains a valid approach (but is time-consuming when precision is required).<br/><br/>
		Starting with an arbitrary initial 'guess' of ${ki("y=1.000\\,\\mathsf{m}")}:
          ${kd(`
              \\begin{aligned}
                  y=1.000\\,\\mathsf{m} & \\Rightarrow Q=5.8967\\,\\mathsf{m^3\\!/s} \\qquad \\text{ ($Q$ < 32.0, try larger $y$)} \\\\
                  y=2.00\\,\\mathsf{m} & \\Rightarrow Q=22.050\\,\\mathsf{m^3\\!/s} \\qquad \\text{ ($Q$ < 32.0, try larger $y$)} \\\\
                  y=3.00\\,\\mathsf{m} & \\Rightarrow Q=50.487\\,\\mathsf{m^3\\!/s} \\qquad \\text{ ($Q$ > 32.0, try smaller $y$)} \\\\
                  y=2.50\\,\\mathsf{m} & \\Rightarrow Q=34.588\\,\\mathsf{m^3\\!/s} \\qquad \\text{ ($Q$ > 32.0, try smaller $y$)} \\\\
                  y=2.25\\,\\mathsf{m} & \\Rightarrow Q=27.917\\,\\mathsf{m^3\\!/s} \\qquad \\text{ ($Q$ < 32.0, try larger $y$)} \\\\
                  y=2.375\\,\\mathsf{m} & \\Rightarrow Q=31.149\\,\\mathsf{m^3\\!/s} \\qquad \\text{ ($Q$ < 32.0, try larger $y$)} \\\\
                  y=2.4375\\,\\mathsf{m} & \\Rightarrow Q=32.843\\,\\mathsf{m^3\\!/s} \\qquad \\text{ ($Q$ > 32.0, try smaller $y$)} \\\\
                  y=2.40625\\,\\mathsf{m} & \\Rightarrow Q=31.990\\,\\mathsf{m^3\\!/s} \\qquad \\text{ ($Q \\approx 32.0$, DONE!)}
              \\end{aligned}`)}
              
              This is painfully labour intensive. The calculations can be made easier using a spreadsheet but, if you have access to a spreadsheet, the spreadsheet's Goal Seek function will get you to the required value for ${ki(
                "y"
              )} much more readily.<br/><br/>
              Fortunately, many inexpensive scientific calculators include a numeric solver which is the most convenient way to solve the expression for ${ki(
                "y"
              )}.
              ${kd(`y=2.4063\\,\\mathsf{m}`)}`,

        `${kd(`y=2.4063\\,\\mathsf{m}`)}`,
      ],
    ],

    `${kd(`y=2.41\\,\\mathsf{m}`)}`,
  ],

  // ----------------------------------------------------------------------------------------------------------------
  "Circular Section",
  // ----------------------------------------------------------------------------------------------------------------

  [
    "example",

    `A circular storm water pipe, ${ki(
      "1.500\\,\\mathsf{m}"
    )} in diameter, is laid on a slope of ${ki(
      "1\\!:\\!500"
    )}. The pipe is high density polyethyline (HDPE) with design value ${ki(
      "n=0.013"
    )}. Determine the pipe discharge and average flow velocity for each of the following flow depths, entering results into a table for easier comparison:
    ${kd(`
    \\footnotesize
      \\begin{array}{|c|c|c|c|}
      \\hline 
      \\textsf{Depth}, y & \\textsf{Velocity}, v & \\textsf{Discharge}, Q & \\qquad \\qquad \\textsf{Comments} \\qquad \\qquad  \\\\ 
      \\hline 
      0.600\\,\\textsf{m} & & &   \\\\ 
      \\hline 0.750\\,\\textsf{m} & & &   \\textsf{Pipe flowing half full} \\\\ 
      \\hline 
      1.219\\,\\textsf{m} & & &   \\textsf{Max velocity at $y\\approx 0.8D$}\\\\ 
      \\hline 
      1.230\\,\\textsf{m} & & &   \\\\ 
      \\hline 
      1.407\\,\\textsf{m} & & &   \\textsf{Max discharge at $y=0.938D$}\\\\ 
      \\hline 1.500\\,\\textsf{m} & & &   \\textsf{Pipe flowing  full} \\\\ 
      \\hline 
      \\end{array}`)}`,

    [
      [
        `${ki("y=0.600\\,\\mathsf{m}")} (Pipe less than half full.)`,

        `<div style="width: 130%; margin: -2em 15% 0 -15%;"><img src="/images/circularGuidedPractice1UnderHalf.png" /><div class="clear" /></div>
        ${kd(`
          \\begin{aligned}
              \\alpha &= \\cos^{-1}\\frac{OA}{OB} = \\cos^{-1}\\frac{0.1500}{0.750} = 78.463^{\\circ} \\\\
              \\theta &= 2\\alpha = 156.93^{\\circ} = 2.7389\\,\\mathsf{rad}\\\\\\\\
              A &= \\frac{(\\theta-\\sin\\theta)D^2}{8}\\\\
              &=  \\frac{(2.7389-\\sin 156.93^{\\circ})(1.500)^2}{8}\\\\
              &= 0.66011\\,\\mathsf{m^2}\\\\\\\\
              R &= \\frac {(\\theta - \\sin\\theta)D}{4\\theta}\\\\
              &= \\frac{(2.7389-\\sin 156.93^{\\circ})(1.500)}{4\\cdot 2.7389}\\\\
              &= 0.32135\\,\\mathsf{m}\\\\\\\\
              v &= \\frac 1n R^{2/3}S^{1/2}\\\\
              &= \\frac 1{0.013} (0.32135)^{2/3} (0.002)^{1/2}\\\\
              &= 1.6140\\,\\mathsf{m/s}\\\\\\\\
              Q &= Av\\\\
              &= 0.66011\\cdot 1.6140\\\\
              &= 1.0654\\,\\mathsf{m^3/s}
          \\end{aligned}`)}
        `,
      ],
      [
        `${ki("y=0.750\\,\\mathsf{m}")} (Pipe half full.)`,

        `<div style="width: 120%; margin: -2em 10% 0 -10%;"><img src="/images/circularGuidedPractice1Half.png" /></div><div class="clear" />
        ${kd(`
          \\begin{aligned}
              A &= \\frac{\\pi D^2}{8} = \\frac{\\pi (1.500)^2}{8}\\\\
              &= 0.88357\\,\\mathsf{m^2}\\\\\\\\
              P &= \\frac{\\pi D}{2} = \\frac{\\pi(1.500)}{2}\\\\
              &= 2.3562\\,\\mathsf{m}\\\\\\\\
              R &= A/P = \\frac{0.88357}{2.3562}\\\\
              &= 0.37500\\,\\mathsf{m}\\\\\\\\
              v &= \\frac 1n R^{2/3}S^{1/2}\\\\
              &= \\frac 1{0.013} (0.37500)^{2/3} (0.002)^{1/2}\\\\
              &= 1.7889\\,\\mathsf{m/s}\\\\\\\\
              Q &= Av\\\\
              &= 0.88357\\cdot 1.7789\\\\
              &= 1.5806\\,\\mathsf{m^3/s}
          \\end{aligned}`)}`,
      ],
      [
        `${ki(
          "y=1.219\\,\\mathsf{m}"
        )} (Pipe has maximum velocity at just over 80% depth.)`,

        `<div style="width: 120%; margin: -2em 10% 0 -10%;"><img src="/images/circularGuidedPractice1OverHalf.png" /></div><div class="clear" />
        ${kd(`
            \\begin{aligned}
                \\alpha &= \\cos^{-1}\\frac{OA}{OB} = \\cos^{-1}\\frac{0.46900}{0.75000} = 51.293^{\\circ} \\\\\\\\
                \\theta &= 360^\\circ-2\\alpha = 360^\\circ- 102.59^{\\circ} = 257.41^\\circ \\\\ &= 257.41^\\circ\\cdot\\frac{\\pi}{180^\\circ} = 4.4927\\,\\mathsf{rad}\\\\\\\\
                A &= \\frac{(\\theta-\\sin\\theta)D^2}{8}\\\\
                &=  \\frac{(4.4927-\\sin 257.41^\\circ)(1.500)^2}{8}\\\\
                &= 1.5381\\,\\mathsf{m^2}\\\\\\\\
                R &= \\frac {(\\theta - \\sin\\theta)D}{4\\theta}\\\\
                &= \\frac{(4.4927-\\sin 257.41^\\circ)(1.500)}{4\\cdot 4.4927}\\\\
                &= 0.45646\\,\\mathsf{m}\\\\\\\\
                v &= \\frac 1n R^{2/3}S^{1/2}\\\\
                &= \\frac 1{0.013} (0.45646)^{2/3} (0.002)^{1/2}\\\\
                &= 2.0394\\,\\mathsf{m/s}\\\\\\\\
                Q &= Av\\\\
                &= 1.5381\\cdot 2.0394\\\\
                &= 3.1368\\,\\mathsf{m^3/s}
            \\end{aligned}`)}`,
      ],
      [
        `${ki(
          "y=1.230\\,\\mathsf{m}"
        )} (Pipe has same discharge as when full at 82% depth.)`,
        `<div style="width: 120%; margin: -2em 10% 0 -10%;"><img src="/images/circularGuidedPractice1OverHalfPlus.png" /></div><div class="clear" />
        ${kd(`
            \\begin{aligned}
                \\alpha &= \\cos^{-1}\\frac{OA}{OB} = \\cos^{-1}\\frac{0.48000}{0.75000} = 50.208^{\\circ} \\\\\\\\
                \\theta &= 360^\\circ-2\\alpha = 360^\\circ- 100.42^{\\circ} = 259.58^\\circ \\\\ &= 259.58^\\circ\\cdot\\frac{\\pi}{180^\\circ} = 4.5305\\,\\mathsf{rad}\\\\\\\\
                A &= \\frac{(\\theta-\\sin\\theta)D^2}{8}\\\\
                &=  \\frac{(4.5305-\\sin 259.58^\\circ)(1.500)^2}{8}\\\\
                &= 1.5508\\,\\mathsf{m^2}\\\\\\\\
                R &= \\frac {(\\theta - \\sin\\theta)D}{4\\theta}\\\\
                &= \\frac{(4.5305-\\sin 259.58^\\circ)(1.500)}{4\\cdot 4.5305}\\\\
                &= 0.45641\\,\\mathsf{m}\\\\\\\\
                v &= \\frac 1n R^{2/3}S^{1/2}\\\\
                &= \\frac 1{0.013} (0.45641)^{2/3} (0.002)^{1/2}\\\\
                &= 2.0393\\,\\mathsf{m/s}\\\\\\\\
                Q &= Av\\\\
                &= 1.5508\\cdot 2.0393\\\\
                &= 3.1625\\,\\mathsf{m^3/s}
            \\end{aligned}`)}`,
      ],
      [
        `${ki(
          "y=1.407\\,\\mathsf{m}"
        )} (Pipe has maximum discharge at 93.8% depth.)`,

        `<div style="width: 120%; margin: -2em 10% 0 -10%;"><img src="/images/circularGuidedPractice1MaxQ.png" /></div><div class="clear" />
        ${kd(`
            \\begin{aligned}
                \\alpha &= \\cos^{-1}\\frac{OA}{OB} = \\cos^{-1}\\frac{0.65700}{0.75000} = 28.836^{\\circ} \\\\\\\\
                \\theta &= 360^\\circ-2\\alpha = 360^\\circ- 57.673^{\\circ} = 302.33^\\circ \\\\ &= 302.33^\\circ\\cdot\\frac{\\pi}{180^\\circ} = 5.2767\\,\\mathsf{rad}\\\\\\\\
                A &= \\frac{(\\theta-\\sin\\theta)D^2}{8}\\\\
                &=  \\frac{(5.2767-\\sin 302.33^\\circ)(1.500)^2}{8}\\\\
                &= 1.7217\\,\\mathsf{m^2}\\\\\\\\
                R &= \\frac {(\\theta - \\sin\\theta)D}{4\\theta}\\\\
                &= \\frac{(5.2767-\\sin 302.33^\\circ)(1.500)}{4\\cdot 5.2767}\\\\
                &= 0.43505\\,\\mathsf{m}\\\\\\\\
                v &= \\frac 1n R^{2/3}S^{1/2}\\\\
                &= \\frac 1{0.013} (0.43505)^{2/3} (0.002)^{1/2}\\\\
                &= 1.9751\\,\\mathsf{m/s}\\\\\\\\
                Q &= Av\\\\
                &= 1.7217\\cdot 1.9751\\\\
                &= 3.4005\\,\\mathsf{m^3/s}
            \\end{aligned}`)}`,
      ],
      [
        `${ki("y=1.500\\,\\mathsf{m}")} (Pipe is full.)`,

        `<div style="width: 120%; margin: -2em 10% 0 -10%;"><img src="/images/circularGuidedPractice1Full.png" /></div><div class="clear" />
        ${kd(`
            \\begin{aligned}
                A &= \\frac{\\pi D^2}{4} = \\frac{\\pi (1.500)^2}{4}\\\\
                &= 1.7671\\,\\mathsf{m^2}\\\\
                P &= \\pi D = \\pi(1.500)\\\\
                &= 4.7124\\,\\mathsf{m}\\\\
                R &= A/P = \\frac{1.7671}{4.7124}\\\\
                &= 0.37500\\,\\mathsf{m}\\\\\\\\
                v &= \\frac 1n R^{2/3}S^{1/2}\\\\
                &= \\frac 1{0.013} (0.37500)^{2/3} (0.002)^{1/2}\\\\
                &= 1.7889\\,\\mathsf{m/s}\\\\\\\\
                Q &= Av\\\\
                &= 1.7671\\cdot 1.7889\\\\
                &= 3.1612\\,\\mathsf{m^3/s}
            \\end{aligned}
        `)}`,
      ],
    ],

    `${kd(`
        \\footnotesize
        \\color{black}
            {\\begin{array}{|c|c|c|c|}
                \\hline
                \\textsf{Depth}, y & \\textsf{Velocity}, v & \\textsf{Discharge}, Q & \\qquad \\qquad \\textsf{Comments} \\qquad \\qquad  \\\\ 
                \\hline
                0.600\\,\\textsf{m} & \\textcolor{#008080}{1.614\\,\\mathsf{m/s}} & \\textcolor{#008080}{1.065\\,\\mathsf{m^3\\!/s}}&   \\\\ 
                \\hline
                0.750\\,\\textsf{m} & \\textcolor{#008080}{1.789\\,\\mathsf{m/s}} & \\textcolor{#008080}{1.581\\,\\mathsf{m^3\\!/s}} &   \\textsf{Pipe flowing half full} \\\\ 
                \\hline
                1.219\\,\\textsf{m} &  \\textcolor{#008080}{2.04 {\\scriptsize(2.0394)}\\,\\mathsf{m/s}} & \\textcolor{#008080}{3.14\\,\\mathsf{m^3\\!/s}} &   \\textsf{Max velocity at $y\\approx 0.8D$}\\\\ 
                \\hline
                1.230\\,\\textsf{m} &  \\textcolor{#008080}{2.04 {\\scriptsize(2.0393)}\\,\\mathsf{m/s}}  & \\textcolor{#008080}{3.16\\,\\mathsf{m^3\\!/s}} & \\textcolor{#008080}{\\textsf{Same discharge as flowing full}}  \\\\ 
                \\hline
                1.407\\,\\textsf{m} & \\textcolor{#008080}{1.975\\,\\mathsf{m/s}} & \\textcolor{#008080}{3.40\\,\\mathsf{m^3\\!/s}} & \\textsf{Max discharge at $y=0.938D$}  \\\\ 
                \\hline
                1.500\\,\\textsf{m} & \\textcolor{#008080}{1.789\\,\\mathsf{m/s}} & \\textcolor{#008080}{3.16\\,\\mathsf{m^3\\!/s}}&   \\textsf{Pipe flowing  full} \\\\ 
                \\hline
            \\end{array}}`)}`,
  ],
];
