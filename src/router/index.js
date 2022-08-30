import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List'
import ListNotice from '../views/ListNotice'
import DetailNotice from '../views/DetailNotice'
import DetailCarousel from '../views/DetailCarousel'
import DetailVideo from '../views/DetailVideo'
import DetailImage from '../views/DetailImage'
import Search from '../views/Search'

const routes = [
  {path: '/', name: 'root',component: Home},
  {path: '/home', name: 'home',component: Home},
  {path: '/search', name: 'search',component: Search},
  {path: '/list/:newType', name: 'list',component: List},
  {path: '/listNotice', name: 'listNotice',component: ListNotice},
  {path: '/detailNotice/:id', name: 'detailNotice',component: DetailNotice},
  {path: '/detailVideo/:id', name: 'detailVideo',component: DetailVideo},
  {path: '/detailImage/:id', name: 'detailImage',component: DetailImage},
  {path: '/detailCarousel/:id', name: 'detailCarousel',component: DetailCarousel},
  {path: '/detail/:newType/:id',name: 'detail', component: () => import('../views/Detail.vue')}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
