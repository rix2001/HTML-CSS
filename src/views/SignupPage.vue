<template>
  <div class="signup-container">
    <main class="main-content">
      <h2>Sign Up</h2>
      <form @submit.prevent="validatePassword" class="signup-form">
        <div class="form-group">
          <input type="text" placeholder="Username" v-model="username" required />
        </div>
        <div class="form-group">
          <input type="password" placeholder="Password" v-model="password" required />
        </div>
        <button type="submit" class="button">Sign Up</button>
        <p v-if="error" class="error-message">{{ error }}</p>
      </form>
      <p>
        Already have an account? <router-link to="/login">Log in</router-link>
      </p>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignupPage",
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async validatePassword() {
      const conditions = [];
      if (this.password.length < 8 || this.password.length > 15) {
        conditions.push("Password must be between 8 and 15 characters.");
      }
      if (!/[A-Z]/.test(this.password)) {
        conditions.push("Must include at least one uppercase letter.");
      }
      if (!/[a-z].*[a-z]/.test(this.password)) {
        conditions.push("Must include at least two lowercase letters.");
      }
      if (!/\d/.test(this.password)) {
        conditions.push("Must include at least one numeric value.");
      }
      if (!/_/.test(this.password)) {
        conditions.push("Must include the character '_'.");
      }

      if (conditions.length > 0) {
        this.error = `The password is not valid: ${conditions.join(" ")}`;
      } else {
        this.error = "";
        // Andmete saatmine serverile
        try {
          const response = await axios.post("http://localhost:5000/api/auth/signup", {
            email: this.username,
            password: this.password,
          });
          alert(response.data.message); // Kuvatakse serveri vastus
          this.$router.push("/login"); // Liigub login lehele
        } catch (err) {
          this.error = err.response?.data?.error || "Signup failed. Try again.";
          console.error(err);
        }
      }
    },
  },
};
</script>

<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fdfaf0;
  padding: 20px 0;
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

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-group input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  width: 80%;
  max-width: 400px;
}

.error-message {
  color: #d9534f;
  font-size: 14px;
  margin-top: 10px;
}
</style>