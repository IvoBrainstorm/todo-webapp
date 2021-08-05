import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './bootstrap.min.css'
import Authentication from './Authentication.js'
import { withRouter } from 'react-router';


class HeaderComponent extends Component{
    
    render(){
        const isUserLoggedIn = Authentication.isUserLoggedIn()
        // console.log(isUserLoggedIn)
        return(
           <header>
               <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                   <div className="navbar-brand">To do App</div>
                   <ul className="navbar-nav">
                       {isUserLoggedIn && <li ><Link className="nav-link" to="/welcome/matavele">Home</Link></li>}
                       {isUserLoggedIn && <li> <Link className="nav-link" to="/todos">To do</Link></li>}
                   </ul>

                   <ul className="navbar-nav navbar-collapse justify-content-end">
                       {!isUserLoggedIn && <li> <Link className="nav-link" to="/login">Login</Link> </li>}
                       {isUserLoggedIn && <li> <Link className="nav-link" to="/logout" onClick={Authentication.logout}> Logout</Link></li>}
                   </ul>
               </nav>
           </header>
        )
    }
}


export default withRouter(HeaderComponent)