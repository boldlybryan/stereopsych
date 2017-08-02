<template>
  <div id="app">
    <heroBanner></heroBanner>
    <router-view></router-view>
  </div>
</template>

<script>
import heroBanner from './components/heroBanner'
import episode from './components/episode'

export default {
  name: 'app',
  components: {
    heroBanner,
    episode
  }
}
</script>

<style>

</style>
