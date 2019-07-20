import axios from "../../axios-config";
import { readRecipes } from "../../queries/recipes"

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
    initRecipes({ commit }, recipes) {
      commit("SET_RECIPES", recipes);
    },
    setActiveRecipe({ commit }, recipe) {
      commit("SET_ACTIVE_RECIPE", recipe);
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
