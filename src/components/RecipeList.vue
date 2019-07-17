<template>
  <div>
    <div v-for="(recipe, index) in recipes" :key="index">{{recipe}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    recipes() {
      return this.$store.getters.recipes;
    }
  },
  created() {
    this.$store.dispatch("initRecipes");
  }
};
</script>

