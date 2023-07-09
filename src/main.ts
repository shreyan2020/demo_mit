import { createApp } from 'vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import 'mdb-vue-ui-kit/css/mdb.min.css';
import App from './App.vue'
import router from './router'

const app = createApp(App);

app.use(router)
app.mount('#app')

// createApp(App).mount('#app')

