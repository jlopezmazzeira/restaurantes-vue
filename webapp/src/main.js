import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Contacto from './Contacto.vue'
import RestaurantesList from './RestaurantesList.vue'
import RestauranteTop from './RestauranteTop.vue'
import Restaurante from './Restaurante.vue'
import RestauranteAdd from './RestauranteAdd.vue'
import RestauranteEdit from './RestauranteEdit.vue'

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home},
  {path: '/home', component: Home},
  {path: '/contacto', component: Contacto},
  {path: '/restaurante-destacado/:id', name: 'restaurante-destacado' ,component: RestauranteTop},
  {path: '/restaurantes', component: RestaurantesList},
  {path: '/restaurante/:id', name: 'restaurante', component: Restaurante},
  {path: '/crear-restaurante', name: 'crear-restaurante', component: RestauranteAdd},
  {path: '/editar-restaurante/:id', name: 'editar-restaurante', component: RestauranteEdit}
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
