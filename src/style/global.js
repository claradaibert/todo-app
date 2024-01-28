import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        ::-webkit-scrollbar {
            width: 0.4rem;
        }

        ::-webkit-scrollbar-track {
            background-color: ${({theme}) => theme.light_purple};
        }

        ::-webkit-scrollbar-thumb {
            background-color: ${({theme}) => theme.medium_purple};
            border-radius: 10px;
        }
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