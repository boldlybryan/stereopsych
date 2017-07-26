<template>
  <div id="app">
    <heroBanner></heroBanner>
    <div class="container">
    	<div class="grid--fixed">
    		<div class="col__100 col__33--lg">
          <episodePreview></episodePreview>
      	</div>
      </div>
    </div>
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
