import { Editor } from '@bytemd/vue-next'
import Bytemd from './components/Bytemd.vue'

export default {
    install(app) {
        app.component('Bytemd', Bytemd)
        app.component('Editor', Editor)
    }
}