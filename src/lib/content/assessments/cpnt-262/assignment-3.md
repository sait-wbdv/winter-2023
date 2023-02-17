---
title: Assignment 3 - If This, Then That
type: assignment
points: 5
---

In this assignment, you will use conditional statements (`if`, `else if`, `else`, etc) to provide the user a meal recommendation based on options submitted in an HTML form.

---

## Instructions
1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) and [clone](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository) the [starter repo](https://github.com/sait-wbdv/w23-262-a3-starter) ([live demo](https://sait-wbdv.github.io/w23-262-a3-starter/)) for this assignment into your workspace;
2. Using conditional statements in `js/app.js` (**after Line 29**):
    - assign a meal recommendation to the `answer` variable;
    - ensure no combination of form options outputs an `undefined` meal recommendation to the page;
    - Additional points will be awarded for more unique meal recommendations and/or form upgrades.

---
## Marking Rubric
This assignment is worth 5 points for the following:

### 1 point: No `undefined` recommendations
Using conditional statements, ensure that no combination of form options produce an `undefined` meal recommendation.

### 2 point: Seven different recommendations
Using conditional statements, produce at least 7 different meal recommendations based on at least one form option (i.e. day of the week).

**Example**: output a different meal for everyday of the week.

### 1 point: Incorporate both form options
Using logical operators (`&&`, `||`, etc), produce at least three recommendations that are based a combination of two form options.

**Example**: "Wings" are recommended for dinner on Wednesdays.

Partial marks will be awarded for nested `if` statements (or similar) instead of logical operators.

### 1 point: Error handling
If the user does not select _both_ a day of the week and meal of the day, produce a "Please select both options" error message _instead_ of a meal recommendation.

---

**Points will be deducted for**:
- Not using `else if` and `else` statements;
- Using the `==` comparison operator instead of `===`;
- Editing code in `index.html` or `main.css`,
- Editing `app.js` below the "Do not edit this code" comment,
- Syntax errors, 
- Logic errors,
- Not following the guidelines in [Javascript Basics](https://sait-wbdv.github.io/slides/w23/cpnt-262/js-introduction.html), starting at [Slide 9](https://sait-wbdv.github.io/slides/w23/cpnt-262/js-introduction.html#/9).

---

## Submission Instructions
- Push this assignment to a GitHub repo named `cpnt262-a3` and enable GitHub Pages;
- ZIP all files required for the site to operate and submit to Brightspace;
- Include the following as a comment in your Brightspace submission:
  - GH repo
  - GH Pages site

### Submission requirements
Points will be deducted for failing to fulfill the following:
- Include a `README.md` in your project that contains the following information:
  - Course title;
  - Assignment name;
  - Author name;
  - A link to the GH Pages site
  - List the author and links to any Attributions for code and/or assets you used that are not your own;
- Follow guidelines in [Files and Directories - Naming Conventions](https://gist.github.com/acidtone/d77059ec1851eff266339a3df70f6984)
