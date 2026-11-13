/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Satoshi', 'Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  			serif: ['Instrument Serif', 'ui-serif', 'Georgia', 'serif'],
  			mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
  		},
  		boxShadow: {
  			elevated: '0 1px 2px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.08)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			card: {
  				DEFAULT: 'var(--card)',
  				foreground: 'var(--card-foreground)'
  			},
  			primary: {
  				DEFAULT: 'var(--primary)',
  				foreground: 'var(--primary-foreground)'
  			},
  			secondary: {
  				DEFAULT: 'var(--secondary)',
  				foreground: 'var(--secondary-foreground)'
  			},
  			accent: {
  				DEFAULT: 'var(--accent)',
  				foreground: 'var(--accent-foreground)'
  			},
  			muted: {
  				DEFAULT: 'var(--muted)',
  				foreground: 'var(--muted-foreground)'
  			},
  			border: 'var(--border)',
  			ring: 'var(--ring)',
  			// Nuevas variables personalizadas
  			ink: {
  				DEFAULT: 'var(--ink)',
  				muted: 'var(--ink-muted)'
  			},
  			'on-ink': 'var(--on-ink)',
  			surface: 'var(--surface)',
  			soft: 'var(--soft)',
  			line: 'var(--line)',
  			'text-primary': 'var(--text-primary)',
  			'text-secondary': 'var(--text-secondary)',
  			'text-tertiary': 'var(--text-tertiary)',
  			'text-light': 'var(--text-light)',
  			'bg-primary': 'var(--bg-primary)',
  			'bg-secondary': 'var(--bg-secondary)',
  			'bg-dark-primary': 'var(--bg-dark-primary)',
  			'bg-dark-secondary': 'var(--bg-dark-secondary)',
  			'border-dark': 'var(--border-dark)',
  			'border-secondary': 'var(--border-secondary)',
  			'icon-primary': 'var(--icon-primary)',
  			'icon-secondary': 'var(--icon-secondary)'
  		}
  	}
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
