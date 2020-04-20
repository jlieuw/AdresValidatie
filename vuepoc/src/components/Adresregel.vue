<template>
  <tr>
    <td class="mdl-data-table__cell--non-numeric">{{adres.straat}}</td>
    <td class="mdl-data-table__cell--non-numeric">{{adres.adresRegel1}}</td>
    <td class="mdl-data-table__cell--non-numeric">{{adres.adresRegel2}}</td>
    <td class="mdl-data-table__cell--non-numeric">{{adres.postCode}}</td>
    <td>{{adres.huisnummer}}</td>
    <td class="mdl-data-table__cell--non-numeric">{{adres.huisnummerToevoeging}}</td>
    <td class="mdl-data-table__cell--non-numeric">{{adres.gemeente}}</td>
    <td class="mdl-data-table__cell--non-numeric">{{adres.land}}</td>
  </tr>
</template>

<script>
export default {
  name: "Adresregel",
  props: ["adres"]
};
</script>