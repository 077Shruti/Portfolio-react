// tailwind.config.js
export const theme = {
    extend: {
        keyframes: {
            'slide-right': {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(100px)' },
            },
        },
        animation: {
            'slide-right-normal': 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards',
        },
    },
};
export const plugins = [];
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export default { theme, plugins, content };
