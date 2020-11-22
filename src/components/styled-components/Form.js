import styled from "styled-components"
import {Link} from "react-router-dom"
import img from "../images/holi-2416686_640.jpg"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px;
    width: 75%;
`

export const LeftAside = styled.div`
    width: 100%;
    height: 600px;
    background-image: url(${img});
    background-position: center;
    background-size: cover;
    border-radius: 10px 0 0 10px;
`

export const Title = styled.h2`
    font-weight: 600;
    font-size: 36px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;
`

export const RightAside = styled.div`
    background-color: black;
    padding-top:1rem;
    height: 600px;
    display: flex;
    width: 100%;
    flex-direction: column; 
    align-items: center;
    border-radius: 0 10px  10px 0;
`

export const Input = styled.input`
    width: 70%;
    height: 3.5rem;
    margin-bottom: 3.5rem;
    font-size: 1.3rem;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
    padding: 0.6rem;
    font-weight:900;
`

export const Button = styled.button`
    width: 70%;
    margin-bottom: 2rem;
    height: 3rem;
    cursor: pointer;
    color: white;
    background-color:#00c22d;
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 20px;
    :hover{
        background-color: #00f739;
    }
`

export const Paragraph = styled.p`
    color: white;
    font-size: 1.1rem;
` 

export const StyledLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: white;
    &:hover{
        text-decoration: underline;
        color: white;
    }
`

export const StyledModal = styled.div`
    display: flex !important;
    flex-direction:column !important;
    opacity:10;
    font-size:1.5rem !important;
    color:red !important;
    text-align:center !important;
`

export const ModalOverlay = styled.div`
    display: flex !important;
    align-items:center !important;
    justify-content:center !important;
`

export const Error = styled.p`
    color:red !important;
    font-size:1rem;
    font-family: sans-serif !important;
`
