<template>
  <div>
    <main class="main-content">
      <h1 class="page-title">About group S</h1>
      
      <ul class="contact-list">
        <li>Marko Laanemäe</li>
        <li>Richard Silm</li>
        <li>Sandra Erik</li>
      </ul>
      <router-link to="/home" class="back-home">Back to Home</router-link>
    </main>

  </div>
</template>
  
  <script>
  export default {
    name: "ContactsPage",
  };
  </script>
  
  <style scoped>

.back-home {
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #386ca3;
  font-size: larger;
}

.back-home:hover {
  text-decoration: underline;
  color: #2B2B2B;
}
</style>