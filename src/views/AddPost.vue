<template>
    <div>  
      <div class="actions">
      <button class="button logout-button" @click="logout">Logout</button>
      </div>
        <div class="post-container">
          <main class="main-content">
          
            <h2>Add a New Post</h2>
            <input v-model="title" placeholder="Title" class="post-title"/>
            <textarea v-model="content" placeholder="Post content" class="edit-textarea"></textarea>

            <div class="actions">
            <button @click="addPost" class="button">Add</button>
            </div>

          </main>
        </div>
    </div>
  </template>
  <script>
  import axios from "axios";

  export default {
    data() {
      return {
        title: "",
        content: "",
      };
    },
    methods: {
      async addPost() {
        try {
          const token = localStorage.getItem("token");
          const response = await axios.post(
            "http://localhost:5000/api/posts", // Back-end API
            {
              title: this.title,
              content: this.content,
            },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          console.log("Post created:", response.data);
          this.$router.push("/home");
        } catch (err) {
          console.error("Error adding post:", err.response?.data || err.message);
          alert("Failed to add post. Please check your input.");
        }
      },
    },
  };
  </script>

  
<style scoped>
  .post-container {
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
  
  .post-title {
  width: 90%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;


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
  