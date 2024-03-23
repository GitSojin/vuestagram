<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container
    @step1="step = $event"
    @step2="step = $event"
    :PostData="PostData"
    :step="step"
    :imageUrl="imageUrl"
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

  <h4 v-if="errorMsg != ''">
    {{ errorMsg }}
  </h4>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div></template>


<script>
import Container from "./components/Container.vue";
import data from "./components/PostData";
import axios from "axios";
export default {
  name: "App",
  components: {
    Container: Container,
  },
  data() {
    return {
      PostData: data,
      DataIndex: 0,
      errorMsg: "",
      step: 0,
      imageUrl: "",
    };
  },
  methods: {
    more() {
      this.errorMsg = "";
      axios
        .get(`https://codingapple1.github.io/vue/more${this.DataIndex}.json`)
        .then((result) => {
          this.PostData.push(result.data);
          this.DataIndex++;
        })
        .catch((error) => {
          // console.log(error.message);
          this.errorMsg = error?.message ?? "Unknown Error occured.";
        });
    },
    upload(e) {
      let uploadFile = e.target.files;
      this.step = 1;
      let url = URL.createObjectURL(uploadFile[0]);
      this.imageUrl = url;
    },
  },
};
</script>

<style>
@import "style.css";
</style>
