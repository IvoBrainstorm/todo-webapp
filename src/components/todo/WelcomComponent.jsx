import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService'
import './bootstrap.min.css'


class WelcomComponent extends Component{
    constructor(props){
        super(props)
        this.costumMessage = this.costumMessage.bind(this)
        this.state = {
            welcomemessage : "",
            errorMessage: ""
        }
    }
    render(){
        
        return(
            <>
                <h1>Welcome</h1>
                <div>
                    <h1 className="alert alert-danger">
                    {this.state.errorMessage}
                    </h1>
                </div>
                <div className="container">
                    Welcome {this.props.match.params.name}. 
                    To see your todo list click <Link to="/todos">here</Link>
                </div>
                <div className="container">
                   click here to get a costumized welcome message <button className="btn btn-success" onClick={this.costumMessage}>Get Welcome Message</button>
                </div>

                <div className="container">
                  
                   <h1> {this.state.welcomemessage}</h1>
                </div>
            </>
        )
    }
    costumMessage(){
        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then(response => this.handlerCostumMessage(response) )
        .catch(error => this.handlerError(error))

    }

    handlerCostumMessage(response){
       
        this.setState({
            welcomemessage: response.data.message
        })
    }

    handlerError(error){
        this.setState({
            errorMessage: error.response.data.message
        })
    }
}


export default WelcomComponent