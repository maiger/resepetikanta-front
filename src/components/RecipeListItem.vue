
<template>
  <b-card @click="gotoRecipe" no-body class="recipe-card" :class="recipeStyle">
    <b-card-img id="recipe-img" src="https://placekitten.com/360/240" alt="Resepti" top></b-card-img>
    <b-card-body>
      <b-card-title>{{recipe.title}}</b-card-title>
      <b-card-text v-if="recipe.servings">Annokset: {{recipe.servings}}</b-card-text>
      <b-card-text v-if="recipe.preptime">Valmistusaika: {{recipe.preptime}}min</b-card-text>
      <b-card-text v-if="recipe.difficulty">Vaikeus: {{recipe.difficulty}}</b-card-text>
    </b-card-body>
    <b-card-footer>
      <small class="text-muted">Tagit: {{recipe.tags}}</small>
    </b-card-footer>
  </b-card>
</template>

<script>
import router from "../router"

export default {
  props: {
    recipe: Object
  },
  data() {
    return {
      recipeStyle: null
    };
  },
  methods: {
    gotoRecipe() {
      router.push("/recipe/" + this.recipe._id)
    }
  },
  mounted() {
    // TODO: Do something smarter about this..
    const style = {
      meat: false,
      chicken: false,
      fish: false,
      vegetable: false
    };

    if (this.recipe.tags.includes("liha")) {
      style.meat = true;
    } else if (this.recipe.tags.includes("kana")) {
      style.chicken = true;
    } else if (this.recipe.tags.includes("kala")) {
      style.fish = true;
    } else if (this.recipe.tags.includes("kasvis")) {
      style.vegetable = true;
    }

    this.recipeStyle = style;
  }
};
</script>

<style scoped>
.recipe-card {
  padding: 0;
  border-radius: 0;
  border: 0;
}
.meat {
  background-color: #f78888;
}

.chicken {
  background-color: #f3d250;
}

.fish {
  background-color: #90ccf4;
}

.vegetable {
  background-color: #90ffc4;
}

#recipe-img {
  padding: 15px;
}
</style>
