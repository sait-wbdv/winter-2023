## Lab Time
### Activities
Take your Wiki content from yesterday (or come up with new content) and make your text more readable and pretty:
1. **Define your typography triad**: 
    - Declare your body text font using the `font-family` declaration and on the `body` tag. 
    - Include settings for `line-height` (default is `1.2`; try for `1.5`-`2`) and increase the `font-size` to something larger than `16px` (the default on most browsers):
        ```css
        body {
          font-family: Arial Black, Gadget, sans-serif;
          font-size: 18px;
          line-height: 1.6;
        }
        ```
    - Create a `.text-box` class that sets `max-width` on a container. Centre it with `margin: auto`, if desired.
2. **Declare a Display font**: Declare a secondary font on your headings using a group selector:
    
    ```css
    h1, h2, h3, h4, h5, h6 {
      font-family: Palatino Linotype, Book Antiqua, Palatino, serif;
    }
    ```
3. **Get fancy**: Add more visual hierarchy to your headings with one of more of the following "fancy" declarations:
    - [`font-variant`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant): Used for setting small caps;
    - [`letter-spacing`](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing): Great for spacing letters in headings;
    - [`word-spacing`](https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing): Rarely used but can come in handy for logos and site titles;

4. **Responsive text**: Declare your font size as a percentage of viewport width using [`clamp()`](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp).

5. **Custom `font-family` pairings**: Create two to three custom font pairings using Google Fonts with system and generic families as fallbacks.
    - Search: "[google font pairing](https://www.google.com/search?q=best+google+font+combinations)"
    - See: [Get Started with the Google Fonts API](https://developers.google.com/fonts/docs/getting_started)

6. **Icon fonts**: Try adding [Font Awesome Icons](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use). Hint: it's often easier to embed FA using [CDNJS](https://cdnjs.com/libraries/font-awesome).
    - Advanced: Font Awesome using [pseudo-elements](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements) 
        - Watch: [Before and After pseudo elements explained](https://youtu.be/zGiirUiWslI)
        - Watch: [Setting up Font Awesome icons as pseudo-elements](https://youtu.be/lMBa7gLWyO4)
7. **[Customize your list styling](https://css-tricks.com/almanac/properties/l/list-style/)**
