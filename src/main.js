import Vue from 'vue'
import App from './App.vue'
import Form from './Form.vue'
import Input from './Input.vue'

Vue.component('app-form', Form)
Vue.component('app-input', Input)

new Vue({
  el: '#app',
  render: h => h(App)
});


