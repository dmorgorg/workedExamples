import { ki, kd } from "$lib/utilities";

export default [
  // section, or sub-type of course module
  "Pythagorean Triples",

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
    "There are infinitely many Pythagorean Triples.",

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

  `A Trigonometric proof`,

  // PROBLEM 2
  [
    // type: worked example or proof
    "proof",

    // main problem statement
    `A trigonometric proof of the Pythagorean Theorem.`,

    // solution parts
    [
      // part 1
      [
        `<blockquote><strong>Note</strong>: It was long thought that no trigonometric proof of the Pythagorean Theorem existed, since those 'proofs' generally assumed the trigonometric identity
        ${kd(
          `\\cos^2x+\\sin^2x=1`
        )} which is equivalent to the Pythagorean Theorem itself:
        ${kd(
          `\\begin{aligned}
              \\cos^2x+\\sin^2x &=1 \\\\
              \\Rightarrow \\left(\\frac{\\textsf{adj}}{\\textsf{hyp}}\\right)^2 + \\left(\\frac{\\textsf{opp}}{\\textsf{hyp}}\\right)^2 &= 1 \\\\
              \\Rightarrow \\textsf{adj}^2 + \\textsf{opp}^2& = \\textsf{hyp}^2
          \\end{aligned}`
        )} In effect, these \'proofs\' assume the Pythagorean Theorem to prove the Pythagorean Theorem. Elisha Loomis in his 1940 publication <a href="https://files.eric.ed.gov/fulltext/ED037335.pdf"> \'The Pythagorean Proposition\'</a> (a compilation of several hundred Pythagorean proofs, from which the vast majority of proofs on this site are appropriated) stated \'that no trigonometric proof is possible\'. However, when Jason Zimba, in 2009, provided a <a href="https://nanopdf.com/download/on-the-possibility-of-trigonometric-proofs-of-the-pythagorean_pdf">proof</a> that did not depend upon the above identity, Loomis <a href="https://www.cut-the-knot.org/pythagoras/TrigProof.shtml">stated</a> that \'I happily admit to being in the wrong.\'<p/></blockquote>
        <strong>Proof</strong>: (Closely based on that presented by Jason Zimba). Recall the well-known addition formul${ki(
          `\\text{\\ae}`
        )}:
        ${kd(`  
        \\begin{aligned}
          \\sin(x-y) &= \\sin x \\cos y - \\cos x \\cos y \\\\
          \\cos(x-y) &= \\cos x \\cos y + \\sin x \\sin y
        \\end{aligned}
        `)}
        which are <a href="https://nanopdf.com/download/on-the-possibility-of-trigonometric-proofs-of-the-pythagorean_pdf">not dependent</a> upon ${ki(
          `\\cos^2x+\\sin^2x=1`
        )}.
         `,
      ],
    ],

    //the big answer
    ``,
  ],
];
