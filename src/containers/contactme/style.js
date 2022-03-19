import styled from "styled-components";
import { colors } from "../../colors";

export const ContactMeWrapper = styled.section`
max-width:100%;

`
export const ContactInner = styled.div`
max-width:80%;
margin:auto;
display:flex;
flex-direction:column;
gap:2rem;
`
export const ContactInfo = styled.div`
// border:1px solid red;
display:flex;
width:100%;
justify-content:space-between;
`
export const Phone = styled.div`
display:flex;
height:fit-content;
justify-content:space-around;
margin:auto 0;
width:100%;
gap:1rem;
& > div{
  width:26%;
  display:flex;
  flex-flow:column;
  gap:1rem;
  @media screen and (max-width:768px){
    width:100%;
    align-items:center;
  }
  h3{
    color:${colors.white};
    font-size:24px;
    font-weight:600;
  }
  span{
    color:${colors.grey_text};
       & >  a{
      text-decoration:none;
      color:${colors.grey_text};
    }
    @media screen and (max-width:768px){
    width:100%;
    text-align:center;
 
  }
  }
}
@media screen and (max-width:768px){
   width:100vw;
   flex-flow:column;
}
`
