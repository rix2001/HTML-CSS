
<template>
  <div>  
    <main class="main-content">
      <div class="actions">
        <button class="button" @click="logout">Log out</button>
      </div>
      <div class="container">
        <div class="post-container">
          <h2>{{ post.title || "Post Title" }}</h2>
          <p v-if="!editMode">{{ post.content }}</p>
          
          <textarea
            v-else
            v-model="post.content"
            rows="5"
            placeholder="Edit post content here..."
            class="edit-textarea"
          ></textarea>

          <div class="actions">
            <button class="button" @click="toggleEditMode">
              {{ editMode ? "Save" : "Change Post" }}
            </button>
            <button class="button delete-button" @click="deletePost">Delete</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "PostPage",
  data() {
    return {
      post: { id: null, content: "", title: "" },
      editMode: false,
    };
  },
  created() {
    this.fetchPost();
  },
  methods: {
    async fetchPost() {
      const postId = this.$route.params.id;
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`http://localhost:5000/api/posts/${postId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        this.post = response.data;
      } catch (err) {
        console.error("Error fetching post:", err.message);
      }
    },
    async updatePost() {
      try {
        const token = localStorage.getItem("token");
        await axios.put(
          `http://localhost:5000/api/posts/${this.post.id}`,
          { content: this.post.content },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        alert("Post updated!");
        this.editMode = false;
      } catch (err) {
        console.error("Error updating post:", err.message);
      }
    },
    async deletePost() {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(`http://localhost:5000/api/posts/${this.post.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Post deleted!");
        this.$router.push("/home");
      } catch (err) {
        console.error("Error deleting post:", err.message);
      }
    },
    toggleEditMode() {
      if (this.editMode) {
        this.updatePost(); // Updates when post is saved
      } else {
        this.editMode = true; // Changes to edit mode
      }
    },
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>

.post-container {
  background-color: #fff6e6;
  padding: 20px;
  border: 3px solid #e0ad7e;
  border-radius: 8px;
  max-width: 800px;
  margin: 20px auto;
  text-align: center;
}
.edit-textarea {
  width: 90%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;
  resize: none;
}
</style>
  

  