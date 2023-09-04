<template>
    <div class="dashboard">
      <h1>Welcome to TechReview</h1>
      <p>Your go-to place for the latest tech product reviews, top picks, and new arrivals.</p>
  
      <div v-if="loading">
        Loading latest reviews...
      </div>
      <div v-else>
        <div class="review" v-for="review in reviews" :key="review.id">
          <h2>{{ review.productName }}</h2>
          <p>{{ review.summary }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import store from '../store.js'
  
  export default {
    name: "DashBoard",
    data() {
      return {
        reviews: store.data.reviews,
        loading: false
      };
    },
  }
  </script>
  
  <style scoped>
  .dashboard {
    padding: 2em;
  }
  
  .review {
    background-color: #f9f9f9;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 8px;
  }
  
  h1 {
    color: #263238;
    margin-bottom: 1em;
  }
  
  h2 {
    color: #263238;
  }
  </style>
  