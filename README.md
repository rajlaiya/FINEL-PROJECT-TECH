# FINEL-PROJECT-TECH

demo website for software company

---

## Section Loading Animation (0 → 100%)

A full-screen loading animation plays every time a user navigates between sections. It counts from **0 to 100** with rich visual effects, then fades out to reveal the page content.

### Components

| File                               | Purpose                                                                |
| ---------------------------------- | ---------------------------------------------------------------------- |
| `src/components/SectionLoader.jsx` | React component — renders the loader UI and drives the 0→100 counter   |
| `src/index.css`                    | CSS keyframes & utility classes for all loader animations              |
| `src/App.jsx`                      | Triggers the loader on every page/section change via `isLoading` state |

### Visual Elements

1. **Giant Glitch Counter (000 → 100)**
   - Massive 3-digit monospace number displayed center-screen
   - Gradient text: blue → purple → pink → amber (light mode) / cyan → indigo → pink → yellow (dark mode)
   - Two translucent shadow layers behind the number with a subtle **glitch/shake** effect (`loader-glitch-1`, `loader-glitch-2`)

2. **9-Cube Progress Grid**
   - A row of 9 small squares below the counter
   - Cubes light up sequentially left-to-right as progress fills
   - Active cubes use a glowing gradient with a soft box-shadow
   - Inactive cubes stay muted and slightly scaled down

3. **Scanline Sweep**
   - A thin horizontal line continuously scrolls from top to bottom of the screen
   - Creates a tech/sci-fi aesthetic
   - Color-matched to theme (blue in light, cyan in dark)

4. **Corner Accents**
   - Decorative L-shaped borders in all four corners of the viewport
   - Styled with semi-transparent blue/cyan strokes

5. **Thin Progress Bar**
   - A narrow horizontal bar (2px) below the cube grid
   - Fills left-to-right from 0% to 100% width with a tri-color gradient

6. **Status Indicator**
   - A blinking green dot + monospace text
   - Shows "LOADING RESOURCES" while in progress, switches to "COMPLETE" at 100%

7. **Background Grid**
   - A faint blueprint-style grid pattern covers the entire viewport
   - Very low opacity (3–4%) so it's subtle

### Theme Support

The loader is fully theme-aware:

- **Light mode** — white background, blue/purple/pink gradients, blue scanline
- **Dark mode** — near-black background (`#0a0e1a`), cyan/indigo/pink gradients, cyan scanline

Theme is detected via the `.dark` class on `:root`, consistent with the rest of the app's Tailwind dark-mode setup.

### How It Triggers

In `App.jsx`, the `handlePageChange` callback sets `isLoading = true` whenever the user navigates to a different page. The `<SectionLoader>` component is conditionally rendered as a fixed overlay. Once the animation completes, it calls `handleLoadingComplete` which sets `isLoading = false`, unmounting the loader.

```jsx
{
  isLoading && <SectionLoader onComplete={handleLoadingComplete} />;
}
```
