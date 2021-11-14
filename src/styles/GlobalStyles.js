import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
    }

    body {
        min-width: 360px;
    }

    .Icon {
        margin: 0 auto;
    }
`;