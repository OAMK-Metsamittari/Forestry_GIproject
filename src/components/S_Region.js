
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { reactTranslateChangeLanguage } from 'translate-components';
import Translate from 'translate-components'; 

class S_Region extends Component {  
    constructor(props){
        super(props);        
        this.selectHandler = this.selectHandler.bind(this);      
    }

    selectHandler(event){      
        let index = event.target.selectedIndex; 
        let text = event.target.options[index].text;       
        this.props.selectedRegionId(event.target.value,text);
   }   
    render () { 
        const { region} =  this.props;            
        return (
            <div className="row">
                <div className="col-md-12">                    
                    <div className="form-group">
                    <label className="textfont"><Translate>Region</Translate></label>                    
                        <select className="form-control"   onChange={this.selectHandler} >
                        {
                            region.map(element=>
                            <option value={element.id} key={element.id}>{element.name}</option>) 
                        }                          
                        </select>                   
                    </div>
                </div>        
            </div>
        )
    }
}

export default S_Region