import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MiComponente from './components/MiComponente'
Vue.config.productionTip = false
Vue.use(VueRouter)
 const routes= [
{
        path: ':componente',
        name: 'mi-componente',
        component:  MiComponente,
        props: true
    }
    ]
const  router = new VueRouter({
	mode: "history",
	routes
  })
new Vue({
	router,
  render: h => h(App),
}).$mount('#app')


