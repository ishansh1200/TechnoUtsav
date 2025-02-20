import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        // New cyberpunk-inspired colors
        cyber: {
          cyan: '#00f3ff',
          blue: '#0066ff',
          purple: '#9d00ff',
          pink: '#ff00ff',
          black: '#06063d'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      animation: {
        'hue-rotate': 'hue-rotate 6s linear infinite',
        'scanline': 'scanline 3s linear infinite',
        'neon-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        'hue-rotate': {
          'from': { filter: 'hue-rotate(0deg)' },
          'to': { filter: 'hue-rotate(360deg)' },
        },
        'scanline': {
          'from': { transform: 'translateY(-100%)' },
          'to': { transform: 'translateY(100%)' },
        }
      },
      // New custom shadows and gradients
      boxShadow: {
        'cyber': '0 0 25px -5px rgba(0, 243, 255, 0.3)',
        'cyber-lg': '0 0 50px -10px rgba(0, 243, 255, 0.5)'
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(45deg, #00f3ff 0%, #0066ff 50%, #9d00ff 100%)',
        'cyber-diagonal': 'linear-gradient(45deg, #06063d 25%, #00f3ff 50%, #06063d 75%)'
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography')
  ],
} satisfies Config;