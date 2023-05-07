import { ThemeDefinition, createVuetify } from "vuetify/lib/framework.mjs"
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { mdi, aliases } from 'vuetify/lib/iconsets/mdi';

const lightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        primary: '#305DB4',
        secondary: '#E1EBFF',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    }
}

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            defaultTheme: 'lightTheme',
            themes: {
                lightTheme
            }
        }, 
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi
            }
        }
    });
    nuxtApp.vueApp.use(vuetify)
})