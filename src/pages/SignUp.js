import {useForm} from "react-hook-form"
import React, {useState} from 'react'
import {Redirect} from "react-router-dom"
import {Container,ModalOverlay,LeftAside,Title,RightAside,Input,Button,Paragraph,StyledLink,StyledModal,Error} from "../components/styled-components/Form"

const SignUp = () => {

  const [firstName,setFirstName] = useState("")
  const [secondName,setSecondName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const [showModal,setShowModal] = useState(false)
  const [success,setSuccess] = useState(false)
  const [errors,setErrors] = useState([])
  const [error2,setError2] = useState(false)

  let userData = {}

  const registerUser = async (e) => {

    e.preventDefault()

    userData.firstName = firstName
    userData.secondName = secondName
    userData.email = email
    userData.password = password

    setErrors([])
    console.log(errors)

    if(!userData.firstName.trim()){
      setErrors([...errors, {error2 : "Please enter your first name"}])
      
    }

    if(!userData.secondName.trim()){
      setErrors([...errors, {error2 : "Please enter your second name"}])
    }

    if(!userData.email){
      setErrors([...errors, {error2 : "Please enter your email"}])
    }

    else if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userData.email)){
      setErrors([...errors, {error2 : "Please enter a valid email"}])
    }

    if(!userData.password){
      setErrors([...errors, {error2 : "Please enter a password"}])
    }

    else if(userData.password.length <= 8 ){
      setErrors([...errors, {error2 :  "Your password should be at least 8 characters long"}])
    }

    if(errors.length === 0){
      const request = await fetch("http://localhost/practise-api/public/users/registerUser",{
      method:"POST",
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body:JSON.stringify(userData)
      }).catch((err) => console.log(err))

      let res = await request.json()
      console.log(res)
      
      if(res.status === "fail"){
        setError(res.msg)
        setShowModal(true)
      }
      else if(res.status === "success"){
        setSuccess(true);
      }
    }
    
    
  } 
  
  return (
    <Container>
      <LeftAside/>
      <RightAside>
        <Title>
          Sign Up
        </Title>
          <Input type="text" placeholder="First name" onChange={(e) => setFirstName(e.target.value)}></Input>
          {errors.firstname && <Error>{errors.firstname}</Error>}
          <Input type="text" placeholder="Last name" onChange={(e) => setSecondName(e.target.value)}></Input>
          {errors.secondname && <Error>{errors.secondname}</Error>}
          <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></Input>
          {errors.email && <Error>{errors.email}</Error>}
          <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></Input>
          {errors.password && <Error>{errors.password}</Error>}
          <Button type="submit"  onClick={registerUser}>Sign Up</Button>
          <Paragraph>Already have an account? <StyledLink to="/login" className="sign-in">Sign in</StyledLink></Paragraph>
      </RightAside>
      {showModal && 
        <ModalOverlay className="ui dimmer modals page transition visible active" style={{display:"flex !important" }}>
          <StyledModal className="ui basic modal">
            <div className="ui icon header">
              <i className="meh outline icon"></i>
                Your information was wrong
            </div>
            <div className="content">
              <i className="exclamation triangle icon" ></i>{error}
            </div>
            <div className="actions">
              <div className="ui red basic cancel inverted button" onClick={() => setShowModal(false)}>
                <i className="remove icon" ></i>
                Make changes
              </div>
            </div>
          </StyledModal>
        </ModalOverlay>
      }
      {success && <Redirect to="/profile"/>
      }
      
    </Container>
  )
}

export default SignUp
