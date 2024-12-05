import { createStore } from "vuex";
import pizza from "./pizza"
import size from "./size";
import toppings from "./toppings";
import transaction from "./transaction";

export const store = createStore({
  modules: {
    transaction,
    pizza,
    size,
    toppings
  }
})