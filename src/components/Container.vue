<template>
  <div>
    <Post :PostData="PostData" />
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
