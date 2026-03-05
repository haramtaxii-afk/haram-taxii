# Agent Rules & Knowledge Base

This file contains rules, guidelines, and reference material provided by the user to guide the agent's behavior and implementation decisions.

## Responsive Web Design (RWD) Guidelines

Responsive web design (RWD) is a design strategy that responds to users' needs and their devices' capabilities by changing a site's layout to suit the device being used. As mobile usage grows, ensuring content works well on a variety of screen sizes and interaction modes (touch vs mouse) is critical.

### 1. The Viewport
Pages optimized for devices **must** include a meta viewport tag in the `<head>`.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

*   **`width=device-width`**: Matches the screen's width in device-independent pixels (DIP), allowing the page to reflow content.
*   **`initial-scale=1`**: Sets a 1:1 relationship between CSS pixels and device-independent pixels, preventing some browsers from keeping page width constant on rotation.
*   **🚫 CAUTION**: Do not use `minimum-scale`, `maximum-scale`, or `user-scalable`. These attributes prevent users from zooming and cause accessibility issues.

### 2. Content Sizing & Layout
Users are used to scrolling vertically, not horizontally.

*   **Avoid Horizontal Scroll**: Ensure content fits within the viewport.
*   **Flexible Grids**: Use modern CSS layout techniques instead of fixed pixel widths.
    *   **Flexbox**: Ideal for 1D layouts (rows or columns) with items of different sizes.
    *   **CSS Grid**: Ideal for 2D layouts. Use `fr` units.
    *   **Multi-column**: Use `column-width` for responsive text columns.

### 3. Images & Media
Images larger than the viewport cause horizontal scrolling.

*   **CSS Rule**:
    ```css
    img {
      max-width: 100%;
      display: block;
    }
    ```
*   **Layout Shift Prevention**: Always add `width` and `height` attributes to `<img>` tags, even when using `max-width: 100%`. This allows the browser to reserve space before the image loads.

### 4. Media Queries
Media queries act as filters to apply CSS based on device features.

**Common Features:**
*   `width`, `height` (`min-` and `max-`)
*   `orientation`
*   `aspect-ratio`

**Interaction Features (Touch vs Mouse):**
*   `hover` / `any-hover`: Can the user hover?
*   `pointer` / `any-pointer`: Is the input fine (mouse) or coarse (touch)?
*   *Note: Be careful not to force touch users into mouse-only paradigms.*

### 5. Breakpoints Strategy
**Do NOT** define breakpoints based on specific devices (e.g., "iPhone", "iPad").
**DO** let the content determine the breakpoints.

*   **Mobile-First**: Start styling for small screens first. Add properties for larger screens using `min-width` media queries.
    ```css
    /* Base styles (Mobile) */
    .card { width: 100%; }

    /* Breakpoint at 600px */
    @media (min-width: 600px) {
      .card { width: 50%; }
    }
    ```
*   **Major Breakpoints**: Where the layout changes significantly (e.g., 1 col -> 2 cols).
*   **Minor Breakpoints**: For small adjustments (margins, padding, font size) between major layout changes.
*   **Text Optimization**: Add a breakpoint when line length exceeds 70-80 characters (approx. 8-10 words) to maintain readability.

### 6. Content Visibility
*   **Avoid Hiding Content**: Do not hide content solely because it doesn't fit the screen. Screen size does not predict user intent (e.g., a mobile user may still need detailed data like pollen counts).

### 7. Testing
*   Use browser developer tools (like Chrome DevTools) to visualize how the page renders at different breakpoints.
*   Test on real devices whenever possible to verify touch targets (min 44px) and performance.

## Adaptive Design Strategy (JavaScript Control)

While CSS handles visual responsiveness, **Adaptive Design** uses JavaScript to handle logic or structural changes that CSS cannot address (e.g., moving DOM elements, swapping components, or complex class toggling).

### Core Philosophy
*   **Limitation of CSS**: Some things cannot be simple CSS swaps (e.g., changing a Bootstrap span9 to span12, or completely re-ordering heavy DOM elements).
*   **Solution**: Use JavaScript "Rules" defined by pixel ranges.
*   **Efficiency**: Rules should only "invoke" when entering the valid range. If a rule is already applied, it should not re-run on every resize event to avoid performance overhead.

### Technical Implementation (React/Next.js)
Since this project uses React, we adapt the jQuery `$.responsive.rule` concept into a modern hook pattern (`useMediaQuery` or `useEffect`).

**Key Principles:**
1.  **Define Ranges**: Set strict `minWidth` and `maxWidth` for logic.
2.  **State Tracking**: Track if a rule is currently `applied` to prevent redundant execution.
3.  **Clean Up**: When leaving a range, ensure the previous state is cleaned up (un-applied).

**Example Pattern:**
```typescript
// "Adaptive Rule" equivalent in React
useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;
    const isMobile = width >= 0 && width < 480;
    
    // Only execute if state changes (Implicit "isApplied" check via React state)
    if (isMobile && !menuActive) {
       enableMobileLayout();
    } else if (!isMobile && menuActive) {
       disableMobileLayout();
    }
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, [menuActive]);
```
*Note: In modern Next.js content, prefer using `useMediaQuery` libraries or Tailwind `hidden/block` classes unless complex logic demands this adaptive approach.*

## Hero Section Design Framework (6-Step Process)

Over 90% of visitors leave a website within 15 seconds if the hero section fails to communicate value. Follow this 6-step process for every hero section.

### Step 1 — Strategy Session (Clarify Who & Why)
Before designing anything, answer:
- What are you selling?
- Who are you trying to help?
- What do you want people to DO on this website?
- What is the **value proposition** (one clear sentence)?
- What is the **primary Call to Action**?

Output: A single, clear value proposition sentence + one primary CTA.

### Step 2 — Wireframe (Content Before Design)
Lay out the big content blocks without styling:
- Logo + Navigation (with a sticky CTA in the nav)
- Value proposition headline (H1)
- Supporting copy (who it's for, why they should care)
- Primary CTA button
- Space for hero image/visual
- Do NOT worry about layout direction at this stage — content first.

### Step 3 — Creative Concepts (Emotional Imagery)
Brainstorm 3+ visual concepts. Sketch them roughly (shapes only). Consider:
- Does the image reinforce the value proposition emotionally?
- Is there enough space for text without overlap?
- Does the image motivate the target audience to take action?

Always present multiple concepts to the client before executing.

### Step 4 — Develop Imagery
Execute the approved concept:
- Photoshoot, stock photography, or AI-generated imagery
- Ensure text legibility — use gradient overlays on dark backgrounds
- Composition: keep key subjects away from where text will sit

### Step 5 — Design (Typography & Hierarchy)
- Apply brand colors and typography
- **H1**: Bold, large, immediate — the value proposition
- **Body copy**: Explain who it's for and why they should care
- **Primary CTA**: High contrast, action-oriented label (e.g., "Book Your Ride")
- **Secondary CTA**: Ghost/outline button — less visual weight than primary
- Ensure clear visual hierarchy: Headline → Copy → CTA

### Step 6 — Optimize (Conversion Psychology)
Add elements that increase conversion:
1. **Social Proof**: Avatar stacks + "X,000+ customers" count
2. **Star Ratings**: Show aggregate rating prominently
3. **"Free" / Low-risk language**: Reduce friction ("No hidden fees", "Instant confirmation")
4. **Featured-in logos**: Press/media credibility signals
5. **Online status indicator**: "Online Now — replies in 2 mins" (urgency + trust)
6. **Guarantee copy**: "Fixed rates · No hidden fees · Instant confirmation"

### Implementation Checklist for This Project
- [x] Clear H1 value proposition with fluid typography (`text-fluid-h1`)
- [x] Primary CTA: "Book Your Ride" (teal, high contrast)
- [x] Secondary CTA: "View Fleet" (ghost/outline button)
- [x] Social proof: Avatar stack + star rating + "15,000+ pilgrims"
- [x] Trust badges: TGA Licensed, 24/7, 50+ Drivers
- [x] Booking card: WhatsApp as primary, form as secondary
- [x] Credibility line: "Fixed rates · No hidden fees · Instant confirmation"
- [x] Slide indicators for background image carousel
- [x] `Button asChild` pattern (no nested `<a>` inside `<button>`)

---

## Psychology Principles for Web Design

Great web design is about influencing people to take the actions we want. These 3 principles are the foundation.

### Principle 1 — Mirroring (Mirror Neurons)

**What it is:** Humans have "mirror neurons" — we unconsciously adopt the emotional state of people we see. If we see someone happy, we feel happier. If we see someone excited, we feel excited.

**Why it matters in web design:** Every image of a person on the website will put the visitor into the emotional state of that person.

**How to apply it:**
- Use images of **happy, confident, satisfied people** to put visitors in a positive, trusting mood
- For a taxi/transport service: show **relieved, comfortable pilgrims** arriving safely — not stressed travelers
- Avoid generic stock photos of people looking neutral or bored
- The emotional state in your imagery = the emotional state of your visitor

**Applied to this project:**
- Hero background: Makkah/Madinah imagery evokes spirituality and peace (the pilgrim's emotional goal)
- Avoid imagery of traffic, stress, or waiting — use arrival, comfort, and sacred sites

---

### Principle 2 — Social Validation (Social Proof)

**What it is:** Humans use "what other people are doing" as a mental shortcut to decide if something is good or safe. This is deeply evolutionary — if others are doing it, it's probably not dangerous.

**Why it matters in web design:** People don't want to be the first. Showing that others have already trusted you removes the fear of making a wrong decision.

**How to apply it:**
- **Testimonials**: Real quotes from real customers (with names/photos if possible)
- **Customer counts**: "15,000+ happy pilgrims served"
- **Star ratings**: Aggregate rating displayed prominently (e.g., ⭐ 5.0)
- **Avatar stacks**: Show profile pictures of recent customers
- **Logos**: "As seen in" or "Trusted by" logos of recognizable brands/media
- **Live indicators**: "Online Now", "X people viewing this page"
- **Recency**: "Ahmed K. booked 2 hours ago"

**Applied to this project:**
- ✅ Hero: Avatar stack + "15,000+ pilgrims" + 5-star rating
- ✅ Hero booking card: "Ahmed K. and 14,999 others have already booked"
- ✅ Testimonials section on homepage
- 🔲 TODO: Add "As featured in" logos (Islamic travel media, news outlets)
- 🔲 TODO: Add real customer photos/names to testimonials

---

### Principle 3 — Psychology of Color

**What it is:** Colors trigger emotional and even physiological responses. These are partly cultural, partly evolutionary.

**Key color meanings:**

| Color | Psychological Effect | Use Case |
|-------|---------------------|----------|
| **Red** | Urgency, excitement, danger — raises heart rate | Sales, CTAs, warnings |
| **Green** | Calm, safety, health, nature | Trust, confirmation, WhatsApp |
| **Blue** | Trust, reliability, professionalism | Banks, tech, corporate |
| **Teal/Cyan** | Balance of blue (trust) + green (calm) | Healthcare, travel, spiritual |
| **Amber/Gold** | Warmth, luxury, premium | VIP, high-end brands |
| **White** | Cleanliness, simplicity, space | Minimalist, medical |
| **Black** | Sophistication, power, elegance | Luxury, fashion |
| **Purple** | Royalty, wisdom, spirituality | Premium, spiritual services |

**Applied to this project:**
- **Teal** (`#0f766e`): Primary brand color — conveys trust (blue) + calm (green). Perfect for a pilgrimage transport service where safety and peace of mind are the core value.
- **Green** (WhatsApp button): Subconsciously safe and calming — reduces friction for the primary booking action.
- **Amber**: Used for star ratings — warmth and premium quality signal.
- **White/Gray**: Clean backgrounds — conveys professionalism and clarity.
- **Dark overlays on hero**: Creates gravitas and focus, appropriate for a spiritual journey context.

**Resource:** [Empower Yourself with Color Psychology](https://www.empower-yourself-with-color-psychology.com) — reference for color meanings when making design decisions.

---

### Further Reading
- **Cognitive Bias Codex**: 180+ documented cognitive biases — [Wikipedia List of Cognitive Biases](https://en.wikipedia.org/wiki/List_of_cognitive_biases)
- **Book**: *Thinking, Fast and Slow* by Daniel Kahneman — foundational reading on how humans make decisions, highly recommended for all designers.

### Design Checklist (Psychology)
Before finalizing any page or component, verify:
- [ ] **Mirroring**: Do the images show people in the emotional state we want visitors to feel?
- [ ] **Social Proof**: Is there at least one form of social validation visible above the fold?
- [ ] **Color**: Does the color choice reinforce the emotional message of the section?
- [ ] **CTA Color**: Is the primary CTA color high-contrast and psychologically action-oriented?
- [ ] **Trust Signals**: Are there credibility indicators (logos, counts, ratings) near the primary CTA?

---

## Color Selection Framework (Step-by-Step Process)

> Source: "How To Select Colors: Step By Step" — 9 out of 10 designers struggle with color because they lack a clear process.

### ACT 1 — Build a Brief (Answer These 4 Questions First)

Before touching any software, answer:

1. **What constraints do I have?** — Brand guidelines, format limitations, existing materials
2. **What guidance do I have?** — Written brief, existing assets, client materials
3. **What do I want the viewer to DO?** — The desired action (book, call, sign up)
4. **What do I want the viewer to FEEL?** — The emotion at the moment of engagement

### ACT 2 — Select Colors Logically (3 Steps)

#### Step 1: Choose a Primary Hue
- Think like a 2-year-old: Red, Blue, Green, Yellow — not "sapphire" or "sienna"
- Choose based on **psychology**, **cultural associations**, and **mood**
- Consider: Is this a warm color (red/orange/yellow) or cool (blue/green/purple)?
- Use HSB sliders: Hue → Saturation → Brightness to dial in the exact shade

**For this project (Haram Taxi Service):**
- Primary hue: **Teal** (HSB ~175°, 77%, 26%) = `#0f766e`
- Reasoning: Teal = Blue (trust, reliability) + Green (calm, safety, peace) — perfect for pilgrimage transport where safety and spiritual peace are the core emotional promise

#### Step 2: Build a Palette Using Color Harmony Rules

| Scheme | Description | When to Use |
|--------|-------------|-------------|
| **Monochromatic** | One hue, varied saturation/brightness | Clean, professional, minimal |
| **Analogous** | Adjacent hues on the wheel | Calm, cohesive, easy to execute |
| **Complementary** | Opposite hues on the wheel | Vibrant, high contrast, energetic |
| **Split Complementary** | Opposite + two adjacent | Vibrant but more nuanced than complementary |
| **Double Split Complementary** | Two pairs of split complements | Rich, complex (e.g. Headspace: yellow/orange + blue/purple) |

**For this project:**
- Base: Monochromatic teal (primary, secondary, muted tones)
- Accent: **Amber/Gold** (split complementary to teal) — warmth, premium, luxury
- This gives: Teal (trust/calm) + Amber (warmth/premium) — the ideal combination for a premium pilgrimage service

#### Step 3: Match Tones Across the Palette
- Colors must have **similar saturation and brightness levels** to feel cohesive
- Avoid mixing a highly saturated color with a very desaturated one — they clash
- Test: Put all palette colors side by side — do they look like they belong together?
- Use tints (add white) and shades (add black) of your hues to build out the full palette

### The 60-30-10 Rule
Establish usage rules for every color:

| Role | % of Design | Color for This Project |
|------|-------------|----------------------|
| **Dominant** | 60% | White / Light Gray backgrounds |
| **Secondary** | 30% | Teal (`#0f766e`) — sections, cards, nav |
| **Accent** | 10% | Amber/Gold — CTAs, highlights, stars, badges |

> ⚠️ **Current Issue Identified:** The site's `--secondary` and `--accent` CSS variables are both set to the same teal as `--primary`. This means there is no true accent color — all three roles are the same hue. The amber color used for stars and badges is applied ad-hoc via Tailwind's built-in `amber-*` classes rather than as a defined brand token.

**Fix needed:** Define amber as a proper CSS variable and use it consistently as the 10% accent — especially for CTA buttons, star ratings, and highlight badges.

### ACT 3 — Review Your Work (Verification Questions)

#### Is it Functional?
- [ ] Do the colors support the information hierarchy?
- [ ] Do they lead to the desired action (book a ride)?
- [ ] Is everything legible? (Check contrast ratios — WCAG AA minimum 4.5:1 for body text)
- [ ] Is color used consistently throughout?
- [ ] Does it guide the viewer's eye to the CTA?

#### Is it Appealing?
- [ ] Does the color palette evoke the right emotion?
- [ ] Do the tones match across the palette (no jarring mismatches)?
- [ ] Is there enough contrast to create visual interest without being overwhelming?
- [ ] Does the accent color draw the eye to the right elements?

#### Is it Consistent?
- [ ] Does it match brand guidelines?
- [ ] Have I answered the brief (the 4 questions from ACT 1)?
- [ ] Can I explain my color choices rationally to a client?

### Key Principles to Remember
1. **Use the fewest colors necessary** — fewer colors = fewer mistakes
2. **One color + black + white** is a powerful, underrated scheme (e.g. Borussia Dortmund: yellow + black + white)
3. **Don't use the packaging colors for the UI** — let the content be the hero, keep the interface quiet
4. **Colored type is hard to read** — stick to black or white for body text; reserve color for headings and accents
5. **Color alone doesn't create the effect** — it must work with typography, layout, and imagery together
6. **Simplicity allows color to stand out** — Notion's black/white interface makes their red CTA button unmissable



---

## Typography Framework (5-Step Font Selection Process)

> Source: "How to choose fonts: Step by step" — Poor font choices are one of the first mistakes designers make.

### Step 1 — Write Down What You're Looking For (Build a Brief)
Before opening any software, answer:
- **Mood**: Playful or serious? Restrained or expressive? Familiar or strange?
- **Emotion**: What feeling should the type evoke?
- **Format**: Digital (responsive, multiple sizes) or print (fixed sizes)?
- **Requirements**: What levels do you need? H1, H2, H3, body, captions?

Write this on paper first. Having a brief prevents aimless scrolling through font libraries.

**For this project (Haram Taxi Service):**
- Mood: Premium, trustworthy, calm, spiritual — yet modern and professional
- Emotion: Safe, well-cared-for, spiritually at peace
- Format: Digital (responsive web, multiple devices, multilingual)
- Requirements: H1 (hero), H2 (section headings), body copy, captions, UI labels

### Step 2 — Start With Your Go-To Typefaces
Don't scroll through 1,400 fonts. Have a curated list of ~20-60 reliable fonts you know well.

**Categories to have covered:**
| Category | Examples | When to Use |
|----------|----------|-------------|
| Old Style Serif | Garamond, Caslon | Heritage, nostalgia, luxury |
| Transitional Serif | Baskerville, Times | Classic, editorial, authoritative |
| Modern Serif | Bodoni, Didot | High fashion, refined luxury |
| Slab Serif | Clarendon, Rockwell | Bold, friendly, approachable |
| Humanist Sans | Inter, Gill Sans, Frutiger | Body copy, UI, approachable modern |
| Transitional Sans | Helvetica, Arial, Universe | Neutral, corporate, versatile |
| Geometric Sans | Futura, Avenir, Century Gothic | Modern, clean, tech |
| Display | Varies widely | Headlines only, personality |

> ⚠️ **Don't assume serifs = old-fashioned.** Modern serifs (short serifs, tall x-height) can look fresh and distinctive. Nothing Phone uses a serif headline on a cutting-edge product website.

### Step 3 — Look for Upgrades
After your go-to list, ask: *Can I improve on this?*
- Would a more **distinctive** font add personality and identity?
- Is there a quality upgrade available? (e.g., Helvetica over Arial, Proxima Nova over Helvetica)
- Check: Google Fonts, Adobe Fonts, Monotype, independent type foundries

**Where to look:**
- **Google Fonts**: Filter by category, check most popular. Free, web-optimized.
- **Adobe Fonts**: Included with Creative Cloud. Good discovery pages.
- **Independent foundries**: Pangram Pangram, House Industries, etc. — curated, high quality.

### Step 4 — Trial, Pair, and Compare
**Pairing rules:**
1. **Same typeface, different weights**: Go at least 2 weights apart (Regular → Semi-Bold, not Regular → Medium)
2. **Two distinct typefaces**: They must be clearly different — avoid "similar but not quite" clashes
3. **Maximum 2-3 distinct typefaces** per layout (usually 2 is enough)
4. **One decorative typeface max** — pair it with something neutral
5. **Complementary features**: Different enough to be distinct, similar enough in mood/era to belong together
6. **Avoid similar fonts together**: Poppins + Century Gothic + Futura = clash (all geometric, too similar)

**Classic pairings:**
- Serif headline + Humanist sans body = timeless, premium, readable
- Geometric sans headline + Humanist sans body = modern, clean
- Display + Neutral sans = personality + function

### Step 5 — Test and Test Again
- Set real copy, not just "Lorem Ipsum"
- Test at small AND large sizes
- Test on mobile (open a Figma prototype on your phone)
- Check: legibility, kerning, character clarity (l vs I vs 1), multilingual support
- Check: Does it have the full weight range you need? Italics? Multiple widths?

---

### This Project's Font Decisions

**Applied font pair (Serif headline + Humanist sans body):**

| Role | Font | Why |
|------|------|-----|
| **H1 / H2 (Display)** | `Playfair Display` | Elegant modern serif — premium, distinctive, gives brand identity. Separates from generic all-Inter taxi sites. Tall x-height = modern feel. |
| **Body / UI / H3+** | `Inter` | Humanist sans-serif — excellent legibility at all sizes, multilingual support, neutral enough to support any content. Industry standard for web UI. |

**Pairing logic:**
- Clearly **distinct**: Serif vs. sans-serif — no "similar but not quite" clash
- **Complementary mood**: Both modern-leaning (Playfair is a modern serif, not old-fashioned)
- **Complementary function**: Playfair adds personality to headlines; Inter handles legibility for body
- **Contrast in weight**: Playfair Bold/Black for H1 vs. Inter Regular for body = clear hierarchy

**Implementation:**
- Both loaded via `next/font/google` (zero layout shift, optimal performance)
- Exposed as CSS variables: `--font-playfair`, `--font-inter`
- Tailwind classes: `font-display` (Playfair), `font-sans` (Inter)
- Global CSS: `h1, h2` automatically use Playfair Display; body uses Inter
- Fluid sizing: `.text-fluid-h1` and `.text-fluid-h2` with `clamp()` for responsive scaling

**Font checklist for this project:**
- [x] Multilingual support (Inter covers Arabic script via system fallback)
- [x] Full weight range (Playfair: 400–900; Inter: 100–900)
- [x] Legible at small sizes (Inter)
- [x] Distinctive at large sizes (Playfair)
- [x] Consistent hierarchy: H1/H2 = Playfair, H3+ = Inter Bold, Body = Inter Regular
- [x] Performance: `display: swap` prevents FOIT (Flash of Invisible Text)
