import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
    * {
    
        // box-sizing:border-box;
        font-size: 16px;
        font-family: 'Josefin Sans', sans-serif;
            margin:0;
          padding:0;
    }
    body{
      background:${colors.general_bg};
      height:fit-content ;
     
    
    }
  
    h1, h2, h3, h4, h5, h6 {
        color: ${colors.secondary_text_color};
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }

    p {
        color: ${colors.regular_text_color};
    }

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    h4 {
        font-size: 1.2rem;
    }

    h5 {
        font-size: 1rem;
    }

    h6 {
        font-size: 0.85rem;
    }

    p {
        font-size: 1rem;
    }
`;
