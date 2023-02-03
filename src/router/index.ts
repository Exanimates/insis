// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Fms from '@/views/Fms.vue'
import GuvdOrMvd from '@/views/GuvdOrMvd.vue'
import UvdOrOvd from '@/views/UvdOrOvd.vue'
import Police from '@/views/Police.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/fms',
    component: Fms,
  },
  {
    path: '/guvdOrMvd',
    component: GuvdOrMvd,
  },
  {
    path: '/uvdOrOvd',
    component: UvdOrOvd,
  },
  {
    path: '/police',
    component: Police,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
