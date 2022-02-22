
// Imports
import {LitElement, html, css} from "lit";

// Our component
class FunComponent extends LitElement {
    constructor() {
        // Calling super to get the litElement constructor
        super()
        this.btnText = "Button";
        this.titleText = "Title Goes Here";
        
    }

    static properties = {
        btnText: { attribute: 'button-text' },
        titleText: { attribute: 'title-text'}
      }
    // css styling
    static styles = css`
    .btn {
        font-family: Roboto, sans-serif;
        font-weight: bold;
        margin-bottom: 20px;
        background-color: #0062d3;
        border: none;
        color: white;
        padding: 10px 18px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 18px;
        border-radius: 5px;
        cursor: pointer;

        transition: background-color .4s;
    }

    .btn:hover {
        background-color: #00a2d3;
    }
    .title {
        font-family: Roboto, sans-serif;
        font-size: 1.9rem;
        font-weight: bold;
        margin: 15px 0 0 0;
        text-shadow: 0 2px 2px #00000042
    }
    .smiley {
        font-family: Roboto;
        font-weight: bold;
        color: white;
        font-size: 60px;
        padding: 0;
        margin: 0 0 5px 0;

    }
    .square {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px 0 30px 0;
        height: 80px;
        width: 80px;
        background-color: #0051ff;
        box-shadow: 0 0 2px #00000081;
        transform: rotate(90deg);
    }
    .container {
        display: flex;
        flex-direction: column;
        width: 260px;
        align-items: center;
        border-radius: 5px;
        box-shadow: 0 4px 10px #00000081
    }
    .animation-forwards {
        transform: rotate(450deg);
        transition: transform 1s ease-in-out;
    }
    .animation-reverse {
        transform: rotate(90deg);
        transition: transform 1s ease-in-out;
    }
  `;

    // Get our square div and button from the shadowDOM
    get _squareDiv() {
        return this.renderRoot.querySelector('.square');
    }

    // Method for handling when our button gets clicked
    handleClick() {
        // If button
        if (this._squareDiv.classList.contains("animation-forwards")) {
            this._squareDiv.classList.remove("animation-forwards");
            this._squareDiv.classList.add("animation-reverse");
        } else {
            this._squareDiv.classList.remove("animation-reverse");
            this._squareDiv.classList.add("animation-forwards");
        }
        this.requestUpdate();
        
        // A custom event that fires outside of the shadowDOM
        const options = {
            detail: {message: 'I was clicked'},
            bubbles: true,
            composed: true,
          };
          this.dispatchEvent(new CustomEvent('button-click', options));
    }

    

    // connectedCallback() {
    //     super.connectedCallback();
    //     window.addEventListener('click', this._handleClick);
    // }
    // disconnectedCallback() {
    //     window.removeEventListener('click', this._handleClick);
    //     super.disconnectedCallback();
    // }

    /* 
    The render() method defines your component's internal DOM.
    The html tag function processes a template literal and returns a TemplateResult—an object
    that describes the HTML for Lit to render. Every Lit component should include a render() method.
    */
    render() {
        return html`
        <div class="container">
            <h2 class="title">${this.titleText}</h2>
            <div class="square"><p class="smiley">:)</p></div>
            <button @click=${this.handleClick} type="button" class="btn">${this.btnText}</button>
        </div>
        `
    }
}

customElements.define("fun-component", FunComponent);
