<template>
  <div id="app">
    <heroBanner></heroBanner>
    <div class="container">
    	<div class="grid--fixed">
    		<div class="col__100 col__33--lg">
          <episodePreview></episodePreview>
      	</div>
        <div class="col__100 col__66--lg">
          <showNotes></showNotes>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import episodePreview from './components/episodePreview'
import heroBanner from './components/heroBanner'
import showNotes from './components/showNotes'

export default {
  name: 'app',
  components: {
    episodePreview,
    heroBanner,
    showNotes
  }
}
</script>

<style>

</style>
