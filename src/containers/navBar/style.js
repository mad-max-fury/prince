import { colors } from '../../colors'
import styled from 'styled-components'
export const NavBarWrapper = styled.div`
width:100%;
`
export const NavBar = styled.nav`
padding: 1rem 0;
display:flex;
gap:5rem;
align-items:center;
margin:auto;
// border:1px solid red;
color:${colors.white};
z-index:100;
width:85%;
position:relative;
& a{
    text-decoration:none;
  color:unset;

}
  @media screen and (max-width:768px){
  justify-content:space-between;
 }
`
export const Logo = styled.div`
font-size:35px;
font-weigt:bolder;
width:fit-content;
display:flex;
 & >div{
   margin-bottom:5px;
   height:.5rem;
   width:.5rem;
   border-radius:100%;
   align-self:flex-end;
   background:${colors.secondary_color};
  
 }
  &:hover{
    transition:all 0.2s ease-in-out;
     color:rgba(225,225,225,0.7);
     cursor:pointer;
     & > div{
       transition:all 0.2s ease-in-out;
        background:${colors.white};
     }
   }
 `

export const NavItems = styled.ul`
 display:flex;
 list-style:none;
 align-items:center;
 gap:3rem;
  @media screen and (max-width:768px){
  ${({ active }) => active ? `
  transition:all .2s ease-out;
  display:flex;
  position:absolute;
  padding:2rem 0;
  height:calc(100vh - 4rem);
  width:100vw;
  top:0vh;
   left:-9%;
   right:0%;
  opacity:1;
  z-index:100 !important;
  flex-flow:column;
  background:${colors.main_color};
  ` : `
  transition:all .5s ease-out;
  position:absolute;
  height:0vh;
  width:0;
  top:0vh;
  overflow:clip;
  left:0%;
  opacity:0;
  z-index:100 !important;
  `};

 }
 `
export const Li = styled.li`
& > a {
  text-decoration:none;
  color:unset;
  text-transform:capitalize;
     @media screen and (max-width:768px){
    font-size:24px;
  }
  &:hover,&.active{
 transition:all 0.2s ease-in-out;
 border-bottom:2px solid ${colors.secondary_color};
 padding-bottom:0.5rem;
 cursor:pointer;

}
}


&:first-of-type{
  padding-bottom:5rem;
  padding-right:2rem;
  align-self:end;
}
&:first-of-type, &:nth-of-type(2),&:last-of-type{
  @media screen and (min-width:768px){
    display:none;
  }
}
   @media screen and (max-width:768px){
    font-size:24px;
    &:last-of-type{
      & > button {
       font-size:24px;
      }
    }
  }
 
`

export const Hamburger = styled.div`
 @media screen and (min-width:768px){
  display:none;
 }
`
export const Close = styled.div`
${({ active }) => active ? `
 display:block;
 font-size:30px;
 font-weight:500;
 z-index:500;
 
`: `
display:none;
`}
`
export const Open = styled.div`
${({ active }) => !active ? `
transition:all 0.4s ease-in-out;
display:flex;
flex-flow:column;
gap:.3rem;
& > span{
  height:3px;
  width:2rem;
  background:${colors.white};
}
`: `
display:none;
`

  }

`
