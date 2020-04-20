<template>
  <div>
    <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
      <thead>
        <tr>
          <th class="mdl-data-table__cell--non-numeric">Straat</th>
          <th class="mdl-data-table__cell--non-numeric">Adresregel 1</th>
          <th class="mdl-data-table__cell--non-numeric">Adresregel 2</th>
          <th class="mdl-data-table__cell--non-numeric">Postcode</th>
          <th>Huisnummer</th>
          <th class="mdl-data-table__cell--non-numeric">Huisnummer toevoeging</th>
          <th class="mdl-data-table__cell--non-numeric">Gemeente</th>
          <th class="mdl-data-table__cell--non-numeric">Land</th>
        </tr>
      </thead>
      <tbody v-bind:key="adres.id" v-for="adres in adressen">
        <Adresregel v-bind:adres="adres" />
      </tbody>
    </table>
  </div>
</template>

<script>
import Adresregel from "./Adresregel.vue";

export default {
  name: "Adressen",
  components: {
    Adresregel
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
