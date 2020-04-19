import './adresinfo.js';

const adressenUrl = "https://backendvalidaties.azurewebsites.net/adressen";

customElements.define('adressen-lijst', class extends HTMLElement{

    // Called every time the element is inserted into the DOM.
    async connectedCallback(){
        const res = await fetch(adressenUrl);
        const json = await res.json();

        json.forEach(adres => {
            let el = document.createElement('adres-info');
            el.adres = adres;
            this.appendChild(el);
        });
    }
});