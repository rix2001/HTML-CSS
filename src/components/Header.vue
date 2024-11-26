<template>
    <header>
      <nav>
        <router-link to="/">Main Page</router-link>
        <router-link to="/signup">Signup Page</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  <style scoped>
  header {
    background: #ddd;
    padding: 1em;
  }
  nav a {
    margin-right: 1em;
    text-decoration: none;
  }
  </style>
  