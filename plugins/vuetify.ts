import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'portfolioTheme',
      themes: {
        portfolioTheme: {
          dark: true,
          colors: {
            background: '#0d1117',
            surface: '#151b24',
            primary: '#65d6ad',
            secondary: '#f4c95d',
            accent: '#8aa4ff',
            error: '#ff6b6b',
            info: '#64b5f6',
            success: '#65d6ad',
            warning: '#f4c95d'
          }
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
