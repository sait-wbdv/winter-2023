import { c as create_ssr_component } from './index.js';

/* src/lib/content/courses/cpnt-262/10-day-10.md generated by Svelte v3.55.0 */

const metadata = {
	"title": "Fetching data asynchronously",
	"excerpt": null,
	"status": "draft"
};

const _10_day_10 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<h2 id="${"housekeeping"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#housekeeping"}"><span class="${"icon icon-link"}"></span></a>Housekeeping</h2>
<ul><li>Install: <a href="${"https://www.postman.com/"}" rel="${"nofollow"}">Postman</a> - A browser for working with APIs</li>
<li><a href="${"/courses/cpnt-262/assessments/individual-project"}">Individual Project</a><ul><li>Weight: 15%</li>
<li>Due: Thursday, Nov 3rd @ 11:59pm</li></ul></li></ul>
<hr>
<h2 id="${"1-spoiler-demos---objects"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#1-spoiler-demos---objects"}"><span class="${"icon icon-link"}"></span></a>1. Spoiler Demos - Objects</h2>
<ul><li><a href="${"https://gist.github.com/acidtone/f4ff695f2db428344549e1ae045e0439"}" rel="${"nofollow"}">Object-oriented Treasure Hunt</a></li></ul>
<hr>
<h2 id="${"2-http-and-rest"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#2-http-and-rest"}"><span class="${"icon icon-link"}"></span></a>2. HTTP and REST</h2>
<p><a href="${"https://sait-wbdv.github.io/slides/w23/cpnt-262/http-rest.html"}" rel="${"nofollow"}"><img src="${"/images/slides/http-rest.png"}" alt="${"Slides - HTTP and REST"}"></a></p>
<hr>
<h2 id="${"3-fetch-and-asynchronous-js"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#3-fetch-and-asynchronous-js"}"><span class="${"icon icon-link"}"></span></a>3. <code>fetch()</code> and Asynchronous JS</h2>
<p><a href="${"https://sait-wbdv.github.io/slides/w23/cpnt-262/js-async.html"}" rel="${"nofollow"}"><img src="${"/images/slides/js-async.png"}" alt="${"Slides - Conditional code"}"></a></p>
<h3 id="${"demo-fetching-json-data"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#demo-fetching-json-data"}"><span class="${"icon icon-link"}"></span></a>Demo: Fetching JSON data</h3>
<ul><li>Tool: <a href="${"https://jsonplaceholder.typicode.com/"}" rel="${"nofollow"}">JSON Placeholder</a></li>
<li>Reference: <a href="${"https://github.com/public-apis/public-apis"}" rel="${"nofollow"}">List of Public APIs</a></li>
<li>Gist: <a href="${"https://gist.github.com/acidtone/82944dbaa59aef9247833fe79eae3fb2"}" rel="${"nofollow"}"><code>fetch()</code> - Asynchronous data with <code>async</code>/<code>await</code></a></li></ul>
<h3 id="${"activity-fetch-practice"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#activity-fetch-practice"}"><span class="${"icon icon-link"}"></span></a>Activity: <code>fetch()</code> practice</h3>
<ol><li>Try using <code>fetch()</code> to retrieve placeholder data from <a href="${"https://jsonplaceholder.typicode.com/"}" rel="${"nofollow"}">JSON Placeholder</a>, such as:<ul><li><a href="${"https://jsonplaceholder.typicode.com/photos"}" rel="${"nofollow"}">GET /photos</a><ul><li>returns an array</li></ul></li>
<li><a href="${"https://jsonplaceholder.typicode.com/photos/8"}" rel="${"nofollow"}">GET /photos/8</a><ul><li>returns a single object</li></ul></li>
<li><a href="${"https://jsonplaceholder.typicode.com/todos"}" rel="${"nofollow"}">GET /todos</a><ul><li>returns an array</li></ul></li>
<li><a href="${"https://jsonplaceholder.typicode.com/todos/5"}" rel="${"nofollow"}">GET /todos/5</a><ul><li>returns a single object</li></ul></li></ul></li>
<li>Try using <code>fetch()</code> to retrieve data from one of these <a href="${"https://gist.github.com/acidtone/673dfc5c11ce06e9e8cd6ce33609eb3c"}" rel="${"nofollow"}">Practice APIs</a></li></ol>
<hr>
<h2 id="${"prep"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#prep"}"><span class="${"icon icon-link"}"></span></a>Prep</h2>
<h3 id="${"asynchronous-javascript"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#asynchronous-javascript"}"><span class="${"icon icon-link"}"></span></a>Asynchronous Javascript</h3>
<ul><li>Reading List:<ul><li><a href="${"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts"}" rel="${"nofollow"}">General asynchronous programming concepts</a></li>
<li><a href="${"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing"}" rel="${"nofollow"}">Introducing asynchronous Javascript</a></li>
<li><a href="${"https://dmitripavlutin.com/javascript-fetch-async-await/"}" rel="${"nofollow"}">How to Use Fetch with async/await</a></li></ul></li>
<li>Watch list<ul><li><a href="${"https://www.youtube.com/watch?v=CWjNefiE47Y"}" rel="${"nofollow"}">Async &amp; Await</a> by Programming with Mosh</li></ul></li></ul>`;
});

export { _10_day_10 as default, metadata };
