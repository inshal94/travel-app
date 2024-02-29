<template>
    <div id="nav">
        <RouterLink to="/" id="logo">My Travel App</RouterLink>
        <RouterLink 
        v-for="destination in destinations" 
        :key="destination.id" 
        :to="{name: 'destination.show', params: {id: destination.id}}">
            {{ destination.name }}
        </RouterLink>
        <!-- <RouterLink to="/brazil">Brazil</RouterLink>
        <RouterLink to="/panama">Panama</RouterLink>
        <RouterLink to="/hawaii">Hawaii</RouterLink>
        <RouterLink to="/jamaica">Jamaica</RouterLink> -->
    </div>
</template>

<script scoped>
import { RouterLink, RouterView } from 'vue-router'
import sourceData from '@/data.json'

export default {
    data()
    {
        return {
            destinations: sourceData.destinations
        }
    }
}
</script>

<style>
#nav .vue-active-link {
    color: red;
    border-bottom: 1px solid red;
}
</style>