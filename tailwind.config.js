/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00d4ff',
        'neon-cyan': '#00ffff',
        'neon-purple': '#8b5cf6',
        'neon-pink': '#ff0080',
        'neon-green': '#00ff41',
        'neon-orange': '#ff6b35',
        'neon-skyblue': '#00d4ff',
        'dark-space': '#0a0a0a',
        'deep-space': '#000000',
        'space-gray': '#1a1a1a',
        'holographic': 'rgba(0, 212, 255, 0.1)',
        'glass': 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'futura': ['Rajdhani', 'sans-serif'],
        'tech': ['Share Tech Mono', 'monospace'],
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 8s linear infinite',
        'glitch': 'glitch 1s infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)' },
          '50%': { opacity: '0.5', boxShadow: '0 0 40px rgba(0, 212, 255, 1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        }
      }
    },
  },
  plugins: [],
}
