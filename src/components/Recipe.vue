<template>
  <div>
    <app-header></app-header>
    <div v-if="activeRecipe" class="container recipe">
      <div class="recipe-title text-center">
        <div>{{ activeRecipe.title }}</div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-sm-12 text-center recipe-img">
          <img src="https://placekitten.com/360/240" class="img-fluid" alt="Reseptin kuva" />
        </div>
        <div class="col-lg-6 col-sm-12 recipe-info">
          <div>Info:</div>
          <div>Annoksia: {{ activeRecipe.servings }}</div>
          <div>Vaikeus: {{ activeRecipe.difficulty }}</div>
          <div>Valmistusaika: {{ activeRecipe.preptime }} min</div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-sm-12 recipe-ingredients">
          <div>Ainekset:</div>
          <div>{{ activeRecipe.ingredients }}</div>
        </div>
        <div class="col-lg-6 col-sm-12 recipe-instructions">
          <div>Ohjeet:</div>
          <div>{{ activeRecipe.instructions }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";

export default {
  components: {
    appHeader: Header
  },
  computed: {
    activeRecipe() {
      return this.$store.getters.activeRecipe;
    }
  },
  mounted() {
    this.$store.dispatch("setActiveRecipe", this.$route.params.id);
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
