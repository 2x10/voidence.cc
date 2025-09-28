// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    app : 
    {
        head : 
        {
            title: "Voidence Network",

            charset : 'utf-8',
            viewport : 'width=device-width, initial-scale=1, maximum-scale=1',

            meta : 
            [
                { property: 'og:title', content: "voidence.cc" },
                { property: 'og:description', content: "Voidence Network" },
                { property: 'og:type', content: "website" },
                { property: 'theme-color', content: "#FF00FF" },
            ]
        }
    },

    css : 
    [
        '~/assets/css/variables.scss',
        '~/assets/css/global.scss'
    ],
})
