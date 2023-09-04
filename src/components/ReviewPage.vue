<template>
  <div class="reviews">
    <h1>All Reviews</h1>
    <div class="controls">
      <div class="search-box">
        <input type="text" v-model="search" placeholder="Search reviews..." />
      </div>
      <div class="sort-box">
        <select v-model="sortOrder">
          <option value="">Sort By</option>
          <option value="productName">Product Name</option>
        </select>
        </div>
    </div>
    <div v-if="loading">
      Loading reviews...
    </div>
    <div v-else>
      <div class="review" v-for="review in sortedReviews" :key="review.id">
        <h2>{{ review.productName }}</h2>
        <p>{{ review.summary }}</p>
        <router-link :to="{ name: 'ReviewDetail', params: { id: review.id } }">Read More</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store.js'

export default {
  name: "ReviewPage",
  data() {
    return {
      reviews: store.data.reviews,
      search: '',
      sortOrder: ''
    };
  },
  computed: {
    filteredReviews() {
      return this.reviews.filter(review => review.productName.toLowerCase().includes(this.search.toLowerCase()));
    },
    sortedReviews() {
      if (this.sortOrder === 'productName') {
        return [...this.filteredReviews].sort((a, b) => a.productName.localeCompare(b.productName));
      }
      // Can add more sorting options here in the future.

      // By default, return filteredReviews if no sortOrder is selected
      return this.filteredReviews;
    }
  }
}
</script>

<style scoped>
.reviews {
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

input, select {
  margin-bottom: 1em;
  padding: 0.5em;
}
</style>
