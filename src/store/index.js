import { createStore } from "vuex";

export default createStore({
  state: {
    posts: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `Post ${i + 1}`,
      content: `This is the content for Post ${i + 1}.`,
      likes: 0,
    })),
  },
  mutations: {
    incrementLikes(state, postId) {
      const post = state.posts.find((p) => p.id === postId);
      if (post) post.likes++;
    },
    resetLikes(state) {
      state.posts.forEach((post) => (post.likes = 0));
    },
  },
});
