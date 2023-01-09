import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],

  preprocess: [
		preprocess({
			scss: {
				// Ensures Sass variables are always available inside component <style> blocks as vars.$variableDefinedInFile
				prependData: `@use 'src/lib/assets/scss/vars';`
			},
		}),
    mdsvex({
      // The default mdsvex extension is .svx; this overrides that.
      extensions: ['.md'],

      // Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
    })
  ],

  kit: {
    // default options are shown
    adapter: adapter({
      // if true, will create a Netlify Edge Function rather
      // than using standard Node-based functions
      edge: false,

      // if true, will split your app into multiple functions
      // instead of creating a single one for the entire app.
      // if `edge` is true, this option cannot be used
      split: false
    })
  }
};

export default config;
