import React, { Component } from 'react'
import './bootstrap.min.css'
import Authentication from './Authentication.js'

class LoginComponent extends Component{

    constructor(props){
        super(props)
        this.state = (
            {
                username: 'matavele',
                password: '',
                loginFailed: false,
                loginSuccess: false
            }
        )
        this.handleState = this.handleState.bind(this)
        this.clickLogin = this.clickLogin.bind(this)
    }

    handleState(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    clickLogin(){
        //matavele, 12345
        if(this.state.username === 'matavele' && this.state.password === '12345'){
            // Authentication.registerSuccessefullLogin(this.state.username, this.state.password)
            Authentication.registerSuccessefullLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            // this.setState({loginSuccess: true})
            // this.setState({loginFailed: false})
        }
        else{
            this.setState({loginFailed: true})
            this.setState({loginSuccess:false})
        }
    }

    render(){
        return(
            <>
            <div className="container">
                <h1>Login</h1>

                {this.state.loginFailed &&  <div className="alert alert-danger">Login Failed</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleState}/>
                Passwprd: <input type="password" name="password" value={this.state.password} onChange={this.handleState} />
                <button className="btn btn-success" onClick={this.clickLogin}>Login</button>
            </div>
            </>
        )
    }

   
}

export default LoginComponent