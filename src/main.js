// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/srceen.scss'
//高德地图
import AMap from 'vue-amap'

import scroll from 'vue-seamless-scroll'

import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(scroll)

Vue.prototype.$axios = axios

// import echarts from 'echarts'
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.prototype.url = 'http://121.36.254.84:8299'
Vue.prototype.header = 'Bearer ' + sessionStorage.getItem('token')

axios.interceptors.request.use(function (config) {
  undefined
  let token = 'Bearer ' + sessionStorage.getItem('token')
  if (token) {
    undefined
    config.headers['Authorization'] = token;
  }
  return config;
})

Vue.use(AMap)
// 初始化vue-amap
AMap.initAMapApiLoader({
  key: "8ede6988a3a58a39d1b605a9d0790642", // 这里写你申请的高德地图的key
  plugin: ['AMap.Autocomplete','AMap.GraspRoad', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.Geocoder','AMap.Geolocation'],
  // v: "1.4.15",
   // 默认高德 sdk 版本为 1.4.4
   v: '1.4.4'
  // uiVersion: "1.1"
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
