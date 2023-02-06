### Demo: Course gallery page
- [starter code](https://github.com/sait-wbdv/dailies-f22/tree/main/2022-10-03-galleries/01-course-page-starter)

### Activity: Card gallery
Create a list of cards and display them as a gallery:
1. Take your card assignment, the [answer solution to 260-a2](https://github.com/sait-wbdv/f22-spoilers-cpnt260-a2), [this starter gallery](https://github.com/sait-wbdv/dailies-f22/tree/main/2022-10-03-galleries/04-activity-flex-gallery-starter) or build a new list of at least 6 cards;
2. Wrap your cards in a container such as a `<section>` element;
    - Create a flex container with `display: flex;`
    - Wrap your items with `flex-wrap: wrap;`
    - Centre your items with `justify-content: center;`
    - Space out your items with `gap: 1rem;` (or similar length);
3. Using your choice of `flex` values (and optional media queries), style a responsive gallery that:
    - has 3 or more columns on wide screens;
    - has only one column on mobile screens.

**Questions to consider**:
- How wide should the items be?
- Should they grow when there's extra space?
- What happens if you set the width with `width` or the "Flex-way" with `flex-basis`?
