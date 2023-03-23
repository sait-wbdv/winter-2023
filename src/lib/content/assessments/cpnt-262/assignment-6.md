---
title: Assignment 6 - Three-page SvelteKit Project
type: assignment
points: 10
---

In this assignment, you will deploy a responsive SvelteKit website application that:
1. has three routes (pages) with a component;
2. uses a single root layout with `<Header>`, `<Footer>` and `<Nav>` components;
3. hosts images locally in `/static/images`.

The website can be based on a topic of your choice.

---
## Marking Rubric
The following will be **worth a total of 10 points**:

### 3 points: Global layout
Each route should use a single root `+layout.svelte` page that:
- includes a `<slot></slot>` to display page content.
- imports CSS that sets fonts, colors and other global styles;
- imports `<Header>`, `<Footer>` and `<Nav>` components from the `$lib/components` directory;
    - if the navigation is inside the header, it should be a nested component.
- highlights the current page in the global navigation.

### 3 points - Gallery route
Your site should incorporate an image gallery that it:
- sets a page title using `<svelte:head>`;
- contains all page-level CSS specific to the route;
- locally hosts images in a `/static/images` directory;
- links to images using absolute links and proper `alt` attributes.

### 4 points - Additional routes (2 points each)
Two additional routes (pages) should be defined so that they:
- set page titles using `<svelte:head>`;
- contain all page-level CSS specific to the route.

Your routes should each incorporate common page elements such as hero section, card gallery, contact form, etc depending on the nature of the page.

The website should high enough production value that you would show it to a client and each page should support the topic of the website.

---

**Points will be deducted for**:
- violations of accessibility, usability and SvelteKit best practices;
- pages that are incomplete or of low fidelity; 
- projects that aren't deployed (3 point deduction);
- syntax errors, 
- logic errors,
- not following the guidelines in [Javascript Basics](https://sait-wbdv.github.io/slides/w23/cpnt-262/js-introduction.html), starting at [Slide 9](https://sait-wbdv.github.io/slides/w23/cpnt-262/js-introduction.html#/9).

---

## Submission Instructions
- Push this assignment to a GitHub repo named `cpnt262-a6` and deploy to Vercel or similar platform;
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
