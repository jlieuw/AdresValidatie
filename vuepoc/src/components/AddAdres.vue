<template>
  <v-form
  v-model="valid"
  @submit.prevent="addAdres">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="model.straat" label="Straat" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="model.adresRegel1" label="Adresregel 1" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="model.adresRegel2" label="Adresregel 2" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="model.postCode" label="Postcode" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field type="number" v-model.number="model.huisnummer" label="huisnummer" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="model.huisnummerToevoeging" label="huisnummer toevoeging" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="model.gemeente" label="Gemeente" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="model.land" label="Land" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn type="submit" class="ma-2" tile outlined color="success">
            <v-icon left>mdi-content-save</v-icon>Save
          </v-btn>
          <v-btn class="ma-2" tile outlined color="warning">
            <v-icon left>mdi-cancel</v-icon>Cancel
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import Adres from "@/models/adres.js";

export default {
  name: "AddAdres",
  props: ["foutmeldingen"],
  data() {
    return {
      valid: true,
      model: new Adres()
    };
  },
  methods: {
    addAdres() {
      const nieuwAdres = this._data.model;
      console.log(nieuwAdres);

      this.$emit("add-adres", nieuwAdres);

      this.model = new Adres();
    }
  }
};
</script>

<style scoped>
.error {
  padding: 10px;
  color: red;
}
</style>
