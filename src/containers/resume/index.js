import React from 'react'
import styled from 'styled-components'
import ResumeContainer from '../../components/resumeContainer'

const Resume = () => {
  return (
    <ResumePageWrapper >
      <ResumeContainer />
    </ResumePageWrapper>
  )
}

export default Resume

const ResumePageWrapper = styled.div`
max-width:100%;
height:fit-content;
display:flex;
background-size:cover;
flex-direction:column;
justify-content:space-between;
position:relative;
background:rgba(0,0,0, 0.8);
& + div{
margin:0rem;
// z-index:1;
}
  @media screen and (max-width:768px){
    height:fit-content !important;
  }
`