<template>
  <div class="todo-app">
    <div class="todo">
         <h1>My Todo List</h1>
    </div>
    <TrackTodo/>
    <input v-model="newTodo" @keyup.enter="addNewTodo" placeholder="Add a todo" />
    <ul>
      <li
        v-for="todo in todoStore.todos"
        :key="todo.id"
        :class="{ completed: todo.completed }"
      >
        <span @click="todoStore.toggleTodo(todo.id)">
          {{ todo.text }}
        </span>
        <button @click="todoStore.deleteTodo(todo.id)">❌</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from './todo'
import TrackTodo from './Tracking/trackTodo.vue'

const todoStore = useTodoStore()
const newTodo = ref('')

const addNewTodo = () => {
  if (newTodo.value.trim()) {
    todoStore.addTodo(newTodo.value)
    newTodo.value = ''
  }
}
</script>

<style scoped>
.todo-app {
  max-width: 400px;
  margin: auto;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
}
.completed {
  text-decoration: line-through;
  color: gray;
}
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}
.todo {
  display: flex;
  justify-content: center;
}
</style>
