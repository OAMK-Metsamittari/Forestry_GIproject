import React, { Component } from 'react';
import { reactTranslateChangeLanguage } from 'translate-components';
import Translate from 'translate-components';

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
                <h2 className="headIndicator"><Translate>Select Scenarios</Translate></h2> 
                <label className="textfont"><Translate>Region Level</Translate></label>            
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