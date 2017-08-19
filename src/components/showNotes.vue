<template>
  <div class="col__100">
    <div class="pt2--lg">
      <audio v-bind:src="episode.audio_url" controls>
        Your browser does not support the <code>audio</code> element.
      </audio>
  	  <h3 class="t4 ma0">Show notes</h3>
      <p>
        {{ episode.long_description }}
      </p>
    </div>
  </div>
</template>
<script>
var apiKey = 'sc_mCJVjJjBISn5y3xAk0QePg'
var podcastURL = 'https://api.simplecast.com/v1/podcasts/'
var podcastID = '3115'
export default {
  name: 'showNotes',
  data () {
    return {
      episode: ''
    }
  },
  methods: {
    loadEpisode: function () {
      // GET /someUrl
      var episodeId = this.$route.params.id
      this.$http.get(podcastURL + '/' + podcastID + '/episodes/' + episodeId + '.json?api_key=' + apiKey).then(response => {
        // get body data
        this.episode = response.body
      }, response => {
        // error callback
      })
    }
  },
  created: function () {
    this.loadEpisode()
  }
}
</script>
<style scoped>
audio {
  width: 100%;
  background-color: transparent;
}
</style>
