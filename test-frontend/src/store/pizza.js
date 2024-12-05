import axios from "axios";

export default{
  namespaced: true,
  state() {
    return {
      pizzas: [],
    }
  },
  getters : {},
  mutations: {
    setPizza(state, payload) {
      state.pizzas = payload;
      console.log(state);
    },
  },
  actions: {
    async getPizzaData({commit}){
      try{
        console.log("ini ambil data berhasil");

        const {data} = await axios.get("/src/pizza-list.json");
        const arr = data.data

        commit("setPizza", arr);
        return arr
      } catch (err) {
        console.log(err);
      }
    },
  }
}