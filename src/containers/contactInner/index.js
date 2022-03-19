import React from 'react'
import ConnectBtn from '../../components/ConnectBtn'
import styled from 'styled-components'
import { colors } from '../../colors'
const ContactInnerPage = () => {
  return (
    <ContactInnerPageWrapper>
      <div>
        <h3>Do you like it?</h3>
        <p>Together we can do something better, lets connect</p>
        <ConnectBtn text={'Hire me'} />
      </div>
    </ContactInnerPageWrapper>
  )
}

export default ContactInnerPage

const ContactInnerPageWrapper = styled.div`
width:100%;
& > div{
  width:fit-content;
  margin:auto;
  height:fit-content;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:1.5rem;
  padding:1rem;
  h3{
    color:${colors.white};

  }
  p{
    color:${colors.grey_text};

    & + button {
      border:1px solid ${colors.secondary_color};
      color:${colors.secondary_color};
      &:hover{
       border:1px solid ${colors.white};
      color:${colors.white};
      }
    }
  }
}
`