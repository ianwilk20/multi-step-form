/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'ubuntu': ["Ubuntu", "sans-serif"]
        },
        extend: {
            fontWeight: {
                medium: 500,
                bold: 700
                //Continue working on getting the new locally hosted fonts working so that the font weights work
            }
        }
    },
    plugins: [],
}