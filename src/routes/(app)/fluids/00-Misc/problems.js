import { ki, kd } from "$lib/utilities";

export default [
  // section, or sub-type of course module
  "Cubic Equations",

  // first problem
  [
    "example",

    // problem statement
    `Solve ${ki("ax^3+bx^2+cx+d=0")} for ${ki("x")}.
    <blockquote>
      Cubic equations arise when solving for alternate depths (different depths of flow having the same specific energy) in rectangular channels. More usually, a polynomial solver available on most scientific calculators is used to find the three roots of the cubic. The more traditional may choose to use an iterative solution, or the method described below.
    </blockquote>
    `,

    // wrapper for problem parts
    [
      // problem part

      [
        // problem part statement
        `Reduce the cubic ${ki(
          "ax^3+bx^2+cx+d=0"
        )} to a depressed cubic of the form ${ki(
          "t^3+pt+q=0"
        )} by using the ${ki(`x=t-\\large\\frac{b}{3a}`)} change of variable.`,

        // problem part solution
        `<blockquote>
          We assume that the roots of the cubic are not all integers; such a cubic is easier to solve but does not occur in our open channel flow analysis. We also assume that all three roots are real.
        </blockquote>
        Perform the change of variable ${ki("x=t-\\Large\\frac{b}{3a}")}:
        ${kd(`
          \\begin{aligned}
            0 &= ax^3+bx^2+cx+d \\\\
            &= a\\left(t-\\frac{b}{3a}\\right)^3+b\\left(t-\\frac{b}{3a}\\right)^2+c\\left(t-\\frac{b}{3a}\\right)+d\\\\
            &= a\\left(t^3-\\cancel{\\frac{bt^2}{a}} +\\frac{b^2t}{3a^2}-\\frac{b^3}{27a^3}\\right) + b\\left(\\cancel{t^2}-\\frac{2bt}{3a}+\\frac{b^2}{9a^2}\\right) \\\\
            &\\qquad\\qquad\\qquad +c\\left(t-\\frac{b}{3a}\\right)+d \\\\
            &= at^3 +\\left(c-\\frac{b^2}{3a}\\right)t + \\left(\\frac{2b^3}{27a^2}-\\frac{bc}{3a}+d\\right) \\\\
            &= t^3 + \\left(\\frac{3ac-b^2}{3a^2}\\right)t+\\left(\\frac{2b^3-9abc+27a^2d}{27a^3}\\right) \\\\
            &= t^3 +pt +q
          \\end{aligned}`)}
          where
          ${kd(`
          \\begin{aligned}
            p &= \\frac{3ac-b^2}{3a^2} \\\\
            \\textsf{and } q&= \\frac{2b^3-9abc+27a^2d}{27a^3}
          \\end{aligned}`)}
          <blockquote>
          This ${ki(
            `x=t-\\large\\frac{b}{3a}`
          )} change of variable is standard for converting all general cubics to  depressed cubics.</blockquote>`,
        // problem part answer
        `${ki(
          `p = {\\Large \\frac{3ac-b^2}{3a^2}},\\quad q ={\\Large \\frac{2b^3-9abc+27a^2d}{27a^3}} `
        )}`,
      ],
      [
        // problem part statement
        `Reduce the cubic ${ki(
          "ax^3+bx^2+cx+d=0"
        )} to a depressed cubic of the form ${ki(
          "t^3+pt+q=0"
        )} by a change of variable:`,

        // problem part solution
        `<blockquote>
          We assume that the roots of the cubic are not all integers; such a cubic is easier to solve but does not occur in our open channel flow analysis. We also assume that all three roots are real.
        </blockquote>
        Perform the change of variable ${ki("x=t-\\frac{b}{3a}")}:
        ${kd(`
          \\begin{aligned}
            0 &= ax^3+bx^2+cx+d \\\\
            &= a(t-\\frac{b}{3a})^3+bx^2+cx+d \\\\
            
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
