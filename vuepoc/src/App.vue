<template>
  <v-app>
    <Menu />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Menu from "@/components/layout/Menu.vue";
export default {
  name: "App",
  components: { Menu }
};
</script>

<style scoped>
.page-content {
  padding: 10px;
}
</style>
