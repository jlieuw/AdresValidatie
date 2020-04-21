<template>
  <form @submit.prevent="addAdres">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--4-col">
        <div class="mdl-textfield mdl-js-textfield">
          <input
            class="mdl-textfield__input"
            type="text"
            id="straat"
            name="straat"
            v-model="model.straat"
          />
          <label class="mdl-textfield__label" for="straat">Straat</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield">
          <input
            class="mdl-textfield__input"
            type="text"
            id="adresRegel1"
            name="adresRegel1"
            v-model="model.adresRegel1"
          />
          <label class="mdl-textfield__label" for="adresRegel1">Adresregel1</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield">
          <input
            class="mdl-textfield__input"
            type="text"
            id="adresRegel2"
            name="adresRegel2"
            v-model="model.adresRegel2"
          />
          <label class="mdl-textfield__label" for="adresRegel2">Adresregel2</label>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col">
        <div class="mdl-textfield mdl-js-textfield">
          <input
            class="mdl-textfield__input"
            type="text"
            id="postCode"
            name="postCode"
            v-model="model.postCode"
          />
          <label class="mdl-textfield__label" for="postCode">Postcode</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield">
          <input
            class="mdl-textfield__input"
            type="number"
            min="0"
            id="huisnummer"
            name="huisnummer"
            v-model="model.huisnummer"
          />
          <label class="mdl-textfield__label" for="huisnummer">Huisnummer</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield">
          <input
            class="mdl-textfield__input"
            type="text"
            id="huisnummerToevoeging"
            name="huisnummerToevoeging"
            v-model="model.huisnummerToevoeging"
          />
          <label class="mdl-textfield__label" for="huisnummerToevoeging">Huisnummer toevoeging</label>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col">
        <div class="mdl-textfield mdl-js-textfield">
          <input
            class="mdl-textfield__input"
            type="text"
            id="gemeente"
            name="gemeente"
            v-model="model.gemeente"
          />
          <label class="mdl-textfield__label" for="gemeente">Gemeente</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield">
          <input class="mdl-textfield__input" type="text" id="land" name="land" v-model="model.land" />
          <label class="mdl-textfield__label" for="land">Land</label>
        </div>
        <div style="padding-top:10px">
          <input
            type="submit"
            class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
            value="Submit"
          />
        </div>
      </div>
    </div>
    <div class="error" v-if="foutmeldingen.length > 0">
      <div v-for="foutmelding in foutmeldingen" v-bind:key="foutmelding">
        {{foutmelding}}
        <br />
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "AddAdres",
  props: ["foutmeldingen"],
  data() {
    return {
      model: {
        straat: "",
        adresRegel1: "",
        adresRegel2: "",
        postCode: "",
        huisnummer: 0,
        huisnummerToevoeging: "",
        gemeente: "",
        land: ""
      }
    };
  },
  methods: {
    addAdres() {
      this.model.huisnummer = parseInt(this.model.huisnummer);
      const nieuwAdres = this._data.model;
      console.log(nieuwAdres);

      this.$emit("add-adres", nieuwAdres);

      this.model.straat = null;
      this.model.adresRegel1 = "";
      this.model.adresRegel2 = "";
      this.model.postCode = "";
      this.model.huisnummer = 0;
      this.model.huisnummerToevoeging = "";
      this.model.gemeente = "";
      this.model.land = "";
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
