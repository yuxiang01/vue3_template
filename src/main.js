import {createApp} from 'vue'
import "normalize.css"
import "@/assets/css/index.css"
import App from './App.vue'
import Icons from './global/register-icon'
import router from './router'
import pinia from './stores'

createApp(App).use(Icons).use(pinia).use(router).mount('#app')
