<template>
  <v-data-table 
  :headers="headers" 
  :items="adressen" 
  multi-sort 
  class="elevation-1">
  </v-data-table>
</template>

<script>

export default {
  name: "Adressen",
  data() {
    return {
      headers: [
        { text: "Straat", value: "straat" },
        { text: "Adresregel 1", value: "adresRegel1" },
        { text: "Adresregel 2", value: "adresRegel2" },
        { text: "Postcode", value: "postCode" },
        { text: "Huisnummer", value: "huisnummer" },
        { text: "Huisnummer toevoeging", value: "huisnummerToevoeging" },
        { text: "Gemeente", value: "gemeente" },
        { text: "Land", value: "land" }
      ]
    };
  },
  props: ["adressen"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  width: 100%;
}
</style>
