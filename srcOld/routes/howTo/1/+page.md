---
    title: How I Coded This Site - I  
    date: "2023-06-20"
    categories:
    - SvelteKit
    - markdown
    - katex
---

<script>
    import 'prism-themes/themes/prism-vsc-dark-plus.min.css'
</script>

>**Assumptions**: 
1. You have a recent version of `node.js` installed on your computer, you have an account at [github.com](https://github.com) and you have an account at [vercel.com](https://vercel.com) (which will host your project). These are all free for most uses
1. You have some familiarity with working in the terminal, or at least know how to access it. I am developing on Ubuntu 22.04 (a flavour of Linux) on WSLg (Windows Subsystem for Linux); I find this makes development easy while retaining ready access to Windows.



## Initiate a SvelteKit project

In the terminal, initiate a sveltekit project:

```bash
> npm create svelte@latest workedExamples
```

Replace `workedExamples` with a project name of your choice. From the prompts, choose whether to load the demo app or a skeleton project, whether to include type-checking, prettier, etc. (I am choosing the skeleton project and declining everything else.)

Change into `/workedExamples`, install the project, open the project in your editor of choice (I'm using Visual Studio Code; you can install it from [here](https://code.visualstudio.com/)), start up the development server and display the project in your browser.

```bash
> cd workedExamples
> npm i
> code .
> npm run dev -- --open
```

Now the project is open and running in your browser at `localhost:5173`, the default port for SvelteKit projects.

> If that post is not available, the development server will use `localhost:5174`, `localhost:5175`. etc. Or if you prefer to use another, you can open in a different port using the command 
```bash
\> npm run dev -- --open --port 3300
``` 
where `3300` is the port you’d like to use. You may run this command from the terminal or from VSCode's own terminal (available with Ctrl+`, Control key plus backtick.)


## Install dependencies

### Markdown

We will be using markdown since it better supports katex.

```bash
 > npm i -D mdsvex prism-themes
```

`mdsvex` is a package for using markdown in SvelteKit. We need to make some changes to `svelte.config.js`: import mdsvex and add the extensions and preprocessor directives. Your `svelte.config.js` should now look like this:



```js
/* svelte.config.js */
import adapter from "@sveltejs/adapter-auto";
import { mdsvex } from "mdsvex"; 

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
    },
    extensions: [".svelte", ".md"], 
    preprocess: [
        mdsvex({
            extensions: [".md"],
        }),
    ],
};

export default config;
```

>`prism-themes` is installed  for syntax highlighting in the code blocks in this *howTo* document and not used elsewhere in the site.
 
#### Test the markdown

Create folder `fluids` underneath `routes` and create a folder `test` in `fluids`. Create `+page.md` in folder `test` and insert some markdown:

```md
<!-- src/routes/fluids/test/+page.md -->
---
    title: test
---

<script>
    import 'prism-themes/themes/prism-vsc-dark-plus.min.css'
</script>


# This is just a {title} file

- containing
- an
- unordered list

and 

1. an
1. ordered
1. list
```

Navigate to `localhost:5173/fluids/test` and, if `mdsvex` has installed correctly, you should see something like this:

![md test](/images/howTo/mdTest.png)

### $\KaTeX$ in markdown
 
Install the following `rehype-katex-svelte` and `remark-math@3.0.0` packages:

```bash
 > npm i -D rehype-katex-svelte remark-math@3.0.0
```

Again, we need to make changes to `svelte.config.js`. Your config file should now look like this:

```js
import adapter from "@sveltejs/adapter-auto";
import { mdsvex } from "mdsvex";
import rehypeKatexSvelte from "rehype-katex-svelte";
import remarkMath from "remark-math";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
	},

	extensions: [".svelte", ".md"],

	preprocess: [
		mdsvex({
			remarkPlugins: [remarkMath],
			rehypePlugins: [
				rehypeKatexSvelte,
				/* other rehype plugins... */
			],
			extensions: [".md"],
		}),
	],
};

export default config;
```

Add the `.css` file from the $\KaTeX{}$ CDN to the `<head>` in `app.html`. This makes the math look pretty! It's the first stylesheet link, to `katex.min.css`, that you want.

```html
<!-- app.html -->
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css"
			integrity="sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0"
			crossorigin="anonymous"
		/>

		<link rel="icon" href="%sveltekit.assets%/favicon.png" />
		<meta name="viewport" content="width=device-width" />
		%sveltekit.head%
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents">%sveltekit.body%</div>
	</body>
</html>
```
It's the first stylesheet link, to `katex.min.css`, that you want.

At this stage, your `package.json` file should show the dependencies we have added:

```json
// package.json
{    
	"name": "workedexamples",
	"version": "0.0.1",
	"private": true,
	"scripts": {
		"dev": "vite dev",
		"build": "vite build",
		"preview": "vite preview"
	},
	"devDependencies": {
		"@sveltejs/adapter-auto": "^1.0.0",
		"@sveltejs/kit": "^1.0.0",
		"mdsvex": "^0.10.6",
		"prism-themes": "^1.9.0",
		"rehype-katex-svelte": "^1.1.2",
		"remark-math": "^3.0.0",
		"svelte": "^3.54.0",
		"vite": "^4.0.0"
	},
	"type": "module"
}
```


#### Test the math

Now, let's test that $\KaTeX$ is working. (But if you can see a fancily typeset $\KaTeX$ in the previous sentence, $\KaTeX$ is installed correctly.)

 Replace the markdown in `localhost:5173/fluids/test/+page.md` with some math:

```md
<!-- src/routes/fluids/test/+page.md -->
$\LaTeX$ / $\KaTeX$ math code delimited by single dollar 
signs: $a=\sqrt{b^2+c^2}$ 

Code delimited by double dollar signs is in display mode: 
$$
a=\sqrt{b^2+c^2} 
$$
```
The code above renders as:

$\LaTeX$ / $\KaTeX$ math code delimited by single dollar 
signs: $a=\sqrt{b^2+c^2}$ 

Code delimited by double dollar signs is in display mode: 
$$
a=\sqrt{b^2+c^2} 
$$

Beautiful math typesetting!

>Note that for display mode typesetting, the double dollar delimiters need to be on their own line so that Svelte doesn't assume that the curly braces contain variables ($b$ and $c$, which are not defined as variables).

### SASS

There are a number of options for using `css` in Sveltekit. A simple approach is to include your `styles.css` file in `static/styles` folder. (This will be a global stylesheet. Svelte also allows styles to be defined, and scoped, to each component.) You then reference the styles from `app.html` like this:

```html
<!-- src/app.html -->
<!DOCTYPE html>
<html lang="en">
    <head>
        ...
        <link rel="stylesheet" href="/styles/app.css">
        ...
    </head>
    ...
```

I choose to create a folder `lib` (under `src`) with subfolders `/src/lib/styles` and `/src/lib/components`. And I prefer to use `scss`, rather than standard `css`, which I import into layout files as needed.

First, install the sass and svelte-preprocess packages for node.

```bash
> npm i -D sass svelte-preprocess
```

Edit `svelte.config.js` so that it looks like this:

```js
import adapter from "@sveltejs/adapter-auto";
import { mdsvex } from "mdsvex";
import rehypeKatexSvelte from "rehype-katex-svelte";
import remarkMath from "remark-math";
// THIS LINE IS NEW
import sveltePreprocess from "svelte-preprocess"; 

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
	},

	extensions: [".svelte", ".md"],

	preprocess: [
		mdsvex({
			remarkPlugins: [remarkMath],
			rehypePlugins: [
				rehypeKatexSvelte,
				/* other rehype plugins... */
			],
			extensions: [".md"],
		}),
		sveltePreprocess(), // THIS LINE IS NEW
	],
};

export default config;
```

Create a `src/lib/styles/styles.scss` file with your preferred styling (or copy mine from the repo on [github](https://github.com/dmorgorg/workedExamples/blob/main/src/lib/styles/styles.scss)) and create a `src/routes/+layouts.svelte` with the necessary import.

```svelte
<script>
    import '$lib/styles/styles.scss'
</script>

<main><slot /></main>
```

Your styles will now be globally available.

