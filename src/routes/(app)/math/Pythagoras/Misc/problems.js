import { ki, kd } from "$lib/utilities";

export default [
  // section, or sub-type of course module
  "Pythagorean Triples",
  // "1 Pythagorean Triples",

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // EXAMPLE TEMPLATE
  //   [
  // 	// type: worked example or proof
  //     "proof",

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
    "proof",
    // problem statement
    "There are infinitely many primitive Pythagorean triples. <br/>(Primitive Pythagorean triples are those that are not simply multiples of some smaller Pythagorean triple.)",

    // wrapper for proof (parts if necessary)
    [
      // proof part
      [
        // proof part solution
        `For all integers ${ki(`x,y\\in\\mathbb{R}`)}:
                ${kd(`
					\\begin{aligned}
						(x+y)^2 &= x^2+2xy+y^2\\\\
						&= (x-y)^2+4xy
					\\end{aligned}`)}
                Let ${ki(`x=p^2`)} and ${ki(`y=q^2`)} so that:
                ${kd(`
					\\begin{aligned} 
						(p^2+q^2)^2 &= (p^2-q^2)^2 + (2pq)^2
					\\end{aligned}`)}
				Choose ${ki(
          `p>q>0\\in\\mathbb{N}`
        )}; there are infinitely many such choices. For each choice, ${ki(
          `(p^2+q^2)\\in\\mathbb{N}`
        )}, ${ki(`{(p^2-q^2)\\in\\mathbb{N}}`)} and ${ki(
          `2pq\\in\\mathbb{N}`
        )}. <p/>Thus there is a square number ${ki(
          `(p^2+q^2)^2`
        )} which is the sum of two square numbers, ${ki(
          `(p^2-q^2)^2`
        )} and ${ki(`(2pq)^2`)}, for infinitely many choices of ${ki(
          `p`
        )} and ${ki(`q`)}. ${ki(`\\square`)}<br/>
		<br/>
		<strong>Example 1</strong>: Choose ${ki(`p=2, q=1`)}. Then:
		${kd(`
			\\begin{aligned}
				(p^2+q^2)^2 &= (2^2+1^2)^2 = 5^2 \\\\
				(p^2-q^2)^2 &= (2^2-1^2)^2 = 3^2 \\\\
				(2pq)^2 &= (2\\cdot 2\\cdot 1)^2 = 4^2 \\\\
			\\end{aligned}
		`)} <div class="center">and we have ${ki(`3^2+4^2=5^2`)}</div>
		<br/><br/>
		<strong>Example 2</strong>: Choose ${ki(`p=5, q=3`)}. Then:
		${kd(`
			\\begin{aligned}
				(p^2+q^2)^2 &= (5^2+3^2)^2 = 34^2 \\\\
				(p^2-q^2)^2 &= (5^2-3^2)^2 = 16^2 \\\\
				(2pq)^2 &= (2\\cdot 5\\cdot 3)^2 = 30^2 \\\\
			\\end{aligned}
		`)} <div class="center">and we have ${ki(`16^2+30^2=34^2`)}</div>
				`,
      ],
      // end of problem parts wrapper
    ],
  ],
];
