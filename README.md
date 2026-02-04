# AURORA - Harry Potter Themed Event Website

A magical Next.js website for the AURORA event with Harry Potter theming, featuring animated components and interactive registration.

## ✨ Features

### Components Created
- **Hero** - Full-screen hero with floating magical elements (wands, snitches, sparkles, owl)
- **Events** - Animated event cards with scroll-triggered entrance animations
- **Timeline** - Interactive 5-day event schedule with scroll-activated timeline
- **Highlights** - Feature showcase with background image and shimmer effects
- **Navigation** - Sticky header with route highlighting
- **Registration** - Multi-step form with Google Pay placeholder

### Design Features
- Harry Potter themed with gold accents (#DAA520)
- Custom SVG assets (wand, snitch, crest, potions, owl, etc.)
- Shimmer and glow effects throughout
- Background images with overlays
- Smooth scroll animations
- Responsive design (mobile, tablet, desktop)

### Events Included
- Documentary Event (Feb 23)
- Coding Competition (Feb 24)
- Standup Comedy (Feb 25)
- Quiz (Feb 26)
- Ideathon (Feb 27)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Extract the project folder
2. Navigate to the directory:
```bash
cd harry-potter-events
```

3. Install dependencies:
```bash
npm install
```

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
harry-potter-events/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── register/
│   │   └── page.tsx        # Registration page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero with animations
│   ├── Events.tsx          # Event cards
│   ├── Timeline.tsx        # Event timeline
│   ├── Highlights.tsx      # Features
│   └── Navigation.tsx      # Navigation
├── public/                 # SVG assets
└── configs...
```

## 📸 Required Images

**IMPORTANT**: Add these to `/public` folder:

1. **hero-castle.jpg** - Hero background (1920x1080)
2. **eventbg.jpg** - Section background (1920x1080)

## 🚀 Deploy to Vercel

1. Push to GitHub
2. Import to Vercel
3. Deploy! 🎉

See DEPLOYMENT_GUIDE.md for details.

## 🎯 To Customize

Edit `components/Timeline.tsx` for event details.
Edit `tailwind.config.js` for colors.

---

**Made with ⚡ and magic**
