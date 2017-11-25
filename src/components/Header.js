import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class Region extends Component {
    render () {
        return (
            <div className="row">
                <div className="col-md-12">
                <div className="navbar navbar-custom header">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-dropdown" aria-expanded="false">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                            <a className="navbar-brand" href="#"><img src={require("../assets/logo.png")} className="logo"/></a>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar-dropdown">
                            <ul className="nav navbar-nav navbar-right">
                            <li><a href="#" data-toggle="modal" data-target="#register-modal" className="language" >Fi</a></li>
                            <li><a href="#" data-toggle="modal" data-target="#login-modal" className="language">En</a></li>
                            </ul>
                        </div>
                    </div>
                </div>        
              </div>
            </div>
        )
    }
}

export default Region