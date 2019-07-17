<template>
  <div>
    <app-header></app-header>
    <app-recipe-list></app-recipe-list>
  </div>
</template>

<script>
import Header from "./Header";
import RecipeList from "./RecipeList"

export default {
  components: {
    appHeader: Header,
    appRecipeList: RecipeList
  }
};
</script>

