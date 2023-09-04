<template>
  <div class="review-detail" v-if="loading">
    Loading review...
  </div>
  <div class="review-detail" v-else>
    <h1>{{ review.productName }}</h1>
    <p>{{ review.summary }}</p>
    <p>{{ review.detail }}</p>
    <router-link to="/reviewpage">Back to All Reviews</router-link>

    <hr class="divider" />

    <h2>Submit your own review</h2>
    <form @submit.prevent="submitReview" class="review-form">
      <label>
        Your Name:
        <input v-model="newReview.name" required>
      </label>
      <label>
        Summary:
        <input v-model="newReview.summary" required>
      </label>
      <label>
        Review Details:
        <textarea v-model="newReview.detail" required></textarea>
      </label>
      <label>
      Rating:
      <div class="star-rating">
        <input type="radio" v-model="newReview.rating" value="1" required> 1
        <input type="radio" v-model="newReview.rating" value="2" required> 2
        <input type="radio" v-model="newReview.rating" value="3" required> 3
        <input type="radio" v-model="newReview.rating" value="4" required> 4
        <input type="radio" v-model="newReview.rating" value="5" required> 5
      </div>
    </label>
      <button type="submit">Submit Review</button>
    </form>
    
    <p v-if="userReviews.length">Average Rating: {{ averageRating }}</p>

    <div class="user-review" v-for="(userReview, index) in userReviews" :key="index">
      <h2>{{ userReview.name }}'s Review</h2>
      <p>{{ userReview.summary }}</p>
      <p>{{ userReview.detail }}</p>
      <p>Rating: {{ userReview.rating }}/5</p>
    </div>
  </div>
</template>

<script>
import store from '../store.js'

export default {
  name: "ReviewDetail",
  data() {
    return {
      review: store.data.reviews.find(review => review.id === parseInt(this.$route.params.id)),
      newReview: {
        name: '',
        summary: '',
        detail: '',
        rating: '',  
      },
    };
  },
  computed: {
    userReviews() {
      return this.review.userReviews || []; 
    },
    averageRating() {
      if (this.userReviews.length === 0) return 0;
      const sum = this.userReviews.reduce((a, userReview) => a + parseInt(userReview.rating), 0);
      return (sum / this.userReviews.length).toFixed(1);
    },
  },
  methods: {
    submitReview() {
      const newId = this.review.userReviews ? this.review.userReviews.length + 1 : 1;

      const userReview = {
        id: newId,
        summary: this.newReview.summary,
        detail: this.newReview.detail,
        name: this.newReview.name, 
        rating: this.newReview.rating,
      };

      if (!this.review.userReviews) {
        this.review.userReviews = [];
      }

      this.review.userReviews.push(userReview);

      this.newReview.name = '';
      this.newReview.summary = '';
      this.newReview.detail = '';
      this.newReview.rating = '';
    },
  },
};
</script>

<style scoped>
.review-detail {
  padding: 2em;
}

h1 {
  color: #263238;
  margin-bottom: 1em;
}

p {
  color: #263238;
}

.user-review {
  background-color: #f0f0f0;
  margin-top: 2em;
  padding: 1em;
  border-radius: 8px;
  margin-bottom: 2em;
}

.review-form {
  display: flex;
  flex-direction: column;
  gap: 1em;
  max-width: 500px;
  margin: 0 auto;
}

.review-form input,
.review-form textarea,
.review-form button {
  margin: 0.5em 0;
  padding: 0.5em;
  font-size: 1em;
  width: 100%;
  height: 40px;
}

.review-form input {
  height: 25px;
}

.review-form textarea {
  height: 75px;
}

.review-form button {
  cursor: pointer;
  background-color: #263238;
  color: white;
}

.user-review + .user-review {
  border-top: 1px solid #ddd;
  padding-top: 1em;
  margin-top: 1em;
}

.star-rating {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1em;
}

.star-rating input[type="radio"] {
  transform: scale(0.5); /* Adjust radio button size here */
}

.user-review:first-of-type::before {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: #ddd;
  margin: 2em 0;
}

.divider {
  width: 30%;
  height: 2px;
  background-color: #ddd;
  margin: 2em auto; /* Auto margins are used to center block elements */
  display: block; /* Block elements take up the full width available by default, enabling margin auto to work */
  text-align: center; /* For good measure, ensures inline and inline-block elements are centered */
}
</style>
