import { html, render } from '/node_modules/lit-html/lit-html.js';
import theme from "/theme.js";

customElements.define("meridian-button", class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() { return ["kind"]; }
  get kind() {
    return this.getAttribute("kind");
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log(attrName, oldVal, newVal);
    this.render();
  }
  async connectedCallback() {
    this.render();
  }
  onClick() {
    console.log("button clicked!");
  }
  render() {
    render(html`
      <style>
        button {
          display: inline-flex;
          box-sizing: border-box;
          font-family: ${theme.fontFamilyOpenSans};
          font-size: ${theme.fontSizeSmall};
          -webkit-font-smoothing: antialiased;
          font-weight: ${theme.fontWeightBold};
          color: ${theme.colorMediumDarkGray100};
          background-color: ${theme.colorWhite100};
          cursor: pointer;
          transition: ${theme.transitionAllFast};
          pointer-events: all;
          border-radius: ${theme.borderRadius};
          border: 1px solid transparent;
          -webkit-appearance: none;
          padding: 0;
          user-select: none;
        }
        .primary {
          background-color: ${theme.colorNavy100};
          color: ${theme.colorWhite100};
          fill: ${theme.colorWhite100};
          &:hover {
            background-color: ${theme.colorNavy90};
          }
        }
      </style>
      <button class="${this.kind}" @click="${this.onClick}">
        <slot id="name">My styles are isolated in my Shadow DOM</slot>
      </button>
    `, this.shadowRoot);
  }
});