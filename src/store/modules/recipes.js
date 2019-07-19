import axios from "../../axios-config";

export const recipeStore = {
  state: {
    recipes: [],
    activeRecipe: null
  },
  mutations: {
    SET_RECIPES(state, recipes) {
      state.recipes = recipes;
    },
    SET_ACTIVE_RECIPE(state, recipe) {
      state.activeRecipe = recipe;
    },
    CLEAR_RECIPE_DATA(state) {
      state.recipes = [];
      state.activeRecipe = null;
    }
  },
  actions: {
    initRecipes({ commit }) {
      axios
        .get("/recipes")
        .then(response => {
          commit("SET_RECIPES", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    setActiveRecipe({ commit }, recipeID) {
      // Reset activeRecipe before we get the new one
      commit("SET_ACTIVE_RECIPE", null);
      axios
        .get("/recipes/" + recipeID)
        .then(response => {
          commit("SET_ACTIVE_RECIPE", response.data);
        })
        .catch(error => {
          // TODO: Inform user if recipe is not found
          console.log(error);
        });
    },
    clearRecipeData({ commit }) {
      commit("CLEAR_RECIPE_DATA");
    }
  },
  getters: {
    recipes: state => {
      return state.recipes;
    },
    activeRecipe: state => {
      return state.activeRecipe;
    }
  }
};
