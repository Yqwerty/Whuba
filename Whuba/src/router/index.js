import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '../components/login/login.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/login', component: login }
  //   ,{ path: '/register', component: register }
];

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});

export default router;
