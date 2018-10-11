import { html } from "/node_modules/lit-html/lit-html.js";
import theme from "/theme.js";
import aruba from "./svgs/aruba.js";

export default html`
  <style>
    .aruba {
      fill: ${theme.colorArubaOrange100};
      width: 119px;
      height: 30px;
    }
    .meridian {
      height: 20px;
      width: 96px;
      fill: ${theme.colorMeridianGray100};
    }
    .eu {
      height: 20px;
      width: 23.75px;
      fill: ${theme.colorMeridianGray100};
    }
    .horizontal-meridian-column {
      margin-top: 4px;
    }
    .horizontal-eu-column {
      margin-top: 8px;
    }
  </style>
  <span class="aruba">
    ${aruba}
  </span>
`;