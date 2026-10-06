/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.25)',
          medium: 'rgba(255, 255, 255, 0.15)',
          border: 'rgba(255, 255, 255, 0.18)',
          dark: 'rgba(15, 23, 42, 0.65)',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-light': 'radial-gradient(at 40% 20%, hsla(250,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(290,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(333,100%,82%,1) 0px, transparent 50%)',
        'mesh-dark': 'radial-gradient(at 40% 20%, hsla(250,100%,15%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(290,100%,15%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(333,100%,15%,1) 0px, transparent 50%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass-hover': '0 12px 40px 0 rgba(31, 38, 135, 0.25)',
        'glow': '0 0 15px rgba(99, 102, 241, 0.5)',
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '12px',
      }
    },
  },
  plugins: [],
}
