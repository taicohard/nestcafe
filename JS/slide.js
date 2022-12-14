class slide extends HTMLElement
{
    constructor()
    {
        super();
        // element created
    }
    connectedCallback() {
    this.innerHTML=
    `
    <div class="slide">
         <img src="./img/" alt="SLIDE1"?\>
    </div>
    `
    }
}
    window.customElements.define('slide-component', slide);