<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()

store.dispatch('fetchUser') 

</script>

<template>
  <header>
      <nav v-if="$store.state.user">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <button @click="$store.dispatch('logout')">Logout</button>
      </nav>
    <RouterView></RouterView>
  </header>
</template>

<style scoped>
</style>
