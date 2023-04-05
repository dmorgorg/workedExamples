import { ki, kd } from "$lib/utilities";

export default [
  // section, or sub-type of course module
  "differentiation from first principles",

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // EXAMPLE TEMPLATE
  //   [
  // 	// type: worked example or proof
  //     "example",

  //     // main problem statement
  //     `For discharge ${ki(
  //       "Q"
  //     )} in a rectangular channel, the velocity of flow under critical conditions is ${ki(
  //       "1.900\\,\\mathsf{m/s}"
  //     )}. If the channel is ${ki("4.50\\,\\mathsf{m}")} in width, determine ${ki(
  //       "Q"
  //     )}.`,

  //     // solution parts
  //     [
  //       // part 1
  //       [
  //         `Determine the critical depth, ${ki("y_c")}`,

  //         `Under critical conditions,
  // 		${kd(`\\begin{aligned}
  // 			v_c &= \\sqrt{g(A_c/T_c)} \\\\
  // 			\\Rightarrow v_c^2 &= g\\cdot\\frac{by_c}{b} \\\\
  // 			\\Rightarrow (1.900)^2 &= 9.81 y_c \\\\
  // 			\\Rightarrow y_c &= \\frac{(1.900)^2}{9.81} \\\\
  // 			&= 0.36799\\,\\mathsf{m}
  // 		\\end{aligned}`)}`,

  //         `${ki(`y_c = 0.36799\\,\\mathsf{m} `)}`,
  //       ],

  //       //part 2
  //       [
  //         `Determine ${ki("Q")}`,

  //         `${kd(`\\begin{aligned}
  // 			Q &= A_c\\cdot v_c \\\\
  // 			&= \\left(4.50\\cdot y_c \\right)\\cdot v_c \\\\
  // 			&= 4.50\\cdot 0.36799 \\cdot 1.900 \\\\
  // 			&= 3.1463\\,\\mathsf{m^3\\!/s}
  // 		\\end{aligned}`)}`,

  //         `${kd(` Q= 3.1463\\,\\mathsf{m^3\\!/s} `)}`,
  //       ],
  //     ],

  //     //the big answer
  //     `${kd(` Q= 3.15\\,\\mathsf{m^3\\!/s}`)}`,
  //   ],
  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  // first problem
  [
    "example",

    // example statement
    `Find the derivative of ${ki(`y=6x-6`)} from first principles.`,

    // wrapper for example parts
    [
      // example solution part
      [
        // example solution - only one
        `${kd(`
        \\begin{aligned}
			      \\frac{dy}{dx} &=\\lim_{dx \\to 0} \\frac{f(x+dx)-f(x)}{dx} \\\\
			      &=\\lim_{dx \\to 0} \\frac{[6(x+dx)-6]-[6x-6]}{dx} \\\\
			      &=\\lim_{dx \\to 0} \\frac{6x+6dx-6-6x+6}{dx} \\\\
			      &=\\lim_{dx \\to 0} \\frac{\\cancel{6x}+6dx-\\cancel{6}-\\cancel{6x}+\\cancel{6}}{dx} \\\\
			      &=\\lim_{dx \\to 0} \\frac{6dx}{dx} \\\\
			      &=\\lim_{dx \\to 0} \\frac{6\\cancel{dx}}{\\cancel{dx}} \\\\
			      &=\\lim_{dx \\to 0} 6 \\\\
			      \\frac{dy}{dx} &= 6 
        \\end{aligned}`)}
		`,
      ],
      // end of problem parts wrapper
    ],
    // problem answer
    `${kd(`\\frac{dy}{dx} = 6`)}`,
  ],

  // PROBLEM 2
  [
    "example",

    // example statement
    `Show, from first principles, that the derivative of ${ki(
      `y=4x^2-3`
    )} is ${ki(`8x`)} .`,

    // wrapper for example parts
    [
      // example solution part
      [
        // example solution - only one
        `${kd(`
            \\begin{aligned}
                \\frac{dy}{dx} &=\\lim_{dx \\to 0} \\frac{f(x+dx)-f(x)}{dx} \\\\
                &=\\lim_{dx \\to 0} \\frac{[4(x+dx)^2-3]-[4x^2-3]}{dx} \\\\
                &=\\lim_{dx \\to 0} \\frac{[4(x^2+2xdx+dx^2)-3]-[4x^2-3]}{dx} \\\\
                &=\\lim_{dx \\to 0} \\frac{[4x^2+8xdx+4dx^2-3]-[4x^2-3]}{dx} \\\\
                &=\\lim_{dx \\to 0} \\frac{4x^2+8xdx+4dx^2-3-4x^2+3}{dx} \\\\
                &=\\lim_{dx \\to 0} \\frac{\\cancel{4x^2}+8xdx+4dx^2-\\cancel{3}-\\cancel{4x^2}+\\cancel{3}}{dx} \\\\
                &=\\lim_{dx \\to 0} \\frac{8x\\,\\cancel{dx}+4dx\\,\\cancel{dx}}{\\cancel{dx}} \\\\
                &=\\lim_{dx \\to 0} 8x+4dx \\\\
                &=\\lim_{dx \\to 0} 8x+ \\lim_{dx \\to 0} 4dx \\\\
                &=8x+0 \\\\
                \\frac{dy}{dx} &=8x
            \\end{aligned}`)}`,
      ],
      // end of problem parts wrapper
    ],
    // problem answer
    `${kd(`\\frac{dy}{dx} = 8x`)}`,
  ],
  // PROBLEM 3
  [
    "example",

    // example statement
    `Determine, from first principles, the derivative of ${ki(
      `y=\\left(1+x^2\\right)^2`
    )}.`,

    // wrapper for example parts
    [
      // example solution part
      [
        // example solution - only one
        `${kd(`
            \\begin{aligned}
                \\frac{dy}{dx} &=\\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h} \\\\
                &=\\lim_{h \\to 0} \\frac{(1+(x+h)^2)^2-(1+x^2)^2)}{h} \\\\
                &=\\lim_{h \\to 0} \\frac{\\left[\\cancel{1}+2(x+h)^2+(x+h)^4\\right]-\\left[\\cancel{1}+2x^2+x^4\\right]}{h} \\\\
                &=\\lim_{h \\to 0} \\frac{2(x+h)^2+(x+h)^4-2x^2-x^4}{h} \\\\
                &=\\lim_{h \\to 0} \\frac{2(x^2+2xh+h^2)+(x^4+4x^3h+6x^2h^2+4xh^3+h^4)-2x^2-x^4}{h} \\\\
                &=\\lim_{h \\to 0} \\frac{\\cancel{2x^2}+4xh+2h^2+\\cancel{x^4}+4x^3h+6x^2h^2+4xh^3+h^4-\\cancel{2x^2}-\\cancel{x^4}}{h} \\\\
                &=\\lim_{h \\to 0} \\frac{4x\\cancel{h}+2h^{\\cancel{2}1}+4x^3\\cancel{h}+6x^2h^{\\cancel{2}1}+4xh^{\\cancel{3}2}+h^{\\cancel{4}3}}{\\cancel{h}} \\\\
                &=\\lim_{h \\to 0} \\frac{4x+2h+4x^3+6x^2h+4xh^2+h^3}{1} \\\\
                &= 4x+4x^3 \\\\
                \\frac{dy}{dx} &= 4x(1+x^2)                
            \\end{aligned}`)}`,
      ],
      // end of problem parts wrapper
    ],
    // problem answer
    `${kd(`\\frac{dy}{dx} = 4x(1+x^2)`)}`,
  ],
  // PROBLEM 4
  [
    "example",

    // example statement
    `Find, from first principles, that the derivative of ${ki(
      `y=\\frac{1}{x}`
    )}.`,

    // wrapper for example parts
    [
      // example solution part
      [
        // example solution - only one
        `${kd(`
            \\begin{aligned}
                \\frac{dy}{dx} &=\\lim_{dx \\to 0} \\frac{f(x+dx)-f(x)}{dx} \\\\
                &=\\lim_{dx \\to 0} \\frac{\\frac{1}{x+dx}-\\frac{1}{x}}{dx} \\\\
                &=\\lim_{dx \\to 0} \\frac{\\frac{x - (x+dx)}{(x+dx)x}}{dx} \\\\
                &=\\lim_{dx \\to 0} \\frac{\\frac{x - x-dx}{x^2+xdx}}{dx} \\\\
                &=\\lim_{dx \\to 0} \\frac{\\frac{\\cancel{x} - \\cancel{x}-dx}{x^2+xdx}}{dx} \\\\
                &=\\lim_{dx \\to 0} \\frac{\\frac{-dx}{x^2+xdx}}{dx} \\\\
                &=\\lim_{dx \\to 0} \\frac{\\frac{-\\cancel{dx}}{x^2+xdx}}{\\cancel{dx}} \\\\
                &=\\lim_{dx \\to 0} \\frac{\\frac{-1}{x^2+xdx}}{1} \\\\
                &=\\frac{-1}{\\lim_{dx \\to 0} (x^2+xdx)}\\\\
                &=\\frac{-1}{\\lim_{dx \\to 0} x^2+ \\lim_{dx \\to 0} xdx}\\\\
                &=\\frac{-1}{ x^2+ x\\cdot 0}\\\\
                \\frac{dy}{dx} &=\\frac{-1}{ x^2}
               
            \\end{aligned}`)}`,
      ],
      // end of problem parts wrapper
    ],
    // problem answer
    `${kd(`\\frac{dy}{dx} = \\frac{-1}{ x^2}`)}`,
  ],
];
