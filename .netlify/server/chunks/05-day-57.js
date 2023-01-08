import { c as create_ssr_component } from './index.js';

/* src/lib/content/courses/dsgn-270/05-day-5.md generated by Svelte v3.55.0 */

const metadata = {
	"title": "Day 5 SVG Editing and Design",
	"excerpt": null,
	"status": "draft"
};

const _05_day_5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `<h2 id="${"intro-to-figma"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#intro-to-figma"}"><span class="${"icon icon-link"}"></span></a>Intro to Figma</h2>
<p>Before we worked with Figjam as a planning tool, now we will be using Figma as a design tool.</p>
<h3 id="${"what-to-expect-from-figma"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#what-to-expect-from-figma"}"><span class="${"icon icon-link"}"></span></a>What to expect from Figma</h3>
<ul><li>Figma is a UX focused design tool that specializes in vector Editing</li>
<li>It has less features than Inkscape or Adobe Illustrator because it’s meant for basic shape manipulations<ul><li>Use Inkscape or Illustrator for advanced svg and vector editing work</li>
<li>Use Gimp or Adobe Photoshop for raster image editing work (rasters are images like pictures)</li></ul></li>
<li>Figma is similar to Penpot or Adobe XD. They all have less path manipulation tools but feature prototyping and UI design focused tools</li></ul>
<h2 id="${"1-figma-review"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#1-figma-review"}"><span class="${"icon icon-link"}"></span></a>1. Figma Review</h2>
<h3 id="${"materials"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#materials"}"><span class="${"icon icon-link"}"></span></a>Materials</h3>
<ul><li><a href="${"https://www.youtube.com/playlist?list=PLXDU_eVOJTx7QHLShNqIXL1Cgbxj7HlN4"}" rel="${"nofollow"}">Figma Tutorial Video Playlist</a></li>
<li><a href="${"https://webdesign.tutsplus.com/courses/using-figma-for-svg-design/lessons/drawing-tools-overview"}" rel="${"nofollow"}">Figma Drawing Tools Overview</a></li>
<li><a href="${"https://medium.com/@saintasia/5-of-your-favorite-illustrator-tools-in-figma-a7c2aaa45d59"}" rel="${"nofollow"}">5 of your favorite Illustrator tools in Figma</a></li></ul>
<h3 id="${"basic-shapes-and-tool-walk-through"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#basic-shapes-and-tool-walk-through"}"><span class="${"icon icon-link"}"></span></a>Basic Shapes and Tool walk through</h3>
<ul><li>Main tools are on the top left</li></ul>
<h4 id="${"layout"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#layout"}"><span class="${"icon icon-link"}"></span></a>Layout</h4>
<ul><li>Pages: Separate pages for content</li>
<li>Assets: Content shared between pages</li>
<li>Layers: Groups of content on pages</li></ul>
<h4 id="${"shapes"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#shapes"}"><span class="${"icon icon-link"}"></span></a>Shapes</h4>
<ul><li>ellipses</li>
<li>squares</li>
<li>lines</li>
<li>text</li></ul>
<h4 id="${"details"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#details"}"><span class="${"icon icon-link"}"></span></a>Details</h4>
<ul><li>Right side of the UI has all the details and specifics of each tool<ul><li>color, alignment, object layers, fonts…</li></ul></li>
<li>Also access your defaults here when you make them</li>
<li>Export can be found at the bottom of the right panel</li></ul>
<h2 id="${"2-demo-tracing-with-the-pen-tool"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#2-demo-tracing-with-the-pen-tool"}"><span class="${"icon icon-link"}"></span></a>2. Demo: Tracing with the Pen Tool</h2>
<h3 id="${"materials-1"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#materials-1"}"><span class="${"icon icon-link"}"></span></a>Materials</h3>
<ul><li><a href="${"https://help.figma.com/hc/en-us/articles/360040450133-Using-Shape-Tools"}" rel="${"nofollow"}">Using Shape Tools</a></li>
<li><a href="${"https://help.figma.com/hc/en-us/articles/360040450213-Vector-networks"}" rel="${"nofollow"}">Vector Networks</a></li>
<li>See <a href="${"https://help.figma.com/hc/en-us/articles/360040450213-Vector-networks"}" rel="${"nofollow"}">All Figma Guides</a></li></ul>
<h3 id="${"activity-the-bezier-game"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#activity-the-bezier-game"}"><span class="${"icon icon-link"}"></span></a>Activity: The Bezier Game!</h3>
<ul><li><a href="${"https://bezier.method.ac/"}" rel="${"nofollow"}">Link to Game</a><ul><li>In groups of 4 Try creating as many images as you can with the bezier tool</li>
<li>All vector design programs have a version of the pen tool that follows the same basic principles</li></ul></li>
<li>15 minutes<ul><li>Take turns screen sharing and learn from one another</li></ul></li>
<li>Debrief: each group show 1 <strong>aha</strong> moment that you had while working on this</li></ul>
<h2 id="${"3-demo-boolean-operations"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#3-demo-boolean-operations"}"><span class="${"icon icon-link"}"></span></a>3. Demo: Boolean operations</h2>
<ul><li><p>Boolean operations are used to manipulate objects.</p>
<ul><li><strong>Union</strong>: Union combines the selected shapes into a boolean group. If the objects overlap, the new shape’s outer path consists of the composite of its sublayers’ paths minus any segments that overlap. The stroke would then be applied to that outer path ignoring any path segments which overlap each other.</li>
<li><strong>Subtract</strong>: Subtract is the opposite of Union. Subtract removes the area of a shape or set of shapes from a base shape. Only the bottom shape layer is solid, the rest are subtracted from it.</li>
<li><strong>Intersect</strong>: Intersect creates a boolean group whose shape consists only of the overlapping parts of its sublayers.</li>
<li><strong>Exclude</strong>: Exclude is the opposite of Intersect. Exclude shows only the areas of its sublayers that do not overlap.</li></ul></li>
<li><p>Definitions from: <a href="${"https://help.figma.com/hc/en-us/articles/360039957534-Boolean-Operations"}" rel="${"nofollow"}">Boolean Operations in Figma</a></p></li></ul>
<h3 id="${"activity-try-each-boolean"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#activity-try-each-boolean"}"><span class="${"icon icon-link"}"></span></a>Activity: Try Each Boolean</h3>
<ul><li>Search up simple logos and icons and try one of each</li>
<li>It can be helpful to divy up the roles among your team so each of you has experience with one and can guide the others a bit</li>
<li>Debrief: show an example of each boolean</li></ul>
<hr>
<h2 id="${"vector-design"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#vector-design"}"><span class="${"icon icon-link"}"></span></a>Vector Design</h2>
<ul><li>Used for logo design (this is what we will be doing on Monday)</li>
<li>As well as UI design</li>
<li>This is a core skill in graphic design and one that developers should cultivate some working knowledge of</li>
<li>SVG is a vector file format that we can use directly in our code. We will start Monday morning with a look at the code side of vectors, so it’s good to get some eperience working with them over the weekend</li></ul>
<h2 id="${"design-pictionary"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#design-pictionary"}"><span class="${"icon icon-link"}"></span></a><a href="${"https://gist.github.com/lilyx13/2faa31ede90adf23c001f3482697436a"}" rel="${"nofollow"}">Design Pictionary</a></h2>
<ul><li>30 Minutes</li>
<li>Submit an svg or png and the link to your design space from the game by 3pm today (if you used multiple files, than you only need to submit your favourite). 80% class submission will mean late start on Monday</li></ul>
<h2 id="${"homework"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#homework"}"><span class="${"icon icon-link"}"></span></a>Homework</h2>
<ul><li>Find a logo design tutorial on youtube and do the design in it<ul><li><strong>We will be reviewing these on monday</strong></li>
<li><a href="${"https://www.youtube.com/c/LogosByNick/playlists"}" rel="${"nofollow"}">Logos by Nick</a> has a lot of great beginner tutorials. He is using inkscape, but many of the tutorials can also be done with Figma. try translating based on your knowedge of what Figma can do</li>
<li>Submissions made before Sunday at 11:59 will get a bonus point added to their next assignment<ul><li>Submission Includes:<ul><li>Viewable link to your design file in Figma</li>
<li>Link to the tutorial that you worked off of</li>
<li><em>does not need to be perfect or entirely finished</em></li></ul></li></ul></li></ul></li></ul>`;
});

export { _05_day_5 as default, metadata };
