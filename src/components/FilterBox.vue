<template>
  <div :class="filter" class="filter-item" :style="{backgroundImage: `url(${imageUrl})`}">
    <slot></slot>
    <button @click="fire()">버튼</button>
  </div>
</template>
<script>
export default {
  name: 'filterbox',
  props: {
    imageUrl: String,
    filter: String,
  },
  data(){
    return{
        fiter:""
    }
  },
  methods: {
    fire() {
      console.log(`[Clicked] filter : ${this.filter}`);
      this.emitter.emit('customFilter', this.filter);
    },
  },
};
</script>
<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
