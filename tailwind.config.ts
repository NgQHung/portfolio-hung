import type {Config} from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // #4A8BDF
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                // zalando: 'var(--zalando)',
            },
            fontFamily: {
                Montserrat: ['Montserrat', 'sans-serif'],
            },
            backgroundColor: {
                backdrop: 'rgba(0, 0, 0, 0.8)',
            },
        },
    },
    plugins: [],
};
export default config;
