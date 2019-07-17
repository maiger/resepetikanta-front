
<template>
  <b-card no-body class="recipe-card">
    <b-card-img id="recipe-img" src="https://placekitten.com/360/240" alt="Resepti" top></b-card-img>
    <b-card-body>
      <b-card-title>{{recipe.title}}</b-card-title>
    </b-card-body>
    <b-card-footer>
      <small class="text-muted">Last updated 3 mins ago</small>
    </b-card-footer>
  </b-card>
</template>

<script>
export default {
  props: {
    recipe: Object
  },
};
</script>

<style scoped>
  .recipe-card {
    padding: 0;
    border-radius: 0;
    border: 0;
    background-color: #90ffc4
  }

#recipe-img {
  padding: 15px;
}
</style>
