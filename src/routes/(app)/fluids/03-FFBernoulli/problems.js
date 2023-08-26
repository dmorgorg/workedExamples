import { ki, kd } from "$lib/utilities";

export default [
  // section, or sub-type of course module
  "",

  // first problem
  [
    "formulae",

    "Formul&aelig;: Flow of Fluids & Bernoulli's Equation",

    "/fluids/formulae/FFBernoulli",
  ],

  ["table", "Table: Properties of Water", "/fluids/tables/propertiesOfWater"],

  [
    "table",

    "Table: Properties of Common Liquids",

    "/fluids/tables/propertiesOfCommonLiquids",
  ],
  [
    "table",

    "Table: Schedule 40 Steel Pipe",

    "/fluids/tables/schedule40SteelPipe",
  ],
  [
    "table",

    "Table: Dimensions of Steel Tubing",

    "/fluids/tables/dimensionsSteelTubing",
  ],

  "Flow of Fluids",

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

  "Bernoulli's Equation",

  [
    "example",

    `
      Determine the volume flow rate of oil, with ${ki(
        `\\textsf{sg=}0.850,`
      )} in the system that flows from point ${ki(`A`)} to point ${ki(
      `B`
    )} given that the gauge fluid is water. Assume that the temperature is ${ki(
      `25\\!\\degree`
    )}C.
      <p></p><div class="width75"><img src="/images/fluids/03FFBernoulli/venturiMano1.png" /></div><p></p>
    `,

    [
      [
        `Determine ${ki(`P_A-P_B`)} from the manometer.`,

        `${kd(`
			\\begin{aligned}
          P_A &= P_B + \\gamma_{oil}(h_{BC}) + \\gamma_{w}(0.205\\textsf{m})-\\gamma_{oil}(0.205\\textsf{m})-\\gamma_{oil}(h_{BC}) \\\\
          &= P_B +  \\left( 9.78\\,\\mathsf{kN/m^3}-0.850\\gamma_{w\\textsf{ at }4\\!\\degree\\!\\textsf{C}}\\right)(0.205\\textsf{m}) \\\\
          &= P_B +  \\left( 9.78\\,\\mathsf{kN/m^3}-0.850\\times 9.81\\,\\mathsf{kN/m^3}\\right)(0.205\\textsf{m}) \\\\
          &= P_B +  0.29551\\,\\mathsf{kPa} \\\\
          P_A-P_B &=   0.29551\\,\\mathsf{kPa}     
			\\end{aligned}
		`)}
        `,

        `${ki(`P_A-P_B = 0.29551\\,\\mathsf{kPa}`)}`,
      ],
      [
        `Use the continuity equation to find a relationship between ${ki(
          `v_A`
        )} and ${ki(`v_B`)}`,

        `${kd(`
			      \\begin{aligned}
                A_Av_A &= A_Bv_B \\\\
                \\Rightarrow v_A &= \\frac{A_B}{A_A}\\cdot v_B \\\\
                &= \\frac{\\pi(0.0525\\,\\mathsf{m})^2}{\\pi(0.1023\\,\\mathsf{m})^2}\\cdot v_B \\\\
                &= 0.26337v_B				 
			      \\end{aligned}
		`)}
        `,

        `${ki(`v_A = 0.26337v_B`)}`,
      ],
      [
        `Use Bernoulli's Equation to find  ${ki(`P_A`)} and ${ki(
          `P_B`
        )} in terms of ${ki(`v`)}`,

        `${kd(`
			      \\begin{aligned}
                \\frac{P_A}{\\gamma_{oil}} +\\cancel{z_A} +\\frac{v_A^2}{2g} &=  \\frac{P_B}{\\gamma_{oil}} + \\cancel{z_B} +\\frac{v_B^2}{2g} \\\\
                \\Rightarrow P_A-P_B &= \\frac{\\left(v_B^2-v_A^2\\right)\\gamma_{oil}}{2g}\\\\
                 &= \\frac{\\left((v_B \\,\\textsf{m/s})^2-(0.26337v_B\\,\\textsf{m/s})^2\\right)0.850\\times 9.81\\,\\mathsf{kN/m^3}}{2(9.81\\,\\mathsf{m/s^2})}\\\\
                 &= 0.93064v_B^2\\times 0.425\\,\\mathsf{kPa}\\\\
                 &= 0.39552v_B^2 \\,\\mathsf{kPa}              			 
			      \\end{aligned}
		    `)}`,

        `${ki(`P_A-P_B = 0.39552v_B^2`)}`,
      ],
      [
        `Solve equations for   ${ki(`v`)} and hence for  ${ki(`Q`)}.`,

        `Equating the two results for ${ki(
          `P_A-P_B`
        )}, we have only one unknown, namely ${ki(`v_B`)}:
        ${kd(`
			      \\begin{aligned}
                0.29551 &=  0.39552v_B^2 \\\\
                \\Rightarrow v_B^2 &= \\frac{0.29551}{0.39552}   \\\\         			 
                \\Rightarrow v_B &= 0.86437\\,\\mathsf{m/s}   \\\\[0.5cm]        			 
                Q &= A_Bv_B \\\\
                &=  \\frac{\\pi(0.0525\\,\\mathsf{m})^2}{4}(0.86437\\,\\mathsf{m/s})\\\\
                &= 0.0018711\\,\\mathsf{m^3/s} \\\\
                \\Rightarrow Q &= 1.8711\\,\\mathsf{L/s}       			 
			      \\end{aligned}
		    `)}`,

        `${ki(` Q = 1.8711\\,\\mathsf{L/s}`)}`,
      ],
    ],
    // the answer
    `${kd(`
    Q = 1.871\\,\\mathsf{L/s} 
	`)}`,
  ],
];
