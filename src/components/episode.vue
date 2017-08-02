<template>
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
</template>
<script>
import episodePreview from './episodePreview'
import showNotes from './showNotes'
export default {
  name: 'episode',
  components: {
    episodePreview,
    showNotes
  }
}
</script>
<style scoped>
</style>
