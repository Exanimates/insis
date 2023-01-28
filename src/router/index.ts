// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/fms',
    component: () => import('@/views/Fms.vue'),
  },
  {
    path: '/guvdOrMvd',
    component: () => import('@/views/GuvdOrMvd.vue'),
  },
  {
    path: '/uvdOrOvd',
    component: () => import('@/views/UvdOrOvd.vue'),
  },
  {
    path: '/police',
    component: () => import('@/views/Police.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
