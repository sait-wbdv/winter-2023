import { c as create_ssr_component } from './index.js';

/* src/lib/content/assessments/dsgn-270/assignment-3.md generated by Svelte v3.55.0 */

const metadata = {
	"title": "DSGN 270  Assignment 3 - SVG Logo Design",
	"description": "Create a logo using an svg. Optimize it and deploy it to a web page",
	"type": "assignment",
	"points": 20
};

const Assignment_3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<h2 id="${"scenario"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#scenario"}"><span class="${"icon icon-link"}"></span></a>Scenario</h2>
<p>You have been hired to create an svg logo for a client’s website. The client wants the logo to be able to be able to have both monochrome and coloured versions. You have complete creative control over the design.</p>
<h2 id="${"instructions"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#instructions"}"><span class="${"icon icon-link"}"></span></a>Instructions</h2>
<p>For your proof of concept, you must supply 2 versions of your design. They must be optimized using <a href="${"https://jakearchibald.github.io/svgomg/"}" rel="${"nofollow"}">svgomg</a>.</p>
<ul><li>Version Options:<ul><li>Position of text in relation to image</li>
<li>Monochrome and coloured</li>
<li>Design Variations</li></ul></li></ul>
<p>You must also supply an html page that shows your logo variations in use.</p>
<ul><li>One version must be added directly onto the html page<ul><li>The SVG elements need to be styled using css</li></ul></li>
<li>The second version must be added using an <code>img</code> tag</li></ul>
<hr>
<h2 id="${"marking-criteria"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#marking-criteria"}"><span class="${"icon icon-link"}"></span></a>Marking Criteria</h2>
<p>This assignment will be marked out of 20 points, which will be given for each of the following:</p>
<h3 id="${"logo-design-5-points"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#logo-design-5-points"}"><span class="${"icon icon-link"}"></span></a>Logo Design: 5 points</h3>
<ul><li>No extraneous paths</li>
<li>Makes use of boolean groups</li>
<li>Is an identifiable logo<ul><li>A guideline for design: a logo with at least 3 closed paths</li></ul></li></ul>
<h3 id="${"design-variations-5-points"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#design-variations-5-points"}"><span class="${"icon icon-link"}"></span></a>Design Variations: 5 points</h3>
<ul><li>SVG code quality</li>
<li>Uses one of the variations specified in the instructions<ul><li>Variations should be distinct and non-trivial</li></ul></li></ul>
<h3 id="${"svg-in-html-5-points"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#svg-in-html-5-points"}"><span class="${"icon icon-link"}"></span></a>SVG in HTML: 5 points</h3>
<ul><li>CSS is used to style paths</li>
<li>Colour styled using css</li>
<li>Use at least 1 other css property to enhance your design on a web page</li>
<li>Logos should be responsive<ul><li>All logos should be entirely visible when the page loads without the need to scroll.</li></ul></li></ul>
<h3 id="${"documentation-5-points"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#documentation-5-points"}"><span class="${"icon icon-link"}"></span></a>Documentation: 5 points</h3>
<ul><li>README file that includes:<ul><li>Description of your design concept <strong>important</strong></li></ul></li>
<li>Journal Entry describing your process/journey completing the assignment<ul><li>Comments, observations</li>
<li>Problems encountered</li>
<li>Screencaps of progress, inspiration and mood boards</li></ul></li></ul>
<h2 id="${"general"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#general"}"><span class="${"icon icon-link"}"></span></a>General</h2>
<p>Points will be deducted for:</p>
<ul><li>not following file and directory conventions<ul><li>CSS in a dedicated <code>/assets/css</code> directory</li>
<li>Images (including svg) in a dedicated <code>/assets/images</code> directory</li>
<li>Javascript in a dedicated <code>/assets/js</code> directory</li></ul></li>
<li>General code quality</li>
<li>Logos that are similar to the ones provided in class</li></ul>
<hr>
<h2 id="${"submission-instructions"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#submission-instructions"}"><span class="${"icon icon-link"}"></span></a>Submission Instructions</h2>
<p>In order to receive a grade:</p>
<ol><li>Submit your assignment as a repo named <code>dsgn270-a3</code>, with:<ul><li>The text of your assignment saved in a <code>README.md</code> file in the root of your project;</li>
<li>Your name, course title and assignment title at the top of the page;</li></ul></li>
<li>Zip your assignment and submit it to Brightspace.</li>
<li>As a comment to your submission, include:<ul><li>a link to your GitHub repo;</li>
<li>a link to the live GH Pages site;</li></ul></li></ol>`;
});

export { Assignment_3 as default, metadata };
