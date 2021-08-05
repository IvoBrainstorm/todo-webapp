import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './bootstrap.min.css'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import TodoComponent from './TodoComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
import WelcomComponent from './WelcomComponent'
import ErrorComponent from './ErrorComponent'

class TodoApp extends Component{
    
    render(){

        return(
           <Router>
               <>
                <HeaderComponent/>
                        <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" exact component={LoginComponent}/>
                            <AuthenticatedRoute path="/welcome/:name" extact component={WelcomComponent}/>
                            <AuthenticatedRoute path="/todos" exact component={TodoComponent}/>
                            <AuthenticatedRoute path="/logout" exact component={LogoutComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                <FooterComponent/>
               </>
             
           </Router>
        )
    }
}

export default TodoApp