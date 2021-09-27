require('./bootstrap');

import '@babel/polyfill'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import App from './vue/app.vue'
import JwPagination from 'jw-vue-pagination';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash ,faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( faPlusSquare, faTrash ,faEdit)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

Vue.component('jw-pagination', JwPagination);

const app = new Vue({
    el: '#app',
    components: { App }

})

