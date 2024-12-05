export default {
  namespaced: true,
  state() {
    return {
      selectedPizza: null,
      selectedSize: { name: "small", extra_price: 0 },
      selectedToppings: [],
    };
  },
  getters: {
    checkoutTotal(state) {
      let total = 0;

      if(state.selectedPizza){
        total+= state.selectedPizza.discount.final_price;
      }

      if (state.selectedSize) {
        total += state.selectedSize.extra_price;
      }

      state.selectedToppings.forEach((topping) => {
        total += topping.price;
      });

      console.log("Total price:", total);
      return total;
    }
  },
  mutations: {
    setSelectedPizza(state, pizza) {
      console.log("Pizza selected:", pizza);
      state.selectedPizza = pizza;
    },

    setSize(state, size) {
      console.log("size selected:", size);
      state.selectedSize = size;
    },
    setToppings(state, toppings) {
      console.log("toppings selected:", toppings);
      state.selectedToppings = toppings;
    },
    clearCart(state) {
      console.log("dah sampe sini heheee");

      state.selectedPizza = null;
      state.selectedSize = { name: "small", extra_price: 0 };
      state.selectedToppings = [];
    }
  },
  actions: {
    setSelectedPizza({ commit }, pizza) {
      commit("setSelectedPizza", pizza);
    },
    setSize({ commit }, size) {
      commit("setSize", size);
    },
    setToppings({ commit }, toppings) {
      commit("setToppings", toppings);
    },
    clearCart({commit}) {
      commit("clearCart")
    }
  },
};

// BACKUP

// CART CART
// cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    // cartItems(state) {
    //   return state.cartItems;
    // },
    // setCart(state, data){
    //   state.cartItems = data;
    // },

// CART CART END

    // selectedPizza(state) {
    //   return state.selectedPizza;
    // },

//   allToppings: [],

// if (state.allToppings.length > 0) {
//   state.availableToppings = pizza.toppings.map((toppingId) =>
//     state.allToppings.find((topping) => topping.id === toppingId)
//   );
// } else {
//   console.warn("Toppings data not loaded");
//   state.availableToppings = [];
// }
// setAllToppings(state, toppings) {
//   state.allToppings = toppings; // Menyimpan semua topping
// },
// setToppings(state, toppings) {
//   state.selectedToppings = toppings;
//   state.totalPrice =
//     state.selectedPizza.price +
//     (state.selectedSize ? state.selectedSize.extra_price : 0);
//   toppings.forEach((topping) => {
//     state.totalPrice += topping.price;
//   });
// },
// setAvailableToppings(state, toppings) {
//   state.availableToppings = toppings; // Set available toppings based on selected pizza
// },
//   async fetchAllToppings({ commit }) {
//     try {
//       const { data } = await axios.get("/src/topping-list.json");
//       commit("setAllToppings", data.data);
//     } catch (err) {
//       console.error(err);
//     }
//   },

// setAvailableToppings({ commit }, toppings) {
//   commit("setAvailableToppings", toppings);
// },
// setPizza(state, pizza) {
//   state.selectedPizza = pizza;
// },
// setSize(state, size) {
//     state.selectedSize = size;
//     state.totalPrice += size.extra_price;
// },
// checkoutTotal(state) {
//   let total = state.selectedPizza ? state.selectedPizza.price : 0;
//   if (state.selectedSize) total += state.selectedSize.extra_price;
//   state.selectedToppings.forEach((topping) => {
//     total += topping.price;
//   });
//   return total;
// },
// setPizza(state, pizza) {
//   state.selectedPizza = pizza;
//   state.totalPrice =
//     pizza.price + (state.selectedSize ? state.selectedSize.extra_price : 0);
// },
//   state.totalPrice =
//     (state.selectedPizza ? state.selectedPizza.price : 0) +
//     size.extra_price;
//   state.totalPrice =
//     state.selectedPizza.price +
//     (state.selectedSize ? state.selectedSize.extra_price : 0);
//   toppings.forEach((topping) => {
//     state.totalPrice += topping.price;
//   });
// setPizza({ commit }, pizza) {
//   commit("setPizza", pizza);
// },
