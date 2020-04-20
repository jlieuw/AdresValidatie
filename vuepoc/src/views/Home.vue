<template>
  <div class="home">
    <Adres />
    <Adressen v-bind:adressen="adressen" />
  </div>
</template>

<script>
// @ is an alias to /src
import Adres from "@/components/Adres.vue";
import Adressen from '@/components/Adressen.vue';
import axios from "axios";

export default {
  name: "Home",
  components: {
    Adres,
    Adressen
  },
  data() {
    return {
      adressen: []
    };
  },
  async created() {
    const res = await axios(
      "https://backendvalidaties.azurewebsites.net/adressen"
    );
    if (res.status === 200) {
      this.adressen = res.data;
      console.log(`adressen opgehaald totaal ${this.adressen.length}`);
    } else {
      console.log("error getting the adressen..");
    }
  }
};
</script>
