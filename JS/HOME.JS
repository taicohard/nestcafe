class HOME extends HTMLElement
{
    constructor()
    {
        super();
        // element created
    }
    connectedCallback() {// 
    this.innerHTML =
    `
    <div class="menu">
    <b> <a href="#" target="black"> GIỚI THIỆU </a> </b>
    <b> <a href="file:///D:/Cao%20Kim%20Ngan/Product/product.html" target="black"> SẢN PHẨM CỦA CHÚNG TÔI </a> </b>
    <b> <a href="#" target="black"> CÔNG THỨC SÁNG TẠO </a> </b>
    <b> <a href="#" target="black"> DỰ ÁN PHÁT TRIỂN CÀ PHÊ </a> </b>
    </div>
    `
    }
}
    window.customElements.define('home-component',HOME);// thông báo cho trình duyệt biết rằng <my-element>
