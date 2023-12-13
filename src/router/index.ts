import { createRouter, createWebHistory } from 'vue-router'
/* import HomeView from '../views/HomeView.vue' */
import MainPage from '../views/MainPage.vue'
import MessageVue from '@/views/Message.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path:'/msn',
      name:'msn',
      component: MessageVue
    }

  ]
})

export default router
