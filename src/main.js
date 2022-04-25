import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'

// icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)


const api_set = {
    data(){
        return {
            url: "http://192.168.18.76:3000"
        }
    }
}

const app = createApp(App).use(router);
app.component('font-awesome-icon', FontAwesomeIcon)

app.mixin(api_set);
app.mount('#app')
