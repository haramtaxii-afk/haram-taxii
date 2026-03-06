import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        // 30% body — Inter (Humanist sans-serif, legible at all sizes)
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        // 10% display — Playfair Display (elegant serif for H1/H2 identity)
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        // ── Brand Color System (60-30-10 Rule) ──────────────────────
        // 60% Dominant : bg-white / bg-gray-*  (backgrounds)
        // 30% Secondary: bg-brand-teal          (nav, sections)
        // 10% Accent   : bg-brand-amber         (CTAs, stars, badges)
        'brand-teal': {
          DEFAULT: 'hsl(var(--brand-teal))',
          light: 'hsl(var(--brand-teal-light))',
          pale: 'hsl(var(--brand-teal-pale))',
          dark: 'hsl(var(--brand-teal-dark))',
        },
        'brand-amber': {
          DEFAULT: 'hsl(var(--brand-amber))',
          light: 'hsl(var(--brand-amber-light))',
          pale: 'hsl(var(--brand-amber-pale))',
        },
        // Legacy tokens (kept for backward compat)
        midnight: {
          DEFAULT: 'hsl(var(--midnight))',
          light: 'hsl(var(--midnight-light))',
          dark: 'hsl(var(--midnight-dark))',
        },
        'night-sky': {
          DEFAULT: 'hsl(var(--night-sky))',
          light: 'hsl(var(--night-sky-light))',
          dark: 'hsl(var(--night-sky-dark))',
        },
        teal: {
          50: '#f0f4f8',
          100: '#d9e5f0',
          200: '#b9d0e4',
          300: '#8db3d2',
          400: '#5c91be',
          500: '#3b74a5',
          600: '#2a5a89',
          700: '#23486f',
          800: '#1f3e5e',
          900: '#112D4E',
          950: '#0d1e36',
        },
        amber: {
          50: '#fcf9f3',
          100: '#f7efe1',
          200: '#eedec3',
          300: '#e2c69d',
          400: '#D2B57B',
          500: '#c29c55',
          600: '#b08244',
          700: '#936539',
          800: '#785233',
          900: '#62432b',
          950: '#352214',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
