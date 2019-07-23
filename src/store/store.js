import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { userStore } from "./modules/user";
import { recipeStore } from "./modules/recipes";

export default new Vuex.Store({
  modules: {
    userStore,
    recipeStore
  }
});
