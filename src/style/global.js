import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .disable-text-selection {
        -ms-user-select:none;
        -moz-user-select:none;
        -webkit-user-select:none;
        -webkit-touch-callout: none;
        -khtml-user-select: none;
        user-select:none;
    }
`