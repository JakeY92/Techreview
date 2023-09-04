<template>
    <div class="new-arrivals">
      <h1>New Arrivals</h1>
      <div class="product" v-for="product in newProducts" :key="product.id">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "NewArrivals",
    data() {
      return {
        newProducts: [
          {
            id: 1,
            name: "New Product 1",
            description: "This is New Product 1."
          },
          {
            id: 2,
            name: "New Product 2",
            description: "This is New Product 2."
          },
          // ... add more products as needed
        ]
      };
    },
  }
  </script>
  
  <style scoped>
  .new-arrivals {
    padding: 2em;
  }
  
  .product {
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
  