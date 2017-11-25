import React, { Component } from 'react';
import S_SelectSeranio from './S_SelectSeranio';
import regionLevelData from '../Data/regionLevel';


class S_RegionLevel extends Component {
    constructor(props){
        super(props);
        this.state = {
            regionLevel:[]
        }   
             
      }

    componentDidMount(){
        regionLevelData.getRegionLevel().then(result=>{           
          this.setState({regionLevel:result.data})          
        })
      }
      
    render () {        
        return (
            <div className="RegionLevel">  
                <h2 className="headIndicator">Select Scenarios</h2> 
                <label className="textfont">Region Level</label>            
               <div className="form-group">                    
                    <select className="form-control">
                        {
                    this.state.regionLevel.map(element=>
                      <option value={element.id}>{element.name}</option>) 
                    }                       
                    </select>
                </div>
            </div>
        )
    }
}

export default S_RegionLevel