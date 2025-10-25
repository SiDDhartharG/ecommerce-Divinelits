# DivineLits Color System

A simplified color palette system for the DivineLits ecommerce platform, designed for consistency and ease of use.

## 🎨 Core Color Variables

### Primary Colors
```css
--color-primary: #b8860b;           /* Divine Gold */
--color-primary-dark: #8b6508;      /* Darker gold */
```

### Text Colors
```css
--color-text: #2d2319;              /* Main text */
--color-text-light: #8a7a6a;        /* Light text */
```

### Background Colors
```css
--color-bg: #f3f2ee;                /* Main background */
--color-bg-card: #ffffff;           /* Card background */
```

### Border Colors
```css
--color-border: #b8860b;            /* Main border */
--color-border-light: #e6d9a0;      /* Light border */
```

### State Colors
```css
--color-success: #10b981;            /* Success green */
--color-error: #ef4444;             /* Error red */
```

### Shadow Colors
```css
--color-shadow: rgba(184, 134, 11, 0.1);
--color-shadow-hover: rgba(184, 134, 11, 0.2);
```

## 🌈 Gradients

### Pre-defined Gradients
```css
--gradient-primary: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
--gradient-card: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(252, 248, 240, 0.8));
```

## 🛠️ Usage Examples

### CSS Variables
```css
.my-button {
  background-color: var(--color-primary);
  color: white;
  border: 1px solid var(--color-border);
}

.my-button:hover {
  background-color: var(--color-primary-dark);
  box-shadow: 0 4px 15px var(--color-shadow-hover);
}
```

### Tailwind Classes
```html
<!-- Primary button -->
<button class="bg-primary text-white hover:bg-primary-dark shadow">
  Click me
</button>

<!-- Text with different colors -->
<h1 class="text-text">Main Heading</h1>
<p class="text-text-light">Light text</p>

<!-- Cards with backgrounds -->
<div class="bg-bg-card border border-light shadow">
  Card content
</div>

<!-- State indicators -->
<div class="text-success">Success message</div>
<div class="text-error">Error message</div>
```

### Utility Classes
```html
<!-- Color utilities -->
<div class="text-primary">Primary text</div>
<div class="bg-primary">Primary background</div>
<div class="border">Main border</div>

<!-- Gradient utilities -->
<div class="bg-gradient-primary">Gradient background</div>

<!-- Shadow utilities -->
<div class="shadow">Main shadow</div>
<div class="shadow-hover hover:shadow-hover">Hover shadow</div>

<!-- Interactive utilities -->
<button class="hover-lift">Hover effects</button>
```

## 🎯 Component Examples

### Elegant Card
```html
<div class="elegant-card p-6">
  <h3 class="elegant-heading">Card Title</h3>
  <p class="elegant-text">Card content goes here</p>
  <button class="elegant-button">Action</button>
</div>
```

### Form Input
```html
<input 
  class="w-full p-3 border border-light rounded-lg 
         focus:border-primary focus:shadow bg-bg-card 
         text-text" 
  placeholder="Enter text..."
/>
```

### Navigation Link
```html
<a class="text-primary hover:text-primary-dark 
         hover:underline hover:underline-offset-4 
         transition-all duration-300">
  Navigation Link
</a>
```

## 🔄 Migration Guide

### From Hard-coded Colors
```css
/* Old */
color: #b8860b;
background: #f3f2ee;
border: 1px solid #8b6508;

/* New */
color: var(--color-primary);
background: var(--color-bg);
border: 1px solid var(--color-border);
```

### From Tailwind Classes
```html
<!-- Old -->
<div class="text-divine-gold-500 bg-divine-cream-100 border-divine-bronze-500">

<!-- New -->
<div class="text-primary bg-bg-card border">
```

## 📱 Responsive Considerations

The color system works seamlessly across all device sizes. Use the same variables and classes for consistent theming:

```css
@media (max-width: 768px) {
  .mobile-card {
    background: var(--color-bg-card);
    border: 1px solid var(--color-border-light);
  }
}
```

## 🎨 Customization

To modify the color scheme, update the CSS variables in `src/styles/globals.css`:

```css
:root {
  --color-primary: #your-new-color;
  --color-primary-dark: #your-darker-shade;
}
```

All components using these variables will automatically update to reflect the new colors.

## 📋 Best Practices

1. **Always use CSS variables** instead of hard-coded colors
2. **Keep it simple** - use only the colors you need
3. **Leverage Tailwind classes** for rapid development
4. **Test color contrast** for accessibility
5. **Use state colors** for user feedback (success, error)
6. **Maintain consistency** across all components

## 🔍 Available Tailwind Classes

### Text Colors
- `text-primary`, `text-primary-dark`
- `text-text`, `text-text-light`

### Background Colors
- `bg-primary`
- `bg-bg`, `bg-bg-card`

### Border Colors
- `border`, `border-light`

### Gradients
- `bg-gradient-primary`, `bg-gradient-card`

### Shadows
- `shadow`, `shadow-hover`

### Interactive
- `hover-lift`, `hover-shadow`

### State Colors
- `text-success`, `text-error`
- `bg-success`, `bg-error`

This simplified color system ensures consistency, maintainability, and a beautiful user experience across the entire DivineLits platform.
