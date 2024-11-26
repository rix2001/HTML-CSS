<template>
  <div>
    <Header />
    <section id="login-section">
      <div class="login-box">
        <h1>Welcome to PostIt</h1>
        <form>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <br />
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <br />
          <button type="submit">Log in</button>
        </form>
        <p><a href="#">Create an account</a></p>
        <p><a href="#">Forgot password</a></p>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style src="/res/css/common.css"></style>
<style src="/res/css/login.css"></style>
