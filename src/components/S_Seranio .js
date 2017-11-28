import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


class S_Seranio  extends Component {
    render () {
        const { scenario} =  this.props;
        return (
            <div className="row">
                <div className="col-md-12" >
                     <div className="form-group">
                     <label className="textfont">scenarios</label> 
                        <select className="form-control"  multiple={true}>
                            {            
                            scenario.map(element=>
                                    element.scenarios.map(value=>
                                    <option value={value.id} key={value.id} > {value.name} </option>
                                    )
                                )
                            }
                        </select>               
                     </div>
                </div>
            </div>
        )
    }
}

export default S_Seranio 