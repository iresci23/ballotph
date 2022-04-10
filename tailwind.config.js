const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            }
        },

        container: {
            padding: {
              DEFAULT: '1rem',
              sm: '3rem',
              lg: '4rem',
              xl: '5rem',
              '2xl': '6rem',
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
