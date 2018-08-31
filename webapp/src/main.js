import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Contacto from './Contacto.vue'
import RestaurantesList from './RestaurantesList.vue'
import RestauranteTop from './RestauranteTop.vue'

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home},
  {path: '/home', component: Home},
  {path: '/contacto', component: Contacto},
  {path: '/restaurante-destacado/:id', name: 'restaurante-destacado' ,component: RestauranteTop},
  {path: '/restaurantes', component: RestaurantesList}
];

const router = new VueRouter({
    routes,
    mode: 'history' //Para optimizar la navegación
});

Vue.component('home', Home); //Para cargar un componente
Vue.component('contacto', Contacto);

//npm install vue-router -- save para las rutas
//npm install axios -- save para peticiones http
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
