import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '@/pages/Home';
import About from '@/pages/About';

const routes = [
    {
        path:'/',
        component:Home
    },
    {
        path:'/sobre',
        component:About
    }
]

const router = new VueRouter({
    mode:'history',
    base:'/ze',
    routes
    
});

export default router;