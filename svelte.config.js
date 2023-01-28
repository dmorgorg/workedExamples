import adapter from "@sveltejs/adapter-auto";
import { mdsvex } from "mdsvex";
import rehypeKatexSvelte from "rehype-katex-svelte";
import remarkMath from "remark-math";
import sveltePreprocess from "svelte-preprocess"; 

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
	},

	extensions: [".svelte", ".svx", ".md"],

	preprocess: [
		mdsvex({
			remarkPlugins: [remarkMath],
			rehypePlugins: [
				rehypeKatexSvelte,
				/* other rehype plugins... */
			],
			extensions: [".svx", ".md"],
		}),
		sveltePreprocess(),
	],
};

export default config;
