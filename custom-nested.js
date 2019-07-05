class CustomNested extends HTMLElement {
    constructor() {
        super();
    }

    set number(number) {
        this.innerHTML = `custom element: ${number} `;
    }
}

customElements.define('custom-nested', CustomNested);