<template>
  <nav class="navbar flex fxw jcsb aic container pt2">
		<button v-on:click="toggleNav()" class="hide--md">Menu</button>
    <ul class="hide flex--md">
      <li>
        <router-link to="episodes">Episodes</router-link>
        <router-link to="about">About</router-link>
        <a href="http://stereopsych.com">Blog</a>
        <router-link to="contact">Contact</router-link>
      </li>
    </ul>
		<router-link to="subscribe" class="bg--teal bg--hover--white t--white t--hover--black t-up t-nund b--white ba br2 py1 px3">Subscribe</router-link>
	</nav>
</template>
<script>
  export default {
    name: 'navigation',
    data: {},
    methods: {
      toggleNav: function () {
        var navbar = document.querySelector('.navbar ul')
        navbar.classList.toggle('hide')
      }
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
