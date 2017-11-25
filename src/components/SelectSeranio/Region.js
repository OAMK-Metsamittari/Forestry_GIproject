import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class Region extends Component {
    render () {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h2 className="headIndicator">Select Scenarios</h2>
                    <div class="form-group">
                    <label for="textfont">Region</label>
                    <select className="form-control">
                        <option>1</option>                        
                    </select>
                </div>
                </div>        
            </div>
        )
    }
}

export default Region