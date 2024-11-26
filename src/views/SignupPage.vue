<template>
    <div>
      <Header />
      <main>
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
  