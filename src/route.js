import { createRouter, createWebHistory } from 'vue-router'

// Import your pages/components
import Home from './components/todo/todo.vue'
import allTodo from './components/todo/Tracking/allTodo.vue'
import complateTodo from './components/todo/Tracking/complateTodo.vue'
import IncomplateTodo from './components/todo/Tracking/incomplateTodo.vue'

const routes = [
  { path: '/todo', name: 'Home', component: Home },
  { path: '/allTodo', name: 'allTodo', component: allTodo },
  { path: '/complateTodo', name: 'complateTodo', component: complateTodo },
  { path: '/IncomplateTodo', name: 'IncomplateTodo', component: IncomplateTodo },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
