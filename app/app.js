import Vue from 'vue';
import VueRouter from 'vue-router';
//主页面入口
import App from "./app.vue";
//其他页面
import Home from "./pages/home.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {path:"/",component:Home}
    ]
})
//指定一开始加载的页面
new Vue({
    router,
    render:h=>h(App)
}).$mount("#app")