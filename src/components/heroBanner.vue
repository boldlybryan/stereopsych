<template>
  <header class="bg--teal t--white">
    <navigation></navigation>
    <div class="tc pt8 pb5">
      <h1 class="t6 t7--lg ma0">{{ info.title }}</h1>
      <p class="t2 t3--lg mb0">{{ info.description }}</p>
    </div>
  </header>
</template>
<script>
  var apiKey = 'sc_mCJVjJjBISn5y3xAk0QePg'
  var podcastURL = 'https://api.simplecast.com/v1/podcasts/'
  var podcastID = '3115'
  import navigation from './Navigation'
  export default {
    name: 'heroBanner',
    components: {
      navigation
    },
    data () {
      return {
        info: ''
      }
    },
    methods: {
      loadInfo: function () {
        this.$http.get(podcastURL + '/' + podcastID + '.json?api_key=' + apiKey).then(response => {
          // get body data
          this.info = response.body
          console.log(response.body)
        }, response => {
          // error callback
        })
      }
    },
    created: function () {
      this.loadInfo()
    }
  }
</script>
<style scoped>

</style>
