import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Translate from 'translate-components';
import { reactTranslateChangeLanguage } from 'translate-components';
import $ from "jquery";

class Header extends Component {

    constructor(props){
        super(props);  
        this.translateToFinnish = this.translateToFinnish.bind(this); 
        this.translateToEnglish = this.translateToEnglish.bind(this);                    
    } 
    
    translateToFinnish(){
        this.props.locale("fi");
    }

    translateToEnglish(){
        this.props.locale("en");
    }    

    render () { 
        $( "#translateToFinnish" ).click(this.translateToFinnish);  
        $( "#translateToEnglish" ).click(this.translateToEnglish);     
        return (
         <div>
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
                            <li id="translateToFinnish" ><a href="#" data-toggle="modal" data-target="#register-modal" onClick={reactTranslateChangeLanguage.bind(this, 'fi')}>Fi</a></li>
                            <li id="translateToEnglish"><a href="#" data-toggle="modal" data-target="#login-modal" onClick={reactTranslateChangeLanguage.bind(this, 'en')}>En</a></li>
                            </ul>
                        </div>                        
                    </div>
                </div>        
              </div>
            </div>           
          </div>
        )
    }
}

export default Header