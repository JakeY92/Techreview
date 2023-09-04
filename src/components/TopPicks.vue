<template>
    <div class="top-picks">
      <h1>Top Picks</h1>
      <div class="product" v-for="product in topPicks" :key="product.id">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TopPicks",
    data() {
      return {
        topPicks: [
          {
            id: 1,
            name: "Product 1",
            description: "This will be the top reviewed/rated product."
          },
          {
            id: 2,
            name: "Product 2",
            description: "This will be the second top reviewed/rated product."
          },
          // More products to be added as needed
        ]
      };
    },
  }
  </script>
  
  <style scoped>
  .top-picks {
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
  