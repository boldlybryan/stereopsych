<template>
  <div>
    <div v-for="episode in feed" class="bb bw1 b--silver">
      <div class="py2">
        <date class="t-up">{{ episode.published_at | formatDate }}</date>
        <h2 class="my1">{{ episode.title }}</h2>
        <p class="ma0">{{ episode.description}}</p>
        <div class="pt2">
          <a href="" class="t--black mr2">Play</a>
          <a :href="episode.audio_url" class="t--black" download>Download</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var apiKey = 'sc_mCJVjJjBISn5y3xAk0QePg'
var podcastURL = 'https://api.simplecast.com/v1/podcasts/'
var podcastID = '3115'
export default {
  name: 'episodePreview',
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
  },
  computed: {
    transformTime: function () {
      var time = this.feed.published_at
      return time
    }
  }
}
</script>
<style scoped>

</style>
