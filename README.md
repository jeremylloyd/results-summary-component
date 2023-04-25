# Results Summary Component

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV).

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./design/mobile-design.jpg)

![](./design/desktop-design.jpg)

### Links

- Live Site URL: [Vercel](https://results-summary-component-three-alpha.vercel.app/)
- Solution URL: [Github](https://github.com/jeremylloyd/results-summary-component)

## My process

### Built with

- HTML5
- JS
- Svelte/SvelteKit
- TailwindCSS
- Vercel

### What I learned

- Svelte
  - It's not possible to create and assign a class name directly from a JS variable name. You can get around this by:
    - Assigning each possible class individually with `class:text-[colour]-500={colour === '[colour]'}`. This is verbose, and needs to be expanded for each new class option but it loads quickly and is easy to set up.
    - Assign a class using JS in the `<script>` tag, once the compoment has rendered by using `onMount()`. Tailwind won't be able to see that the class name is required, so you'll need to add it to the safeList in `tailwind.config.js` to ensure the class isn't purged during compilation. This list will need to be updated for each new class option, but it's a lot less verbose than the first option.
- TailwindCSS
  - It's not too hard once it's installed and you're up and going (assuming you're familiar with CSS) - the [Tailwind docs](https://tailwindcss.com/docs) are comprehensive, accessible and searchable.
