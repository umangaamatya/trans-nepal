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
  safelist: [
    'font-poppins',
    'font-inter',
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
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Existing design-specific colors
        'terminal-blue': '#283B9A',
        'terminal-blue-light': '#616FB3',
        'terminal-blue-dark': '#171F45',
        'terminal-bg': '#F6F8FF',
        'terminal-gray': '#4B4B4B',

        'company-blue': '#283B9A',
        'company-dark-blue': '#252F5C',
        'company-light': '#ECEFFF',

        // --- Merge new transnepal colors from provided code ---
        transnepal: {
          blue: "#283B9A",
          "blue-dark": "#252F5C",
          text: "#36427C",
          "card-bg": "#ECEFFF",
        },

        // Existing colors (keep everything intact)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        brand: {
          blue: "#252f5c",
          "blue-light": "#364381",
          "blue-nav": "#283b9a",
          "service-bg": "#5664b2",
          gray: "#4b4b4b",
          "gray-light": "#2b3b83",
          ...(typeof {} !== "undefined" && {
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
          }),
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        port: {
          primary: "hsl(var(--port-primary))",
          dark: "hsl(var(--port-dark))",
          text: "hsl(var(--port-text))",
        },
        "allcargo-blue": "hsl(var(--allcargo-blue))",
        "allcargo-hero": "hsl(var(--allcargo-hero))",
        "allcargo-light-blue": "hsl(var(--allcargo-light-blue))",
        "allcargo-text-muted": "hsl(var(--allcargo-text-muted))",
        "allcargo-bg-light": "hsl(var(--allcargo-bg-light))",
        'primary-blue': '#283b9a',
        'hero-blue': '#252f5c',
        'light-blue': '#c8d0ed',
        'icon-blue': '#36427c',
        'text-gray': '#4b4b4b',
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
        'hero-bg': '#252f5c',
        'text-blue': 'rgba(40, 59, 154, 0.79)',
        'form-bg': '#f2f4f9',
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
        },
        terminal: {
          primary: "#283B9A",
          secondary: "#5664B2",
          background: "#F6F8FF",
          text: "#4B4B4B",
          "text-dark": "#171F45",
          blue: "#283B9A",
          "blue-light": "#5664B2",
          "bg-light": "#F6F8FF",
          red: "#AC3A38",
          gray: {
            light: "#F6F8FF",
            medium: "#4B4B4B",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      // ...other existing theme extensions...
    },
  },
  plugins: [require("tailwindcss-animate")],
}
