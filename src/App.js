import React from 'react'
import Signup from "./pages/SignUp"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import GlobalStyle from "./globalStyles";

import { Route, Switch , BrowserRouter as Router} from 'react-router-dom'
 

const App = () => {
  return (
     <>
     <GlobalStyle/>
     <Router>
        <Switch>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
     </Router>
     </>
  )
}

export default App
