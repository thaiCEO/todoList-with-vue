import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([])

  const addTodo = (text) => {
    todos.value.push({
      id: Math.floor(Math.random() * 10000),
      text,
      completed: false,
    })
  }

  const toggleTodo = (id) => {
    const todo = todos.value.find(t => t.id === id)
    if (todo) todo.completed = !todo.completed
  }

  const deleteTodo = (id) => {
    todos.value = todos.value.filter(t => t.id !== id)
  }

  // Add computed filters
  const completedTodos = computed(() => todos.value.filter(t => t.completed))
  const incompleteTodos = computed(() => todos.value.filter(t => !t.completed))

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    completedTodos,
    incompleteTodos,
  }
})
