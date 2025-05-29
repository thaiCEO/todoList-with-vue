<template>
  <div>
    <nav>
      <RouterLink to="/todo">Home</RouterLink> |
    </nav>
  </div>
   <main>
       <RouterView/>
   </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
