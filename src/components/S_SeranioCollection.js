import React, { Component } from 'react'

class S_SeranioCollection extends Component {
    render () {
        const {SeranioCollection} =  this.props;
        return (
            <div>            
                <div className="RegionLevel">                      
                    <label className="textfont">Scenario Collection</label>            
                    <div className="form-group">                    
                        <select className="form-control"   onChange={this.selectSeranioHandler} >
                            {
                                SeranioCollection.map(element=>
                                    element.scenarioCollections.map(value=>
                                        <option value={value.id} key={value.id} >{value.name}</option>
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

export default S_SeranioCollection