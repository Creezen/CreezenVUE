import FirstPage from "@/views/FirstPage.vue";
import SecondPage from "@/views/SecondPage.vue";
import ThirdPage from "@/views/ThirdPage.vue";
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {path: '/first', component: FirstPage},
    {path: '/second', component: SecondPage},
    {path: '/third', component: ThirdPage, name: 'thi'},
    {path: '/', redirect: '/first'}
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router