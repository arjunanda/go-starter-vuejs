import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../Landing/LoginView.vue'
import RegisterView from '../Landing/RegisterView.vue'
import Home from '../Dashboard/Content/Read/HomeRead.vue'
import Filemanager from '../Dashboard/Content/Read/ManagerRead.vue'
import NotFound from '../Landing/layouts/NotFound.vue'


const routesDashboard = [
  {
    path: '/',
    redirect: { name: 'Dashboard' }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Home
  },
  {
    path: '/dashboard/filemanager',
    name: 'Filemanager',
    component: Filemanager
  },
  {
    path: '/:pathMatch(.*)*a',
    component: NotFound
  }
]
const routesLanding = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/:pathMatch(.*)*a',
    name: 'Not Found',
    component: NotFound
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]


if (localStorage.getItem("token") != null) {
  var routes = routesDashboard
  var class_active = 'slide-active'
} else {
  var routes = routesLanding
  var class_active = 'text-active'
}
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: class_active
 
})

export default router
