/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        head: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },

      colors: {
        accent: {
          purple: '#7c6bff',
          pink: '#ff6b9d',
          teal: '#00d4aa',
        },
      },
      backgroundImage: {
        'grad-main': 'linear-gradient(135deg, #7c6bff, #ff6b9d)',
        'grad-teal': 'linear-gradient(135deg, #00d4aa, #7c6bff)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
