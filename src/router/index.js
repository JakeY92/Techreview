import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '../components/DashBoard.vue'
import ReviewPage from '../components/ReviewPage.vue'
import ReviewDetail from '../components/ReviewDetail.vue'
import NewArrivals from '../components/NewArrivals.vue'
import TopPicks from '../components/TopPicks.vue'

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashBoard,
  },
  {
    path: '/ReviewPage',
    name: 'ReviewPage',
    component: ReviewPage,
  },
  {
    path: '/reviews/:id',
    name: 'ReviewDetail',
    component: ReviewDetail,
  },
  {
    path: '/newarrivals',
    name: 'NewArrivals',
    component: NewArrivals,
  },
  {
    path: '/toppicks',
    name: 'TopPicks',
    component: TopPicks,
  },
  // Other routes...
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
