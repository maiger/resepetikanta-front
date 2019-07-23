<template>
  <div>
    <app-header></app-header>
    <div v-if="recipe" class="container recipe">
      <div class="recipe-title text-center">
        <h2>{{ recipe.title }}</h2>
      </div>
      <div class="row">
        <div class="col-lg-6 col-sm-12 text-center recipe-img">
          <img src="https://placekitten.com/360/240" class="img-fluid" alt="Reseptin kuva" />
        </div>
        <div class="col-lg-6 col-sm-12 recipe-info">
          <div>Info:</div>
          <div>Annoksia: {{ recipe.servings }}</div>
          <div>Vaikeus: {{ recipe.difficulty }}</div>
          <div>Valmistusaika: {{ recipe.preptime }} min</div>
          <div>Tagit: {{ recipe.tags }}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-sm-12 recipe-ingredients">
          <div>Ainekset:</div>
          <div>{{ recipe.ingredients }}</div>
        </div>
        <div class="col-lg-6 col-sm-12 recipe-instructions">
          <div>Ohjeet:</div>
          <div>{{ recipe.instructions }}</div>
        </div>
      </div>
      <div class="buttons">
        <button class="btn btn-primary float-right">Muokka</button>
        <button @click.prevent="deleteRecipe" class="btn btn-danger float-right">Poista</button>
      </div>
    </div>
    <div class="text-center" v-else>Recipe not yet loaded or incorrect URL</div>
  </div>
</template>

<script>
import Header from "./Header";
import { readRecipeByID, deleteRecipe } from "../queries/recipes";

export default {
  components: {
    appHeader: Header
  },
  computed: {
    recipe() {
      return this.$store.getters.activeRecipe;
    }
  },
  methods: {
    deleteRecipe() {
      if (confirm("Haluatko varmasti poistaa reseptin: " + this.recipe.title)) {
        deleteRecipe(this.recipe._id);
      }
    }
  },
  mounted() {
    readRecipeByID(this.$route.params.id);
  }
};
</script>

<style scoped>
.recipe {
  background-color: red;
}

.recipe-title {
  background-color: teal;
}

.recipe-info {
  background-color: orange;
}

.recipe-img {
  background-color: yellow;
}

.recipe-instructions {
  background-color: blue;
}

.recipe-ingredients {
  background-color: green;
}
</style>
