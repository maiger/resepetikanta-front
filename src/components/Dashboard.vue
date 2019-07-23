<template>
  <div class="container">
    <div class="row">
      <app-recipe-filter class="col-lg-3 col-md-4 col-sm-12 order-md-last"></app-recipe-filter>
      <app-recipe-list class="col-lg-9 col-md-8 col-sm-12"></app-recipe-list>
    </div>
  </div>
</template>

<script>
import RecipeList from "./RecipeList";
import RecipeFilter from "./RecipeFilter";

export default {
  components: {
    appRecipeList: RecipeList,
    appRecipeFilter: RecipeFilter
  }
};
</script>
