import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./client/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      fontFamily: {
        // Merge: keep both CSS var and plain font families
        poppins: [
          'var(--font-poppins)',
          'Poppins',
          'sans-serif'
        ],
        inter: [
          'var(--font-inter)',
          'Inter',
          'sans-serif'
        ],
      },
      spacing: {
        '13': '3.25rem',
        '18': '4.5rem',
        '25': '6.25rem',
        '30': '7.5rem',
        '57': '14.25rem'
      },
      maxWidth: {
        '7xl': '1440px',
      },
      colors: {
        // --- NEW DESIGN COLORS from snippet ---
        'primary-blue': '#283b9a',
        'hero-blue': '#252f5c',
        'light-blue': '#c8d0ed',
        'icon-blue': '#36427c',
        'text-gray': '#4b4b4b',
        // --- EXISTING COLORS ---
        brand: {
          blue: "hsl(var(--brand-blue))",
          'dark-blue': "hsl(var(--brand-dark-blue))",
          red: "hsl(var(--brand-red))",
          primary: '#252F5C',
          secondary: '#283B9A',
          tertiary: '#36427C',
          light: '#BEC5ED',
          hero: 'hsl(var(--brand-hero))',
          blueAlt: '#6F7FC1',
          'text-primary': 'hsl(var(--brand-text-primary))',
          'text-secondary': 'hsl(var(--brand-text-secondary))',
          'text-muted': 'hsl(var(--brand-text-muted))',
          'text-light': 'hsl(var(--brand-text-light))',
        },
        'brand-text': {
          primary: '#283b9a',
          secondary: '#3b4264',
          muted: 'rgba(0, 0, 0, 0.54)',
        },
        'trans-nepal': {
          'blue': '#283b9a',
          'dark-blue': '#233488',
          'light-blue': '#36427C',
          'bg': '#f6f8ff',
        },
        //'primary-blue': '#283b9a',
        'hero-bg': '#252f5c',
        //'light-blue': 'rgba(54, 66, 124, 0.77)',
        'text-blue': 'rgba(40, 59, 154, 0.79)',
        'form-bg': '#f2f4f9',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        'trans-blue': {
          '50': 'hsl(var(--trans-blue-50))',
          '100': 'hsl(var(--trans-blue-100))',
          '200': 'hsl(var(--trans-blue-200))',
          '300': 'hsl(var(--trans-blue-300))',
          '400': 'hsl(var(--trans-blue-400))',
          '500': 'hsl(var(--trans-blue-500))',
          '600': 'hsl(var(--trans-blue-600))',
          '700': 'hsl(var(--trans-blue-700))',
          '800': 'hsl(var(--trans-blue-800))',
          '900': 'hsl(var(--trans-blue-900))',
          DEFAULT: 'hsl(var(--trans-blue))'
        },
        'brand-blue': '#283B9A',
        'brand-blue-dark': '#252F5C',
        'brand-red': '#AC3A38',
        'brand-light-blue': '#6471B6',
        'brand-text-blue': '#233488',
        'medium-blue': '#4A90E2',
        'holiday': {
          'blue': 'hsl(var(--holiday-blue))',
          'blue-light': 'hsl(var(--holiday-blue-light))',
          'text': 'hsl(var(--holiday-text))',
          'red': 'hsl(var(--holiday-red))',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      boxShadow: {
        "drop-shadow-1": "var(--drop-shadow-1)",
        "drop-shadow-2": "var(--drop-shadow-2)",
        "drop-shadow-3": "var(--drop-shadow-3)",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
