import type {Config} from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // #4A8BDF
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                dark: 'var(--dark)',
                // zalando: 'var(--zalando)',
            },
            fontFamily: {
                Montserrat: ['Montserrat', 'sans-serif'],
                Khula: ['Khula'],
            },
            backgroundColor: {
                backdrop: 'rgba(0, 0, 0, 0.8)',
            },
            screens: {
                xs: '500px',
                xss: '350px',
            },
            animation: {
                flip: 'flip 0.5s ',
                wiggle: 'wiggle 1.25s infinite',
            },
            keyframes: {
                jump: {
                    // '33%': {
                    //     'text-shadow': '0 60px #f37121, 0 150px #f2aaaa',
                    // },
                    // '50%': {
                    //     transform: 'translate(0, 0) rotate(-4deg)',
                    //     'text-shadow': '0 0px #8fc0a9, 0 0px #84a9ac',
                    // },
                    // '66.67%': {
                    //     'text-shadow': '0 -60px #d54062, 0 -150px #8fc0a9',
                    // },
                    // '0%, 100%': {
                    //     transform: 'translateY(1rem)',
                    // },
                    // '50%': {
                    //     transform: 'translateY(calc(1rem * -1))',
                    // },
                },
                flip: {
                    '0%,80%': {
                        transform: 'rotateY(360deg)',
                    },
                },
                wiggle: {
                    '20%,100%': {
                        transform: 'translate(0, 3px)',
                    },

                    '0%': {
                        transform: 'translate(0, 0px)',
                    },
                    '10%': {
                        transform: 'translate(0, 3px)',
                    },
                },
                toplong: {
                    '10%, 40%': {
                        transform: 'translateY(-48vh) scaleY(1)',
                    },

                    '90%': {
                        transform: 'translateY(-48vh) scaleY(4)',
                    },
                },
                rotate: {
                    '20%, 80%': {
                        transform: 'rotateY(180deg)',
                    },

                    '100%': {
                        transform: 'rotateY(360deg)',
                    },
                },
                falling: {
                    '12%': {
                        transform: 'rotateX(240deg)',
                    },

                    '24%': {
                        transform: 'rotateX(150deg)',
                    },

                    '36%': {
                        transform: 'rotateX(200deg)',
                    },

                    '48%': {
                        transform: 'rotateX(175deg)',
                    },

                    '60%, 85%': {
                        transform: 'rotateX(180deg)',
                    },

                    '100%': {
                        transform: 'rotateX(0deg)',
                    },
                },
                shrinkjump: {
                    '10%, 35%': {
                        transform: 'scale(2, .2) translate(0, 0)',
                    },

                    '45%, 50%': {
                        transform: 'scale(1) translate(0, -150px)',
                    },

                    '80%': {
                        transform: 'scale(1) translate(0, 0)',
                    },
                },
                balance: {
                    '0%, 100%': {
                        transform: 'rotate(0deg)',
                    },
                    '30%, 60% ': {
                        transform: 'rotate(-45deg)',
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
