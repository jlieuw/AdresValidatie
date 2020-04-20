<template>
  <div>
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">VuePOC</span>
        <div class="mdl-layout-spacer"></div>
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <router-link to="/" class="mdl-navigation__link">Home</router-link>|
          <router-link to="/about" class="mdl-navigation__link">About</router-link>
        </nav>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">VuePOC</span>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href>Home</a>
        <a class="mdl-navigation__link" href>Adressen</a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style scoped>
</style>
