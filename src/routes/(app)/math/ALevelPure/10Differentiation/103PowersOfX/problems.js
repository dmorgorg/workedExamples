import { ki, kd } from "$lib/utilities";

export default [
  // section, or sub-type of course module
  // "differentiation from first principles",
  "",

  // PROBLEM 1
  [
    "example",

    // example statement
    `Find ${ki(`\\Large\\frac{dy}{dx}`)} for each of the following:
        <div class="centered-list">
            <ol>
                <li>${ki(`y=x^2`)}</li>
                <li>${ki(`y=\\displaystyle\\frac{1}{x^3}`)}
                <li>${ki(`y=17`)}
                <li>${ki(`y=7\\sqrt{x}`)}
            </ol>
        </div>
    `,

    // wrapper for example parts
    [
      // example solution parts
      [
        `Find ${ki(`\\displaystyle\\frac{dy}{dx}`)} for ${ki(`y=x^2`)}`,
        // part solution
        `${kd(`
            \\begin{aligned}                
                y=x^n \\Rightarrow \\frac{dy}{dx}&=nx^{n-1} \\\\[10pt] 
                &=2x^{2-1} \\quad(\\textsf{using }n=2)\\\\[10pt] 
                &= 2x^1 \\\\[5pt]		     
                \\frac{dy}{dx} &= 2x 
            \\end{aligned}`)}`,

        `${kd(`\\frac{dy}{dx} = 2x`)}`,
      ],

      [
        `Find ${ki(`\\displaystyle\\frac{dy}{dx}`)} for ${ki(
          `y=\\displaystyle\\frac{1}{x^3}`
        )}`,
        // part solution
        `${kd(`
            \\begin{aligned}
                y &= \\displaystyle\\frac{1}{x^3} = x^{-3} \\\\[10pt] 
                y=x^n \\Rightarrow \\frac{dy}{dx}&=nx^{n-1} \\\\[10pt] 
                &= -3x^{-3-1} \\quad(\\textsf{using }n=-3)\\\\[10pt] 
                \\frac{dy}{dx} &= \\frac{-3}{x^4}
            \\end{aligned}`)}`,

        `${kd(`\\frac{dy}{dx} = -\\frac{3}{x^4}`)}`,
      ],

      [
        `Find ${ki(`\\displaystyle\\frac{dy}{dx}`)} for ${ki(`y=17`)}`,
        // part solution
        `${kd(`
            \\begin{aligned}
                y &= 17 = 17x^0 \\\\[10pt] 
                y=x^n \\Rightarrow \\frac{dy}{dx}&=nx^{n-1} \\\\[10pt] 
                &= 0\\!\\cdot\\!x^{0-1} \\quad(\\textsf{using }n=0)\\\\[10pt] 
                &= \\frac{0}{x} \\\\[10pt] 
                \\frac{dy}{dx} &= 0
            \\end{aligned}`)}`,

        `${kd(`\\frac{dy}{dx} = 0`)}`,
      ],

      [
        `Find ${ki(`\\displaystyle\\frac{dy}{dx}`)} for ${ki(`y=7\\sqrt{x}`)}`,
        // part solution
        `${kd(`
            \\begin{aligned}
                y &= 7\\sqrt{x} = 7x^{1/2} \\\\[10pt] 
                y=x^n \\Rightarrow \\frac{dy}{dx}&=nx^{n-1} \\\\[10pt] 
                &= 7\\cdot\\frac{1}{2}x^{1/2-1} \\quad\\left(\\textsf{using }n=\\frac{1}{2}\\right)\\\\[10pt] 
                &= \\frac{7}{2}x^{-1/2} \\\\[10pt] 
                \\frac{dy}{dx} &= \\frac{7}{2\\sqrt{x}} 
            \\end{aligned}`)}`,

        `${kd(`\\frac{dy}{dx} =  \\frac{7}{2\\sqrt{x}} `)}`,
      ],

      // end of problem parts wrapper
    ],
    // problem answer
    `<div class="centered-list">
        <ol>
            <li>${ki(`\\displaystyle\\frac{dy}{dx}=2x`)}</li>
            <li>${ki(
              `\\displaystyle\\frac{dy}{dx}=\\displaystyle-\\frac{3}{x^4}`
            )}
            <li>${ki(`\\displaystyle\\frac{dy}{dx} = 0`)}
            <li>${ki(`\\displaystyle\\frac{dy}{dx}=\\frac{7}{2\\sqrt{x}}`)}
        </ol>
    </div>`,
  ],
  // PROBLEM 2
  [
    "example",

    // example statement
    `Find ${ki(`f'(x)`)} for each of the following:
    <div class="centered-list">
        <ol>
            <li>${ki(`f(x)=7x^6`)}</li>
            <li>${ki(`f(x)=5x^{-4}`)}</li>
            <li>${ki(`f(x)=\\displaystyle\\frac{3}{\\sqrt{x^3}}`)} </li>     
            <li>${ki(`f(x)=7\\sqrt[5]{x^2}`)}</li>
        </ol>
    </div>
    `,

    // wrapper for example parts
    [
      // example solution parts
      [
        `Find ${ki(`f'(x)`)} for ${ki(`f(x)=7x^6`)}`,
        // part solution
        `${kd(`
            \\begin{aligned}                
                f(x)=x^n \\Rightarrow f'(x)&=nx^{n-1} \\\\[10pt] 
                &=7\\cdot 6x^{6-1} \\quad(\\textsf{using }n=6)\\\\[10pt] 
                f'(x) &= 42x^5
            \\end{aligned}`)}`,

        `${kd(`f'(x) = 42x^5`)}`,
      ],

      [
        `Find ${ki(`f'(x)`)} for ${ki(`f(x)=5x^{-4}`)}`,
        // part solution
        `${kd(`
            \\begin{aligned}
                f(x)=x^n \\Rightarrow f'(x)&=nx^{n-1} \\\\[10pt] 
                &= 5(-4)x^{-4-1} \\quad(\\textsf{using }n=-4)\\\\[10pt] 
                f'(x) &= -20{x^{-5}} \\quad\\left(= -\\frac{20}{x^5}\\right)
            \\end{aligned}`)}`,

        `${kd(`f(x) = -20{x^{-5}}`)}`,
      ],

      [
        `Find ${ki(`f'(x)`)} for ${ki(
          `f(x)=\\displaystyle\\frac{3}{\\sqrt{x^3}}`
        )}`,
        // part solution
        `${kd(`
            \\begin{aligned}
                f(x) &=\\displaystyle\\frac{3}{\\sqrt{x^3}} = 3x^{-3/2} \\\\[10pt] 
                f(x)=x^n \\Rightarrow f'(x)&=nx^{n-1} \\\\[10pt] 
                &= 3\\left(-\\frac{3}{2}\\right)x^{(-3/2-1)} \\quad\\left(\\textsf{using }n=-\\frac{3}{2}\\right)\\\\[10pt] 
                &= -\\frac{9}{2}x^{-5/2} \\\\[10pt] 
                f'(x) &= -\\frac{9}{2\\sqrt{x^5}}
            \\end{aligned}`)}`,

        `${kd(` f'(x) = -\\frac{9}{2\\sqrt{x^5}}`)}`,
      ],

      [
        `Find ${ki(`f'(x)`)} for ${ki(`f(x)=7\\sqrt[5]{x^2}`)}`,
        // part solution
        `${kd(`
            \\begin{aligned}
                f(x) &= 7\\sqrt[5]{x^2} = 7x^{2/5} \\\\[10pt] 
                f(x)=x^n \\Rightarrow f'(x)&=nx^{n-1} \\\\[10pt] 
                &= 7\\cdot\\frac{2}{5}x^{2/5-1} \\quad\\left(\\textsf{using }n=\\frac{2}{5}\\right)\\\\[10pt] 
                &= \\frac{14}{5}x^{-3/5} \\\\[10pt] 
                f'(x) &= \\frac{14}{5\\sqrt[5]{x^3}} 
            \\end{aligned}`)}`,

        `${kd(`f'(x) = \\frac{14}{5\\sqrt[5]{x^3}} `)}`,
      ],

      // end of problem parts wrapper
    ],
    // problem answer
    `<ol>
        <li>${ki(`f'(x)=42x^5`)}</li>
        <li>${ki(`f'(x)=-20{x^{-5}}`)}</li>
        <li>${ki(` f'(x) = -\\frac{9}{2\\sqrt{x^5}}`)} </li>     
        <li>${ki(`f'(x)=\\frac{14}{5\\sqrt[5]{x^3}}`)}</li>
    </ol>`,
  ],
  // PROBLEM 3
  [
    "example",

    // example statement
    `Evaluate the derivative of each curve at the specified location to determine the gradient of the curve at that point.
    
    <div class="centered-list">
      <ol>
          <li>${ki(`y=\\displaystyle\\frac{x^4}{8}`)} at ${ki(`x=3`)}</li>
          <li>${ki(`f(x)=x^{-2}`)} when ${ki(`x=-2`)}</li>
          <li>${ki(`y=\\sqrt{x}`)} at the point ${ki(`(4, 2)`)}</li>     
          <li>${ki(`f(x)=\\displaystyle\\frac{4}{x^{1/3}}`)} at ${ki(
      `x=-8`
    )}</li> 
      </ol>
    </div>
  
    `,

    // wrapper for example parts
    [
      // example solution parts
      [
        `Determine the gradient of ${ki(
          `y=\\displaystyle\\frac{x^4}{8}`
        )} at ${ki(`x=3`)}`,
        // part solution
        `${kd(`
            \\begin{aligned} 
                y=x^n \\Rightarrow \\frac{dy}{dx}&=nx^{n-1} \\\\[10pt] 
                &=\\frac{1}{8}\\cdot 4x^{4-1} \\quad(\\textsf{using }n=4)\\\\[10pt] 
                &= \\frac{x^3}{2} \\\\[10pt]
                \\frac{dy}{dx}\\biggr\\rvert_{x=2} &= \\frac{(2)^3}{2} \\\\[10pt]
                &= 4 \\\\[10pt]
            \\end{aligned}`)}`,

        `${kd(`\\frac{dy}{dx}\\biggr\\rvert_{x=2} = 4`)}`,
      ],
      [
        `Determine the gradient of ${ki(`f(x)=x^{-2}`)} at ${ki(`x=-2`)}`,
        // part solution
        `${kd(`
            \\begin{aligned} 
                f=x^n \\Rightarrow f'(x)&=nx^{n-1} \\\\[10pt] 
                &=-2x^{-3}  \\quad(\\textsf{using }n=-2)\\\\[10pt] 
                &= -\\frac{2}{x^3} \\\\[10pt]
                f'(x)\\biggr\\rvert_{x=-2} &= -\\frac{2}{(-2)^3} \\\\[10pt]
                &= -\\frac{2}{-8} \\\\[10pt]
                &= \\frac{1}{4} \\\\[10pt]
            \\end{aligned}`)}`,

        `${kd(`f'(x)\\biggr\\rvert_{x=-2} = \\frac{1}{4}`)}`,
      ],
      [
        `Determine the gradient of ${ki(`y=\\sqrt{x}`)} at the point ${ki(
          `(4, 2)`
        )}`,
        // part solution
        `${kd(`
            \\begin{aligned} 
                y &=\\sqrt{x} = x^{1/2} \\\\[10pt] 
                y=x^n \\Rightarrow \\frac{dy}{dx}&=nx^{n-1} \\\\[10pt] 
                &=\\frac{1}{2}x^{1/2-1} \\quad\\left(\\textsf{using }n=\\frac{1}{2}\\right)\\\\[10pt] 
                &= \\frac{1}{2x^{1/2}} \\\\[10pt]
                \\frac{dy}{dx}\\biggr\\rvert_{x=4} &= \\frac{1}{2(4)^{1/2}} \\\\[10pt]
                &= \\frac{1}{4} \\\\[10pt]
            \\end{aligned}`)}`,

        `${kd(`\\frac{dy}{dx}\\biggr\\rvert_{x=4} = \\frac{1}{4}`)}`,
      ],
      [
        `Determine the gradient of ${ki(
          `f(x)=\\displaystyle\\frac{4}{x^{1/3}}`
        )} at ${ki(`x=-8`)}`,
        // part solution
        `${kd(`
            \\begin{aligned} 
                f(x) &= \\frac{4}{x^{1/3}} = 4x^{-1/3} \\\\[10pt] 
                f(x)=x^n \\Rightarrow f'(x) &=nx^{n-1} \\\\[10pt] 
                &=4\\left(-\\frac{1}{3}\\right)x^{-1/3-1} \\quad\\left(\\textsf{using }n=-\\frac{1}{3}\\right)\\\\[10pt] 
                &= -\\frac{4}{3x^{4/3}} \\\\[10pt] 
                f'(x)\\biggr\\rvert_{x=-8} &= -\\frac{4}{3(-8)^{4/3}} \\\\[10pt]
                &= -\\frac{1}{12}
            \\end{aligned}`)}`,

        `${kd(`f'(x)\\biggr\\rvert_{x=-8} = -\\frac{1}{12}`)}`,
      ],

      // end of problem parts wrapper
    ],
    // problem answer
    `<ol>
        <li>${ki(`f'(x)=42x^5`)}</li>
        <li>${ki(`f'(x)=-20{x^{-5}}`)}</li>
        <li>${ki(` f'(x) = -\\frac{9}{2\\sqrt{x^5}}`)} </li>     
        <li>${ki(`f'(x)=\\frac{14}{5\\sqrt[5]{x^3}}`)}</li>
    </ol>`,
  ],
];
