this is the old landing page handoff for UI/UX, animations and the copy: (this was for TMAC we are now called Distribution Pilot (www.distrubutionpilot.com )

(later change it to have either a library view of all our tools and or the automation flow OR have a scrolling bar with videos)

[16 tools called]

---

# TMAC Landing Page — Handoff Document

## 1. Design System

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#050506` | Near-black page bg |
| `--foreground` | `#f8fafc` | Primary text (white) |
| `--muted` | `rgba(248,250,252,0.72)` | Secondary text |
| `--muted2` | `rgba(248,250,252,0.52)` | Tertiary text, labels |
| `--accent` | `#ff6a00` | Primary orange CTA |
| `--accent-2` | `#ff8a3d` | Hover state orange |
| `--panel` | `rgba(255,255,255,0.03)` | Card backgrounds |
| `--panel-strong` | `rgba(255,255,255,0.06)` | Hover card bg |
| `--border` | `rgba(255,255,255,0.10)` | Borders |
| `--border-soft` | `rgba(255,255,255,0.07)` | Subtle hairline borders |

### Typography
- **Font:** Geist Sans + Geist Mono (Google Fonts)
- **Headlines:** Bold, tight tracking (`tracking-tight`), `leading-[1.0]`
- **Hero:** `clamp(2rem, 8vw, 7rem)` for responsive scaling
- **Section headers:** `text-2xl sm:text-3xl font-semibold`
- **Eyebrow labels:** `text-xs font-semibold tracking-[0.2em]` uppercase
- **Body:** `text-sm leading-6` or `text-base leading-7`
- **Rendering:** `text-rendering: geometricPrecision`

### Spacing & Layout
- **Container:** max-width `max-w-6xl`, padding `px-5 sm:px-6 lg:px-8`
- **Section padding:** `py-14 sm:py-20`
- **Card padding:** `p-5` (small) / `p-7 sm:p-10` (large)
- **Card radius:** `rounded-2xl` (medium) / `rounded-3xl` (large)
- **Grid gaps:** `gap-3` or `gap-4`

### Card Patterns
- **`.tmac-hairline`** — 1px soft border, used on all cards
- **Dark cards:** `bg-black/35` or `bg-black/30`
- **Glass cards:** `bg-[var(--panel)]` (3% white)
- **CTA buttons:** `rounded-xl h-11/h-12` with `shadow-[var(--shadow)]`

---

## 2. Animations & Effects

### Floating Shapes (Background)
- **30 floating square shapes** in 3 layers (large/medium/small)
- Two CSS keyframes: `float-up` (12s) and `float-up-alt` (14s)
- Movement: `translateY(100vh)` → `translateY(-100vh)` with subtle rotation
- Staggered delays: 0s–6s per shape
- Opacity: fade in 5%, fade out at 95%
- Visual: `background: rgba(255,255,255,0.035)`, `border: rgba(255,255,255,0.08)`

### Background Gradients (`.tmac-bg`)
- **3 layered radial gradients:**
  - Top-left: Accent orange glow @ 10% opacity
  - Top-right: White glow @ 6%
  - Bottom-center: White glow @ 5%

### Accent Glows
- Large blurred circles (`h-72 w-72 rounded-full blur-3xl`) positioned off-edge
- Orange glow: `bg-[var(--accent)] opacity-[0.10-0.15]`
- White glow: `bg-white opacity-[0.05-0.06]`

### Hover States
- Cards: subtle orange glow appears on hover (`opacity-0 → opacity-100`)
- Buttons: `hover:bg-[var(--accent-2)]` (lighter orange)
- Links: `hover:text-foreground` (fade up from muted)

### Focus Rings
- **`.tmac-ring`** — on focus-visible: `box-shadow: 0 0 0 3px` with 40% accent

### Other
- `scroll-behavior: smooth` on `<html>`
- Selection color: 35% accent blend

---

## 3. Component Structure

```
page.tsx
├── FloatingShapes (background animation)
├── FloatingHeader (sticky nav)
├── Hero
├── ArrowUp (decorative)
├── FormatsGraphicPlaceholder
├── BigNumbers
├── OutputsWall
├── ProblemSolution
├── ArrowUp (decorative)
├── Formats
├── Packages
├── Comparison
├── Testimonials
├── MidCta
├── FAQ (accordion)
├── BookingCalEmbed (Cal.com embed)
└── Footer
```

---

## 4. Copy — Section-by-Section

### Hero
- **H1:** "**Automate** your **growth**" (accent on keywords)
- **Subhead:** "marketing with data powered content that performs"
- **Body:** "Built for startups and any enterprise that wants to grow—low effort, low cost, explosive results."
- **CTA:** "Book a strategy call" / "See the formats"
- **Brand:** "TMAC — The Modern Automation Company"

### Formats Map (Graphic)
- **Eyebrow:** FORMATS MAP
- **H2:** "One idea → multiple formats, automatically."
- **Body:** "TMAC takes a single topic and fan-outs into a batch..."
- **Bullets:**
  - "How we win: standardize production..."
  - "Optimization loop: hooks, watch time, saves..."
  - "Industry-native: current organic game, not 2019 content calendars"

### Big Numbers
- **Eyebrow:** THE NUMBERS
- **H2:** "Proven results at scale."
- **Stats:**
  - 1B+ views (slideshow format, past year)
  - 500M+ views (UGC content, managed accounts)
  - 100K+ views/week (avg account)
  - 20+ accounts managed
- **Features pills:** Multiple formats / Totally customizable / Hide strategy on new accounts / Post on your accounts / DFY service
- **Callout box:** "Organic content dies due to sheer volume... **We fix that.**"

### Outputs Wall
- **Eyebrow:** RECENT OUTPUTS
- **H2:** "What we **deliver**."
- **Formats:** Slideshows / UGC reaction / UGC talking head / Split-screen interview

### Problem → Solution
- **Problem eyebrow:** THE PROBLEM
- **Problem H2:** "Who doesn't want more customers? More waitlist sign-ups? Cheaper CAC?"
- **Problems:**
  - Volume problem: sheer volume required
  - Content bottleneck: ideas never become posts
  - Format whiplash: every platform different
- **Solution eyebrow:** THE SOLUTION
- **Solution H3:** "You stick to building. TMAC does the heavy lifting day and night."
- **Solutions:**
  - One pipeline, five formats
  - On-brand templates
  - Bulk output, low overhead

### Formats
- **Eyebrow:** WHAT WE AUTOMATE
- **H2:** "Five formats. One pipeline."
- **Body:** "You don't get a random menu of 'services.' You get a repeatable system..."
- **Formats:**
  - Slideshow — text-first carousels for retention
  - UGC reaction — hook + reaction + commentary
  - UGC talking head — direct-to-camera, captions
  - Split-screen interview — your POV over clips
  - Clips & variants — multiple hooks, A/B testing

### Packages
- **Eyebrow:** PACKAGES
- **H2:** "Pick your mode: publish faster, or launch from zero."
- **Package 1 (Core):** "TMAC Content Engine" — bulk organic for existing account
- **Package 2 (Service):** "Account Launch (DFY)" — new account setup + pipeline

### Comparison Table
- **Eyebrow:** COMPARISON
- **H2:** "Why teams choose TMAC."
- **Columns:** Speed / Consistency / On-brand / Ops overhead / Cost
- **Rows:** TMAC (all ✓) / In-house / Agency / Freelancers / DIY+AI tools

### Testimonials
- **Eyebrow:** TESTIMONIALS
- **H2:** "What people say after the first batch."
- **Quotes:**
  - B2B Founder: "We finally stopped 'planning content' and started shipping it."
  - B2C Founder: "Same ideas, five formats. Consistency went from random to predictable."
  - Head of Growth: "Feels like a content team without the project management tax."

### Mid CTA
- **Eyebrow:** READY?
- **H2:** "Ready to ship content every day without the grind?"
- **Body:** "We'll look at your niche + voice + current assets..."
- **CTA:** "Book a strategy call"

### FAQ
- **Eyebrow:** FAQ
- **H2:** "Questions people actually ask."
- **Questions:**
  1. How fast can we see output?
  2. Do you need access to my accounts?
  3. What's the input from me?
  4. Is this "AI content" that looks generic?
  5. What platforms do you support?

### Booking Section
- **Eyebrow:** BOOKING
- **H2:** "Book a TMAC automation strategy call."
- **Body:** "Quick intro call. We'll map your first batch + formats..."

### Footer
- "TMAC — © 2026 The Modern Automation Company."
- "Back to top" link

---

## 5. Sticky Header (Nav)
- Logo + "TMAC" + tagline (hidden on mobile)
- Nav links: Outputs / Formats / Packages / FAQ
- CTA: "Book a call"
- Glass effect: `bg-black/40 backdrop-blur-md`

---

## 6. Key Visual Motifs
- **Orange accent** on keywords in headlines
- **Decorative arrows** (SVG, vertical, between sections)
- **Small accent dots** (`h-2.5 w-2.5 rounded-full bg-accent`) next to solution bullets
- **Numbered badges** in FAQ (orange background, black text)
- **Ghost "TMAC" watermark** in CTA sections (`text-[160px] text-white/5`)