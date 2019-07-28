// All database queries regarding users are to be placed here
import axios from "../axios-config";
import store from "../store/store";
import router from "../router"

export function loginUser(user) {
  let data = user;
  axios
    .post("/user/login", data)
    .then(response => {
      console.log("User logged in!");
      store.dispatch("setUser", response.data)
      router.push("/")
    })
    .catch(error => {
      console.log("loginUser | Error");
      console.log(error);
    });
}

export function logoutUser() {
  store.dispatch("setUser", null)
  router.push("/")
}