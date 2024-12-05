import axios from "axios";

export default{
  namespaced: true,
  state() {
    return {
      toppings: []
    }
  },
  getters : {},
  mutations: {
    setTopping(state, payload) {
      state.toppings = payload;
      console.log(state);
    }
  },
  actions: {
    async getToppingData({commit}){
      try{
        console.log("ini ambil data topping berhasil");

        const {data} = await axios.get("/src/topping-list.json");
        const arr = data.data

        commit("setTopping", arr);
        return arr
        
      } catch (err) {
        console.log(err);
      }
    },
  }
}