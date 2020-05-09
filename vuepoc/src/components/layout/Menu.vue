<template>
  <v-app-bar app class="indigo white--text">
    <v-toolbar-title class="headline text-uppercase">
      <span>Vue</span>
      <span class="font-weight-light">POC</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down" v-for="(link, index) in links" :key="link.route">
      <v-btn text class="white--text" :to="link.route">{{ link.text }}</v-btn>
      <v-divider inset vertical v-if="index != links.length-1"></v-divider>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      links: [
        { text: "Home", route: "/" },
        { text: "About", route: "/About" }
      ]
    };
  },
  computed: {
    last() {
      return this.links.length - 1;
    }
  }
};
</script>

<style scoped>
</style>
