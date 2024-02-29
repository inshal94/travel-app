<script scoped>
import sourceData from '@/data.json'
import { RouterLink } from 'vue-router'

export default {
  data() {
    return {
      destinations: sourceData.destinations
    }
  }
}
</script>

<template>
  <div class="home">
    <h1>Destinations</h1>
    <div class="destinations">
      <RouterLink v-for="destination in destinations" :key="destination.id" :to="{name: 'destination.show', params: {id: destination.id}}">
        <h1>{{ destination.name }}</h1>
        <img :src="`./images/${destination.image}`">
      </RouterLink>
    </div>
  </div>
</template>
