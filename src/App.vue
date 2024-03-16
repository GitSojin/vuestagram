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

  <Container :PostData="PostData" />
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

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
    };
  },
  methods: {
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.DataIndex}.json`)
        .then((result) => this.PostData.push(result.data));
      this.DataIndex++;
    },
  },
};
</script>

<style>
@import "style.css";
</style>
