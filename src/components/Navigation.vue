<template>
  <nav class="navbar flex fxw jcsb aic container pt2">
		<button v-on:click="toggleNav()">Menu</button>
		<button class="bg--teal bg--hover--white t--white t--hover--black t-up b--white ba br2 py1 px3"><strong>Subscribe</strong></button>
	</nav>
</template>
<script>
  export default {
    name: 'navigation',
    data: {},
    methods: {
      toggleNav: function () {}
    }
  }
</script>
<style scoped>
nav {
  position: absolute;
  left: 0;
  right: 0;
}
</style>
