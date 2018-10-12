import { html, render } from '/node_modules/lit-html/lit-html.js';
import header from "/components/layout/header/index.js";
import "/components/forms/button/index.js";

const app = () => html`
  <style>
    #layout {
      display: grid;
      grid-template-areas:
        "header header header"
        "navigation content content"
        "footer footer footer";
      height: 100vh;
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
    <div id="navigation">Navigation</div>
    <div id="content">
      <meridian-button kind="primary"></meridian-button>
      <button>I'm styled by a global button style</button>
    </div>
    <div id="footer">Footer</div>
  </div>
`;

render(app(), document.getElementById("app"));