# 🧁 Experiential Sprinkles Cupcakes: Part 2

Make your cupcake feature interactive by adding a **Next Flavor** button and simple JavaScript to change what’s shown on the page.

## Quick Start

- Fork this repo and open in Codespaces (or clone and open with Live Server).
- Open `index.html` and `script.js`.

## What to Do

1. Add a **Next Flavor** button in `index.html` with id `next-flavor-btn`.
2. In `script.js`, find the cupcake name and image elements using `getElementById`.
3. Make a number variable (`let i = 0;`) to remember which flavor is showing.
4. Write a `show()` function that changes the image and name on the page.
5. Call `show()` once so the first flavor appears.
6. When the button is clicked, change `i` to the next flavor number, go back to the first if needed, and call `show()` again.
7. Use `console.log()` to check which flavor is showing.

## LevelUp Challenge (Optional)

Add a country dropdown so users can choose where they’re from, and update the featured flavor based on each country’s week start day (for example, Saturday for Bahrain).

## You’ll Practice

Arrays & objects → functions/conditionals → DOM selection & updates → console-based debugging.
