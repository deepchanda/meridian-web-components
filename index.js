import { html, render } from '/node_modules/lit-html/lit-html.js';
import header from "./src/Header.js";
import "./src/Button.js";

const app = () => html`
  <style>
    #layout {
      display: grid;
      grid-template-areas:
        "header header header"
        "navigation content content"
        "footer footer footer";
      min-height: 100vh;
    }
    #header {
      grid-area: header;
      min-height: 60px;
    }
    #navigation {
      grid-area:navigation;
    }
    #content {
      grid-area:content;
    }
    #footer {
      grid-area:footer;
    }
    button {
      background-color: yellow;
    }
  </style>
  <div id="layout">
    <div id="header">
      ${header("development", "Erik's Location")}
    </div>
    <div id="navigation"></div>
    <div id="content">
      <meridian-button>Primary</meridian-button>
      <meridian-button kind="primary">Primary</meridian-button>
      <meridian-button kind="secondary">Secondary</meridian-button>
      <meridian-button kind="tertiary">Tertiary</meridian-button>
      <meridian-button kind="danger">Danger</meridian-button>
      <button>I'm styled by a global button style</button>
    </div>
    <div id="footer"></div>
  </div>
`;

render(app(), document.getElementById("app"));