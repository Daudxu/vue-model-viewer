import { createApp } from 'vue'
import App from './App.vue'
// import '../lib/vue-model-viewer.css'
// import VueModelViewer from '../lib/vue-model-viewer.umd.min.js'
// import VueModelViewer from '../packages/index'
import VueModelViewer from 'vue-model-viewer'
// import { vuemodelviewer } from 'vue-model-viewer ';

const app = createApp(App);
app.use(VueModelViewer);
app.mount("#app");

