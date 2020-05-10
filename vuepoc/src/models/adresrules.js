export default class AdresRules {
    constructor() {
        this.straatRules = [
            v => !!v || 'Straat is verplicht'
        ];
        this.huisnummerRules = [
            v => !!v || 'Huisnummer is verplicht',
            v => (v > 0 && v < 100000) || 'Huisnummer moet tussen 0 en 100000 zijn'
        ];
        this.huisnummerToevoegingRules = [
            v => (v.length < 10) || 'Huisnummer toevoeging maxlength 10'
        ];
    }
}