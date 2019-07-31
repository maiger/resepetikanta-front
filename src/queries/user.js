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
      // Store login details to local storage
      const now = new Date();
      const expirationDate = new Date(
        now.getTime() + response.data.expiresIn * 1000
      );
      localStorage.setItem("id", response.data._id);
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("expirationDate", expirationDate);
      localStorage.setItem("createdDate", response.data.createdDate);

      store.dispatch("setUser", response.data)
      // Set autologout after token expires
      setLogoutTimer(response.data.expiresIn);
      router.push("/")
    })
    .catch(error => {
      console.log("loginUser | Error");
      console.log(error);
    });
}

export function tryAutoLogin() {
  const token = localStorage.getItem("token");
  if (!token) {
    return;
  }
  const expirationDate = localStorage.getItem("expirationDate");
  const now = new Date();
  if (now >= expirationDate) {
    return;
  }

  store.dispatch("setUser", {
    id: localStorage.getItem("id"),
    username: localStorage.getItem("username"),
    role: localStorage.getItem("role"),
    token: token,
    expirationdate: expirationDate,
    createdDate: localStorage.getItem("createdDate"),
  });

  // Set autologout after token expires
  const expiresIn = (new Date(expirationDate).getTime() - now.getTime()) / 1000;
  setLogoutTimer(expiresIn);
  router.push("/");
}

export function logoutUser() {
  store.dispatch("setUser", null)
  store.dispatch("clearRecipeData");
  localStorage.removeItem("id");
  localStorage.removeItem("username");
  localStorage.removeItem("role");
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("createdDate");
  router.replace("/")
}

export function setLogoutTimer(expirationTime) {
  setTimeout(() => {
    logoutUser();
  }, expirationTime * 1000);
}

export function signupUser(user) {
  let data = user;
  axios
    .post("/user", data)
    .then(response => {
      console.log("User signed up!");
      loginUser(user);
    })
    .catch(error => {
      console.log("signupUser | Error");
      console.log(error);
    });
}