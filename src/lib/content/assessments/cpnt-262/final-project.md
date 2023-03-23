---
title: Final Project - Multi-page Website with Gallery
type: assignment
points: 25
---

In this assignment, you will deploy a multi-page SvelteKit website based on a topic of your choice.

---
## Marking Rubric
Each of the following will be **worth 5 points for a total of 25 points**:

### 1. Imported gallery data
Create a `/src/lib/data.js` file (name should be more descriptive to your content) that exports (using the `export` keyword) an **array** of at least 9 **objects** that contain information for an image-based gallery.

Each object should contain enough detailed information about your items to provide summary information in your gallery and detailed information on your item pages.


### 2. Gallery list entry page 
Create a dynamic gallery page that is driven from an `{#each}` loop of the imported data above. Each gallery card should contain:
- the title as a heading;
- the description inside a paragraph or figcaption;
- a locally hosted (in `/static`) thumbnail image that:
    - has a proper `alt` attribute, and
    - links to an appropriately sized image (less than 500px).

The entire card should be clickable and link to a more detailed item page (see below).

Additionally, the gallery page should:
- contain a custom page title using `<svelte:head>`;
- contain all page-level CSS specific to the route;
- display its cards using an imported `Card.svelte` component with defined props.

### 3. Dynamic gallery item route
Using route parameters, create a dynamic route that will display the details of each gallery item above. Each page should:
- include more details than the summary cards on the gallery pages;
- be driven by the same imported data array as the gallery page;
- include a large version of the thumbnail shown on the gallery page (also hosted in `/static`);
- not show `undefined` values and show an "Item not found" message if invalid parameters are encountered.

Additionally, each item page should contain:
- a custom page title based on the imported data using `<svelte:head>`;
- all page-level CSS specific to the route.

### 4. Existing webpage features
Include page features that you've already created in past assignments:
- `+layout.svelte` page with imported:
    - Global `./app.css`
    - `Header.svelte`
    - `Nav.svelte`
    - `Footer.svelte`
- At least two other static routes, such as:
    - Home page with hero section
    - Contact page with [formspree](https://formspree.io/) contact form
    - About page with long for text
    - etc

### 5. Third-party library
Create a proof-of-concept example on your site using a third-party library not covered in class.
- A date library such as [DayJS](https://day.js.org/).
- A charting library such as [`svelte-chartjs`](https://www.npmjs.com/package/svelte-chartjs).
- A [UI library](https://studentsxstudents.com/5-best-svelte-ui-libraries-for-your-next-project-3632ca34daa8), such as:
    - [Svelte Material UI](https://sveltematerialui.com/) (svelte and Google's Material UI)
    - [SvelteStrap](https://sveltestrap.js.org/?path=/story/components--get-started) (Svelte and Bootstrap)
    - [SvelteFlat UI](https://svelteui.js.org/#/) (Svelte and Flat Design)
    - [Svelte Particles](https://particles.matteobruni.it)
    - [SmelteJS](https://smeltejs.com/) (Svelte and TailwindCSS)
- Write your content in markdown with [`mdsvex`](https://mdsvex.com/) (this is the library that powers the SAIT WBDV website).


---

**Points will be deducted for**:
- violations of accessibility, usability and SvelteKit best practices;
- a page that is incomplete or of low fidelity; 
- projects that aren't deployed (3 point deduction);
- syntax errors, 
- logic errors,
- not following the guidelines in [Javascript Basics](https://sait-wbdv.github.io/slides/w23/cpnt-262/js-introduction.html), starting at [Slide 9](https://sait-wbdv.github.io/slides/w23/cpnt-262/js-introduction.html#/9).

---

## Submission Instructions
- Push this assignment to a GitHub repo named `cpnt262-final-project` and deploy to Vercel or similar platform;
- ZIP all files required for the site to operate and submit to Brightspace;
- Include the following as a comment in your Brightspace submission:
  - GH repo
  - Live deploy link

### Submission requirements
Points will be deducted for failing to fulfill the following:
- Include a `README.md` in your project that contains the following information:
  - Course title;
  - Assignment name;
  - Author name;
  - A link to the GH Pages site;
  - List the author and links to any Attributions for code and/or assets you used that are not your own;
- Follow guidelines in [Files and Directories - Naming Conventions](https://gist.github.com/acidtone/d77059ec1851eff266339a3df70f6984)
