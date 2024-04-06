<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step = 2">Next</li>
      <li v-if="step == 2" @click="publish()">발행</li>
    </ul>
  </div>
  <Container
    @writePost="this.myTextData = $event"
    :PostData="$store.state.PostData"
    :step="step"
    :imageUrl="imageUrl"
    :myTextData="myTextData"
  />
  <button @click="more">더보기</button>
  <button
    @click="
      DataIndex = 0;
      errorMsg = '';
    "
  >
    Reset
  </button>

  <h4 v-if="$store.state.errorMessage != ''">
    {{ $store.state.errorMessage }}
  </h4>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from './components/Container.vue';
export default {
  name: 'App',
  components: {
    Container: Container,
  },
  data() {
    return {
      DataIndex: 0,
      errorMsg: '',
      step: 0,
      imageUrl: '',
      myTextData: '',
      selectedFilter: '',
    };
  },
  mounted() {
    this.emitter.on('customFilter', (event) => {
      console.log(`[App.vue_On] customFilter Event: ${event}`);
      this.selectedFilter = event;
    });
  },
  methods: {
    async more() {
      this.DataIndex = await this.$store.dispatch('more', this.DataIndex);
    },
    upload(e) {
      let uploadFile = e.target.files;
      this.step = 1;
      let url = URL.createObjectURL(uploadFile[0]);
      this.imageUrl = url;
    },
    publish() {
      const myPost = {
        name: 'Kim Sojin',
        userImage: 'https://picsum.photos/100?random=3',
        postImage: this.imageUrl,
        likes: 36,
        date: 'May 15',
        liked: false,
        content: this.myTextData,
        filter: this.selectedFilter,
      };
      // console.log('[publish]');
      // console.log(myPost);
      // this.PostData.unshift(myPost);
      this.$store.commit('unShiftPostData', myPost);
      this.step = 0;
    },
  },
};
</script>

<style>
@import 'style.css';
</style>
