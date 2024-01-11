<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()

store.dispatch('fetchUser') 

</script>

<template>
  <div>
      <div v-if="$store.state.user">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <button @click="$store.dispatch('logout')">Logout</button>
      </div>
    <RouterView></RouterView>
    </div>
</template>

<style scoped>
</style>
