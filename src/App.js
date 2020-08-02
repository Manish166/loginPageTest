import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import './App.scss';
import UserNamePage from './pages/username'
import PasswordPage from './pages/password'
import SignUpPage from './pages/signup' 
function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={UserNamePage}></Route>
          <Route path="/password" component={PasswordPage}></Route>
          <Route path="/signup" component={SignUpPage}></Route>
        </Switch>
    </div>
  );
}

export default App;
