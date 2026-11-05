# Arun Mohan — Ultra-Modern React Portfolio ⚡

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)
![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-FF5500)
![Design](https://img.shields.io/badge/Palette-White_%2B_Solar_Orange-FF5500)
![License](https://img.shields.io/badge/License-MIT-black)

Ultra-modern, high-performance personal portfolio engineered for **Arun Mohan** — Full-Stack Web Developer, GTA IV CitizenIV Scripting Specialist, and Cloud Computing student at SRMIST.

Designed with a crisp, tactile white aesthetic, deep carbon typography, and masculine **Solar Flame Orange (`#FF5500`)** accents (no generic blue/purple AI gradients). Powered by **Lenis smooth momentum scrolling**, **sticky stacking card decks**, **interactive 3D parallax**, and an interactive **cartoonish GIF pose cloud**.

---

## ✨ Key Highlights & Features

1. **Hero Cartoon Pose Cloud (Right Side)**:
   - Stylized 3D fluffy cloud pod at the bottom with floating cloud puffs and sparkles.
   - Interactive transparent character that **pops up with spring physics** from the cloud.
   - Cycles through hand poses (✌️ Victory / Peace, 👍 Thumbs Up, 🤟 Rock On, 👉 Pointing / Let's Talk) like a cartoonish sticker GIF.
   - Click to switch poses immediately, or let it auto-play. Clicking Victory fires interactive micro-confetti!
   - 3D parallax tilt follows mouse cursor.

2. **Kinetic Typography & Running Marquee (Left Side)**:
   - Massive editorial display typography with continuous running marquee tape for "ARUN MOHAN".
   - Seamless dual-lane speed marquees throughout the page.

3. **Maximum Sticky Stacking Animations**:
   - **Sticky Card Deck**: Selected projects (*Tajmahal Carpets, CitizenIV Web-iPhone, FiveM Lua Translator, PeerWave WebRTC, CivicEye*) cascade and stack on top of each other as you scroll down with depth shadows and scaling.
   - **Sticky Pinned Sidebars**: Background & capabilities section with pinned left column while the skill matrix scrolls past.
   - **Sticky Floating Dynamic Island**: Sleek frosted navigation bar with live status indicator.
   - **Sticky HUD Telemetry Widget**: Bottom-right floating gauge showing real-time scroll depth (`%`) and live local time in Chennai (IST).

4. **Interactive CitizenIV Console**:
   - Live script simulator executing Lua event bridges and CitizenIV game server callbacks.

5. **Dynamic GitHub Sync with Resilient Fallback**:
   - Automatically queries `https://api.github.com/users/Arunmohankml/repos`.
   - Includes full offline fallback cache of Arun's 30+ real repositories so it never appears empty.
   - Instant search and category filter (Web, CitizenIV, Python, All).

---

## 🖼️ How to Swap in Your Real Photos Later

When you are ready with your transparent PNG pictures:
1. Place your transparent PNG files inside `public/avatars/`:
   - `pose-victory.png` (doing peace/victory sign ✌️)
   - `pose-thumbsup.png` (doing thumbs up 👍)
   - `pose-rock.png` (doing rock on 🤟)
   - `pose-pointing.png` (pointing 👉)
2. Open [`src/components/PoseCloud.jsx`](file:///c:/Users/USER/Desktop/Projects/portfolio/src/components/PoseCloud.jsx) and update the `image` paths in the `POSES` array:
   ```javascript
   {
     id: 'victory',
     name: 'Victory & Peace',
     image: '/avatars/pose-victory.png', // <-- simply point to your png
     ...
   }
   ```
3. That's it! The spring pop-up animations, speech bubbles, and cloud base will automatically frame your photos.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite 6
- **Styling**: Tailwind CSS 3.4 + Custom Industrial Typography
- **Smooth Momentum Scrolling**: Lenis
- **Animations**: CSS Keyframe Spring Physics + Canvas Confetti
- **Icons**: Lucide React
- **Fonts**: Syne, Plus Jakarta Sans, JetBrains Mono

---

## 🚀 Running Locally

### Development Server
```bash
npm run dev
```
Starts local server at `http://localhost:3000` with instant Hot Module Replacement (HMR).

### Production Build
```bash
npm run build
```
Generates optimized static bundle in `dist/`.

### Preview Build
```bash
npm run preview
```
Previews the built production site locally.
