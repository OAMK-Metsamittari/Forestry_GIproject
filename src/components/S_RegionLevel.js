import React, { Component } from 'react';
import regionLevelData from '../Data/regionLevel';


class S_RegionLevel extends Component {
    constructor(props){
        super(props);        
        this.state = {
            regionLevel:[],
            region:[]
        }   
       this.selectHandler = this.selectHandler.bind(this);      
      }

    componentDidMount(){           
        regionLevelData.getRegionLevel().then(result=>{           
          this.setState({regionLevel:result.data})          
        })
        
      }

  selectHandler(event){    
        var options = event.target.options;
        var selectedValue = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                selectedValue.push(options[i].value);
            }
        }
        this.setState({region: selectedValue});        
        this.props.selectHandler(this.state.region);       
   }
      
    render () {        
        return (
            <div className="RegionLevel">  
                <h2 className="headIndicator">Select Scenarios</h2> 
                <label className="textfont">Region Level</label>            
               <div className="form-group">                    
                    <select className="form-control" multiple={true} onChange={this.selectHandler} >
                        {
                    this.state.regionLevel.map(element=>
                      <option value={element.id} key={element.id} >{element.name}</option>) 
                    }                       
                    </select>
                </div>
            </div>
        )
    }
}

export default S_RegionLevel