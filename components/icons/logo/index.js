import { html } from "/node_modules/lit-html/lit-html.js";
import theme from "/theme.js";
import aruba from "./svgs/aruba.js";
import meridian from "./svgs/meridian.js";

export default html`
  <style>
    .logo {
      display: flex;
      align-items: center;
      height: 60px;
    }
    .divider {
      width: 20px;
    }
  </style>
  <span class="logo">
    <span>${aruba}</span>
    <span class="divider"></span>
    <span>${meridian}</span>
  </span>
`;