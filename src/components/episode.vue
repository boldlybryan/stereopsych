<template>
  <div class="col__100 col__33--lg">
    <episodePreview></episodePreview>
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
