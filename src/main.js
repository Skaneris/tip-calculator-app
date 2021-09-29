import { createApp } from 'vue'
import App from './App.vue'
import Components from './components/components'
import './assets/sass/app.sass'

const app = createApp(App)

Components.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')
