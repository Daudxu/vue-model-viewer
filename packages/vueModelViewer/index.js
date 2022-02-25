// 导入组件，组件必须声明 name
import VueModelViewer from './src/main.vue'

// 为组件添加 install 方法，用于按需引入
VueModelViewer.install = function (Vue) {
  Vue.component(VueModelViewer.name, VueModelViewer)
}

export default VueModelViewer
