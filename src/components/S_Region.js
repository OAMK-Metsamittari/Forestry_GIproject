
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  

class S_Region extends Component {  
    constructor(props){
        super(props);        
        this.selectHandler = this.selectHandler.bind(this);      
    }

    selectHandler(event){     
        this.props.selectedRegionId(event.target.value); 
   }   
    render () { 
        const { region} =  this.props;            
        return (
            <div className="row">
                <div className="col-md-12">                    
                    <div className="form-group">
                    <label className="textfont">Region</label>                    
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