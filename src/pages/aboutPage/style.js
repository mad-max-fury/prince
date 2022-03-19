import styled from "styled-components";
import { colors } from "../../colors";

export const AboutPageWrapper = styled.main`
max-width:100%;
height:calc(100vh - 5rem);
display:flex;
background-size:cover;
flex-direction:column;
justify-content:space-between;
position:relative;


 
& + div{
margin:0rem;
// z-index:1;
}
  @media screen and (max-width:768px){
    height:fit-content !important;
  }
`