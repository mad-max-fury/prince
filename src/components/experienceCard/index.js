import React from 'react'
import styled from 'styled-components'
const MinCard = ({ role, loc, date, icon }) => {
  return (
    <Card>
      <div>
        <img src={icon} alt="" />
      </div>
      <div>
        <h4>{role}</h4>
        <h5>{loc}</h5>
        {date && <p>{date}</p>}
      </div>
    </Card>
  )
}

export default MinCard

const Card = styled.div`
display:flex;
// margin:auto;
gap:1rem;
& > div:first-of-type{
  height:3rem;
  width:3rem;
  
  & > img{
    height:100%;
    width:100%;
  }
}
& > div:last-of-type{
  display:flex;
  flex-direction:column;
  gap:.5rem;
  
   & > h4{
    color:#BDC2D4;
   }
   & > h5{
    color:#BDC2D4;
    font-weight:500;
     
   }
      & > p{
    color:#BDC2D4;
    font-size:14px;
    font-weight:normal;
     
   }
}

`