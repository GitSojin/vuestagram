<template>
  <div v-for="(a, i) in PostData" :key="i">
    <Post :PostData="a" />
  </div>
</template>
<script>
import Post from "./Post.vue";
export default {
  components: { Post: Post },
  props: {
    PostData: Array,
  },
};
</script>
<style></style>
