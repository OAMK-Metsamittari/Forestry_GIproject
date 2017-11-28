import React, { Component } from 'react';



class S_RegionLevel extends Component { 

    constructor(props){
        super(props);        
        this.selectHandler = this.selectHandler.bind(this);      
    }

    selectHandler(event){     
        this.props.selectedRegionLevelId(event.target.value); 
   }
      
    render () {  
        const {regionLevel} =  this.props;      
        return (
            <div className="RegionLevel">  
                <h2 className="headIndicator">Select Scenarios</h2> 
                <label className="textfont">Region Level</label>            
               <div className="form-group">                    
                    <select className="form-control"   onChange={this.selectHandler} >
                        {
                            regionLevel.map(element=>
                            <option value={element.id} key={element.id} >{element.name}</option>) 
                        }                       
                    </select>
                </div>
            </div>
        )
    }
}

export default S_RegionLevel