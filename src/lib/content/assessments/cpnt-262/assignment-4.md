---
title: Assignment 4 - Pure function
type: assignment
points: 5
---

In this assignment, you will create a pure function of your choice.

<dl>
    <dt>Pure function</dt>
    <dd>A function that takes arguments as the only inputs and returns the result as its only output. Pure functions don't make any changes to variables outside of the function or store internal variables that store information state across function invocations so that it has no <a href="https://codesweetly.com/side-effect">side-effects</a>.</dd>
</dl>

## Function ideas
This assignment has no starter code. You will be creating a function from scratch that will perform an operation of your choice. You are encouraged to use your imagination but here are some broad ideas to get you started.

Your function can:
- **Perform some mathematical operation** such as converting one unit to another (like our temperature converter) or calculating a new value based on the input(s) (such as our tip and GST calculators);
- **Return a conditional result** based on the input(s) using `if...else` statements (such as our meal recommendation assignment);
- **Modify a string** based on the input(s) (such as our `greet` or capitalization functions).

Or come up with something different/fun/challenging.

## Function requirements
You must create a pure function that:
- _does not_ copy functionality from examples presented in class;
- _does not_ use outside variables that aren't passed as arguments;
- _does not_ change outside variables or store data between function invocations;
- _does_ use a `return` statement to pass its result outside the function.

Additionally, the function must log the function return value to the console.

---

## Instructions
1. Create an empty `index.html` file in the root of your project:
    - set the `<title>` and page's `<h1>` to "Assignment 4: Pure Function"
    - add the external javascript file `js/app.js`.
2. In `app.js`, create a pure function that:
    1. Accepts one or more arguments as its only input;
    2. Performs some operation using the input arguments;
    3. Returns a result using a `return` statement;
3. Invoke your function at least three times with different arguments to demonstrate its functionality and log each result to the console.

---
## Marking Rubric
Each of the following will be **worth 1 point** for a total of 5 points:

### 1. Function declaration
Your function should be defined with:
- a descriptive and appropriately formatted variable name;
- one or more parameters that allows it to perform its function.

### 2. Function operation
Your function should:
- incorporate other Javascript features covered in class (such as conditionals and/or built-in Javascript functions/methods);
- serve a practical purpose that can be used in real-life projects.

### 3. Function invocations
Your script should:
- invoke the function at least three times with different arguments;
- assign the returned results to appropriately named variables (that are located _outside_ the function);
- log each variable to the console.

### 4. Error handing
Using value validation and/or [default parameters](https://www.javascripttutorial.net/es6/javascript-default-parameters/) (ES6) so that:
- no `undefined` results will be logged to the console;
- an error statement is returned when arguments are not passed to the invoked function OR [default parameter values](https://www.javascripttutorial.net/es6/javascript-default-parameters/) are defined using ES6 syntax;
- an error statement is returned when unexpected arguments (such as if a string is passed when a number is expected) are passed to the invoked function.

### 5. Creativity and extended functionality
One point will be given for creating a function that:
- is distinct from examples presented in class;
- incorporates Javascript features and functionality not covered in class;
- allows user-generated input arguments when the page is refreshed by utilizing `window.prompt()`;
- _optionally_, you may output your result to `index.html` using the relevant code provided in Assignment 3.

---

**Points will be deducted for**:
- functions that use outside variables that are not passed as arguments,
- perform [side effects](https://codesweetly.com/side-effect);
- Syntax errors, 
- Logic errors,
- Not following the guidelines in [Javascript Basics](https://sait-wbdv.github.io/slides/w23/cpnt-262/js-introduction.html), starting at [Slide 9](https://sait-wbdv.github.io/slides/w23/cpnt-262/js-introduction.html#/9).

---

## Submission Instructions
- Push this assignment to a GitHub repo named `cpnt262-a4` and enable GitHub Pages;
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
  - A link to the GH Pages site;
  - List the author and links to any Attributions for code and/or assets you used that are not your own;
  - **A brief description of what your function does and how it could be used in a real-life project.**
- Follow guidelines in [Files and Directories - Naming Conventions](https://gist.github.com/acidtone/d77059ec1851eff266339a3df70f6984)
