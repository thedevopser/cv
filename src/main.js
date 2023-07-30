import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTwitter, faGithub, faGitlab, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import { VueReCaptcha } from 'vue-recaptcha-v3'

import './assets/style.scss'

library.add(faTwitter, faGithub, faGitlab, faLinkedin,faInstagram)

createApp(App)
    .use(router)
    .use(VueReCaptcha, {
        siteKey: process.env.VUE_APP_CAPTCHA_KEY
    })
    .use(Toast, {
        transition: 'Vue-Toastification__bounce',
        maxToasts: 3,
        newestOnTop: true
    })
    .component('font-awesome-icon',FontAwesomeIcon)
    .mount('#app')
