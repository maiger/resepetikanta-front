<template>
  <div class="row">
    <app-recipe-list-item
      class="col-lg-3 col-md-6 col-sm-12 recipe-card"
      v-for="(recipe, index) in recipes"
      :recipe="recipe"
      :key="index"
    >{{recipe}}</app-recipe-list-item>
  </div>
</template>

<script>
import RecipeListItem from "./RecipeListItem";

export default {
  components: {
    appRecipeListItem: RecipeListItem
  },
  computed: {
    recipes() {
      return this.$store.getters.recipes;
    }
  },
  mounted() {
    this.$store.dispatch("initRecipes");
  }
};
</script>


