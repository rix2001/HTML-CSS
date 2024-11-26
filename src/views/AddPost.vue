<template>
  <div>
    <Header />
    <section id="add-post-section">
      <div class="add-post-box">
        <h1>Add a New Post</h1>
        <form>
          <label for="content">Post body</label>
          <textarea id="content" name="content" required></textarea>
          <br />
          <label for="file">Select file</label>
          <input type="file" id="file" name="file" />
          <br />
          <button type="submit">Create post</button>
        </form>
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

<style>
@import "/res/css/common.css";
@import "/res/css/addPost.css";
</style>
