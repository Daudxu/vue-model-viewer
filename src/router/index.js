import Vue from 'vue';
import Router from 'vue-router';
const VueModelViewer = () => import('@/examples/VueModelViewer.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: VueModelViewer
    },
  ]
});
