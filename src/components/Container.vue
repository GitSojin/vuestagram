<template>
  <div v-if="step == 0">
    <div v-for="(a, i) in PostData" :key="i">
      <Post :PostData="a" :index="i" />
    </div>
  </div>

  <div v-if="step == 1">
    <div :class="this.selectedFilter" class="upload-image" :style="{backgroundImage: `url(${imageUrl})`}"></div>
    <div class="filters">
      <FilterBox :filter="filter" :imageUrl="imageUrl" v-for="filter in filterData" :key="filter">
        {{ filter }}
      </FilterBox>
    </div>
  </div>
  <div v-if="step == 2">
    <div :class="this.selectedFilter" class="upload-image" :style="{backgroundImage: `url(${imageUrl})`}"></div>
    <div class="write">
      <textarea @input="$emit('writePost', $event.target.value)" class="write-box">write</textarea>
    </div>
  </div>
</template>
<script>
import Post from './Post.vue';
import FilterBox from './FilterBox.vue';
export default {
  components: {Post: Post, FilterBox: FilterBox},
  props: {
    PostData: Array,
    step: Number,
    imageUrl: String,
  },
  mounted() {
    this.emitter.on('customFilter', (event) => {
      console.log(`[Container.vue_On] customFilter Event: ${event}`);
      this.selectedFilter = event;
    });
  },

  data() {
    return {
      selectedFilter: '',
      filterData: [
        'aden',
        '_1977',
        'brannan',
        'brooklyn',
        'clarendon',
        'earlybird',
        'gingham',
        'hudson',
        'inkwell',
        'kelvin',
        'lark',
        'lofi',
        'maven',
        'mayfair',
        'moon',
        'nashville',
        'perpetua',
        'reyes',
        'rise',
        'slumber',
        'stinson',
        'toaster',
        'valencia',
        'walden',
        'willow',
        'xpro2',
      ],
    };
  },
};
</script>
<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
