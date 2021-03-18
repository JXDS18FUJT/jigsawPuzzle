import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import Vant from 'vant';
import 'vant/lib/index.css';
import { Notify } from 'vant';
import { Toast } from 'vant';

import './assets/style/_commonReset.scss';
import './assets/style/_resetMobile.scss';
import './assets/iconfont/iconfont.css';


if (process.env.NODE_ENV == 'development') {    // 判断是否为开发模式
    require('./mock/index.js')
}

import topBack from './components/topBack.vue'
Vue.component('topBack', topBack)
Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(Notify)

const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
const recalc = function () {
    const clientWidth = document.documentElement.clientWidth;

    if (!clientWidth) {
        return false;
    }

    if (clientWidth >= 750) {
        document.documentElement.style.fontSize = '100px';
    } else {
        document.documentElement.style.fontSize = (clientWidth / 750) + 'px';
    }
};

// 添加事件句柄
window.addEventListener(resizeEvt, recalc, false);
document.addEventListener('DOMContentLoaded', recalc, false);
document.body.addEventListener('touchstart', function () { }, false);


var time = ""; // 保存第一次按键时间；
// 监听返回按钮
//此处使用的h5返回事件
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
