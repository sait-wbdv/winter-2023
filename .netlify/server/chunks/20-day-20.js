import { c as create_ssr_component } from './index.js';

/* src/lib/content/courses/cpnt-262/20-day-20.md generated by Svelte v3.55.0 */

const metadata = {
	"title": "Vue Reactivity",
	"excerpt": null,
	"status": "draft"
};

const _20_day_20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<h2 id="${"friday-follow-up"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#friday-follow-up"}"><span class="${"icon icon-link"}"></span></a>Friday Follow Up</h2>
<ul><li>Nuxt Image</li>
<li>Nuxt Icon</li>
<li>Deployment to Netlify</li></ul>
<h3 id="${"activity-add-images-to-a-page"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#activity-add-images-to-a-page"}"><span class="${"icon icon-link"}"></span></a>Activity: Add Images to a Page</h3>
<ul><li><a href="${"https://v1.image.nuxtjs.org/"}" rel="${"nofollow"}">Documentation</a></li>
<li>Add images to <code>assets/images</code> and <code>public/images</code></li>
<li>Use the Nuxt Module to add the images to your page<ul><li>Set using the module’s <code>sizes</code>, <code>width</code>, <code>height</code>, and <code>format</code> attributes</li></ul></li>
<li>Check on the performance using your devtools</li></ul>
<hr>
<h2 id="${"event-listeners-follow-up"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#event-listeners-follow-up"}"><span class="${"icon icon-link"}"></span></a>Event Listeners Follow Up</h2>
<ul><li><a href="${"https://vuejs.org/api/built-in-directives.html#v-on"}" rel="${"nofollow"}">v-on</a> for handling events and functions (use this for things like your hamburger menu)</li></ul>
<h2 id="${"event-handling"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#event-handling"}"><span class="${"icon icon-link"}"></span></a>Event Handling</h2>
<ul><li><a href="${"https://vuejs.org/guide/essentials/event-handling.html"}" rel="${"nofollow"}">Documentation</a></li>
<li><a href="${"https://gist.github.com/lilyx13/74543137780c1958f01e9b470a3cb13b"}" rel="${"nofollow"}">v-on gist</a> with notes on how to use <code>v-on</code></li>
<li><code>v-on</code> is used to listen to DOM events and trigger a javascript handler (often a function)</li>
<li>syntax: <code>v-on:click=&quot;handler&quot;</code><ul><li>or shortened as<code>@click=&quot;handler</code></li></ul></li>
<li>Use this for any buttons on a page<ul><li>set the handler to be a function</li></ul></li>
<li>This can be used with the <a href="${"https://vuejs.org/guide/essentials/template-refs.html"}" rel="${"nofollow"}"><code>ref()</code></a> to make variables more reactive</li></ul>
<h3 id="${"event-modifiers"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#event-modifiers"}"><span class="${"icon icon-link"}"></span></a>Event Modifiers</h3>
<ul><li>To stop a form from being submitted when using a <code>&lt;button&gt;</code>, or to stop other default behaviour, use <code>.prevent</code><ul><li><code>@click.prevent=&quot;myFunction</code></li>
<li>Check out the other event modifiers<ul><li><code>@click.once</code> - will only trigger once</li>
<li><code>@click.passive</code> - great for touch events</li></ul></li>
<li>Key modifiers allow for effecting how an event handler is triggered</li>
<li>You can specify specific keys using key aliases and key modifiers</li></ul></li></ul>
<h4 id="${"creating-switches"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#creating-switches"}"><span class="${"icon icon-link"}"></span></a>Creating Switches</h4>
<ul><li>To make reactive switches, you’ll want to use the following syntax</li>
<li><code>let variable = reactive({val: false})</code><ul><li>this will make a reactive variable that response to v-on well</li></ul></li>
<li><code>const variableSwitch = () =&gt; variable.val = !variable.val</code><ul><li>this will create a switch that changes the variable to false</li></ul></li>
<li><code>&lt;button @click.prevent=&quot;variableSwitch&quot;&gt;Click me&lt;/button&gt;</code><ul><li>note that this doesn’t need to be a button</li></ul></li></ul>
<h3 id="${"activity-make-a-toggle"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#activity-make-a-toggle"}"><span class="${"icon icon-link"}"></span></a>Activity: Make a toggle</h3>
<ul><li>Create a toggle for the v-if that we made in the last activity</li>
<li>Add a <code>@click.prevent</code> directive to a button</li>
<li>Make the event switch the boolean variable between true and false<ul><li><code>variable = !variable</code></li></ul></li>
<li>See your content change!</li></ul>
<hr>
<h2 id="${"reactive-variables-in-vue-3"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#reactive-variables-in-vue-3"}"><span class="${"icon icon-link"}"></span></a>Reactive Variables in Vue 3</h2>
<ul><li><a href="${"https://vuejs.org/guide/essentials/reactivity-fundamentals.html"}" rel="${"nofollow"}">Reactivity Fundamentals</a></li>
<li>syntax:<ul><li><code>ref()</code>: ‘Takes an inner value and returns a reactive and mutable ref object, which has a single property .value that points to the inner value.’</li>
<li><code>reactive()</code>: ‘Returns an active proxy of the object’</li></ul></li>
<li>What they do:<ul><li>Make vue track changes to the variables and re-evaluate dependent variables etc</li></ul></li>
<li>Differences:<ul><li>ref() is for strings, numbers, booleans and objects<ul><li>reactive() is for objects</li></ul></li>
<li>ref() uses <code>.value</code> to access the properties<ul><li>reactive does not</li></ul></li></ul></li>
<li><a href="${"https://medium.com/@bsalwiczek/ref-vs-reactive-in-vue-3-whats-the-right-choice-7c6f7265ce39"}" rel="${"nofollow"}">When to choose each</a><ul><li><strong>for most cases you should use <code>ref()</code></strong></li>
<li><code>reactive()</code> is great for when you need to use map</li></ul></li>
<li>Storage past refresh?<ul><li>for longer term storage, you would use a store like <a href="${"https://pinia.vuejs.org/"}" rel="${"nofollow"}">pinia</a></li></ul></li></ul>
<h3 id="${"activity-create-a-reactive-toggle"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#activity-create-a-reactive-toggle"}"><span class="${"icon icon-link"}"></span></a>Activity: Create a reactive toggle</h3>
<ul><li>Set a ref() variable up as a Boolean toggle</li>
<li>Add a v-on event to the page to change the Boolean value</li>
<li>Use <code>v-show</code> with your toggle to hide/show content</li></ul>
<hr>
<h2 id="${"lab-time"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#lab-time"}"><span class="${"icon icon-link"}"></span></a>Lab Time</h2>
<ul><li>Assignment 4</li>
<li>Practice Vue Content</li></ul>`;
});

export { _20_day_20 as default, metadata };
