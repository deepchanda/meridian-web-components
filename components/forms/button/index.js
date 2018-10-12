import { html, render } from '/node_modules/lit-html/lit-html.js';
import theme from "/theme.js";

customElements.define("meridian-button", class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() { return ["kind", "size"]; }
  get kind() {
    return this.getAttribute("kind") || "primary";
  }
  get size() {
    return this.getAttribute("size") || "large";
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
        }
        .primary:hover {
          background-color: ${theme.colorNavy90};
        }
        .secondary {
          border: 1px solid ${theme.colorDarkGray100};
          background-color: ${theme.colorDarkGray100};
          color: ${theme.colorWhite100};
          fill: ${theme.colorWhite100};
        }
        .secondary:hover {
          background-color: ${theme.colorDarkGray90};
        }
        .secondary.active {
          background-color: ${theme.colorDarkGray80};
          box-shadow: 0 -2px 0 ${theme.colorBlack10} inset;
          color: ${theme.colorWhite100};
          fill: ${theme.colorWhite100};
        }
        .secondary:hover {
          background-color: ${theme.colorDarkGray90};
        }
        .tertiary {
          background-color: ${theme.colorTurquoiseGreen100};
          color: ${theme.colorWhite100};
          fill: ${theme.colorWhite100};
        }
        .tertiary:hover {
          background-color: ${theme.colorTurquoiseGreen90};
        }
        .danger {
          background-color: ${theme.colorDanger100};
          color: ${theme.colorWhite100};
          fill: ${theme.colorWhite100};
        }
        .danger:hover {
          background-color: ${theme.colorDanger90};
        }
        .danger.disabled {
          border: none;
          background-color: ${theme.colorDanger50};
          color: ${theme.colorWhite50};
          fill: ${theme.colorWhite50};
          opacity: inherit;
          box-shadow: inherit;
        }
        .danger.disabled:hover {
          background-color: ${theme.colorDanger50};
          color: ${theme.colorWhite50};
          fill: ${theme.colorWhite50};
          opacity: inherit;
          box-shadow: inherit;
          cursor: default;
        }
        .name {
          padding-left: 20px;
          padding-right: 20px;
        }
        .nameWithIconOnLeft {
          padding-right: 20px;
        }
        .nameWithIconOnRight {
          padding-left: 20px;
        }
        .small {
          height: 28px;
        }
        .large {
          height: 42px;
        }
      </style>
      <button class="${this.kind} ${this.size}" @click="${this.onClick}">
        <span class="name"><slot id="name">My styles are isolated in my Shadow DOM</slot></span>
      </button>
    `, this.shadowRoot);
  }
});