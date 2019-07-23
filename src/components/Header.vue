<template>
  <div id="header">
    <b-navbar id="header-content" toggleable="lg" type="light" variant="info">
      <router-link class="brand-text" to="/" tag="b-navbar-brand">Reseptikanta</router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <!-- Search bar -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form v-if="this.$route.path == '/'">
            <b-form-input size="sm" class="mr-sm-2" placeholder="Hae"></b-form-input>
          </b-nav-form>

          <!-- Create a new recipe -->
          <router-link to="/recipe/new" tag="b-nav-item">Uusi Resepti</router-link>

          <!-- User Options -->
          <!-- Content depends if user is loggen in or not -->
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-if="this.$store.getters.user == null" class="quest">
              <template slot="button-content">
                <em>Vieras</em>
              </template>
              <router-link to="/login" tag="b-dropdown-item">Kirjaudu</router-link>
              <router-link to="/signup" tag="b-dropdown-item">Rekisteröidy</router-link>
            </template>
            <template v-else class="member">
              <template slot="button-content">
                <em>Käyttäjä</em>
              </template>
              <router-link to="/" tag="b-dropdown-item">Profiili</router-link>
              <router-link to="/" tag="b-dropdown-item">Kirjaudu ulos</router-link>
            </template>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>
#header-content {
  background-color: #ececec !important;
}

.brand-text {
  cursor: pointer;
}
</style>
