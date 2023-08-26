import { ki, kd } from "$lib/utilities";

export default [
  // section, or sub-type of course module
  "",

  // first problem
  [
    "formulae",

    "Formul&aelig;: Units, Nature of Fluids & Pressure Measurement",

    "/fluids/formulae/natureOfFluids",
  ],

  ["table", "Table: Properties of Water", "/fluids/tables/propertiesOfWater"],

  [
    "table",

    "Table: Properties of Common Liquids",

    // formulae list
    "/fluids/tables/propertiesOfCommonLiquids",
  ],

  "Nature of Fluids",

  // PROBLEM

  [
    "example",

    `<div class="split-col">
      <div class="width65 left top">
        A mass of ${ki(
          " 95.0\\,\\mathsf{kg} "
        )} is supported by a piston over oil in a circular cylinder with inside diameter of  ${ki(
      "{d = 7.35\\, \\mathsf{cm.}} "
    )} What is the oil pressure at the piston?
      </div>
      <div class="width20 left"><img src="/images/fluids/01NoFPM/NoF1.png" />
    </div>`,

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
    <div class="width60 tight">
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
    <div class="width35 right"><img src="/images/fluids/01NoFPM/barometer.png" />
    </div>`,

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

        `${ki(`
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

        `${ki(`
        h=9.0978\\,\\mathsf{m} 
		`)}`,
      ],
    ],
    // the answer
    `${kd(`
			P_A = 89.0\\,\\mathsf{kPa},\\,h=9.10\\,\\mathsf{m}
	`)}`,
  ],
  [
    "example",

    `<div class="width75"><img src="/images/fluids/01NoFPM/mano1.png" /></div>
      A simple U-tube manometer is used to measure the gauge pressure in a pipe at ${ki(
        `A`
      )}. Given that the surface at ${ki(
      `F`
    )} is open to the atmosphere, find ${ki(`P_A`)}.
    
    `,

    [
      [
        `${kd(`
			\\begin{aligned}
				P_F &= 0\\,\\mathsf{kPa} \\\\[0.2cm]

				P_E &= P_F + \\gamma_{oil}\\cdot h_{EF} \\\\
				&= 0\\,\\mathsf{kPa} + \\left(0.960\\times 9.81\\,\\mathsf{m/s^2}\\right)(0.145\\,\\mathsf{m})\\\\
				&= 1.3656\\,\\mathsf{kPa} \\\\[0.2cm]

				P_C &= P_D + \\gamma_{mercury}\\cdot h_{CE} \\\\
				&= 1.3656\\,\\mathsf{kPa} + \\left(13.54\\times 9.81\\,\\mathsf{m/s^2}\\right)(0.750\\,\\mathsf{m}+ 0.950\\,\\mathsf{m})\\\\
				&= 227.17\\,\\mathsf{kPa} \\\\[0.2cm]

				P_C &= P_B \\\\[0.2cm]

        P_A &= P_B - \\gamma_{water}\\cdot h_{BA} \\\\
				&= 227.17\\,\\mathsf{kPa} - \\left(1.000\\times 9.81\\,\\mathsf{m/s^2}\\right)(0.950\\,\\mathsf{m})\\\\
				&= 217.85\\,\\mathsf{kPa} 
			\\end{aligned}
		`)}
        `,
      ],
    ],
    // the answer
    `${kd(`
    P_A =218\\,\\mathsf{kPa} 
	`)}`,
  ],
  [
    "example",

    `
      A differential manometer is used to measure the pressure difference between point ${ki(
        `A`
      )} and point ${ki(
      `B`
    )} in a pipe containing a flow of water. (Given that the fluid between ${ki(
      `A`
    )} and ${ki(`B`)} is not static, the pressures at ${ki(`A`)} and point ${ki(
      `B`
    )}, although at the same level, are not necessarily identical.) The fluid between ${ki(
      `A`
    )} and ${ki(`D`)}, and between ${ki(`B`)} and ${ki(
      `C`
    )}, is water and may be considered static. The fluid between ${ki(
      `D`
    )} and ${ki(`C`)} is mercury, and static. Determine ${ki(`P_A-P_B`)}.
      <p></p><div class="width95"><img src="/images/fluids/01NoFPM/mano2.png" /></div><p></p>
    `,

    [
      [
        `Let the elevation difference between ${ki(`B`)} and ${ki(`C`)} be ${ki(
          `h_{BC}\\,\\mathsf{m}`
        )}. Then,
        ${kd(`

			\\begin{aligned}
				P_C &= P_B + \\gamma_{water}\\cdot h_{BC} \\\\
				&= P_B + \\left(9.81\\,\\mathsf{kN/m^3}\\right)\\cdot h_{BC}\\,\\mathsf{m} \\\\
				&= P_B + 9.81\\cdot h_{BC}\\,\\mathsf{kPa} \\\\[0.2cm]

				P_D &= P_C + \\gamma_{mercury}\\cdot 0.115\\,\\mathsf{m}\\\\
				&= P_C + \\left(13.54\\times 9.81\\,\\mathsf{kN/m^3}\\right)\\cdot 0.115\\,\\mathsf{m}\\\\
				&= P_B + 9.81\\cdot h_{BC}\\,\\mathsf{kPa} + 15.275\\,\\mathsf{kPa}\\\\[0.2cm]

				P_A &=P_D - \\gamma_{water}\\cdot (0.115\\,\\mathsf{m}+h_{BC}\\,\\mathsf{m})\\\\
				&=P_D - \\left(9.81\\,\\mathsf{kN/m^3}\\right)\\cdot (0.115\\,\\mathsf{m})-\\left(9.81\\,\\mathsf{kN/m^3}\\right)\\cdot h_{BC}\\,\\mathsf{m}\\\\
				&=P_D - 1.1282\\,\\mathsf{kPa}-9.81\\cdot h_{BC}\\,\\mathsf{kPa}\\\\
				&=P_B + \\cancel{9.81\\cdot h_{BC}\\,\\mathsf{kPa}} + 15.275\\,\\mathsf{kPa}\\\\
        &\\quad\\quad - 1.1282\\,\\mathsf{kPa}-\\cancel{9.81\\cdot h_{BC}\\,\\mathsf{kPa}}\\\\
				&= P_B + 14.147\\,\\mathsf{kPa}\\\\[0.2cm]

        \\Rightarrow P_A-P_B &= 14.147\\,\\mathsf{kPa}
				 
			\\end{aligned}
		`)}
        `,
      ],
    ],
    // the answer
    `${kd(`
    P_A-P_B =14.18\\,\\mathsf{kPa} 
	`)}`,
  ],
];
