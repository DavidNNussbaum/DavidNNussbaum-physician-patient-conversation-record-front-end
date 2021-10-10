import React, {Component} from 'react';
import { render } from '@testing-library/react';
import { connect } from 'react-redux';
import '../App.css';
import Medications from './Medications';
import Navbar from "./Navbar";
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Logout from './Logout'
import { signupUser } from '../actions/auth.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { loginUser, checkAuth } from '../actions/auth.js';

 
class App extends Component {

  componentDidMount() {
    this.props.checkAuth()
  }

  render() {
    return (
          <>
          <div className="navbar">
          <Router>
            <Navbar currentUser={this.props.currentUser} setLogoutUser={this.props.setLogoutUser}/>
            <Switch>
              <Route exact path="/" component={Home} /> 
              <Route path="/login" >
                <Login setLoginUser={this.props.setLoginUser} currentUser={this.props.currentUser}/> 
              </Route>
              <Route path="/signup">
                <Signup setSignupUser={this.props.setSignupUser} currentUser={this.props.currentUser}/>
              </Route>
              <Route path="/medications" >
                <Medications currentUser={this.props.currentUser}/>
                </Route>

              <Route path="/logout" component={Logout}/>
                 
            </Switch>
          </Router>
        </div>
        </>
        );
      }
}

const mapStateToProps = state => {
  return {
     currentUser: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      setSignupUser: user => dispatch(signupUser(user)),
      setLoginUser: user => dispatch(loginUser(user)),
      setLogoutUser: () => dispatch({type: 'LOGOUT_USER'}),
      checkAuth: () => dispatch(checkAuth())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

 


 