import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Root from './Root.vue';
import './styles.css';

const routes = [
  { path: '/', component: App },
  // Dedicated print layout route (same component, different classes can be toggled)
  { path: '/print', component: App },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(Root).use(router).mount('#app');
