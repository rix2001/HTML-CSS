<template>
    <div>
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
      <button @click="likePost">Like 👍 ({{ post.likes }})</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Post",
    props: ["post"],
    methods: {
      likePost() {
        this.$store.commit("incrementLikes", this.post.id);
      },
    },
  };
  </script>
  