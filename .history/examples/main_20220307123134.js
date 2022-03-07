import Vue from 'vue'
import App from './App.vue'
// import VueModelViewer from '../packages/index'
// import VueModelViewer from '../index.js'
import VueModelViewer from '../lib/vue-model-viewer.umd.js'
// import VueModelViewer from 'vue-model-viewer'
Vue.config.productionTip = false
Vue.use(VueModelViewer);
new Vue({
  render: h => h(App),
}).$mount('#app')
