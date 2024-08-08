import Home from '../components/Home.vue'
import {createRouter, createWebHistory} from 'vue-router'


const routes =[
    {
        name:'Home',
        path:'/',
        component: Home,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;