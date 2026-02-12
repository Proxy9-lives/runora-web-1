# OHZI Interactive Studio - Website Replica

A pixel-perfect replication of the OHZI Interactive Studio website built with React and Vite.

## Features

- ✨ Smooth section transitions with scroll/swipe navigation
- 🎨 3D animated cube with CSS transforms
- 🐟 Underwater scene with animated fish
- 💫 Particle background effects using Canvas
- 📱 Fully responsive design
- ⌨️ Keyboard navigation support (Arrow keys, PageUp/PageDown)
- 🖱️ Mouse wheel navigation
- 👆 Touch/swipe navigation for mobile devices

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually http://localhost:5173)

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Navigation

- **Mouse**: Scroll up/down to navigate between sections
- **Keyboard**: Use Arrow keys or PageUp/PageDown
- **Touch**: Swipe up/down on mobile devices
- **Menu**: Click the hamburger menu in the top-right corner
- **Scroll Indicator**: Click the scroll indicator at the bottom of each section

## Sections

1. **Home** - Landing page with CTA
2. **Who We Are** - Introduction with 3D cube animation
3. **How We Do It** - Process explanation with underwater scene
4. **Our Work** - Portfolio showcase (HTC Viverse project)

## Technologies Used

- React 18
- Vite
- CSS3 (Grid, Flexbox, Animations, 3D Transforms)
- Canvas API for particle effects
- Google Fonts (Unbounded)

## Customization

- Colors and theme variables are defined in `src/index.css`
- Component styles are in `src/App.css`
- Modify section content in individual component files in `src/components/`

## Performance

- Optimized animations using CSS transforms and will-change
- Hardware-accelerated 3D transforms
- Efficient canvas rendering with requestAnimationFrame
- Smooth 60fps transitions

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This is a replica project created for educational purposes.
