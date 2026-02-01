# Pranav's Immersive 3D Portfolio Website Requirements Document

## 1. Application Overview

### 1.1 Application Name
Pranav's World - JSParK Portfolio Experience

### 1.2 Application Description
An immersive, scroll-driven 3D portfolio website that transforms traditional web browsing into a cinematic journey through Pranav's creative universe as the founder of JSParK. The experience is designed as a continuous narrative where scrolling controls time travel through different story scenes, representing skills, projects, and vision through interactive 3D environments.

## 2. Core Features

### 2.1 Hero Scene - Enter My World
- Floating 3D planet/abstract island/futuristic city with slow rotation
- Atmospheric fog and soft particles
- Cinematic lighting effects
- Center screen text: PRANAV, Founder of JSParK
- Animated pulse text: Enter My World
- Scroll hint text: Scroll to begin the journey
- Mouse movement subtly rotates the world
- Cursor leaves particle trails
- Camera dives into world on first scroll

### 2.2 Scene 1 - Origin (Who is Pranav)
- Calm terrain with warm lighting
- Floating fragments assembling into shapes
- Text appears in 3D space: Hi, I'm Pranav. I don't just build websites. I build worlds.
- Sub-line: JSParK was born from curiosity.
- Objects assemble as camera moves
- Floating text with depth and gentle parallax

### 2.3 Scene 2 - Skills as Powers
- Skills represented as 3D metaphors:
  - Web Development: glowing grids and data streams
  - AI: neural particles, orbiting nodes
  - Design: morphing geometry, color waves
- Each skill activates as camera passes through
- Objects glow, pulse, and morph
- Particles intensify on interaction
- Text: At JSParK, tools are just the beginning. The real power is imagination.

### 2.4 Scene 3 - Projects as Portals
- Space-like void environment
- Floating portals representing JSParK projects
- Scroll brings portals closer
- Hover highlights portal
- Click opens project detail overlay with:
  - Project title
  - Cinematic description
  - Tech stack
  - Enter Project button
- Projects include:
  - Restaurant management system: A creative solution showcasing seamless reservation systems, menu management, and customer engagement tools that demonstrate innovative thinking in hospitality technology
  - Hotel booking platform: An immersive booking experience featuring real-time availability, dynamic pricing, and guest management that reflects sophisticated design and functional excellence
  - Garage management system: A comprehensive workshop solution with inventory tracking, service scheduling, and customer communication that highlights problem-solving creativity
  - Class scheduling application: An educational platform with course management, student enrollment, and interactive learning tools that exemplifies user-centric design philosophy
- Each project description emphasizes the creativity and craftsmanship behind the work
- Floating text: Every project is a gateway.

### 2.5 Scene 4 - The Future (Vision)
- Vast horizon with brighter light
- Forward-moving particle streams
- Text: The future isn't designed. It's imagined first. — Pranav, JSParK
- Camera accelerates with subtle motion blur
- Infinite depth feeling

### 2.6 Final Scene - Call to Action
- Minimal, calm, clean environment
- Large centered text: Ready to enter my world?
- Sub-text: Let's build something unreal.
- Action buttons:
  - Contact Pranav
  - Start a Project with JSParK
  - GitHub / LinkedIn links
- Cursor magnetism effect
- Soft glow on hover
- Slow drifting particles

### 2.7 Scroll-Driven Interactions
- Scrolling controls camera movement through all scenes
- Transitions between moods, colors, and lighting
- Environments morph continuously without cuts
- One continuous cinematic shot experience

### 2.8 Navigation
- No visible navbar initially
- Optional floating World Map icon

## 3. User Experience Requirements

### 3.1 Desktop Experience
- Mouse movement controls subtle world rotation
- Cursor particle trails
- Smooth scroll-driven camera transitions
- Cinematic typography throughout
- Accessible contrast

### 3.2 Mobile Experience
- Simplified 3D rendering
- Same story flow maintained
- Touch-optimized interactions
- Performance-optimized particle effects

### 3.3 Performance Optimization
- Compressed GLTF assets
- Lazy load scenes
- Cap particles on low-end devices
- Respect prefers-reduced-motion accessibility setting
- Maintain 60 FPS target

## 4. Technical Requirements

### 4.1 Core Technologies
- React with Vite or Next.js
- Three.js or React Three Fiber for 3D rendering
- GSAP with ScrollTrigger for camera and scene control
- Framer Motion for text and UI motion
- Spline AI for 3D worlds and hero assets
- Tailwind CSS for styling
- Smooth scroll implementation (Lenis or custom)

### 4.2 3D Assets
- Floating planet/island/city model
- Terrain and environment models
- Skill metaphor objects (grids, particles, geometry)
- Portal models for projects
- Particle systems throughout

### 4.3 Animation System
- Scroll-triggered camera movements
- Object assembly animations
- Glow and pulse effects
- Morphing geometry transitions
- Particle intensity variations
- Motion blur effects

## 5. Content Structure

### 5.1 Text Content
- Hero: PRANAV, Founder of JSParK, Enter My World, Scroll to begin the journey
- Scene 1: Hi, I'm Pranav. I don't just build websites. I build worlds. JSParK was born from curiosity.
- Scene 2: At JSParK, tools are just the beginning. The real power is imagination.
- Scene 3: Every project is a gateway.
- Scene 4: The future isn't designed. It's imagined first. — Pranav, JSParK
- Final: Ready to enter my world? Let's build something unreal.

### 5.2 Interactive Elements
- Project portals with overlay details
- Contact Pranav button
- Start a Project with JSParK button
- GitHub link
- LinkedIn link
- Optional World Map navigation icon

### 5.3 Project Descriptions
- Restaurant management system description highlighting creativity in hospitality solutions
- Hotel booking platform description emphasizing innovative design approach
- Garage management system description showcasing problem-solving capabilities
- Class scheduling application description demonstrating user-centric philosophy

## 6. Design Principles

### 6.1 Visual Mood Progression
- Hero: Mysterious, inviting
- Scene 1: Curious, human, raw with warm lighting
- Scene 2: Energy, mastery with dynamic effects
- Scene 3: Exploration, depth in darker space-like environment
- Scene 4: Hopeful, bold, expansive with bright horizons
- Final: Minimal, calm, clean

### 6.2 Interaction Philosophy
- Website is entered, not navigated
- Scrolling is time travel through Pranav's journey
- No traditional sections or boring layouts
- Experience-first approach
- Feels like entering someone's mind and exploring a creative universe