import { ki, kd } from "$lib/utilities";

export default [
  // section, or sub-type of course module
  "rectangular channel",

  // first problem
  [
    "example",

    // problem statement
    `A rectangular channel has a width of ${ki(
      "4.00 \\, \\mathsf{m}"
    )} and a slope of ${ki("0.1\\%")}. For a discharge of ${ki(
      "4.80 \\, \\mathsf{m^3\\!/s}"
    )}, the depth is measured to be ${ki(
      `850\\,\\mathsf{mm}`
    )}. Determine the average flow velocity for these conditions.Then find the average flow velocity ${ki(
      "v"
    )} and the discharge ${ki("Q")} when the depth is ${ki(
      "1.700\\,\\mathsf{m}"
    )}.`,

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

      // second problem part
      [
        `Find ${ki("n")}.`,

        `Calculate the length of the wetted perimeter, ${ki("P")}:
		${kd(`
			\\begin{aligned}                    
				P &= 4.00\\textsf{ m}+2\\times0.850\\textsf{ m} \\\\
				&= 5.7000\\,\\mathsf{m}
			\\end{aligned}`)}
		And now the value of the hydraulic radius, ${ki("R")}:
		${kd(`
			\\begin{aligned}
				R &= A/P \\\\
				&= \\frac {3.4000\\,\\mathsf{m^2}}{5.7000\\,\\mathsf{m}} \\\\
				&= 0.59649\\,\\mathsf{m} 
			\\end{aligned}`)}
		Rearrange Manning's Formula to isolate ${ki("n")}:
		${kd(`
			\\begin{aligned}
				Q &= \\frac 1n AR^{2/3} S^{1/2} \\\\
				\\Rightarrow  n &= \\frac {AR^{2/3} S^{1/2}}{Q} \\\\
				&= \\frac{(3.4000)(0.59649)^{2/3}(0.001)^{1/2}}{4.80} \\\\
				&= 0.015872
			\\end{aligned}
		`)}`,

        `${ki(`n=0.015872`)}`,
      ],

      // third problem part
      [
        `Find ${ki("\\large v_{(1.700\\,\\mathsf{m})} ")}`,

        `${kd(`
			\\begin{aligned}
				A &= 4.00\\,\\mathsf{m} \\times 1.700\\,\\mathsf{m} \\\\
				&= 6.8000\\,\\mathsf{m^2} \\\\\\\\
				WP &= 4.00\\,\\mathsf{m}+2(1.700\\,\\mathsf{m}) \\\\
				&= 7.4000\\,\\mathsf{m}\\\\\\\\
				R &= A/P \\\\
				&= \\frac {6.8000\\,\\mathsf{m^2}}{7.4000\\,\\mathsf{m}} \\\\
				&= 0.91892\\,\\mathsf{m} \\\\\\\\
				v &= \\frac 1n R^{2/3} S^{1/2} \\\\
				&= \\frac 1{0.015872} (0.91892)^{2/3} (0.001)^{1/2} \\\\
				&= 1.8832\\,\\mathsf{m/s}
			\\end{aligned}
		`)}`,

        `${ki(`
					{\\large v_{(1.700\\,\\mathsf{m})}} = 1.8832\\,\\mathsf{m/s}
				`)}`,
      ],

      [
        `Find ${ki("\\large Q_{(1.700\\,\\mathsf{m})} ")}`,

        `${kd(`
			\\begin{aligned}
				Q &= Av \\\\
				&= 6.8000\\,\\mathsf{m^2}\\times 1.8832\\,\\mathsf{m/s} \\\\
				&= 12.805\\,\\mathsf{m^3/s}
			\\end{aligned}
		`)}`,

        `${ki(`
			{\\large Q_{(1.700\\,\\mathsf{m})}} = 12.805\\,\\mathsf{m^3/s}
		`)}`,
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

  // PROBLEM 2

  [
    "example",

    `A rectangular channel with a base of ${ki(
      " 6.25\\,\\mathsf{m} "
    )} has a depth of ${ki("y = 1.650\\, \\mathsf{m} ")} 
        when the discharge (volume flow rate) is ${ki(
          " Q=23.5 \\,\\mathsf{m^3\\!/s} "
        )}. 
        Determine ${ki("E")}, the specific energy, and classify the flow.`,

    // part solutions
    [
      [
        `Find ${ki("v")}, the average flow velocity.`,

        `${kd(`
			\\begin{aligned}
				A &= b \\cdot y \\\\ 
				&= 6.25\\,\\mathsf{m} \\times 1.650\\,\\mathsf{m} \\\\
				&= 10.313 \\,\\mathsf{m^2} \\\\\\\\ 
				v &= Q/A \\\\
				&= \\frac{23.5\\,\\mathsf{m^3/s}}{10.313\\,\\mathsf{m^2}} \\\\
				&= 2.2787 \\,\\mathsf{m/s} 
			\\end{aligned}
		`)}`,

        `${ki(`
			v=2.2787 \\,\\mathsf{m/s} 
		`)} `,
      ],

      [
        `Find ${ki("E")}, the specific energy.`,

        `${kd(`
			\\begin{aligned}
				E &= y + \\frac{v^2}{2g} \\\\
				&= 1.650\\,\\mathsf{m}+\\frac{(2.2787\\,\\mathsf{m/s})^2}{2(9.81\\,\\mathsf{m/s^2)}} \\\\ 
				&=1.9147\\,\\mathsf{m}
			\\end{aligned}
		`)}`,

        `${ki(`
			E=1.9147 \\,\\mathsf{m}
		`)}`,
      ],

      [
        `Determine ${ki(
          "N_F"
        )}, the Froude number, and use it to classify the flow.`,

        `${kd(`
			\\begin{aligned}
				N_F &= \\frac{v}{\\sqrt{g(A/T)}} \\\\
				&= \\frac{2.2787\\,\\mathsf{m/s}}{\\sqrt{(9.81\\,\\mathsf{m/s^2})(1.650\\,\\mathsf{m})}} \\\\
				&= 0.56638 \\\\
				&<1 \\qquad(\\textsf{Flow is sub-critical})
			\\end{aligned}
		`)}`,

        `${ki(`
			N_F = 0.56638\\lt 1\\qquad(\\textsf{Flow is sub-critical})
		`)}`,
      ],
    ],

    // the answer
    `${kd(`
		E=1.915 \\,\\mathsf{m},\\quad N_F = 0.566\\lt 1\\:(\\textsf{Flow is sub-critical})
	`)}`,
  ],

  [
    "example",

    `A rectangular channel flows at a depth of ${ki(
      "{1.850\\,\\mathsf{m}}"
    )} at an average velocity of ${ki("2.25\\,\\mathsf{m/s}")}. 
        Determine the alternate depth for this flow.`,

    [
      [
        `Find the specific energy for the flow.`,
        `${kd(`
			\\begin{aligned}
				E &= \\frac{v^2}{2g} + y \\\\
        &= \\frac{(2.25\\,\\mathsf{m/s})^2}{2(9.81\\,\\mathsf{m/s^2})} + 1.85\\,\\mathsf{m} \\\\
        &= 2.1080\\,\\mathsf{m}
			\\end{aligned}
		`)}`,

        `${ki(`
			E = 2.1080\\,\\mathsf{m}
		`)}`,
      ],

      [
        `Derive a polynomial equation whose solutions include the alternate depths with the same specific energy ${ki(
          "{E=2.1080\\,\\mathsf{m}}"
        )}`,

        `Let the width of the channel be ${ki("b\\,\\mathsf{m}")}. Then,				
        ${kd(`
          \\begin{aligned}
            Q &= Av \\\\
            &= 1.85b\\,\\mathsf{m} \\times 2.25\\,\\mathsf{m/s} \\\\
            &= 4.1625b\\,\\mathsf{m^3/s} \\\\\\\\
            E &= \\frac{v^2}{2g} + y \\\\
            &= \\frac{(Q/A)^2}{2g}+y \\\\
            \\Rightarrow 2.1080\\,\\mathsf{m} &= \\frac{\\left(\\frac{\\normalsize 4.1625b\\,\\mathsf{m^3/s}}{\\normalsize by\\,\\mathsf{m^2}}\\right)^2}{2(9.81\\,\\mathsf{m/s^2})}+y\\,\\mathsf{m} \\\\[1em]
            \\Rightarrow 2.1080 &= \\frac{0.88310}{y^2}+y \\\\[1em]
            \\Rightarrow 2.1080y^2 &= 0.88310 + y^3            
          \\end{aligned}
        `)}
        <blockquote>
          This is a cubic polynomial. In general, a cubic has three roots, at least one of which is real. The other two roots may both be real numbers or both complex numbers. In our case, we have two (real) alternate depths and a third (necessarily real, since the other two are real) root which is inconsistent with our problem (a negative value for depth).
          <p></p>

          Cubics that arise in open channel problems are usually difficult or laborious to solve without the use of technology.
        </blockquote>`,

        `${ki(`
        y^3 - 2.1080y^2+0.88310=0
		`)} `,
      ],
      [
        `Solve for the alternate depth (Method 1)`,

        `The easiest way to solve ${ki(`
        y^3 - 2.1080y^2+0.88310 = 0
		`)} is to use a calculator that has a polynomial solver. Many reasonably priced calculators have such a function. A calculator gives these three values for ${ki(
          `y`
        )}:
    ${kd(`\\begin{aligned}
      y_1 &= 1.8500 \\\\
      y_2 &= 0.83188 \\\\
      y_3 &= -0.57384
    \\end{aligned}
    `)}
    ${ki(`y_1=1.8500\\,\\mathsf{m}`)} is the originally provided depth. ${ki(
          `y_3=-0.57384\\,\\mathsf{m}`
        )} is negative and inconsistent with our problem. The alternate depth we are seeking is ${ki(
          `y_2 = 0.83188\\,\\mathsf{m}`
        )}.  `,

        `${ki(`
			0.83188 \\,\\mathsf{m} 
		`)} `,
      ],

      [
        `Solve for the alternate depth (Method 2)`,

        `<br/>As mentioned earlier, cubics are generally difficult and laborious to solve. But we do have some valuable information: we have already been given one of the solutions.  That is, ${ki(
          `{y-1.850}`
        )} is a factor of ${ki(`{
    y^3 - 2.1080y^2+0.88310 = 0.}`)} We can perform synthetic division to express the cubic equation as a product of a linear and a quadratic:<p></p>

        ${kd(`
          \\begin{array}{l}
            \\phantom{y-1.850\\smash{\\big)}}y^2-0.25800y-0.47730 \\\\
            y-1.850\\overline{\\smash{\\big)}y^3-2.1080y^2+0y+0.88310} \\\\
           \\phantom{ y-1.850\\smash{\\big)}}\\underline{y^3\\phantom{0}-1.850y^2} \\\\
           \\phantom{ y-1.850\\smash{\\big)}y}-0.25800y^2+0y \\\\
           \\phantom{ y-1.850\\smash{\\big)}yy}\\underline{-0.25800y^2+0.47730y} \\\\
           \\phantom{ y-1.850\\smash{\\big)}y-0.25800y^2}-0.47730y+0.88310 \\\\
           \\phantom{ y-1.850\\smash{\\big)y}y-0.25800y^2}\\underline{ -0.47730y+0.88301} \\\\
           \\phantom{ y-1.850\\smash{\\big)y}y-0.25800y^2-0.4773a}+0.00009  \\approx 0\\\\
          \\end{array}
        `)}
       Thus, 
       ${kd(`
       \\begin{aligned}
        y^3 - 2.1080y^2+0.88310 &= 0 \\\\
        \\Rightarrow (y-1.850)(y^2-0.25800y-0.47730) &= 0
       \\end{aligned}
       `)}
       and setting
       ${kd(`
       (y^2-0.25800y-0.47730) = 0       
       `)}
       will provide the provide two remaining roots, ${ki(`y_2`)} and ${ki(
          `y_3`
        )}, of the cubic:
       ${kd(`
       \\begin{aligned}
        y &= \\frac{-b\\pm\\sqrt{b^2-4ac}}{2a} \\\\
        &= \\frac{0.25800\\pm\\sqrt{(0.25800)^2-4(1)(-0.47730)}}{2(1)} \\\\
        y_2 &= 0.83181 \\\\
        y_3 &= -0.57381
       \\end{aligned}
       `)}
        Discard the negative depth and the alternate depth is ${ki(
          `0.83181\\,\\mathsf{m}`
        )}.
        <blockquote>
        The slight diffence (in the fifth decimal place) between our two methods is due to rounding errors caused from using five significant digits for interim calculations. This difference will disappear when using three significant digits for the final answer. </blockquote>
    
    `,

        `${ki(`
			0.83181 \\,\\mathsf{m} 
		`)} `,
      ],

      [
        `Solve for the alternate depth (Method 3)`,

        `As an alternative to the previous method using synthetic division, we can also simply factor the cubic. Again, this is possible since we know one of the roots. <p></p>
    ${kd(`
      \\begin{aligned}
        & y^3 - 2.1080y^2+0.88310 \\\\
        &\\quad\\quad =(y-1.850)(py^2+qy+r) \\\\
        &\\quad\\quad = py^3+(-1.850p+q)y^2+(-1.850q+r)y+(-1.850r)
      \\end{aligned}
    `)} 
    ${ki(`p`)}, ${ki(`q`)} and ${ki(
          `r`
        )} are found by comparing the coefficients of the powers of ${ki(`y`)}:
        ${kd(`
        \\begin{alignedat}{2}
          p &= 1 & \\textsf{(Coefficients of }y^3) \\\\[0.25em]
          -1.850p+q &= -2.1080 & \\textsf{(Coefficients of }y^2) \\\\
          \\Rightarrow q &= -2.1080+1.850(1) \\\\
          &= -0.258 \\\\
          -1.850q+r &= 0 & \\textsf{(Coefficients of }y^1) \\\\
          \\Rightarrow r &= 1.850(-0.258) \\\\
          &= -0.47730 \\\\
          -1.850r &=0.883100 & \\textsf{(Coefficients of }y^0) \\\\
          \\Rightarrow r &= -1.850(0.258) \\\\
          &= -0.47730
        \\end{alignedat}`)}

        (We didn't really need to use the coefficients of ${ki(
          `y^0`
        )} above but it does verify the earlier results from the higher powers of ${ki(
          `y`
        )}.)
        <p></p>
        Again,
        ${kd(`
        \\begin{gather*}
        y^3-2.1080y^2+0.88310=
        \\left(y-1.850\\right)\\left(y^2-0.25800y-0.47730\\right)
        \\end{gather*}
        `)}
        Now proceed as in Method 2 above to find  ${ki(
          `y_2=0.83188\\,\\mathsf{m}`
        )}.
    `,

        `${ki(`
			0.83188 \\,\\mathsf{m} 
		`)} `,
      ],
      [
        `Verify the result (optional, but simple!).`,

        `${kd(`
          \\begin{aligned}
            E &= \\frac{(Q/A)^2}{2g}+y \\\\
            &= \\frac{\\left(\\frac{\\normalsize 4.1625\\cancel{b}\\,\\mathsf{m^3/s}}{\\normalsize 0.83188\\cancel{b}\\,\\mathsf{m^2}}\\right)^2}{2(9.81\\,\\mathsf{m/s^2})}+0.83188\\,\\mathsf{m} \\\\
            &= 2.1080\\,\\mathsf{m}\\quad \\checkmark
          \\end{aligned}
        `)}
        For the same volume flow rate, flow depths of ${ki(
          `1.8500\\,\\mathsf{m}`
        )} and ${ki(
          `0.83188\\,\\mathsf{m}`
        )} have the same specific energy; they are alternate depths.`,

        `Verified!`,
      ],
    ],
    // the answer
    `${kd(`
			y=0.832\\,\\mathsf{m}
	`)}`,
  ],
  [
    "example",

    `A rectangular flume is built out of wood ${ki(
      "{(n=0.012)}"
    )} and has a base width of ${ki("1.250\\,\\mathsf{m}")}. 
        The flume has a longitudinal slope of ${ki(
          "0.14\\%"
        )} and a flow depth of ${ki("950\\,\\mathsf{mm}")}. 
        Determine ${ki("Q,")} the discharge, and the slope ${ki(
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

        `${ki(`
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

        `${ki(`
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

        `${ki(`
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

        `${ki(`
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

        `${ki(` Q= 3.1463\\,\\mathsf{m^3\\!/s} `)}`,
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
    `<div class="split-col"><div class="width45 tight">
      A triangular flume, built from unplaned wood ${ki(
        "(n=0.013)"
      )}, has a design flow of ${ki(
      "3.25\\,\\mathsf{m^3\\!\\!/s}"
    )}. The sidewalls of the flume are inclined at ${ki(
      "45^{\\circ}"
    )} to the horizontal (${ki("{z=1}")}). If the slope of the flume is ${ki(
      "{S=0.001,}"
    )} determine the depth ${ki("y")} of normal flow. Classify this flow.</div> 
      <div class="width50 right"><img src="/images/fluids/12OpenChannel/triangular.png" /></div>
    </div>`,

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

        `${ki(` A=y^2,\\quad R=\\frac{y}{2\\sqrt{2}}`)}`,
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

        `${ki(`y = 1.4457\\,\\mathsf{m}`)}  `,
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

        `${ki(`\\textsf{Flow is sub-critical}`)}`,
      ],
    ],
    // the big answer
    `${kd(`y = 1.446\\,\\mathsf{m}, \\quad\\textsf{Flow is sub-critical}`)}`,
  ],
  [
    "example",

    // problem statement
    `
      A triangular channel with sides inclined at ${ki(
        "60.0\\degree"
      )} to the horizontal is lined with shotcrete ${ki(
      "(n=0.017)"
    )}. Determine the volume flow rate if the depth of flow is ${ki(
      "1.900\\,\\mathsf{m}"
    )} and the channel slope is ${ki(
      "0.500\\%"
    )}. At what slope will this flow become critical?
      
    `,

    // solution parts
    [
      [
        `Calculate ${ki("z")}.`,

        `${kd(`
          \\begin{aligned}
            \\tan 60\\degree &= \\frac{1}{z} \\\\
            \\Rightarrow z &= \\frac{1}{\\tan 60\\degree}   \\\\  
            &= 0.57735             
          \\end{aligned}`)}`,

        `${ki(`z=0.57735`)}`,
      ],

      [
        `Calculate ${ki("A,\\, W\\!P")} and ${ki("R")}.`,

        `${kd(`
          \\begin{aligned}
            A &= y^2z \\\\
            &= (1.900\\,\\mathsf{m})^2\\cdot 0.57735 \\\\
            &= 2.0842\\,\\mathsf{m^2} \\\\\\\\
            W\\!P &= 2y\\sqrt{1+z^2} \\\\
            &= 2(1.900\\,\\mathsf{m})\\sqrt{1+(0.57735)^2} \\\\
            &= 4.3879\\,\\mathsf{m}    \\\\\\\\
            R &= \\frac{A}{W\\!P} \\\\       
            &= \\frac{2.0842\\,\\mathsf{m^2}}{4.3879\\,\\mathsf{m}} \\\\       
            &= 0.47499\\,\\mathsf{m}\\\\       
          \\end{aligned}`)}`,

        `${ki(
          "A = 2.0842\\,\\mathsf{m^2}, W\\!P = 4.3879\\,\\mathsf{m}, R = 0.47499\\,\\mathsf{m}"
        )} `,
      ],

      [
        `Determine ${ki("Q")}.`,

        `${kd(`
          \\begin{aligned}
            Q &= \\frac{1}{n}AR^{2/3}S^{1/2} \\\\
            &= \\frac{1}{0.017}(2.0842\\,\\mathsf{m^2})(0.47499\\,\\mathsf{m})^{2/3}(0.00500)^{1/2} \\\\
            &= 5.2775\\,\\mathsf{m^3/s} 
          \\end{aligned}`)}`,

        `${ki(`Q=5.2775\\,\\mathsf{m^3/s} `)}`,
      ],
      [
        `Find ${ki(`y_c`)}, the critical depth.`,

        `Under critical flow conditionw:
        ${kd(`
          \\begin{aligned}
            N_F &= 1 \\\\
            \\Rightarrow v_c &= \\sqrt{g(A_c/T_c)} \\\\
            \\Rightarrow \\left(\\frac{Q}{A_c}\\right)^2&= g(A_c/T_c) \\\\
            \\Rightarrow \\frac{Q^2}{g} &= \\frac{A_c^3}{T_c} \\\\
            &= \\frac{(y_c^2z)^3}{2y_cz} \\\\
            &= \\frac{y_c^5z^2}{2} \\\\
            \\Rightarrow y_c^5 &= \\frac{2Q^2}{gz_c^2} \\\\
            \\Rightarrow y_c &= \\left[\\frac{2Q^2}{gz^2}\\right]^{0.2} \\\\
            &= \\left[\\frac{2(5.2775\\,\\mathsf{m^3/s})^2}{(9.81\\,\\mathsf{m/s^2})\\cdot(0.57735)^2}\\right]^{0.2} \\\\
            &= 1.7631\\,\\mathsf{m}
          \\end{aligned}`)}`,

        `${ki(`y_c=1.7631\\,\\mathsf{m} `)}`,
      ],
      [
        `Calculate ${ki("A_c,\\, W\\!P_c")} and ${ki("R_c")}.`,

        `${kd(`
        \\begin{aligned}
          A_c &= y_c^2z \\\\
          &= (1.7631\\,\\mathsf{m})^2\\cdot 0.57735 \\\\
          &= 1.7947\\,\\mathsf{m^2} \\\\\\\\
          W\\!P_c &= 2y_c\\sqrt{1+z^2} \\\\
          &= 2(1.7631\\,\\mathsf{m})\\sqrt{1+(0.57735)^2} \\\\
          &= 4.0717\\,\\mathsf{m}    \\\\\\\\
          R_c &= \\frac{A_c}{W\\!P_c} \\\\       
          &= \\frac{1.7947\\,\\mathsf{m^2}}{4.0717\\,\\mathsf{m}} \\\\       
          &= 0.44077\\,\\mathsf{m}\\\\       
        \\end{aligned}`)}`,

        `${ki(
          ` A_c = 1.7947\\,\\mathsf{m^2}, W\\!P_c = 4.0717\\,\\mathsf{m}, R_c = 0.44077\\,\\mathsf{m}`
        )}`,
      ],
      [
        `Find ${ki("S_c")}, the critical slope.`,

        `${kd(`
        \\begin{aligned}
          Q &= \\frac{1}{n}A_cR_c^{2/3}S_c^{1/2} \\\\
          \\Rightarrow S_c&= \\left[\\frac{Qn}{A_CR_C^{2/3}}\\right]^2\\\\
          &= \\left[\\frac{(5.2775\\,\\mathsf{m^3/s})(0.017)}{(1.7947\\,\\mathsf{m^2})(0.44077\\,\\mathsf{m})^{2/3}}\\right]^2 \\\\
          &= 0.0074500 \\\\
          &= 0.74500\\% \\\\
         
             
        \\end{aligned}`)}`,

        `${ki(` S_c = 0.74500\\%`)}`,
      ],
    ],
    // the big answer
    `${kd(`Q = 5.28\\,\\mathsf{m^3/s},\\quad S_c=0.745\\%`)}`,
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

        `${ki(`A=y^2,\\quad R=\\frac{y}{2\\sqrt{2}}`)}`,
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

        `${ki(`y = 1.4457\\,\\mathsf{m}`)}`,
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

        `${ki(`v=1.3593\\,\\mathsf{m/s}`)}`,
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

        `${ki(`R=1.9289\\,\\mathsf{m}`)}`,
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

        `${ki(`S=0.00015083 `)}`,
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

        `${ki(`A=16.445\\,\\mathsf{m^2}, R=1.4758 \\,\\mathsf{m}`)}`,
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

        `${ki(`Q=52.226\\,\\mathsf{m^3/s}, v=3.1758\\,\\mathsf{m/s}`)}`,
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

        `${ki(`\\textsf{Flow is sub-critical.}`)}`,
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
      `{z=1.5}`
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

        `${ki(
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
          Starting with an arbitrary initial 'guess' of ${ki(
            "y=1.000\\,\\mathsf{m}"
          )}:
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

        `${ki(`y=2.4063\\,\\mathsf{m}`)}`,
      ],
    ],

    `${kd(`y=2.41\\,\\mathsf{m}`)}`,
  ],
  [
    "example",

    `An channel with trapezoidal cross-section is lined with fine gravel (${ki(
      "{n=0.024}"
    )}) that has a maximum allowable velocity of ${ki(
      "{0.75\\,\\mathsf{m/s}}"
    )}. The channel sides have a slope defined by ${ki(
      "{z=2.65}"
    )} and the channel bed has a width of ${ki("{7.00\\,\\mathsf{m}.}")}<p></p>
    <div class="width90"><img src="/images/fluids/12OpenChannel/trapezoidalIrrigation.png" /></div><p>The channel is designed for a flow of ${ki(
      "{21.5\\,\\mathsf{m^3\\!/s}}"
    )} with the velocity of flow restricted to ${ki(
      "{80\\%}"
    )} of the maximum allowable. Determine the depth of flow at this velocity and the slope required to generate this flow.</p><p>
    Given that the length of the channel is ${ki(
      "{73.5\\,\\mathsf{km}}"
    )} and that the elevation differences between the two ends is ${ki(
      "{21.7\\,\\mathsf{m}}"
    )}, determine the height ${ki("h")} of any drop structure required.</p>
   
	 `,

    [
      [
        `Find ${ki("y")}, the depth of flow.`,

        `Find the cross-sectional area of the flow:
        ${kd(`
          \\begin{aligned}
            A &=\\frac{Q}{v} \\\\
            &=\\frac{21.5\\,\\mathsf{m^3/s}}{0.75\\,\\mathsf{m/s}\\times 80\\%} \\\\
            &= 35.833\\,\\mathsf{m^2}
          \\end{aligned}
        `)}
        Find the depth ${ki("{y}")} of flow that has an area of ${ki(
          "{35.833\\,\\mathsf{m^2}}"
        )},
        ${kd(`
          \\begin{aligned}
            A &=by + zy^2 \\\\
            \\Rightarrow 35.833 &=7.00y+2.65y^2\\\\ 
            \\Rightarrow 0 &=2.65y^2+7.00y-35.833 \\\\
            \\Rightarrow y &= \\frac{-7.00+\\sqrt{7.00^2-4(-35.833)2.65}}{2(2.65)}\\\\
            &= 2.5865\\,\\mathsf{m}
          \\end{aligned}
        `)}
        `,

        `${ki("2.5865\\,\\mathsf{m}")}`,
      ],

      [
        `Determine the hydraulic radius for this flow and velocity`,

        `
        ${kd(`
          \\begin{aligned}
            WP &=b + 2y\\sqrt{1+z^2} \\\\
            &= 7.00\\,\\mathsf{m}+2(2.5865\\,\\mathsf{m})\\sqrt{1+2.65^2} \\\\
            &= 21.652\\,\\mathsf{m}\\\\\\\\
            R &= \\frac{A}{WP}\\\\
            &= \\frac{35.833\\,\\mathsf{m^2}}{21.652\\,\\mathsf{m}}\\\\
            &= 1.6550\\,\\mathsf{m}
          \\end{aligned}
        `)}`,

        `${ki(`R=1.6550\\,\\mathsf{m}`)}`,
      ],
      [
        `Find the slope ${ki(`S`)} that will generate a flow of ${ki(
          "{35.833\\,\\mathsf{m^2}}"
        )}`,

        `It is slightly easier, mathematically, to use the velocity form of Manning's Formula to determine the slope:
        ${kd(`
          \\begin{aligned}
            v &=\\frac{1}{n}R^{2/3}S^{1/2} \\\\
            \\Rightarrow S &= \\left[\\frac{nv}{R^{2/3}}\\right]^2 \\\\
            &= \\left[\\frac{0.024(0.75\\times 80\\%)}{(1.6550)^{2/3}}\\right]^2\\\\
            &= 0.00010592 \\\\
            (&= 0.010592\\%) \\\\
          \\end{aligned}
        `)}`,

        `${ki(`S=0.00010592`)}`,
      ],
      [
        `Find ${ki("h")}, the height of any drop structure required.`,

        `As noted, the the required flow of ${ki(
          "35.833\\,\\mathsf{m^3/s}"
        )} can be achieved with a depth of ${ki(
          "y=2.5865\\,\\mathsf{m}"
        )} and a slope of ${ki(
          `S=0.00010592`
        )}. (It could also be achieved with less slope which would decrease the velocity of the flow, necessitatiing an increased depth - and corresponding increase in cross-sectional area - to maintain the volume flow rate.)<p>
        A slope of ${ki("0.00010592")} for a distance of ${ki(
          "73.5\\,\\mathsf{km}"
        )} allows for a drop in elevation of:
        ${kd(`
         73.5\\times 1000\\,\\mathsf{m}\\times 0.00010592 = 7.7854\\,\\mathsf{m}
        `)} There is an elevation difference between ends of the channel in excess of ${ki(
          "7.7854\\,\\mathsf{m}"
        )} so a drop structure is required for this extra elevation difference:
        ${kd(
          "h = 21.7\\,\\mathsf{m}-7.7854\\,\\mathsf{m}=13.915\\,\\mathsf{m}"
        )}`,

        `${ki(`h=13.915\\,\\mathsf{m}`)}`,
      ],
    ],

    `${kd(
      `y=2.59\\,\\mathsf{m},\\quad S=0.01059\\%,\\quad h=13.92\\,\\mathsf{m}`
    )}`,
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
        `${ki("y=0.600\\,\\mathsf{m}")}`,

        `<img src="/images/circularGuidedPractice1UnderHalf.png" />
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

        `${ki(`Q=1.0654\\,\\mathsf{m^3/s, \\, v=1.6140\\,\\mathsf{m/s}}`)}`,
      ],
      [
        `Pipe half full: ${ki("y=0.750\\,\\mathsf{m}")} `,

        `<img src="/images/circularGuidedPractice1Half.png" />
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

        `${ki(`Q=1.5806\\,\\mathsf{m^3/s, \\, v=1.7889\\,\\mathsf{m/s}}`)}`,
      ],
      [
        `${ki("y=1.219\\,\\mathsf{m}")}`,

        `<img src="/images/circularGuidedPractice1OverHalf.png" />
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
            \\end{aligned}`)}
            <blockquote>
            A pipe has maximum flow velocity at just over 80% depth. 
            </blockquote>`,

        `${ki(`Q=3.1368\\,\\mathsf{m^3/s, \\, v=2.0394\\,\\mathsf{m/s}}`)}`,
      ],
      [
        ` ${ki("y=1.230\\,\\mathsf{m}")}`,

        `<img src="/images/circularGuidedPractice1OverHalfPlus.png" />
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
            \\end{aligned}`)}
            <blockquote>
              A pipe has same discharge at 82% depth as when full. This is not the maximum value. 
            </blockquote>`,

        `${ki(`Q=3.1625\\,\\mathsf{m^3/s, \\, v=2.0393\\,\\mathsf{m/s}}`)}`,
      ],
      [
        `${ki("y=1.407\\,\\mathsf{m}")}`,

        `<img src="/images/circularGuidedPractice1MaxQ.png" />
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
            \\end{aligned}`)}
            <blockquote>
              A pipe has maximum discharge when flowing at 93.8% depth.
            </blockquote>
            `,

        `${ki(`Q=3.4005\\,\\mathsf{m^3/s}, \\, v=1.9751\\,\\mathsf{m/s}`)}`,
      ],
      [
        `Pipe is full: ${ki("y=1.500\\,\\mathsf{m}")}`,

        `<img src="/images/circularGuidedPractice1Full.png" />
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

        `${ki(`Q=3.1612\\,\\mathsf{m^3/s}, \\, v=1.7889\\,\\mathsf{m/s}`)}`,
      ],
    ],

    `${kd(`
        \\scriptsize
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
