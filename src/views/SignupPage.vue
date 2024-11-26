<template>
    <div>
      <Header />
      <main class="content">
        <form @submit.prevent="validatePassword">
          <label>
            Username:
            <input type="text" v-model="username" required />
          </label>
          <label>
            Password:
            <input type="password" v-model="password" required />
          </label>
          <button type="submit">Sign Up</button>
          <p v-if="error">{{ error }}</p>
        </form>
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
  export default {
    name: "SignupPage",
    components: { Header, Footer},
    data() {
      return {
        username: "",
        password: "",
        error: "",
      };
    },
    methods: {
      validatePassword() {
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
        if (!/^_/.test(this.password)) {
          conditions.push("Must include the character '_'.");
        }
  
        if (conditions.length > 0) {
          this.error = `The password is not valid: ${conditions.join(" ")}`;
        } else {
          this.error = "";
          alert("Signup successful!");
        }
      },
    },
  };
  </script>

  <style>
.signup-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  display: flex;
  align-items: center; 
  justify-content: center; 
  padding: 2em;
}

form {
  width: 100%;
  background: white;
  padding: 2em;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
  