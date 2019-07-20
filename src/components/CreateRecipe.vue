<template>
  <div>
    <app-header></app-header>
    <div id="new-recipe" class="container">
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group id="input-group-1" label="Nimi:" label-for="input-title">
          <b-form-input id="input-title" v-model="recipe.title" type="text" placeholder="Nimi" required></b-form-input>
        </b-form-group>

        <div class="row">
          <div class="col-lg-8 col-sm-12">
            <b-form-group id="input-group-2" label="Raaka-aineet:" label-for="input-ingredients">
              <b-form-textarea id="input-ingredients" v-model="recipe.ingredients" rows="8"></b-form-textarea>
            </b-form-group>
          </div>
          <div class="col-lg-4 col-sm-12">
            <b-form-group id="input-group-3-1" label="Annoksia:" label-for="input-servings">
              <b-form-input id="input-servings" v-model="recipe.servings" type="number" min="1"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3-2" label="Valmistusaika:" label-for="input-preptime">
              <b-form-input id="input-preptime" v-model="recipe.preptime" type="number" min="1"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3-3" label="Vaikeus:" label-for="input-difficulty">
              <b-form-input
                id="input-difficulty"
                v-model="recipe.difficulty"
                type="number"
                min="0"
                max="5"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>

        <b-form-group id="input-group43" label="Valmistusohjeet:" label-for="input-instructions">
          <b-form-textarea id="input-instructions" v-model="recipe.instructions" rows="5"></b-form-textarea>
        </b-form-group>

        <b-form-group id="input-group-5" label="Tagit:" label-for="input-tags">
          <b-form-input id="input-tags" v-model="recipe.tags" type="text"></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Lisää</b-button>
        <b-button type="reset" variant="danger">Tyhjennä</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import { createRecipe } from "../queries/recipes"

export default {
  data() {
    return {
      recipe: {
        title: null,
        ingredients: null,
        instructions: null,
        difficulty: null,
        preptime: null,
        servings: null,
        tags: null
      }
    };
  },
  components: {
    appHeader: Header
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      createRecipe(this.recipe)
    },
    onReset(evt) {
      evt.preventDefault();
      this.recipe.title = null;
      this.recipe.ingredients = null;
      this.recipe.instructions = null;
      this.recipe.difficulty = null;
      this.recipe.preptime = null;
      this.recipe.servings = null;
      this.recipe.tags = null;
    }
  }
};
</script>
