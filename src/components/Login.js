import React from 'react'
import { Container, CTA, CTAlogoOne, CTAlogoTwo, Description, SignUp } from './components styles/LoginStyle'

function Login() {
  return (
    <Container>
      <CTA>
        <CTAlogoOne src='/images/cta-logo-one.svg'/>
        <SignUp> Get All Here</SignUp>
        <Description>
          Get Premier access to Raya and the last Dragon for an additional fee 
          with Disney+ subscription. As of 03/26/2021, the price of Disney+ and 
          the Disney bundle will increase by $1.
        </Description>
        <CTAlogoTwo src='/images/cta-logo-two.png'/>
      </CTA>
      
    </Container>
  )
}

export default Login
