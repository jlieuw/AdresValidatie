<template>
  <v-form ref="form" v-model="valid" @submit.prevent="addAdres">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="model.straat" label="Straat" :rules="rules.straatRules" required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="model.adresRegel1" label="Adresregel 1" maxlength="255"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="model.adresRegel2" label="Adresregel 2" maxlength="255"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="model.postCode"
            label="Postcode"
            :rules="[v => !!v || 'postcode is verplicht',
              postcodeCheck
            ]"
            :error-messages="postcodeErrorMessages"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            type="number"
            v-model.number="model.huisnummer"
            :rules="rules.huisnummerRules"
            label="huisnummer"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="model.huisnummerToevoeging"
            :rules="rules.huisnummerToevoegingRules"
            maxlength="10"
            label="huisnummer toevoeging"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="model.gemeente" label="Gemeente" maxlength="255"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="model.land" label="Land"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn type="submit" class="ma-2" tile outlined color="success">
            <v-icon left>mdi-content-save</v-icon>Save
          </v-btn>
          <v-btn class="ma-2" tile outlined color="warning" @click="reset">
            <v-icon left>mdi-cancel</v-icon>Cancel
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import Adres from "@/models/adres.js";
import AdresRules from "@/models/adresrules.js";

export default {
  name: "AddAdres",
  props: ["foutmeldingen"],
  data() {
    return {
      valid: true,
      model: new Adres(),
      rules: new AdresRules(),
      postcodeErrorMessages: ""
    };
  },
  methods: {
    addAdres() {
      if (this.$refs.form.validate()) {
        const nieuwAdres = this._data.model;
        console.log(nieuwAdres);

        this.$emit("add-adres", nieuwAdres);

        this.reset();
      }
    },
    reset() {
      this.postcodeErrorMessages = "";
      this.$refs.form.reset();
    },
    postcodeCheck() {
      this.postcodeErrorMessages = "";
      if (
        (this.model.land.toLowerCase() == "nederland" &&
          !/^\d{4}[a-zA-z]{2}$/.test(this.model.postCode)) ||
        (this.model.land.toLowerCase() == "duitsland" &&
          /^\d{5}$/.test(this.model.postCode)) ||
        (this.land && this.model.postCode.length < 15)
      ) {
        this.postcodeErrorMessages = "postcode is niet geldig";
      }
      return true;
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
