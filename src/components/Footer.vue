<template>
  <div class="footer text-black text-center p-3 mt-5">
    © {{ new Date().getFullYear() }} TechReview. All rights reserved.
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>
  
<style scoped>
.footer {
  width: 100%;
  background: #d7d7d7; 
}
</style>