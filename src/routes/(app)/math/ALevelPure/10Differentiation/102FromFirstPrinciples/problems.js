import { ki, kd } from "$lib/utilities";

export default [
  // section, or sub-type of course module
  // "differentiation from first principles",
  // "Differentiation from first principles",
  "",

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
  // 			v_c &= \\sqrt{g(A_c/T_c)} \\\\[15pt]
  // 			\\Rightarrow v_c^2 &= g\\cdot\\frac{by_c}{b} \\\\[15pt]
  // 			\\Rightarrow (1.900)^2 &= 9.81 y_c \\\\[15pt]
  // 			\\Rightarrow y_c &= \\frac{(1.900)^2}{9.81} \\\\[15pt]
  // 			&= 0.36799\\,\\mathsf{m}
  // 		\\end{aligned}`)}`,

  //         `${ki(`y_c = 0.36799\\,\\mathsf{m} `)}`,
  //       ],

  //       //part 2
  //       [
  //         `Determine ${ki("Q")}`,

  //         `${kd(`\\begin{aligned}
  // 			Q &= A_c\\cdot v_c \\\\[15pt]
  // 			&= \\left(4.50\\cdot y_c \\right)\\cdot v_c \\\\[15pt]
  // 			&= 4.50\\cdot 0.36799 \\cdot 1.900 \\\\[15pt]
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
            f'(x) &=\\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h} \\\\[15pt]
			      &=\\lim_{h \\to 0} \\frac{[6(x+h)-6]-[6x-6]}{h} \\\\[15pt]
			      &=\\lim_{h \\to 0} \\frac{6x+6h-6-6x+6}{h} \\\\[15pt]
			      &=\\lim_{h \\to 0} \\frac{\\cancel{6x}+6h-\\cancel{6}-\\cancel{6x}+\\cancel{6}}{h} \\\\[15pt]
			      &=\\lim_{h \\to 0} \\frac{6h}{h} \\\\[15pt]
			      &=\\lim_{h \\to 0} \\frac{6\\cancel{h}}{\\cancel{h}} \\\\[15pt]
			      &=\\lim_{h \\to 0} 6 \\\\[15pt]
			      f'(x) &= 6 
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
                f'(x) &=\\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{[4(x+h)^2-3]-[4x^2-3]}{h} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{[4(x^2+2xh+h^2)-3]-[4x^2-3]}{h} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{[4x^2+8xh+4h^2-3]-[4x^2-3]}{h} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{4x^2+8xh+4h^2-3-4x^2+3}{h} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{\\cancel{4x^2}+8xh+4h^2-\\cancel{3}-\\cancel{4x^2}+\\cancel{3}}{h} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{8x\\,\\cancel{h}+4h\\,\\cancel{h}}{\\cancel{h}} \\\\[15pt]
                &=\\lim_{h \\to 0} 8x+4h \\\\[15pt]
                &=\\lim_{h \\to 0} 8x+ \\lim_{h \\to 0} 4h \\\\[15pt]
                &=8x+0 \\\\[15pt]
                f'(x) &=8x
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
    `Differentiate ${ki(`f(x)=5x^3`)} from first principles.`,

    // wrapper for example parts
    [
      // example solution part
      [
        // example solution - only one
        `${kd(`
            \\begin{aligned}
                f'(x) &=\\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{5(x+h)^3-5x^3}{h} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{5(x^3+3x^2h +3xh^2+h^3)-5x^3}{h} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{\\cancel{5x^3}+15x^2h+15xh^2+5h^3-\\cancel{5x^3}}{h} \\\\[15pt]               
                &=\\lim_{h \\to 0} \\frac{15x^2\\cancel{h}+15xh^{\\cancel{2}1}+5h^{\\cancel{3}2}}{\\cancel{h}} \\\\[15pt]
                &=\\lim_{h \\to 0} 15x^2+15xh+5h^2 \\\\[15pt]
                &= 15x^2 + 15x\\cdot 0 + 5\\cdot 0^2 \\\\[15pt]
                f'(x) &= 15x^2
            \\end{aligned}`)}`,
      ],
      // end of problem parts wrapper
    ],
    // problem answer
    `${kd(`f'(x) = 15x^2`)}`,
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
                f'(x) &=\\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{(1+(x+h)^2)^2-(1+x^2)^2)}{h} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{\\left[\\cancel{1}+2(x+h)^2+(x+h)^4\\right]-\\left[\\cancel{1}+2x^2+x^4\\right]}{h} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{2(x+h)^2+(x+h)^4-2x^2-x^4}{h} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{2(x^2+2xh+h^2)+(x^4+4x^3h+6x^2h^2+4xh^3+h^4)-2x^2-x^4}{h} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{\\cancel{2x^2}+4xh+2h^2+\\cancel{x^4}+4x^3h+6x^2h^2+4xh^3+h^4-\\cancel{2x^2}-\\cancel{x^4}}{h} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{4x\\cancel{h}+2h^{\\cancel{2}1}+4x^3\\cancel{h}+6x^2h^{\\cancel{2}1}+4xh^{\\cancel{3}2}+h^{\\cancel{4}3}}{\\cancel{h}} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{4x+2h+4x^3+6x^2h+4xh^2+h^3}{1} \\\\[15pt]
                &= 4x+4x^3 \\\\[15pt]
                f'(x) &= 4x(1+x^2)                
            \\end{aligned}`)}`,
      ],
      // end of problem parts wrapper
    ],
    // problem answer
    `${kd(`\\frac{dy}{dx} = 4x(1+x^2)`)}`,
  ],
  // PROBLEM 5
  [
    "example",

    // example statement
    `Find, from first principles, that the derivative of ${ki(
      `y=\\displaystyle\\frac{1}{x}`
    )}.`,

    // wrapper for example parts
    [
      // example solution part
      [
        // example solution - only one
        `${kd(`
            \\begin{aligned}
                f'(x) &=\\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{\\frac{1}{x+h}-\\frac{1}{x}}{h} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{\\frac{x - (x+h)}{(x+h)x}}{h} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{\\frac{x - x-h}{x^2+xh}}{h} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{\\frac{\\cancel{x} - \\cancel{x}-h}{x^2+xh}}{h} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{\\frac{-h}{x^2+xh}}{h} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{\\frac{-\\cancel{h}}{x^2+xh}}{\\cancel{h}} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{\\frac{-1}{x^2+xh}}{1} \\\\[15pt]
                &=\\frac{-1}{\\displaystyle\\lim_{h \\to 0} (x^2+xh)}\\\\[15pt]
                &=\\frac{-1}{\\displaystyle\\lim_{h \\to 0} x^2+ \\lim_{h \\to 0} xh}\\\\[15pt]
                &=\\frac{-1}{ x^2+ x\\cdot 0}\\\\[15pt]
                f'(x) &=-\\frac{1}{ x^2}
               
            \\end{aligned}`)}`,
      ],
      // end of problem parts wrapper
    ],
    // problem answer
    `${kd(`\\frac{dy}{dx} = -\\frac{1}{x^2}`)}`,
  ],
  // PROBLEM 6
  [
    "example",

    // example statement
    `Find the derivative of ${ki(`y=\\sqrt{x}`)} from first principles`,

    // wrapper for example parts
    [
      // example solution part
      [
        // example solution - only one
        `${kd(`
            \\begin{aligned}
                f'(x) &=\\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{\\sqrt{x+h}-\\sqrt{x}}{h} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{\\left(\\sqrt{x+h}-\\sqrt{x}\\right)\\left(\\sqrt{x+h}+\\sqrt{x}\\right)}{h\\left(\\sqrt{x+h}+\\sqrt{x}\\right)} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{\\left(\\sqrt{x+h}\\right)^2-\\left(\\sqrt{x}\\right)^2}{h\\left(\\sqrt{x+h}+\\sqrt{x}\\right)} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{\\cancel{x}+h-\\cancel{x}}{h\\left(\\sqrt{x+h}+\\sqrt{x}\\right)} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{\\cancel{h}}{\\cancel{h}\\left(\\sqrt{x+h}+\\sqrt{x}\\right)} \\\\[15pt]
                &=\\lim_{h \\to 0} \\frac{1}{\\sqrt{x+h}+\\sqrt{x}} \\\\[15pt]
                &=\\frac{1}{\\sqrt{x+0}+\\sqrt{x}} \\\\[15pt]               
                f'(x) &=\\frac{1}{ 2\\sqrt{x}}               
            \\end{aligned}`)}`,
      ],
      // end of problem parts wrapper
    ],
    // problem answer
    `${kd(`f'(x) =\\frac{1}{ 2\\sqrt{x}}`)}`,
  ],
];
