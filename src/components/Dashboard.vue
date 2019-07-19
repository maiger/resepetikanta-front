<template>
  <div>
    <app-header></app-header>
    <div class="container">
      <app-recipe-list></app-recipe-list>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import RecipeList from "./RecipeList";

export default {
  components: {
    appHeader: Header,
    appRecipeList: RecipeList
  }
};
</script>
