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
			100 & 9.40 & 958 & \\\\%2.82 \\times 10^{-4} \\\\ 
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
      "{d = 7.35\\, \\mathsf{cm}} "
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

    `A vessel contains  ${ki(`512\\,\\mathsf{L}`)} of fresh water at ${ki(
      `25\\degree\\!\\mathsf{C}.`
    )}  The water is heated to ${ki(
      `75\\degree\\!\\mathsf{C}.`
    )} Assuming no evaporation, what is the percentage increase in volume due to the temperature increase?`,

    // part solutions
    [
      [
        `${kd(`
			\\begin{aligned}
				m &= \\rho_{25}\\cdot V_{25} \\\\ 
				&= (997\\,\\mathsf{kg/m^3})\\cdot(512/1000\\,\\mathsf{m^3}) \\\\ 
				&= 510.46\\,\\mathsf{kg} \\\\\\\\ 
				V_{75} &= \\frac{m}{\\rho_{75}} \\\\ 
				&= \\frac{510.46\\,\\mathsf{kg}}{975\\,\\mathsf{kg/m3}} \\\\ 
				&= 0.52355\\,\\mathsf{m^3} \\\\\\\\
        \\textsf{Increase in volume} &= \\frac{V_{75}-V_{25}}{V_{25}}\\times 100\\% \\\\
        &= \\frac{0.52355\\,\\mathsf{m^3}-0.512\\,\\mathsf{m^3}}{0.512\\,\\mathsf{m^3}}\\times 100\\% \\\\
        &= 2.2559\\%
			\\end{aligned}
		`)}`,
      ],
    ],

    // the answer
    `${kd(`
		  2.26\\%
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
      <li>The water is heated further, to ${ki(`90\\degree\\! C`)}. At ${ki(
      `75\\degree\\! C`
    )}, water begins to flow over the open top of the vessel. Determine the height of the vessel.</li>
        <li>The water remaining in the vessel cools to ${ki(
          `25\\degree\\! C`
        )}. What is the water level, ${ki(`h_{25}`)}, at this temperature?</li>
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
            &= 355.59\\,\\mathsf{kg}
          \\end{aligned}
        `)}
        Find the volume of this mass at ${ki(`25\\degree\\! C\\!:`)}
        ${kd(`
          \\begin{aligned}
            V_{25} &= \\frac{m'}{\\rho_{25}} \\\\
            &= \\frac{355.59\\,\\mathsf{kg}}{997\\,\\mathsf{kg/m^3}} \\\\
            &= 0.35666\\,\\mathsf{m^3}
          \\end{aligned}
      `)}
      Find the height of this volume at ${ki(`25\\degree\\! C\\!:`)}
      ${kd(`
          \\begin{aligned}
              h_{25} &= \\frac{4V_{25}}{\\pi d^2} \\\\
              &= \\frac{4(0.35666\\,\\mathsf{m^3})}{\\pi (0.83975\\,\\mathsf{m})^2} \\\\
              &= 0.64397\\,\\mathsf{m} \\\\
              &= 643.97\\,\\mathsf{mm}
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

    `<div class="split-col">
    <div class="width65 tight">
      The simple barometer shown uses mercury as the fluid. There is a vacuum above ${ki(
        `B`
      )} and, disregarding the minimal vapour pressure from the mercury, the pressure at ${ki(
      `B`
    )} is effectively zero. Determine the atmospheric pressure at ${ki(
      `A`
    )}. <p></p>If the barometer fluid was water at ${ki(
      `25\\degree\\!\\textsf{C}`
    )}, what would be the height of the column for this atmospheric pressure?
    </div>    
    <div class="width30 right"><img src="/images/fluids/01NoFPM/barometer.png" />
    </div><di></di>`,

    [
      [
        `Find ${ki(`P_A`)}`,

        `${kd(`
			\\begin{aligned}
				\\Delta P &= P_A-P_B \\\\
				\\Rightarrow P_A &= \\Delta P + P_B \\\\
				&= \\gamma h + 0 \\\\
				&= (132.8\\,\\mathsf{kN/m^3}) \\cdot (670/1000\\,\\mathsf{m}) \\\\
				&= 88.976\\,\\mathsf{kPa}
			\\end{aligned}
		`)}
        <blockquote>
        A pressure of ${ki(
          `89.0\\,\\mathsf{kPa}`
        )} may also be reported as "${ki(`670`)} millimetres of mercury."
        </blockquote>
      <blockquote>
        Standard atmospheric pressure at sea-level under normal weather conditions is ${ki(
          `101.3\\,\\mathsf{kPa}`
        )} but this value drops with increased elevation. For example, standard pressure at ${ki(
          `1100\\,\\mathsf{m}`
        )} is around the ${ki(
          `89.0\\,\\mathsf{kPa}`
        )} just calculated. Weather stations typically adjust their published pressure reports to sea-level so that, for example, Calgary airport weather station at an elevation of ${ki(
          `1084\\,\\mathsf{m}`
        )} will report atmospheric pressure of ${ki(
          `101.3\\,\\mathsf{kPa}`
        )} rather than the actual pressure of approximately ${ki(`89.0\\,\\mathsf{kPa} 
      `)}.
      </blockquote>`,

        `${kd(`
			P_A = 88.976\\,\\mathsf{kPa} 
		`)}`,
      ],

      [
        `Find the height of the column using water for this atmospheric pressure.`,

        `${kd(`
			\\begin{aligned}
				h &=\\frac{\\Delta P}{\\gamma}  \\\\
				 &= \\frac{88.976\\,\\mathsf{kN/m^2}}{9.78\\,\\mathsf{kN/m^3}} \\\\
				&= 9.0978\\,\\mathsf{m} \\\\
			\\end{aligned}
		`)}
    <blockquote>
    To measure atmospheric pressure at sea-level with this type of barometer, using water as the fluid, would require a tube over ${ki(
      `10`
    )} metres in height. This explains why mercury, with its high density and low vapour pressure is a better solution.
    </blockquote>`,

        `${kd(`
        9.0978\\,\\mathsf{m} 
		`)}`,
      ],
    ],
    // the answer
    `${kd(`
			P_A = 89.0\\,\\mathsf{kPa},\\,h=9.10\\,\\mathsf{m}
	`)}`,
  ],
];
