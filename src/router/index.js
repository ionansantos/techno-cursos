import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contato from '../views/Contato.vue'
import Cursos from '../views/Cursos.vue'
import curso from '../views/curso.vue'
import Aula from '../views/Aula.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/contato",
      name: "Contato",
      component: Contato
    },
    {
      path: "/cursos",
      name: "cursos",
      component: Cursos
    },
    {
      path:"/cursos/:curso",
      name:"curso",
      component: curso,
      props:true,
      children:[
        {
          path:":aula",
          name:"aula",
          props:true,
          component: Aula
        }
      ]
    }
  ]
})