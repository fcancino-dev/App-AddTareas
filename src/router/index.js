import { createRouter, createWebHistory } from 'vue-router'
 const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
        
    },
    {
        path: '/addtask',
        name: 'AddTask',
        component: () => import('../views/AddTask.vue')
    }
 ]

 const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router