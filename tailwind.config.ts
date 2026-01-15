import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050506',
        foreground: '#f8fafc',
        accent: '#ff6a00',
        'accent-hover': '#ff8a3d',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      animation: {
        'float-up': 'float-up 12s linear infinite',
        'float-up-alt': 'float-up-alt 14s linear infinite',
      },
      keyframes: {
        'float-up': {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '5%': { opacity: '1' },
          '95%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) rotate(45deg)', opacity: '0' },
        },
        'float-up-alt': {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '5%': { opacity: '1' },
          '95%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) rotate(-30deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
export default config
