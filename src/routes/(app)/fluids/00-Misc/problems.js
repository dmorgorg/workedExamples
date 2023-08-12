import { ki, kd } from "$lib/utilities";

export default [
  // section, or sub-type of course module
  "Cubic Equations",

  // first problem
  [
    "example",

    // problem statement
    `Solve ${ki("ax^3+bx^2+cx+d=0")} for ${ki("x")}.<blockquote>
    Cubic equations arise when solving for alternate depths (different depths of flow having the same specific energy) in rectangular channels. More usually, a polynomial solver available on most scientific calculators is used to find the three roots of the cubic. The more traditional may choose to use an iterative solution, or the method described below.</blockquote>`,

    // wrapper for problem parts
    [
      // problem part
      [
        // problem part statement
        `Find ${ki("\\large v_{(0.850\\,\\mathsf{m})} ")}`,

        // problem part solution
        `Calculate the cross-sectional area of the channel:
		${kd(`
			\\begin{aligned}
				A &= \\textsf{base}\\times\\textsf{depth} \\\\
				&= 4.00\\,\\mathsf{m}\\times 0.850\\,\\mathsf{m} \\\\
				&= 3.4000\\,\\mathsf{m^2}
			\\end{aligned}`)}
		Calculate the velocity:
		${kd(`
			\\begin{aligned} 
				v &= Q/A \\\\ 
				&= \\frac{4.80\\,\\mathsf{m^3\\!/s}}{3.4000\\,\\mathsf{m^2}} \\\\ 
				&= 1.4118\\,\\mathsf{m/s} 
			\\end{aligned}`)}`,
        // problem part answer
        `${ki(`{\\large v_{(0.850\\,\\mathsf{m})}} = 1.4118\\,\\mathsf{m/s}`)}`,
      ],

      // end of problem parts wrapper
    ],

    // problem answer
    `${kd(`
		\\begin{aligned}
			v_{(0.850\\,\\mathsf{m})} &= 1.412\\, \\mathsf{m/s} \\\\
			Q_{(1.700\\,\\mathsf{m})} &= 12.81\\, \\mathsf{m^3/s} \\\\
			v_{(1.700\\,\\mathsf{m})} &= 1.883\\, \\mathsf{m/s} 
		\\end{aligned}
	`)}`,
  ],
];
