import {createRouter, createWebHashHistory} from 'vue-router'
import HomeViewer from './components/HomeViewer.vue'
import DemoViewer from './components/DemoViewer.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: HomeViewer},
        { path: '/demo', component: DemoViewer}
    ]
})

export default router