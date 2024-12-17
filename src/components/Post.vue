<template>
  <div class="post-item">
    <h3>{{ title }}</h3>
    <p class="post-date">{{ formattedDate }}</p>
    <p>{{ body }}</p>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    title: String,
    body: String,
    created_at: String,
  },
  computed: {
    formattedDate() {
      return new Date(this.created_at).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    },
  },
};
</script>


