
<template>
  <b-card no-body class="recipe-card" :class="recipeStyle">
    <b-card-img id="recipe-img" src="https://placekitten.com/360/240" alt="Resepti" top></b-card-img>
    <b-card-body>
      <b-card-title>{{recipe.title}}</b-card-title>
    </b-card-body>
    <b-card-footer>
      <small class="text-muted">Tagit:</small>
    </b-card-footer>
  </b-card>
</template>

<script>
export default {
  props: {
    recipe: Object
  },
  data() {
    return {
      recipeStyle: null
    };
  },
  mounted() {
    // TODO: Do something smarter about this..
    const rnd = Math.floor(Math.random() * 4);
    const types = ["meat", "chicken", "fish", "vegetable"]
    const style = {
      meat: false,
      chicken: false,
      fish: false,
      vegetable: false
    };

    style[types[rnd]] = true;

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
