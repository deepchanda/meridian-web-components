import {html, render} from '/node_modules/lit-html/lit-html.js';
import header from "/components/layout/header/index.js";

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
  </style>
  <div id="layout">
    <div id="header">
      ${header("development", "Erik's Location")}
    </div>
    <div id="navigation">Navigation</div>
    <div id="content">Content</div>
    <div id="footer">Footer</div>
  </div>
`;

render(app(), document.getElementById("app"));