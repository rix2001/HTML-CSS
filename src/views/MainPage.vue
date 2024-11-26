<template>
    <div>
      <Header />
      <main>
        <div v-for="post in posts" :key="post.id">
          <Post :post="post" />
        </div>
        <button @click="resetAllLikes">Reset Likes</button>
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  import { mapState, mapMutations } from "vuex";
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  import Post from "@/components/Post.vue";
  
  export default {
    name: "MainPage",
    components: { Header, Footer, Post },
    computed: {
      ...mapState(["posts"]),
    },
    methods: {
      ...mapMutations(["resetLikes"]),
      resetAllLikes() {
        this.resetLikes();
      },
    },
  };
  </script>
  