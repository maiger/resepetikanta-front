<template>
  <div id="login">
    <div class="login-form">
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="username">Käyttäjänimi</label>
          <input class="form-control" type="username" id="username" v-model="username" />
        </div>
        <div class="form-group">
          <label for="password">Salasana</label>
          <input class="form-control" type="password" id="password" v-model="password" />
        </div>
        <div class="submit">
          <button class="btn btn-primary" type="submit">Kirjaudu</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { loginUser } from "../queries/user";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      loginUser({
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>


<style scoped>
.login-form {
  border-radius: 3px;
  background-color: #fff;
  width: 400px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  -webkit-box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.25);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.25);
}
</style>