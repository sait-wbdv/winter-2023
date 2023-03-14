---
title: Assignment 5 - Loops and arrays
type: assignment
points: 5
---

In this assignment, you will:
1. use a loop to prompt the user multiple times for input (with `prompt()`), 
2. add the responses to an array and 
3. output the result to the page.

**Examples:**
- Ask the user for a set number of hobbies;
- Ask the user for a series of numbers that are added as a total;

Once the user has entered the items, output them to the page as either:
- a comma-separated list (for strings),
- some arithmetic result such as a sum (in the case of numbers).

---

## Instructions
1. Create a loop (using a loop statement of your choice) with a `prompt()` inside it;
2. Set the loop to run a set number of times;
3. Provide feedback in the `prompt()` message so that they know how many more times they need to enter input (i.e. "x times remaining.");
4. Each time the user enters input in the `prompt()`, add the item to an array (this should be done from inside the loop);
5. When the loop completes:
    - log the array to the console;
    - user `.join()` or similar method to create a single string listing the results as a comma-separated list.
6. Assign the comma-separated list to the `output` variable.

---
## Marking Rubric
The following will be **worth a total of 5 points**:

### 2 points: Loop with `prompt()`
- The loop should run at least three times;
- The loop should run a limited number of times. For example:
    - a set number of times based on `i` in a `for` loop;
    - until the inputted numbers add up to a certain sum;
    - until all the empty slots in an array are filled.
- The `prompt()` message should let the user know when the loop will stop (i.e. "x answers remaining").

### 1 point: Adding results to an array
Each time the user enters input, the answer should be added to an array using either:
- `array.push()`, or
- `array[array.length]`.

### 1 point: Create output
Once the answers have been entered (i.e. the loop completes):
- The array should be logged to the console;
- The array should be displayed on the page for the user as a comma separated list.

### 1 point: Above and Beyond
For an extra point, complete ONE or more of the following to enhance your project:
- Use a loop other than `for`;
- Use `break` to stop the loop when a certain answer is given;
- Use an additional array method of your choice other than `array.join()` and `array.push()`;
- Produce a grammatically correct response by adding an "and" before the last item in your comma-separated list;
- Complete the assignment as a SvelteKit App.

---

**Points will be deducted for**:
- infinite loops,
- functionality that is too similar to examples provided in class,
- syntax errors, 
- logic errors,
- not following the guidelines in [Javascript Basics](https://sait-wbdv.github.io/slides/w23/cpnt-262/js-introduction.html), starting at [Slide 9](https://sait-wbdv.github.io/slides/w23/cpnt-262/js-introduction.html#/9).

---

## Submission Instructions
- Push this assignment to a GitHub repo named `cpnt262-a5` and enable GitHub Pages;
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
  - **A brief description of what your application does and how it could be used in a real-life project.**
- Follow guidelines in [Files and Directories - Naming Conventions](https://gist.github.com/acidtone/d77059ec1851eff266339a3df70f6984)
