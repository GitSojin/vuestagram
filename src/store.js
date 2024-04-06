import {createStore} from 'vuex';
import PostData from './components/PostData.js';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      PostData: PostData,
      errorMessage: '',
    };
  },

  mutations: {
    pushPostData(state, data) {
      console.log('[PushPostData] Data: ', data);
      state.PostData.push(data);
    },
    unShiftPostData(state, data) {
      console.log('[UnShiftPostData] Data: ', data);
      state.PostData.unshift(data);
    },
    changePostLikes(state, index) {
      // This Function will change ...
      console.log('[ChangePostLikes] index: ', index);
      if (state.PostData[index].liked) {
        state.PostData[index].likes--;
      } else {
        state.PostData[index].likes++;
      }
      state.PostData[index].liked = !state.PostData[index].liked;
      console.log('[ChangePostLikes] Changed Post: ', state.PostData[index]);
    },
    setErrorMessage(state, msg) {
      state.errorMessage = msg;
    },
  },
  actions: {
    async getMorePost(context, index) {
      /*
      Get More Post into Post Data..

      Args:
          context(self): self store object to call another value.
          index(int): selected index

      Return:
          index(int): changed index.
      */ 

      try {
        // Get Data from server
        const response = await axios.get(`https://codingapple1.github.io/vue/more${index}.json`);

        // 
        context.commit('pushPostData', response.data);
        return index++;
      } catch (error) {
        context.commit('setErrorMessage', `Oh-Uh, Something went wrong! ${error}`);
        return index;
      }
    },
  },
});

export default store;
