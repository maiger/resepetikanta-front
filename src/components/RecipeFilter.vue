<template>
  <div id="recipe-filter" class="container">
    <b-form @reset="onReset">
      <b-form-group id="input-group-1" label="Hakusana:" label-for="input-searchterm">
        <b-form-input id="input-searchterm" v-model="filter.searchterm" type="text" placeholder="Hae"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Annoksia:" label-for="input-servings">
        <b-form-input id="input-servings" v-model="filter.servings" type="number" min="1"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Valmistusaika:" label-for="input-preptime">
        <b-form-input id="input-preptime" v-model="filter.preptime" type="number" min="1"></b-form-input>
      </b-form-group>
      <b-button type="reset" variant="danger">Tyhjennä</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: {
        searchterm: null,
        servings: null,
        preptime: null,
        difficulty: null,
        tags: null
      }
    };
  },
  methods: {
    onReset(evt) {
      evt.preventDefault();
      this.filter.searchterm = null;
      this.filter.servings = null;
      this.filter.preptime = null;
      this.filter.difficulty = null;
      this.filter.tags = null;
    }
  }
};
</script>


<style scoped>
#recipe-filter {
  background-color: bisque;
}
</style>
