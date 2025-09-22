module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep Navy
        primary: {
          DEFAULT: "#1E3A5F", // deep navy
          50: "#F0F4F8", // navy-50
          100: "#D6E4ED", // navy-100
          200: "#B8CDE0", // navy-200
          300: "#9BB6D3", // navy-300
          400: "#7E9FC6", // navy-400
          500: "#1E3A5F", // navy-500
          600: "#1A3354", // navy-600
          700: "#162C49", // navy-700
          800: "#12253E", // navy-800
          900: "#0E1E33", // navy-900
        },
        // Secondary Colors - Professional Gray
        secondary: {
          DEFAULT: "#4A5568", // gray-600
          50: "#F7FAFC", // gray-50
          100: "#EDF2F7", // gray-100
          200: "#E2E8F0", // gray-200
          300: "#CBD5E0", // gray-300
          400: "#A0AEC0", // gray-400
          500: "#718096", // gray-500
          600: "#4A5568", // gray-600
          700: "#2D3748", // gray-700
          800: "#1A202C", // gray-800
          900: "#171923", // gray-900
        },
        // Accent Colors - Royal Blue
        accent: {
          DEFAULT: "#3182CE",
          50: "#EBF8FF",
          100: "#BEE3F8",
          200: "#90CDF4",
          300: "#63B3ED",
          400: "#4299E1",
          500: "#3182CE",
          600: "#2B6CB0",
          700: "#2C5282",
          800: "#2A4365",
          900: "#1A365D",
        },
        // Background Colors
        background: "#FFFFFF", // white
        surface: "#F7FAFC", // gray-50
        // Text Colors
        text: {
          primary: "#2D3748", // gray-700
          secondary: "#718096", // gray-500
        },
        // Status Colors
        success: {
          DEFAULT: "#38A169", // green-500
          50: "#F0FFF4", // green-50
          100: "#C6F6D5", // green-100
          500: "#38A169", // green-500
        },
        warning: {
          DEFAULT: "#D69E2E", // yellow-600
          50: "#FFFBEB", // yellow-50
          100: "#FEF5E7", // yellow-100
          500: "#D69E2E", // yellow-600
        },
        error: {
          DEFAULT: "#E53E3E", // red-500
          50: "#FED7D7", // red-50
          100: "#FEB2B2", // red-100
          500: "#E53E3E", // red-500
        },
        // Border Colors
        border: {
          DEFAULT: "#E2E8F0", // gray-200
          light: "#F7FAFC", // gray-50
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['Source Code Pro', 'monospace'],
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        code: ['Source Code Pro', 'monospace'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
        'xs': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'custom-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-in-out',
        'scale-in': 'scaleIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
}