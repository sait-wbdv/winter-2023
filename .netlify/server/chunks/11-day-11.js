import { c as create_ssr_component } from './index.js';

/* src/lib/content/courses/cpnt-262/11-day-11.md generated by Svelte v3.55.0 */

const metadata = {
	"title": "Intro to SvelteKit",
	"excerpt": null,
	"status": "draft"
};

const _11_day_11 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<h2 id="${"housekeeping"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#housekeeping"}"><span class="${"icon icon-link"}"></span></a>Housekeeping</h2>
<ul><li>Marking delayed due to course outline update season</li></ul>
<hr>
<h2 id="${"1-handing-exceptions-with-asyncawait"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#1-handing-exceptions-with-asyncawait"}"><span class="${"icon icon-link"}"></span></a>1. Handing Exceptions with <code>async</code>/<code>await</code></h2>
<p><a href="${"https://sait-wbdv.github.io/slides/w23/cpnt-262/js-exceptions.html"}" rel="${"nofollow"}"><img src="${"/images/slides/js-exceptions.png"}" alt="${"Slides - Handling Exceptions"}"></a></p>
<h3 id="${"demo-adding-error-handling-to-json-placeholder"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#demo-adding-error-handling-to-json-placeholder"}"><span class="${"icon icon-link"}"></span></a>Demo: Adding error handling to JSON Placeholder</h3>
<ul><li><a href="${"https://github.com/sait-wbdv/dailies-f22/tree/main/2022-10-31-exceptions-foreach/01-starter-json-placeholder"}" rel="${"nofollow"}">Starter code</a></li></ul>
<h3 id="${"activity-add-error-handling-to-zoo-example"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#activity-add-error-handling-to-zoo-example"}"><span class="${"icon icon-link"}"></span></a>Activity: Add error handling to zoo example</h3>
<ul><li><a href="${"https://github.com/sait-wbdv/dailies-f22/tree/main/2022-10-31-exceptions-foreach/02-starter-zoo-animals"}" rel="${"nofollow"}">Starter code</a></li></ul>
<p><strong>Instructions</strong></p>
<ol><li>Copy the sample code into your workspace</li>
<li>Edit the URL so that the domain is non-existent:<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">https://zoo-animal-api.herokuapp.com/animals/rand/10</code>`}<!-- HTML_TAG_END --></pre>Break the domain:<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">https://zoo-animal-BROKEN-api.herokuapp.com/animals/rand/10</code>`}<!-- HTML_TAG_END --></pre></li>
<li>Add a <code>try</code>/<code>catch</code> that outputs an error to the user instead of a blank page;</li>
<li>Fix the domain and instead break the path:<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">https://zoo-animal-api.herokuapp.com/animals/rand/10</code>`}<!-- HTML_TAG_END --></pre>Break the path:<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">https://zoo-animal-api.herokuapp.com/BROKEN/rand/10</code>`}<!-- HTML_TAG_END --></pre></li>
<li>Throw a custom error by testing for a <code>true</code> value on <code>response.ok</code> so that the page displays a custom “404 Not Found” error for the user.</li></ol>
<hr>
<h2 id="${"2-arrayforeach-and-higher-order-array-methods"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#2-arrayforeach-and-higher-order-array-methods"}"><span class="${"icon icon-link"}"></span></a>2. <code>Array.forEach()</code> and Higher Order Array Methods</h2>
<p><a href="${"https://sait-wbdv.github.io/slides/w23/cpnt-262/js-higher-order-array-methods.html"}" rel="${"nofollow"}"><img src="${"/images/slides/js-higher-order-array-methods.png"}" alt="${"Slides - Higher Order Array Methods"}"></a></p>
<h3 id="${"demo-looping-through-json-placeholder"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#demo-looping-through-json-placeholder"}"><span class="${"icon icon-link"}"></span></a>Demo: Looping through JSON Placeholder</h3>
<ul><li>Starter Code</li></ul>
<h3 id="${"activity-looping-through-zoo-example"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#activity-looping-through-zoo-example"}"><span class="${"icon icon-link"}"></span></a>Activity: Looping through zoo example</h3>
<ul><li><a href="${"https://github.com/sait-wbdv/dailies-f22/tree/main/2022-10-31-exceptions-foreach/02-starter-zoo-animals"}" rel="${"nofollow"}">Starter code</a></li></ul>
<p><strong>Instructions</strong></p>
<ol><li>Copy the sample code into your workspace;</li>
<li>Using <code>Array.forEach()</code> refactor the starter code so that all 10 zoo animals are displayed instead of one random one.</li></ol>
<hr>
<h2 id="${"lab-time"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#lab-time"}"><span class="${"icon icon-link"}"></span></a>Lab Time</h2>
<ul><li>Due Tonight: <a href="${"/courses/cpnt-262/assessments/achievements-2"}">Achievements Round 2</a></li>
<li><a href="${"/courses/cpnt-262/assessments/individual-project"}">Individual Project</a></li></ul>
<hr>
<h2 id="${"prep"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#prep"}"><span class="${"icon icon-link"}"></span></a>Prep</h2>
<h3 id="${"errors-and-exceptions"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#errors-and-exceptions"}"><span class="${"icon icon-link"}"></span></a>Errors and Exceptions</h3>
<ul><li><a href="${"https://www.section.io/engineering-education/exception-handling-in-javascript/"}" rel="${"nofollow"}">The Basics of Exception Handling in JavaScript</a></li>
<li>MDN: <a href="${"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch"}" rel="${"nofollow"}"><code>try</code>/<code>catch</code> blocks</a></li></ul>
<h3 id="${"looping-with-higher-order-functions"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#looping-with-higher-order-functions"}"><span class="${"icon icon-link"}"></span></a>Looping with higher order functions</h3>
<ul><li>MDN: <a href="${"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"}" rel="${"nofollow"}">Array.forEach()</a></li>
<li>Free CodeCamp: <a href="${"https://www.freecodecamp.org/news/javascript-foreach-how-to-loop-through-an-array-in-js/"}" rel="${"nofollow"}">JavaScript forEach – How to Loop Through an Array in JS</a></li>
<li>Youtube: <a href="${"https://www.youtube.com/watch?v=159EAISAxwg"}" rel="${"nofollow"}">JavaScript Array forEach Method</a></li></ul>`;
});

export { _11_day_11 as default, metadata };
