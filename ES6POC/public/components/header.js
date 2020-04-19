customElements.define('header-nav', class extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
        <style type='text/css'>
            ul{
                list-style-type: none;
                margin:0;
                padding: 0;
                overflow:hidden;
                background-color:#333;
                box-sizing:border-box;
                display:block;
                float:none;
                line-height:22.5px;
                position:static;
            }
            li{
                float:left;
                box-sizing:inherit;
            }

            a{
                display:inline-block;
                color:#fff;
                text-align:center;
                text-decoration:none;
                padding: 14px 16px;
            }

            a.active{
                background-color:#4CAF50;
            }
        </style>
        <ul>
            <li><a href="index.html">Adres form</a></li>
            <li><a href="adressen.html">Adressen</a></li>
        </ul>`;
    }

});