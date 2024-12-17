<template>
  <header>
    <nav class="nav-bar">
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/contacts">Contacts</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.nav-bar {
  background-color: #d4e1e1;
  display: flex;
  justify-content: center; /* Elemendid keskele */
  align-items: center;
  padding: 20px 0; /* Suurem kõrgus */
}

.nav-bar ul {
  list-style-type: none;
  display: flex;
  gap: 40px; /* Suurem vahe linkide vahel */
  margin: 0;
  padding: 0;
}

.nav-bar a {
  text-decoration: none;
  color: #386ca3;
  font-size: 20px; /* Suurem font */
  font-weight: 500;
  font-weight: bold;
  transition: color 0.3s ease; /* Sujuv hover-efekt */
}
.nav-bar a:hover {
  color: #2B2B2B; /* Muudab värvi hoveri korral */
}
</style>