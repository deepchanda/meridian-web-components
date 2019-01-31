import { html } from "/node_modules/lit-html/lit-html.js";
import logo from "./Logo.js";
import text from "./Text.js";
import theme from "/theme.js";

export default (environment, locationName) => html`
  <style>
    .default {
      box-sizing: border-box;
      border-bottom: 1px solid ${theme.borderColor};
      height: 60px;
    }
    .logoMarkLink {
      cursor: pointer;
      height: 60px;
      width: 60px;
    }
    .logoMark {
      display: block;
      cursor: pointer;
      height: 60px;
      width: 60px;
    }
    .logoMarkBack {
      display: none;
      cursor: pointer;
      height: 60px;
      width: 60px;
      svg {
        height: 60px;
        width: 60px;
      }
    }
    .locationName {
      font-size: ${theme.fontSizeMedium};
      -webkit-font-smoothing: antialiased;
      color: ${theme.colorWhite100};
      text-decoration: none;
      line-height: 40px;
    }
    .header-development {
      background: ${theme.colorTurquoiseGreen50};
    }
    .header-staging {
      background: ${theme.colorDanger30};
    }
    .header-production {
      background: ${theme.colorWhite100};
    }
  </style>
  <div class="default header-${environment} locationName">
    ${logo}
    ${text(locationName)}
  </div>
`;