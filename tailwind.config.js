module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            height: {
                sm: "30rem",
                md: "35rem",
                lg: '40rem',
                xl: '45rem'
            },
            colors: {
                'v-blue': '#1a2adf',
                'v-orange': '#ffc700'
            },
            borderWidth: {
                '1': '1px'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
