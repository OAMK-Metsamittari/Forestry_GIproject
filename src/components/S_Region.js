
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  

class S_Region extends Component {     
    render () { 
        const { region} =  this.props;            
        return (
            <div className="row">
                <div className="col-md-12">                    
                    <div className="form-group">
                    <label className="textfont">Region</label>                    
                        <select className="form-control">
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