# Mohini Portfolio - Project Structure

## 📁 Directory Structure

```
mohini-portfolio/
├── public/                 # Static assets served directly
│   └── vite.svg           # Vite logo
├── src/                   # Source code
│   ├── assets/           # Project assets
│   │   ├── fonts/        # Custom fonts and font setup
│   │   │   ├── fonts.css # Font configuration
│   │   │   └── .gitkeep  # Keep folder in git
│   │   └── images/       # Images and graphics
│   │       ├── README.md # Image organization guide
│   │       └── .gitkeep  # Keep folder in git
│   ├── screens/          # Screen components
│   │   └── screen.js     # Main screen component
│   ├── counter.js        # Counter functionality (legacy)
│   ├── javascript.svg    # JavaScript logo
│   ├── main.js          # Application entry point
│   └── style.css        # Global styles
├── index.html           # HTML template
├── package.json         # Project configuration
└── package-lock.json    # Dependency lock file
```

## 🎨 Assets Organization

### Fonts (`src/assets/fonts/`)
- **fonts.css**: Font imports and CSS custom properties
- Supports Google Fonts (Inter, Poppins) and custom font files
- CSS variables for consistent typography

### Images (`src/assets/images/`)
- Organized by type: icons, photos, logos, backgrounds
- Supports: JPG, PNG, SVG, WebP formats
- Includes optimization guidelines

## 🖥️ Screens Architecture

### Screen Component (`src/screens/screen.js`)
- Modular screen management system
- Easy to extend for multiple pages/views
- Built-in event handling and rendering

## 🎯 Getting Started

1. **Add Images**: Place your images in `src/assets/images/`
2. **Custom Fonts**: Add font files to `src/assets/fonts/` and update `fonts.css`
3. **New Screens**: Create new screen components in `src/screens/`
4. **Styling**: Modify `src/style.css` or create component-specific styles

## 🚀 Development

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
```

## 📝 Notes

- Project uses Vite for fast development and building
- Modern CSS with custom properties and responsive design
- Modular JavaScript architecture for scalability
- Font system ready for custom typography