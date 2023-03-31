---
title: Final Group Project - Open Data Implementation
type: assignment
points: 35
---

In this group assignment, you will work with your classmates to create a database-driven web application based on openly licensed data found online

**Grading**:
- Group mark: 25 points
- Peer evaluation: 10 points

## Instructions
### Database
These are recommendations, change as needed to fit your requirements:
1. Search for a large CSV dataset that fits your group's preferences;
    - The dataset should have enough rows to require all/most group members to contribute to data cleaning;
2. Download the CSV and load into Google Sheets or Excel to clean your data;
3. Using Global search and replace:
    - "null" &rarr; empty cell;
4. Divide your data among your team members to do the fine cleaning;
    - Import your data into Supabase;
    - Set your number columns to either `Float4` or `Int8` data type
    - Set your `true`/`false` or `0`/`1` columns to `Bool`
5. Use one (or another strategy to clean you data). As you run into Supabase errors, make your changes in Sheet or Excel to fix your issues with, either (or more):
    - Global search and replace;
    - manual value editing;
    - removing rows (last resort).
6. When each team member has cleaned their data, join it back into one dataset and do a final import into Supabase;
    - each one-to-many relationship will require an extra table;
    - each many-to-many relationship will require two extra tables.
7. With a clean, deployed Supabase project, begin building your frontend. 

---

## Marking Rubric
### 10 points: Database
Create a database of information based on openly licensed data decided upon by your group. The data will need to be cleaned up and imported to Supabase.

**Requirements:**
- Each table should have a primary key named `id`;
- Foreign keys should end in `_id`;
- Table and column names should be lowercase with under scores;
- Column data types should reflect the data contained in the columns (for example, a column of numbers shouldn't have a data-type of `Text`);
- Columns with repeating and exhaustive values (i.e. a limited number of values) should be moved to another table in a one-to-many relationship;

### 5 points: List entry and item endpoints
- Build a List Entry route that displays a "gallery" of summarized data;
- Build a Dynamic item endpoint that lists individual item details

### 5 points: ???

### 5 points: ???

### Peer Evaluation: 10 points
At the end of the Final Project, all team members must evaluate their teammates on a scale of 1-10. Each member's mark for this portion will be the average score given to them by their teammates.
- You must submit an evaluation to receive marks for this component;
- Evaluations will be submitted confidentially in Brightspace;
- Your Instructor will adjust this mark based on Assigned tasks (see below) plus commits submitted to GitHub.

### Group Charter (GH Project)
Due: Friday, March 31st @ 11:59pm

To facilitate group communication and transparency, submit a [GitHub Project Board](https://github.com/features/issues) with the following:
1. Board README listing Team members and general roles and responsibilities;
2. Agile columns (i.e. To do, Doing, Done)
3. At least two or three board cards converted to [Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) and [Assigned](https://docs.github.com/en/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users) to each team member that (as a group) each of you have committed to completing;