# Hand Page Crumple Animation

This is a small demo of the "hand grabbing the page" interaction used on my personal website’s **Contact me** button.

## How it works

- The main content is wrapped in a `.page-shell` container.
- A fixed `.hand-cta` overlay sits off-screen with a `hand.png` graphic.
- When the **Contact me** button is clicked:
  - JavaScript adds classes to:
    - Slide the hand down into view (`.is-visible`, `.is-grabbing`)
    - Slightly "crumple" the page (`.page-shell.is-crumpled` transform)
  - After a short delay, the hand moves back up (`.is-pulling`) while
    `scrollIntoView` smoothly scrolls to the contact section.
  - Finally, all classes are reset so the effect can run again.

The visuals are controlled purely by CSS transitions; JavaScript only toggles classes and triggers the scroll.
