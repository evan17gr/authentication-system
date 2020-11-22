import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
  *{
    outline: 0;
    border: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box !important;
    font-family: 'Libre Baskerville', serif;
    
    }

    #root{
    height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fa75df;
    background: linear-gradient(240deg,#fa75df -50%, #ff216b 0%, #ff9838 30%, #ffa6e4 60%);
    }
`
 
export default GlobalStyle