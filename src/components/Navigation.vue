<template>
  <nav class="navbar container flex fxw jcsb aic">
    <button v-on:click="toggleNav()" class="hide--md nav__trigger">
    	<div class="bar"></div>
    	<div class="bar"></div>
    	<div class="bar"></div>
    </button>
      <ul class="hide flex--md pa0 ma0">
        <li v-for="route in routes" class="py1">
          <router-link :to="{path:route.path}">{{ route.name }}</router-link>
        </li>
      </ul>
      <router-link to="subscribe" class="bg--teal bg--hover--white t--white t--hover--black t-up t-nund b--white ba br2 py1 px3">Subscribe</router-link>

  </nav>
</template>
<script>
  export default {
    name: 'navigation',
    data () {
      return {
        routes: [
          {name: 'Episodes', path: '/episodes'},
          {name: 'About', path: '/about'},
          {name: 'Blog', path: '/http://stereopsych.com'},
          {name: 'Contact', path: '/contact'}
        ]
      }
    },
    methods: {
      toggleNav: function () {
        var navbar = document.querySelector('.navbar ul')
        var navTrigger = document.querySelector('.nav__trigger')
        navbar.classList.toggle('hide')
        navTrigger.classList.toggle('active')
      }
    }
  }
</script>
<style scoped>
.nav__trigger {
  background-color: transparent;
  border: 0;
  height: 60px;
  width: 72px;
  padding: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-transition: all .2s linear;
  transition: all .2s linear;
  outline: 0;
}
@media (min-width: 768px) {
  .nav__trigger {
    display: none;
  }
}
.nav__trigger .bar {
  height: 4px;
  width: 40px;
  background-color: #fff;
  margin-bottom: 8px;
  -webkit-transition: all .2s linear;
  transition: all .2s linear;
}
.nav__trigger .bar:last-of-type {
  margin-bottom: 0;
}

.nav__trigger.active {
  background-color: #fff;
  -webkit-transition: all .2s linear;
  transition: all .2s linear;
}

.nav__trigger.active .bar {
  background-color: #000;
}

.nav__trigger.active .bar:first-of-type {
  -webkit-transform: translateY(12px) rotate(45deg);
          transform: translateY(12px) rotate(45deg);
  -webkit-transition: all .2s linear;
  transition: all .2s linear;
}
.nav__trigger.active .bar:last-of-type {
  -webkit-transform: translateY(-12px) rotate(-45deg);
          transform: translateY(-12px) rotate(-45deg);
  -webkit-transition: all .2s linear;
  transition: all .2s linear;
}
.nav__trigger.active .bar:nth-of-type(2n) {
  opacity: 0;
  -webkit-transition: all .2s linear;
  transition: all .2s linear;
}

nav ul {
  position: relative;
  left: 0;
  right: 0;
  order: 99;
  z-index: 100;
  color: #000;
  background-color: #fff;
  width: 100%;
}

@media (min-width: 768px){
  nav ul {
    position: relative;
    order: -1;
    background-color: transparent;
    height: auto;
    width: auto;
  }
}

nav ul li {
  list-style-type: none;
}

nav ul li a {
  color: #000;
}
</style>
