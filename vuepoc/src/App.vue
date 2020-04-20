<template>
  <div id="app" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <Menu />
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import Menu from "@/components/layout/Menu.vue";

export default {
  name: "App",
  components: {
    Menu
  }
};
</script>

<style scoped>
.page-content {
  padding: 10px;
}
</style>
