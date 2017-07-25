<template>
  <div id="app">
    <heroBanner></heroBanner>
    <episodePreview></episodePreview>
  </div>
</template>

<script>
import episodePreview from './components/episodePreview'
import heroBanner from './components/heroBanner'

export default {
  name: 'app',
  components: {
    episodePreview,
    heroBanner
  }
}
</script>

<style>

</style>
