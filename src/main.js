import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTwitter, faGithub, faGitlab, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/style.scss'

library.add(faTwitter, faGithub, faGitlab, faLinkedin,faInstagram)

createApp(App)
    .use(router)
    .component('font-awesome-icon',FontAwesomeIcon)
    .mount('#app')
