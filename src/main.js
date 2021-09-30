import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import Components from './components/components'
import './assets/sass/app.sass'

const app = createApp(App)

Components.forEach(component => {
    app.component(component.name, component)
})

app.use(store)

app.mount('#app')
