import styled from "styled-components";
import { colors } from "../../colors";

export const LandingPageWrapper = styled.main`
max-width:100%;
margin:auto;
height:calc(90vh);
display:flex;
background-size:cover;
flex-direction:column;
justify-content:space-between;
position:relative;

 @media screen and (max-width:768px){
 height:fit-content;
 Padding-bottom:0;
}

`