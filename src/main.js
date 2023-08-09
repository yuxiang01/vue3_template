import {createApp} from 'vue'
import "normalize.css"
import "@/assets/css/index.css"
import App from './App.vue'
import Icons from './global/register-icon'

createApp(App).use(Icons).mount('#app')
