/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Vibrant Theme Colors
        'brand-forest': '#119853',
        'brand-yellow': '#f8be2e',
        'brand-red': '#cc2026',
        'brand-blue': '#43b8f4',
        'brand-bright-yellow': '#e4ce18',
        'brand-lime': '#e0d216',
        'brand-brown': '#30150c',
        'brand-white': '#ffffff',
        'brand-light-gray': '#f8fafc',
        'brand-charcoal': '#374151',
        
        // Minimal Theme Colors
        'minimal-charcoal': '#374151',
        'minimal-white': '#ffffff',
        'minimal-light-gray': '#f8fafc',
        'minimal-medium-gray': '#9ca3af',
        'minimal-dark-gray': '#1f2937',
        'minimal-soft-gray': '#e5e7eb',
        'minimal-near-black': '#111827',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1' }],
        'section': ['2.5rem', { lineHeight: '1.2' }],
        'subsection': ['2rem', { lineHeight: '1.3' }],
        'card-title': ['1.5rem', { lineHeight: '1.4' }],
        'small-header': ['1.25rem', { lineHeight: '1.5' }],
        'body-large': ['1.125rem', { lineHeight: '1.6' }],
      },
      spacing: {
        'xs': '0.25rem',   // 4px
        'sm': '0.5rem',    // 8px
        'md': '1rem',      // 16px
        'lg': '1.5rem',    // 24px
        'xl': '2rem',      // 32px
        '2xl': '3rem',     // 48px
        '3xl': '4rem',     // 64px
        '4xl': '6rem',     // 96px
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 15px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'scale-up': 'scaleUp 0.15s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}