<template>
  <v-app>
    <v-main>
      <v-container class="py-6 py-md-10">
        <v-app-bar class="glass px-2" rounded="lg" elevation="0" height="72">
          <v-app-bar-title class="font-weight-bold">Pascal KAMANO</v-app-bar-title>

          <v-spacer />

          <div class="d-none d-md-flex align-center ga-2">
            <v-btn v-for="item in navItems" :key="item.href" :href="item.href" variant="text">
              {{ item.label }}
            </v-btn>
          </div>

          <v-btn class="ml-2" color="primary" href="mailto:kamanofayapascal@gmail.com" prepend-icon="mdi-send" variant="flat">
            Contact
          </v-btn>
        </v-app-bar>

        <section class="section">
          <v-row align="center" class="flex-column-reverse flex-md-row" justify="space-between">
            <v-col cols="12" md="7">
              <v-chip class="mb-5" color="primary" variant="tonal">
                <span class="availability-dot mr-3" />
                Disponible pour projets web
              </v-chip>

              <h1 class="text-h3 text-md-h1 font-weight-black mb-6">
                Développeur front-end qui transforme les idées en
                <span class="text-gradient">interfaces élégantes.</span>
              </h1>

              <p class="text-h6 text-medium-emphasis mb-8 section-title">
                Je conçois des expériences rapides, lisibles et modernes avec Vue, Nuxt,
                Vuetify et une attention forte au détail produit. 
              </p>

              <div class="d-flex flex-wrap ga-3">
                <v-btn color="primary" href="#projects" prepend-icon="mdi-rocket-launch" size="large">
                  Voir mes projets actuels
                </v-btn>
                <v-btn href="#contact" prepend-icon="mdi-coffee" size="large" variant="outlined">
                  Travaillons ensemble 
                </v-btn>
              </div>
            </v-col>

            <v-col cols="12" md="5">
              <v-card class="glass hero-portrait" rounded="lg">
                <div class="hero-grid" />
                <v-card class="glass portrait-card pa-5" rounded="lg" elevation="0">
                  <div class="d-flex align-center ga-4">
                    <v-avatar color="primary" size="72">
                      <span class="text-h4 font-weight-bold">PK</span>
                    </v-avatar>
                    <div>
                      <div class="text-h6 font-weight-bold">Pascal KAMANO</div>
                      <div class="text-body-2 text-medium-emphasis">
                        Nuxt Developer / UI Designer 
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-card>
            </v-col>
          </v-row>
        </section>

        <section class="pb-12">
          <v-row>
            <v-col v-for="stat in stats" :key="stat.label" cols="6" md="3">
              <v-card class="glass stat-card pa-5" elevation="0">
                <div class="text-h4 font-weight-black text-primary">{{ stat.value }}</div>
                <div class="text-body-2 text-medium-emphasis">{{ stat.label }}</div>
              </v-card>
            </v-col>
          </v-row>
        </section>

        <section id="projects" class="section">
          <div class="section-title mb-8">
            <v-chip class="mb-4" color="secondary" variant="tonal">Projets récents</v-chip>
            <h2 class="text-h3 font-weight-black mb-3">Des interfaces pensées pour être utilisées.</h2>
            <p class="text-body-1 text-medium-emphasis">
              Quelques exemples de projets qui mélangent performance, clarté et identité visuelle.
            </p>
          </div>

          <v-row>
            <v-col v-for="project in projects" :key="project.title" cols="12" md="4">
              <v-card class="glass project-card h-100 pa-5" elevation="0">
                <v-icon :icon="project.icon" color="primary" size="36" />
                <h3 class="text-h5 font-weight-bold mt-5 mb-3">{{ project.title }}</h3>
                <p class="text-body-2 text-medium-emphasis mb-5">{{ project.description }}</p>
                <div class="d-flex flex-wrap ga-2">
                  <v-chip v-for="tag in project.tags" :key="tag" size="small" variant="tonal">
                    {{ tag }}
                  </v-chip>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </section>

        <section id="skills" class="section">
          <v-row align="center">
            <v-col cols="12" md="5">
              <v-chip class="mb-4" color="accent" variant="tonal">Stack</v-chip>
              <h2 class="text-h3 font-weight-black mb-4">Une stack moderne, simple à maintenir.</h2>
              <p class="text-body-1 text-medium-emphasis">
                J’aime construire des produits qui restent propres côté code comme côté expérience.
              </p>
            </v-col>
            <v-col cols="12" md="7">
              <v-row>
                <v-col v-for="skill in skills" :key="skill.name" cols="12" sm="6">
                  <v-card class="glass skill-card pa-5" elevation="0">
                    <div class="d-flex align-center ga-3">
                      <v-icon :icon="skill.icon" color="secondary" />
                      <strong>{{ skill.name }}</strong>
                    </div>
                    <p class="text-body-2 text-medium-emphasis mt-3 mb-0">{{ skill.text }}</p>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </section>

        <section id="contact" class="section">
          <v-card class="glass pa-6 pa-md-10" rounded="lg" elevation="0">
            <v-row align="center">
              <v-col cols="12" md="8">
                <v-chip class="mb-4" color="primary" variant="tonal">Contact</v-chip>
                <h2 class="text-h3 font-weight-black mb-3">Un projet en tête ? Parlons-en.</h2>
                <p class="text-body-1 text-medium-emphasis mb-0">
                  Je peux aider sur un portfolio, une landing page, une interface SaaS ou une refonte Vue/Nuxt.
                </p>
              </v-col>
              <v-col class="text-md-right" cols="12" md="4">
                <v-btn color="primary" href="mailto:kamanofayapascal@gmail.com" prepend-icon="mdi-email-fast" size="large">
                  Envoyer un message
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </section>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const navItems = [
  { label: 'Projets', href: '#projects' },
  { label: 'Stack', href: '#skills' },
  { label: 'Contact', href: '#contact' }
]

const stats = [
  { value: '4+', label: 'années expérience' },
  { value: '28', label: 'projets livrés' },
  { value: '12ms', label: 'obsession perf' },
  { value: '100%', label: 'responsive' }
]

const projects = [
  {
    title: 'Dashboard SaaS',
    description: 'Interface analytique rapide avec filtres, cartes KPI et navigation claire.',
    icon: 'mdi-view-dashboard-outline',
    tags: ['Nuxt', 'Vuetify', 'Charts']
  },
  {
    title: 'Portfolio photo',
    description: 'Galerie immersive avec pages projet, animations douces et SEO propre.',
    icon: 'mdi-camera-outline',
    tags: ['Vue', 'CMS', 'SEO']
  },
  {
    title: 'App réservation',
    description: 'Parcours mobile-first pour réserver, payer et gérer ses disponibilités.',
    icon: 'mdi-calendar-check-outline',
    tags: ['UX', 'API', 'Mobile']
  }
]

const skills = [
  {
    name: 'Nuxt & Vue',
    text: 'Architecture composants, routing, SEO et rendu performant.',
    icon: 'mdi-vuejs'
  },
  {
    name: 'Vuetify',
    text: 'Design system robuste, responsive et rapide à faire évoluer.',
    icon: 'mdi-material-design'
  },
  {
    name: 'UI Design',
    text: 'Hiérarchie visuelle, micro-interactions et interfaces agréables.',
    icon: 'mdi-palette-outline'
  },
  {
    name: 'Performance',
    text: 'Pages légères, assets optimisés et expérience fluide.',
    icon: 'mdi-speedometer'
  }
]
</script>
