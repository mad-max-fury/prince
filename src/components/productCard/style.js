import styled from 'styled-components'
import { colors } from '../../colors'

export const ProductCardWrapper = styled.div`
width:100%;
height:70vh;
// border:1px solid red;
display:flex;

@media screen and (max-width:768px){
   flex-flow:column;
   height:fit-content;
}
`
export const PicFrame = styled.div`
width:60vw;
height:100%;
// border:1px solid red;
& > img{
  width:100%;
  height:100%;
}

@media screen and (max-width:768px){
   width:100vw;
}
`
export const ProductBriefWrapper = styled.div`
 width:40vw;
height:100%;
display:flex;
// border:1px solid red;
background: ${({ bgColor }) => bgColor ? bgColor : colors.main_color};
@media screen and (max-width:768px){
   width:calc(100vw - 4rem);
   height:fit-content;
   padding:2rem;
}
& > div{
  height:fit-content;
  width:70%;
  margin:auto;
  display:flex;
  flex-direction:column;
  align-items:start;
  gap:1.5rem;
  @media screen and (max-width:768px){
   width:100%;
   height:fit-content;
}
    & > h3{
   font-size:24px;
   color:${colors.white};
   font-weight:600;
   text-align:start;

 }
 & > p{
   color:${colors.grey_text};
   line-height:30px;
   font-size:16px;
   text-align:start;
 }
 & > div {
   display:flex;
   gap:.5rem;
  & > span{
         width:fit-content;
    background: ${({ bgColor }) => bgColor ? colors.main_color : colors.general_bg};
    padding:0.5rem 1rem;
    border-radius:10px;
    font-size:12px;
    color:${colors.grey_text};
  }
 }
}
 
`