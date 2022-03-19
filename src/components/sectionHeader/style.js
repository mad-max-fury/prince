import styled from "styled-components";
import { colors } from "../../colors";

export const SecHead = styled.div`
  // border:1px solid green;
   background:none;
  height:83%;
  max-width:50%;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  gap:1rem;
  align-items:center;
  padding:2rem 0;
  & > h3{
    width:fit-content;
    background:${colors.main_color};
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
      text-align:center;
  }
    @media screen and (max-width:768px){
    max-width:80vw;
    padding: 2rem 0;
    & > p{
      font-size:14px;
    }
    
  }

`