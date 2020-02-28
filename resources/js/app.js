//Node Modules import
import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
//Local imports
import './jquery.slim.min.js';
import './bootstrap.bundle.min.js';
import '../css/bootstrap.css';

new Vue({
el: '#app',
render: h => h(App)
})
