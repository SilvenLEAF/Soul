import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Login from '../components/auth.js/Login';
import Signup from '../components/auth.js/Signup';
import LogInForm from '../components/auth.js/LogInForm';
import SignUpForm from '../components/auth.js/SignUpForm';




import Home from '../components/home/Home'
import Profile from '../components/profile/Profile';
import Contact from '../components/contact/Contact';
import UserList from '../components/profile/UserList';



function Wrapper() {
  return (
    <div id="myWrapper">
      <Switch>


      <Route exact path="/" component={Home} />
      
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/loginForm" component={LogInForm} />
      <Route path="/signupForm" component={SignUpForm} />

      <Route path="/profile" component={Profile} />
      <Route path="/allUsers" component={UserList} />
      <Route path="/contact" component={Contact} />




    </Switch>
  </div>
  )
}

export default Wrapper
