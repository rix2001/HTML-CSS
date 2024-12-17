<template>
  <div>
    <div class="actions">
      <button class="button logout-button" @click="logout">Logout</button>
    </div>
    <main class="main-content">
      <div class="posts-container">
        <div v-for="post in posts" :key="post.id" class="post">
          <router-link :to="`/posts/${post.id}`" class="post-title">
            <h3>{{ post.title }}</h3>
          </router-link>
          <p class="post-date">{{ formattedDate(post.created_at) }}</p>
          <p class="post-content">{{ post.content }}</p>
        </div>
      </div>

      <div class="actions">
        <button class="button" @click="addPost">Add Post</button>
        <button class="button delete-button" @click="deleteAllPosts">Delete All</button>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MainPage",
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/posts", {
          headers: { Authorization: `Bearer ${token}` },
        });
        this.posts = response.data;
      } catch (err) {
        console.error("Error fetching posts:", err.message);
      }
    },

    // Formatting the date
    formattedDate(date) {
      return new Date(date).toLocaleDateString("en-GB", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    },

    addPost() {
      this.$router.push("/add-post");
    },
    async deleteAllPosts() {
      try {
        const token = localStorage.getItem("token");
        await axios.delete("http://localhost:5000/api/posts", {
          headers: { Authorization: `Bearer ${token}` },
        });
        this.fetchPosts(); // update the posts
      } catch (err) {
        console.error("Error deleting posts:", err.message);
      }
    },
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
};
</script>

