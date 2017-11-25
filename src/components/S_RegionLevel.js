import React, { Component } from 'react';
import regionLevelData from '../Data/regionLevel';


class S_RegionLevel extends Component {
 
    render () {
        return (
            <div className="RegionLevel">               
               <div className="form-group">
                    <label className="textfont">Region Level</label>
                    <select className="form-control">
                    <option>1</option>                        
                    </select>
                </div>
            </div>
        )
    }
}

export default S_RegionLevel