<template>
  <div class="login-container">
    <main class="main-content">
      <h2>Login</h2>
      <form @submit.prevent="login" class="login-form">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit" class="button">Login</button>
      </form>
      <p>
        Don't have an account? <router-link to="/signup">Sign Up</router-link>
      </p>
    </main>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("http://localhost:5000/api/auth/login", {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("token", response.data.token);
        this.$router.push("/home");
      } catch (err) {
        alert("Login failed! Check your credentials.");
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fdfaf0;
  padding: 20px 0; /*  padding up and down */
}

.main-content {
  text-align: center;
  background-color: #fff6e6;
  padding: 20px;
  border: 3px solid #e0ad7e;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 60%;
  margin: 40px 0; /* margin up and down */
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.login-form input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.button {
  padding: 10px;
  background-color: #ffb84d;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.button:hover {
  background-color: #e09d3f;
}
</style>


