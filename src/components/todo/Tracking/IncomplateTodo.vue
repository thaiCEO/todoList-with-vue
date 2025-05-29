<template>
  <div class="showlist">
     <ul>
        <li v-for="todo in todoStore.incompleteTodos" :key="todo.id">{{ todo.text }}</li>
     </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useTodoStore } from '../todo'

const todoStore = useTodoStore()


</script>

<style>

</style>