/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue, js,ts,jsx,tsx}', // 要加上vue
    ],
    theme: {
        extend: {
            boxShadow: {
                '3xl': '0px 0px 14px #000000',
            },
        },
    },
    plugins: [],
}
