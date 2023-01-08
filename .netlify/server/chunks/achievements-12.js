import { c as create_ssr_component } from './index.js';

/* src/lib/content/assessments/cpnt-260/achievements-1.md generated by Svelte v3.55.0 */

const metadata = {
	"title": "Achievements Round 1",
	"type": "achievements",
	"points": 15
};

const Achievements_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<h2 id="${"marking-rubric"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#marking-rubric"}"><span class="${"icon icon-link"}"></span></a>Marking Rubric</h2>
<p>Achievements will be marked differently than other Assignments in Brightspace:</p>
<ul><li><strong>You will be graded for three 5-point mini-assignments</strong> (Achievements) in two Rounds over the course of CPNT 260;</li>
<li>Submissions for Achievements Round 1 will close 3pm on Thursday, September 22nd;</li>
<li>In Brightspace, you will receive points for Achievements Round 1 as you submit individual Achievements;</li>
<li>You can choose from any of the following Achievements for this Round;</li>
<li>You will be graded according to the Requirements of the Achievement you’ve submitted;</li></ul>
<hr>
<h2 id="${"achievements"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#achievements"}"><span class="${"icon icon-link"}"></span></a>Achievements</h2>
<hr>
<h3 id="${"dev-book-report"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#dev-book-report"}"><span class="${"icon icon-link"}"></span></a>Dev Book Report</h3>
<p>Find a video or article about HTML/CSS that interests you. It should be current, helpful and come from a credible source.</p>
<p><strong>Restrictions</strong></p>
<ul><li>Videos should be 10 minutes or longer;</li>
<li>Articles should be 350 words or longer.</li>
<li>The reviewed resource should be on a single page. For example, you can’t review the entire <a href="${"https://css-tricks.com/"}" rel="${"nofollow"}">CSS Tricks</a> website.</li></ul>
<p><strong>Instructions</strong>
To receive marks you must:</p>
<ol><li>Create a markdown file with the title <code>dev-book-report.md</code>;</li>
<li>In this file include:<ul><li>The title of the video/article as an level 1 heading;</li>
<li>The name of the author;</li>
<li>The date the video/article was published;</li>
<li>A link to the resource;</li>
<li>Answers to the following questions (150 words max)<ul><li>Why does this video/article interest you?</li>
<li>Given the date of publication, is it still relevant?</li>
<li>How do you know the author is credible?</li></ul></li></ul></li>
<li>Push <code>dev-book-report.md</code> to a GH repo or a gist;</li>
<li>Zip <code>dev-book-report.md</code> and submit the file to Brightspace;</li>
<li>As a comment in your submission, include a link to the repo/gist as a comment in your submission;</li></ol>
<hr>
<h3 id="${"project-board"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#project-board"}"><span class="${"icon icon-link"}"></span></a>Project Board</h3>
<p>Create a 5-card GH Project (Beta) Board containing action items that you need to complete for one of your upcoming assignments or achievements.</p>
<hr>
<h3 id="${"moodboard"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#moodboard"}"><span class="${"icon icon-link"}"></span></a>Moodboard</h3>
<p>Create a moodboard for one of your upcoming assignments or achievements.</p>
<hr>
<h3 id="${"codepen-challenge"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#codepen-challenge"}"><span class="${"icon icon-link"}"></span></a>Codepen Challenge</h3>
<p>Find a Codepen that uses vanilla HTML, CSS and Javascript (optional) that interests you and refactor it into a single, working, valid HTML page.</p>
<p><strong>Restrictions</strong></p>
<ul><li>The Codepen author cannot be a SAIT student or instructor (find someone online with no relation to you);</li>
<li>The Codepen should not use SCSS, Typescript or any other non-browser safe technology (it won’t work otherwise);</li>
<li>You cannot include any other files other than the <code>index.html</code> file. Any needed assets should be hosted online.</li></ul>
<p><strong>Instructions</strong></p>
<ol><li>Copy and paste the code of <a href="${"https://gist.github.com/acidtone/6871979b4f4b04375edb6312dcdba5b7"}" rel="${"nofollow"}">this empty HTML file</a> into a file named <code>index.html</code>. Place this file inside it’s own repo named <code>codepen-challenge</code>.</li>
<li>Move the code inside the Codepen HTML panel to a <code>&lt;body&gt;</code> element of an empty HTML page named <code>index.html</code>;</li>
<li>Move the code inside the CSS panel to a <code>&lt;style&gt;</code> element inside <code>&lt;head&gt;</code> element of the same HTML page;</li>
<li>Move the code inside the JS panel, if it exists, to a <code>&lt;script&gt;</code> at the bottom of the <code>&lt;body&gt;</code> element of the HTML page;</li>
<li>Confirm the page is working as expected;</li>
<li>Push <code>index.html</code> to a GH repo named <code>codepen-challenge</code> and enable GH Pages;</li>
<li>Zip <code>index.html</code> and submit the file to Brightspace;</li>
<li>As a comment in your submission, include links to:<ul><li>the GH repo;</li>
<li>the live demo on GH Pages;</li>
<li>the original Codepen.</li></ul></li></ol>
<hr>
<h3 id="${"above-and-beyond"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#above-and-beyond"}"><span class="${"icon icon-link"}"></span></a>Above and Beyond</h3>
<p>Find one or more HTML and/or CSS technologies not covered in class and demonstrate their use in an HTML page.</p>
<p><strong>Restrictions</strong>
You must choose one of the following for your HTML element and/or CSS technology:</p>
<ul><li>Absolute positioning;</li>
<li>Embedded iframe;</li>
<li>Pseudo-elements;</li>
<li>[more here]</li></ul>
<p><strong>Instructions</strong></p>
<ol><li>Create a demo HTML page named <code>index.html</code> that clearly shows the usefulness of the elements/properties;</li>
<li>Create a <code>README.md</code> and include:<ul><li>a title for your demo as a level 1 heading;</li>
<li>instructions on how to use the demo, if needed;</li>
<li>all Attributions used to create <code>index.html</code> including sample code.</li></ul></li>
<li>Push your files to a GH repo named <code>above-and-beyond</code> and enable GH Pages;</li>
<li>Zip your files and submit them to Brightspace;</li>
<li>As a comment in your submission, include links to:<ul><li>the GH repo;</li>
<li>the live demo on GH Pages;</li></ul></li></ol>
<p><strong>Bonus</strong></p>
<ul><li>You can do two Above and Beyonds in Round 1 for a total of 10 points!</li></ul>
<hr>
<h3 id="${"show-and-tell"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#show-and-tell"}"><span class="${"icon icon-link"}"></span></a>Show and Tell</h3>
<p>Do a 5-minute talk on a topic related to the course. It could be:</p>
<ul><li>A demo of something you built;</li>
<li>A tutorial on how to use a tool;</li>
<li>An awesome [thing here] you found online.</li>
<li>etc, etc.</li></ul>
<p><strong>Restrictions</strong></p>
<ul><li>The length of your talk must be 5 minutes +/- 2.5 minutes;</li></ul>
<p><strong>Instructions</strong></p>
<ol><li>Book a time slot with your Instructor at least a day in advance;</li>
<li>Build, prepare, etc</li>
<li>Show and tell when the time comes!</li></ol>
<p><strong>Bonus</strong>
Double points for your first show and tell!</p>`;
});

export { Achievements_1 as default, metadata };
