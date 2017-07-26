<template>
  <div class="pl4--lg pt2--lg">
	  <h3 class="t4 ma0">Show notes</h3>
    <p v-for="episode in feed">
      {{ episode.long_description }}
    </p>
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
      feed: ''
    }
  },
  methods: {
    loadFeed: function () {
      // GET /someUrl
      this.$http.get(podcastURL + '/' + podcastID + '/' + 'episodes.json?api_key=' + apiKey).then(response => {
        // get body data
        this.feed = response.body
        console.log(response.body)
      }, response => {
        // error callback
      })
    }
  },
  created: function () {
    this.loadFeed()
  }
}
</script>
<style scoped>
</style>
