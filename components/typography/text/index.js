import { html } from "/node_modules/lit-html/lit-html.js";
import theme from "/theme.js";

export default (text) => html`
  <style>
    span {
      font-family: ${theme.fontFamilyOpenSans};
    }
  </style>
  <span>${text}</span>
`