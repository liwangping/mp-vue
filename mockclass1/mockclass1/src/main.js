import Vue from 'vue';
import App from './App';
import "../static/vant-weapp/common/index.wxss"

// import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
