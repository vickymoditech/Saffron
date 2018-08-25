import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact';
import Gallery from './views/Gallery';
import Service from './views/Service';
import AdminMain from './views/AdminMain';
import Error404 from './views/Error404';

Vue.use(Router);

export default new Router({
  routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
          path: '/about',
          name: 'about',
          component: About
      },
      {
          path: '/contact',
          name: 'contact',
          component: Contact
      },
      {
          path: '/gallery',
          name: 'gallery',
          component: Gallery
      },
      {
          path: '/service',
          name: 'service',
          component: Service
      },
      {
          path: '/admin',
          name: 'admin',
          component: AdminMain
      },
      {
          path: '/*',
          name: '404',
          component:Error404
      }
  ]
})
