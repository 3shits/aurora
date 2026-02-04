# Harry Potter Themed Assets

This document describes all the custom SVG assets created for the Harry Potter Events website.

## Asset List

### 1. Hogwarts Crest (`hogwarts-crest.svg`)

- **Size**: 200x240px
- **Description**: A shield-shaped crest divided into four quadrants representing the four Hogwarts houses
- **Features**:
  - Gryffindor lion (top-left, red)
  - Ravenclaw eagle (top-right, blue)
  - Hufflepuff badger (bottom-left, yellow)
  - Slytherin serpent (bottom-right, green)
  - Large "H" in center
  - Banner with "DRACO DORMIENS" text
- **Usage**: Hero section, headers, branding

### 2. Magic Wand (`magic-wand.svg`)

- **Size**: 300x60px
- **Description**: A wooden wand with magical sparkles emanating from the tip
- **Features**:
  - Wood grain texture with gradient
  - Animated sparkles and stars at the tip
  - Handle with decorative ridges
  - Glowing effect
- **Usage**: Dueling Championship event card, magical effects

### 3. Golden Snitch (`golden-snitch.svg`)

- **Size**: 120x80px
- **Description**: The iconic golden Quidditch ball with wings
- **Features**:
  - Metallic gold gradient on the ball
  - Delicate wings with detail lines
  - Rotating animation (spins continuously)
  - Shine/highlight effects
- **Usage**: Quidditch events, sports sections

### 4. Potion Bottle (`potion-bottle.svg`)

- **Size**: 80x120px
- **Description**: A glass bottle filled with glowing magical potion
- **Features**:
  - Transparent glass with gradient
  - Cork stopper
  - Animated bubbles rising in the liquid
  - Glowing turquoise/green potion
  - Vintage label
- **Usage**: Potions Challenge event card, alchemy sections

### 5. Owl with Mail (`owl-mail.svg`)

- **Size**: 100x100px
- **Description**: A brown owl carrying a letter in its talons
- **Features**:
  - Detailed feathers and face
  - Clutching a parchment letter
  - Friendly expression with large eyes
  - Ear tufts
- **Usage**: Contact sections, mail/notification icons, communication

### 6. Magical Sparkles (`magical-sparkles.svg`)

- **Size**: 200x200px
- **Description**: A collection of animated stars and sparkles of various sizes
- **Features**:
  - Multiple star sizes (large, medium, small)
  - Circles and plus-shaped sparkles
  - All elements have opacity animations
  - Golden and white colors
  - Glowing effects
- **Usage**: Background decorations, magical effects, transitions

### 7. Sorting Hat (`sorting-hat.svg`)

- **Size**: 100x120px
- **Description**: The wise Sorting Hat with facial features
- **Features**:
  - Wrinkled leather texture
  - Face with eyes and mouth
  - Patches and stitching details
  - Curled peak
  - Brown leather gradient
- **Usage**: House sorting sections, character icons

### 8. Cauldron (`cauldron.svg`)

- **Size**: 120x100px
- **Description**: A black cauldron over magical flames with bubbling potion
- **Features**:
  - Animated flames underneath (flickering)
  - Three legs supporting the cauldron
  - Two handles on sides
  - Glowing green potion inside
  - Animated steam/bubbles rising
  - Metallic gradient finish
- **Usage**: Potions sections, brewing activities, magical crafts

### 9. Magical Pattern (`magical-pattern.svg`)

- **Size**: 400x400px (tileable pattern)
- **Description**: A subtle repeating pattern of stars and constellation lines
- **Features**:
  - Small stars in gold tones
  - Sparkle crosses
  - Constellation line connections
  - Low opacity for use as background
  - Seamlessly tileable
- **Usage**: Background patterns, subtle decorations

## Color Palette

All assets use a consistent Harry Potter themed color palette:

- **Gold**: `#DAA520`, `#FFD700` - Primary accent color
- **Gryffindor Red**: `#740001` - House color
- **Ravenclaw Blue**: `#0E1A40` - House color
- **Hufflepuff Yellow**: `#FFD700` - House color
- **Slytherin Green**: `#1A472A` - House color
- **Dark Brown**: `#654321`, `#8B7355`, `#3d2817` - Wood, leather textures
- **Silver/White**: `#FFF`, `#D2B48C` - Highlights, light accents

## Implementation Examples

### Using in React/Next.js Components

```jsx
// Simple image usage
<img src="/hogwarts-crest.svg" alt="Hogwarts" width={120} height={144} />

// As background
<div style={{ backgroundImage: 'url(/magical-pattern.svg)' }}>
  Content here
</div>

// With Next.js Image component
import Image from 'next/image'
<Image src="/golden-snitch.svg" alt="Snitch" width={120} height={80} />
```

### Using in CSS/Tailwind

```css
/* Background pattern */
.magical-bg {
  background-image: url("/magical-pattern.svg");
  background-repeat: repeat;
}

/* Decorative icon */
.section::before {
  content: "";
  background-image: url("/magical-sparkles.svg");
  width: 100px;
  height: 100px;
}
```

## Animation Features

Several assets include built-in CSS animations:

- **Golden Snitch**: Continuous rotation
- **Potion Bottle**: Rising bubbles with opacity fade
- **Cauldron**: Flickering flames and rising steam
- **Magic Wand**: Twinkling sparkles at tip
- **Magical Sparkles**: Pulsing opacity on all stars

These animations are implemented using SVG `<animate>` elements and will work automatically when the SVG is rendered.

## Customization Tips

### Changing Colors

Open any SVG file and modify the color values in:

- `fill` attributes
- `stroke` attributes
- Gradient `<stop>` elements

### Adjusting Animations

Modify the `<animate>` elements:

- `dur` - Duration of animation
- `values` - Keyframe values
- `repeatCount` - Number of loops ("indefinite" for continuous)

### Resizing

SVGs are vector graphics and scale perfectly. Simply change the `width` and `height` attributes when using them, or modify the `viewBox` in the SVG file itself.

## File Organization

```
public/
├── hogwarts-crest.svg
├── magic-wand.svg
├── golden-snitch.svg
├── potion-bottle.svg
├── owl-mail.svg
├── magical-sparkles.svg
├── sorting-hat.svg
├── cauldron.svg
└── magical-pattern.svg
```

All assets are in the `/public` directory and can be referenced with `/filename.svg` paths in your components.

## License & Usage

These assets were created specifically for this Harry Potter Events project. They are custom-made SVG illustrations inspired by the Harry Potter universe.

For production use with actual Harry Potter branding, ensure you have proper licensing from Warner Bros. and J.K. Rowling's representatives.
