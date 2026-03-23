/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1890FF',
        'primary-dark': '#1677FF',
        success: '#00B578',
        danger: '#FF3141',
        weak: '#999999',
        'text-main': '#333333',
        'text-sub': '#7D889C',
        'bg-page': '#F5F5F5',
      },
      fontFamily: {
        sans: ['"PingFang SC"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

