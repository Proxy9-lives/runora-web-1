# OHZI Interactive Studio Replica - Complete Setup Guide

## Quick Start

1. **Navigate to the project directory:**
   ```bash
   cd ohzi-replica
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - The terminal will show a local URL (usually `http://localhost:5173`)
   - Open this URL in your browser

## Project Structure

```
ohzi-replica/
├── public/                  # Static assets
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx
│   │   ├── HomeSection.jsx
│   │   ├── WhoWeAreSection.jsx
│   │   ├── HowWeDoItSection.jsx
│   │   ├── OurWorkSection.jsx
│   │   ├── ContactFooter.jsx
│   │   ├── ScrollIndicator.jsx
│   │   ├── Cube3D.jsx
│   │   └── BackgroundCanvas.jsx
│   ├── App.jsx              # Main app component
│   ├── App.css              # Component styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── README.md                # Documentation
```

## Features Implemented

### 1. Section Navigation
- **Scroll**: Mouse wheel to navigate between sections
- **Keyboard**: Arrow keys, PageUp/PageDown
- **Touch**: Swipe gestures on mobile
- **Menu**: Hamburger menu for direct navigation
- **Scroll Indicator**: Clickable scroll indicator at bottom

### 2. Animations & Effects
- **3D Cube**: Rotating cube with glass-morphism effect
- **Particle Background**: Canvas-based starfield
- **Underwater Scene**: Animated fish swimming across screen
- **Light Beam**: Atmospheric lighting effect
- **Smooth Transitions**: Fade in/out between sections
- **Pulse Animations**: Breathing effects on interactive elements

### 3. Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 1024px
- Touch-friendly navigation
- Adaptive typography with clamp()

### 4. Performance Optimizations
- CSS transforms for GPU acceleration
- will-change hints for animations
- requestAnimationFrame for canvas
- Optimized particle count
- Efficient event listeners

## Customization Guide

### Colors
Edit in `src/index.css`:
```css
:root {
  --bg-primary: #111;
  --text-primary: #fff;
}
```

### Typography
The site uses Google Fonts - Unbounded. To change:
1. Update the font import in `index.html`
2. Update `--font-unbounded` in `src/index.css`

### Section Content
Each section has its own component file:
- Home: `src/components/HomeSection.jsx`
- Who We Are: `src/components/WhoWeAreSection.jsx`
- How We Do It: `src/components/HowWeDoItSection.jsx`
- Our Work: `src/components/OurWorkSection.jsx`

### Animation Speed
Adjust transition durations in `src/App.css`:
```css
.section {
  transition: opacity 0.8s ease-in-out; /* Change 0.8s */
}
```

### 3D Cube
Modify rotation speed in `src/App.css`:
```css
@keyframes rotateCube {
  /* Current: 20s rotation */
}
```

### Particle Effects
Adjust in `src/components/BackgroundCanvas.jsx`:
- `particleCount`: Number of particles (default: 100)
- `speedX/speedY`: Particle movement speed
- `opacity`: Particle visibility

## Navigation Flow

The website follows this navigation pattern:
```
Home → Who We Are → How We Do It → Our Work → (loops back to Home)
```

Users can navigate:
- Forward: Scroll down, Arrow Down, PageDown, Swipe up
- Backward: Scroll up, Arrow Up, PageUp, Swipe down
- Direct: Click menu items or scroll indicators

## Known Limitations

1. **Image Assets**: The project uses an inline SVG placeholder for the HTC Viverse project image. Replace with actual images as needed.

2. **3D Cube Content**: The cube displays gradient backgrounds. Add custom content inside `.cube-inner` elements.

3. **Fish Animation**: Uses CSS-only fish shapes. Consider adding SVG fish for more detail.

4. **Menu Close**: The menu doesn't auto-close on outside click (feature can be added).

## Adding New Sections

1. Create a new component in `src/components/`:
```jsx
import React from 'react';

const NewSection = ({ isActive, onNavigate }) => {
  return (
    <div className={`section new-section ${isActive ? 'active' : ''}`}>
      {/* Your content */}
    </div>
  );
};

export default NewSection;
```

2. Add styles in `src/App.css`:
```css
.new-section {
  /* Your styles */
}
```

3. Import and use in `src/App.jsx`:
```jsx
import NewSection from './components/NewSection';

// Add to sections array
const sections = ['home', 'who-we-are', 'how-we-do-it', 'our-work', 'new-section'];

// Add to JSX
<NewSection 
  isActive={currentSection === 'new-section'} 
  onNavigate={handleNavigate}
/>
```

## Troubleshooting

### Dependencies won't install
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Port already in use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Animations are choppy
- Reduce particle count in BackgroundCanvas.jsx
- Reduce number of fish in HowWeDoItSection.jsx
- Check browser performance settings

### Mobile scrolling issues
- Ensure touch events are not being blocked by other elements
- Check that passive event listeners are properly configured

## Production Deployment

### Build
```bash
npm run build
```

### Preview locally
```bash
npm run preview
```

### Deploy to Netlify/Vercel
1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/ohzi-replica",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## Browser Testing

Tested on:
- ✅ Chrome 120+
- ✅ Firefox 120+
- ✅ Safari 17+
- ✅ Edge 120+
- ✅ iOS Safari 17+
- ✅ Chrome Mobile

## Performance Metrics

Target performance:
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- 60fps animations

## Credits

Original design: OHZI Interactive Studio (https://ohzi.io/)
Replica built with: React + Vite
Font: Unbounded by Google Fonts

## Support

For issues or questions about this replica:
1. Check the troubleshooting section above
2. Review the React documentation: https://react.dev
3. Review the Vite documentation: https://vitejs.dev

## Future Enhancements

Potential improvements:
- [ ] Add actual project images
- [ ] Implement video backgrounds
- [ ] Add WebGL effects for richer graphics
- [ ] Implement cursor follower effect
- [ ] Add sound effects for interactions
- [ ] Create admin panel for content management
- [ ] Add more interactive elements in 3D cube
- [ ] Implement lazy loading for images
- [ ] Add analytics tracking
- [ ] Create CMS integration
