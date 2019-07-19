import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./components/Dashboard.vue";
import Recipe from "./components/Recipe.vue";
import CreateRecipe from "./components/CreateRecipe.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/recipe/new",
      name: "CreateRecipe",
      component: CreateRecipe
    },
    {
      path: "/recipe/:id",
      name: "Recipe",
      component: Recipe
    }
  ]
});
