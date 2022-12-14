class content extends HTMLElement
{
    constructor()
    {
        super();
        // element created
    }
    connectedCallback() {
    this.innerHTML=
    `
    <div class="content">
                <div class="left-column">
                    <img src="./img/COT TRAI.webp">
                    <img src="./img/COT TRAI 5.webp" alt="EVENT">
                </div>
                <div class="right-column">
                    <img src="./img/COT PHAI.jpg">
                    <img src="./img/COT PHAI 2.webp">
                </div>
                <div class="center-column">
                    <video controls autoplay> <source src="img/CLIP.mp4"></video>
                    <img src="./img/CENTER 2.jpg">
                </div>
            </div>
    `
    }
}
    window.customElements.define('content-component', content);