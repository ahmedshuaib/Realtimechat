/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vue from 'vue'
import VueChatScroll from "vue-chat-scroll/dist/vue-chat-scroll";
Vue.use(VueChatScroll)

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('message', require('./components/message.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',

    data: {
        message: '',
        chat: {
            history: [],
            user: [],
            color: [],
        }
    },

    methods: {
        send() {
            this.chat.user.push("You");
            this.chat.history.push(this.message);
            this.chat.color.push('bg-danger');
            if(this.message.length > 0) {
                axios.post('/send', {
                    message : this.message
                })
                .then(response => {
                    this.message = ''
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
            }
        }
    },

    mounted() {
        Echo.private('chat').listen('ChatEvent', (e) => {
            this.chat.user.push(e.user)
            this.chat.history.push(e.message);
            this.chat.color.push('bg-success');
        });
    }
});
