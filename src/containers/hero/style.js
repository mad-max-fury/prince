import styled from "styled-components";
import { colors } from "../../colors";

export const Main = styled.main`
height:100%;
display:flex;
// border:1px solid red;
max-width:85%;
margin: 0 auto;
z-index:2;
@media screen and (max-width:768px){
height:fit-content;
padding-top:2.5rem;
}

`
export const HeroWrapper = styled.div`
color:${colors.white};
height:100%;
margin:auto;
width:100%;
display:flex;
justify-content:space-between;
@media screen and (max-width:768px){
   width:100vw;
   flex-flow:column;
}
`
export const AsideLeft = styled.aside`
// border:1px solid red;
width:54%;
display:flex;
flex-direction:column;
gap:2.5rem;
height:fit-content;
margin:auto 0;
@media screen and (max-width:768px){
   width:100%;
   height:fit-content;
   gap:1.5rem;
}

 & > h1{
   font-size:40px;
   color:${colors.white};
   font-weight:600;
   @media screen and (max-width:768px){
  font-size:30px;
  line-height:25px;
  font-weight:semi-bold;
   }

 }
  & > h3{
   font-size:24px;
   color:${colors.white};
   font-weight:600;
      @media screen and (max-width:768px){
  font-size:16px;
  line-height:25px;
  font-weight:semi-bold;
}
 }
 & > p{
   color:${colors.grey_text};
   line-height:30px;
   font-size:18px;
   @media screen and (max-width:768px){
  font-size:14px;
  line-height:25px;
  font-weight:semi-bold;
}
 }
 & > div{
   display:flex;
   gap:1rem;
 }
`
export const AsideRight = styled.aside`
width:44%;
height:100%;
margin:auto 0;


& > img{
  height:100%;
  width:100%;
}
  @media screen and (max-width:768px){
    width:100%;
    height:fit-content;
  }

`