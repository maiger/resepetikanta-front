<template>
  <div id="header">
    <b-navbar id="header-content" toggleable="lg" type="light" variant="info">
      <b-navbar-brand href="#">Reseptikanta</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <!-- Search bar -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Hae"></b-form-input>
          </b-nav-form>

          <!-- Create a new recipe -->
          <b-nav-item href="#">Uusi Resepti</b-nav-item>

          <!-- User Options -->
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">
              <em>Käyttäjä</em>
            </template>
            <b-dropdown-item href="#">Profiili</b-dropdown-item>
            <b-dropdown-item href="#">Kirjaudu ulos</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>
  #header-content {
    background-color: #ececec !important
  }
</style>
