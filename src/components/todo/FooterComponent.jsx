import React, { Component } from 'react'
import './bootstrap.min.css'

class FooterComponent extends Component{
    render(){
        return(
            <>
               <footer className="footer">
                   <span className="text-muted">All Rignts Reserved @ 2021</span>
               </footer>
            </>
        )
    }
}

export default FooterComponent