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
  background: #ec45a1;
  color: white;
  padding: 1em;
}

nav a {
  color: white;
  margin-right: 1em;
  font-size: 1.1em;
  text-transform: uppercase;
  font-weight: bold;
}

nav a:hover {
  color: #d5f5e3;
}
  </style>
  