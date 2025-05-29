<template>
  <div class="todo-section">
    <div class="todo-block">
      <h2>All</h2>
      <RouterLink to="/allTodo" ><p>{{ storedTodos.length }}</p></RouterLink>
     
    </div>

    <div class="todo-block">
      <h2>Completed</h2>
      <RouterLink to="/complateTodo" ><p>{{ completedStoredTodos.length }}</p></RouterLink>
     
    </div>

    <div class="todo-block">
      <h2>Incomplete</h2>
      <RouterLink to="/IncomplateTodo" ><p>{{ incompleteStoredTodos.length }}</p></RouterLink>
     
      
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useTodoStore } from '../todo'

const todoStore = useTodoStore()

// Filter by storeTodo === true
const storedTodos = computed(() =>
  todoStore.todos.filter(todo => todo.id)
)

const completedStoredTodos = computed(() =>
  todoStore.todos.filter(todo => todo.completed)
)

const incompleteStoredTodos = computed(() =>
  todoStore.todos.filter(todo => !todo.completed)
)

</script>

<style scoped>
.todo-section {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding: 20px;
}

.todo-block {
  flex: 1;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  transition: transform 0.2s ease;
}

.todo-block:hover {
  transform: translateY(-4px);
}

.todo-block h2 {
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: #333;
}

.todo-block p {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin: 0;
  text-align: center;
}

</style>
