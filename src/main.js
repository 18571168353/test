import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 加载store
import store from './store'
// 加载element组件库
import ElementUI from 'element-ui'
// 加载element组件库样式
import 'element-ui/lib/theme-chalk/index.css'
// 加载全局样式文件
import './styles/index.less'
// 注册element组件库
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
