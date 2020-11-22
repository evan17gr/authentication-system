import React from 'react'
import {Container,LeftAside,Title,RightAside,Input,Button,Paragraph,StyledLink} from "../components/styled-components/Form"


const Login = () => {
    return (
    <Container>
      <LeftAside/>
      <RightAside>
        <Title>
          Sign In
        </Title>
          <Input type="text" placeholder="Email"></Input>
          <Input type="password" placeholder="Password"></Input>
          <Button type="submit">Sign In</Button>
          <Paragraph>Don't have an account? <StyledLink to="/signup" className="sign-in">Sign up</StyledLink></Paragraph>
      </RightAside>
    </Container>
    )
}

export default Login
