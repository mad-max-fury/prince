import React from 'react'

import SecHeader from '../../components/sectionHeader'
import { ContactMeWrapper, ContactInner, ContactInfo, Phone } from './style'
const ContactMe = () => {
  return (
    <ContactMeWrapper>
      <ContactInner>
        <SecHeader heading={'Contact Me'} paragraph={'I will love to work with you and your amazing team on your next big project, Get in touch lets get started.'} />
        <ContactInfo>
          <Phone>
            <div>
              <h3>Start a phone call</h3>
              <span>+234 903 828 3447</span>
            </div>
            <div>
              <h3>Shoot a mail address</h3>
              <span><a href='mailto:contact@princechijioke.com'>contact@princechijioke.com</a></span>
            </div>
            <div>
              <h3>Address</h3>
              <span>Currently based in Enugu, Nigeria but ready to relocate if need be.</span>
            </div>
          </Phone>

        </ContactInfo>
      </ContactInner>
    </ContactMeWrapper>
  )
}

export default ContactMe