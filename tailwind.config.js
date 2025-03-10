module.exports = {
    content: ['./public/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                'custom-black': '#121212',
                'custom-gray': {
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            height: {
                'screen': '100vh',
            },
            zIndex: {
                '-1': '-1',
            },
        }
    },
    plugins: [],
} 