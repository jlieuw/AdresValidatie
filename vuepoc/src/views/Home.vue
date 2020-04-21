<template>
  <div class="mdl-grid">
    <div class="mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col">
      <AddAdres v-on:add-adres="addAdres" v-bind:foutmeldingen="foutmeldingen" />
    </div>
    <div class="mdl-cell mdl-cell--12-col">
      <Adressen v-bind:adressen="adressen" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AddAdres from "@/components/AddAdres.vue";
import Adressen from "@/components/Adressen.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    AddAdres,
    Adressen
  },
  data() {
    return {
      adressen: [],
      foutmeldingen: []
    };
  },
  methods: {
    async addAdres(nieuwAdres) {
      try {
        this.foutmeldingen = [];
        const adresjson = JSON.stringify(nieuwAdres);
        console.log(adresjson);

        const res = await axios.post(
          "https://backendvalidaties.azurewebsites.net/adres",
          adresjson,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          }
        );
        console.log(res);
        if (res.status) {
          this.getAdressen();
        }
      } catch (error) {
        console.log(error.response);
        if (error.response.data.status == 400 && error.response.data.detail) {
          this.foutmeldingen = error.response.data.detail.split("\r\n");
        }
      }
    },
    async getAdressen() {
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
  },
  created() {
    this.getAdressen();
  }
};
</script>
