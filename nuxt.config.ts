// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    app: {
        head: {
            title: 'Tuna',
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap",
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@600&display=swap'
                }
            ],
        },
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' }
    },
    css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
            'process.env.baseUrlApi': JSON.stringify(process.env.NUXT_BASE_URL_API)
        },
    },
    // runtimeConfig: {
    //     public: {
    //         baseUrlApi: process.env.NUXT_BASE_URL_API,
    //     }
    // },
    modules: [
        '@vite-pwa/nuxt'
    ],
    pwa: {
        manifest: {
            name: 'Tuna',
            short_name: 'Tuna',
            description: 'Tuna is new job sites',
            icons: [
                {
                    src: 'icons/icon64x64.png',
                    sizes: '64x64',
                    type: 'image/png'
                },
                {
                    src: 'icons/icon144x144.png',
                    sizes: '144x144',
                    type: 'image/png'
                },
                {
                    src: 'icons/icon192x192.png',
                    sizes: '192x192',
                    type: 'image/png'
                },
                {
                    src: 'icons/icon512x512.png',
                    sizes: '512x512',
                    type: 'image/png'
                }
            ]
        },
        workbox: {
            navigateFallback: "/",
        },
        devOptions: {
            enabled: true,
            type: 'module'
        }
    },
})