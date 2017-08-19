<template>
  <div id="app">
    <heroBanner></heroBanner>
    <div class="container">
      <div class="grid--fixed">
        <router-view></router-view>
      </div>
    </div>
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
