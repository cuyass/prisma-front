import { defineConfig } from 'vite'
import daisyui from 'daisyui'

export default defineConfig({
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                "prisma-light": {
                    "primary": "oklch(80% 0.114 19.571)",
                    "primary-content": "oklch(29% 0.066 243.157)",
                    "secondary": "oklch(83% 0.128 66.29)",
                    "secondary-content": "oklch(30% 0.056 229.695)",
                    "accent": "oklch(81% 0.111 293.571)",
                    "accent-content": "oklch(28% 0.091 267.935)",
                    "neutral": "oklch(71% 0.203 305.504)",
                    "neutral-content": "oklch(0% 0 0)",
                    "base-100": "oklch(98% 0 0)",
                    "base-200": "oklch(97% 0 0)",
                    "base-300": "oklch(92% 0 0)",
                    "base-content": "oklch(20% 0 0)",
                    "info": "oklch(68% 0.169 237.323)",
                    "info-content": "oklch(97% 0.013 236.62)",
                    "success": "oklch(72% 0.219 149.579)",
                    "success-content": "oklch(98% 0.018 155.826)",
                    "warning": "oklch(87% 0.169 91.605)",
                    "warning-content": "oklch(21% 0.006 56.043)",
                    "error": "oklch(63% 0.237 25.331)",
                    "error-content": "oklch(97% 0.013 17.38)",
                },
            },
            {
                "prisma-dark": {
                    "primary": "oklch(44% 0.177 26.899)",
                    "primary-content": "oklch(97% 0.021 166.113)",
                    "secondary": "oklch(66% 0.179 58.318)",
                    "secondary-content": "oklch(27% 0.077 45.635)",
                    "accent": "oklch(55% 0.288 302.321)",
                    "accent-content": "oklch(97% 0.014 254.604)",
                    "neutral": "oklch(38% 0.176 304.987)",
                    "neutral-content": "oklch(98% 0 0)",
                    "base-100": "oklch(12% 0.042 264.695)",
                    "base-200": "oklch(27% 0.041 260.031)",
                    "base-300": "oklch(44% 0.043 257.281)",
                    "base-content": "oklch(97% 0 0)",
                    "info": "oklch(52% 0.105 223.128)",
                    "info-content": "oklch(97% 0.013 236.62)",
                    "success": "oklch(52% 0.154 150.069)",
                    "success-content": "oklch(98% 0.018 155.826)",
                    "warning": "oklch(85% 0.199 91.936)",
                    "warning-content": "oklch(0% 0 0)",
                    "error": "oklch(57% 0.245 27.325)",
                    "error-content": "oklch(100% 0 0)",
                },
            },
        ],
    },
});