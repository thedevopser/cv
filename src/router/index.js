import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import PortfolioPage from '../views/PortfolioPage.vue'
import ContactPage from '../views/ContactPage.vue'
import ExperiencePage from "../views/ExperiencePage.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/portfolio', component: PortfolioPage },
    { path: '/contact', component: ContactPage },
    { path: '/experience', component: ExperiencePage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
