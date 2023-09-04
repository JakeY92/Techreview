<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" class="navbar">
      <b-navbar-brand to="/dashboard">TechReview</b-navbar-brand>

      <!-- Add other navbar content here if needed -->

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/dashboard">Dashboard</b-nav-item>
          <b-nav-item to="/reviewpage">Reviews</b-nav-item>
          <b-nav-item to="/toppicks">Top Picks</b-nav-item>
          <b-nav-item to="/newarrivals">New Arrivals</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>


    <div class="content">

      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    AppFooter,
  },
}
</script>

<style scoped>
body {
  font-family: 'Raleway', sans-serif;
  background: #f4f9f9;
}

#app {
  font-family: 'Raleway', sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
}


.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: #d7d7d7;
}


/* Add margin to the top of the content area */
.content {
  margin-top: 70px; 
}

.divider {
  width: 30%;
  height: 2px;
  background-color: #ddd;
  margin: 2em auto; 
  display: block; 
  text-align: center; 
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
