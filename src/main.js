import Vue from 'vue'
import App from './App.vue'
import Form from './Form.vue'
import Input from './Input.vue'
import Header from './Header.vue'
import Percentage from './Percentage.vue'
import SecondOpinion from './SecondOpinion.vue'

Vue.component('app-form', Form)
Vue.component('app-input', Input)
Vue.component('app-header', Header)
Vue.component('app-percentage', Percentage)
Vue.component('app-secondopinion', SecondOpinion)

export const serverBus = new Vue();


new Vue({
  el     : '#app', 
  components: { app: App, 'app-input': Input
   },  
  render : h => h('app')
})