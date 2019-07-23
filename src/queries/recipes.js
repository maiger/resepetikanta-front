// All database queries regarding reicpes are to be placed here
import axios from "../axios-config";
import store from "../store/store";
import router from "../router"

export function readRecipes() {
  axios
  .get("/recipes")
  .then(response => {
    store.dispatch("initRecipes", response.data);
  })
  .catch(error => {
    console.log(error);
  });
}

export function readRecipeByID(id) {
  axios
  .get("/recipes/" + id)
  .then(response => {
    store.dispatch("setActiveRecipe", response.data);
  })
  .catch(error => {
    // TODO: Inform user if recipe is not found
    console.log(error);
  });
}

export function createRecipe(recipe) {
  // Validated recipe
  let r = {
    title: null,
    ingredients: null,
    instructions: null,
    difficulty: null,
    preptime: null,
    servings: null,
    tags: null
  }
  // Validate recipe fields
  if (!recipe.title) {
    console.error("Recipe title required!")
    return
  }
  r.title = recipe.title

  recipe.difficulty ? r.difficulty = parseInt(recipe.difficulty) : r.difficulty = null
  recipe.preptime ? r.preptime = parseInt(recipe.preptime) : r.preptime = null
  recipe.servings ? r.servings = parseInt(recipe.servings) : r.servings = null

  // Split string by "," and trim excess whitespaces
  // Eg. "chicken, soup" => ["chicken", "soup"]
  if (recipe.tags) {
    r.tags = recipe.tags.split(",").map(tag => tag.trim())
  }

  console.log("Recipe validated: sending to db")
  let data = r;
  axios
    .post("/recipes", data)
    .then(response => {
      console.log("Recipe added!");
      router.push("/")
    })
    .catch(error => {
      console.log("CreateRecipe | Error");
      console.log(error);
    });
}

export function updateRecipe(recipe) {

}

export function deleteRecipe(id) {
  console.log("Sending delete recipe to database");
  axios
    .delete("/recipes/" + id)
    .then(response => {
      console.log("DeleteRecipe | Recipe Deleted");
      router.push("/")
    })
    .catch(error => {
      console.log("Delete Project | Error");
      console.log(error);
    });
}