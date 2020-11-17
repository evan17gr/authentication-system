import React from 'react'
import "./sass/style.scss"
import Signup from "./pages/SignUp"
import Login from "./pages/Login"
import { Route, Switch , BrowserRouter as Router} from 'react-router-dom'
 

const App = () => {
  return (
     <Router>
        <Switch>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
        </Switch>
     </Router>
  )
}

export default App
