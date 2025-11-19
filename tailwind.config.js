/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
    theme: {
        extend: {
            colors: {
                primary: '#1a2a4c',
                'primary-dark': '#101a2e',
                secondary: '#8a9ebf',
                accent: '#38bdf8',
                background: '#f7faff',
                'background-dark': '#e0e8f0',
                'text-main': '#1e293b',
                'text-light': '#64748b',
            },
        },
    },
    plugins: [],
}