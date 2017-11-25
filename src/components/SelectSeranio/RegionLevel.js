import React, { Component } from 'react'

class RegionLevel extends Component {
    render () {
        return (
            <div className="RegionLevel">               
               <div class="form-group">
                    <label for="textfont">Region Level</label>
                    <select className="form-control">
                        <option>1</option>                        
                    </select>
                </div>
            </div>
        )
    }
}

export default RegionLevel