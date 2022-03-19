import { colors } from "../../colors"
import styled from "styled-components"
export const AboutPageWrapper = styled.section`
max-width:100%;
// margin:auto;
height:100%;
z-index:2;
background:${colors.main_color};
&> div{
  max-width:80%;
  height:100%;
  margin:auto;
  background:${colors.main_color};
  display:flex;
  justify-content:space-between;

  @media screen and (max-width:768px){
    max-width:95%;
    height:fit-content;
    padding:2rem 0;
    flex-flow:column;
    gap:2rem;
  }

}

`
export const AboutAsideLeft = styled.div`
  background:none;
  display:flex;
  height:80%;
  width:35%;
  margin:auto;
 border-radius:5px;
 background-repeat:no-repeat;
 background-size:contain;
 object-fit:fit;
 & > img{

   height:90%;
   width:90%;
   margin:0 auto;
 }
  @media screen and (max-width:768px){
   width:90%;

  }

`
export const AboutAsideRight = styled.div`
  // border:1px solid green;
   background:none;
  height:fit-content;
  width:59%;
  margin:auto ;
  display:flex;
  flex-direction:column;
  gap:1rem;
  & > h3{
    width:fit-content;
    background:#111319;
    padding:0.5rem 1rem;
    border-radius:10px;
    font-size:16px;
    color:${colors.white};
  }
  & > p{
      background:none;
      color:${colors.grey_text};
      font-size:16px;
      line-height:30px;
  }
  & > button{
    width:fit-content;
  }
    @media screen and (max-width:768px){
   width:90%;
   height:fit-content;

  }
`
