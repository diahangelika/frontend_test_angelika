import axios from "axios";

export default{
  namespaced: true,
  state() {
    return {
      sizes: []
    }
  },
  getters : {},
  mutations: {
    setSize(state, payload) {
      state.sizes = payload;
      console.log(state);
    }
  },
  actions: {
    async getSizeData({commit}){
      try{
        console.log("ini ambil data size berhasil");

        const {data} = await axios.get("/src/size-list.json");
        const arr = data.data

        commit("setSize", arr);
        return arr
      } catch (err) {
        console.log(err);
      }
    },
  }
}