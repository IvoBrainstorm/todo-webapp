import React, { Component } from 'react'
import './bootstrap.min.css'

class LogoutComponent extends Component{
    render(){
        return(
            <>
                <h1>Loged Out!</h1>
                <div className="container">
                  Thank you for using our App
                </div>
            </>
        )
    }
}


export default LogoutComponent