---
title: Assignment 6 - Three-page SvelteKit Project
type: assignment
points: 10
---

In this assignment, you will deploy a responsive SvelteKit website application that:
1. has three routes (pages) with a component;
2. uses a single root layout with `<Header>`, `<Footer>` and `<Nav>` components;
3. passes props to components.

The website can be based on a topic of your choice.

---
## Marking Rubric
The following will be **worth a total of 10 points**:

### Routes - 2 points each
Each route should:
- set a page title using `<svelte:head>`;
- contain all page-level CSS specific to the route.

Your site should incorporate:
- an installed third-party package such as a date, chart or utility library (include details in your README);
- common page elements such as hero section, card gallery, contact form, etc.

The website should high enough production value that you would show it to a client and each page should support the topic of the website.

### 4 points: Global layout
Each route should use a single root `+layout.svelte` page that:
- includes a `<slot></slot>` to display page content.
- imports CSS that sets fonts, colors and other global styles;
- imports `<Header>`, `<Footer>` and `<Nav>` components from the `$lib/components` directory;
    - if the navigation is inside the header, it should be a nested component.
- highlights the current page in the global navigation.

---

**Points will be deducted for**:
- violations of accessibility and usability;
- pages that are incomplete or of low fidelity; 
- projects that aren't deployed (3 point deduction);
- syntax errors, 
- logic errors,
- not following the guidelines in [Javascript Basics](https://sait-wbdv.github.io/slides/w23/cpnt-262/js-introduction.html), starting at [Slide 9](https://sait-wbdv.github.io/slides/w23/cpnt-262/js-introduction.html#/9).

---

## Submission Instructions
- Push this assignment to a GitHub repo named `cpnt262-a6` and enable GitHub Pages;
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
