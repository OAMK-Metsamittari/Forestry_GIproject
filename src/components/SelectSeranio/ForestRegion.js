import React, { Component } from 'react'

class ForestRegion extends Component {
    render () {
        return (
            <div className="ForestRegion">
               
                <div className="form-group">
                    <label htmlFor="sel1">Forest Region</label>
                    <select className="form-control" id="sel1">
                        <option>1</option>
                        
                    </select>
                    </div>
            </div>
        )
    }
}

export default ForestRegion;