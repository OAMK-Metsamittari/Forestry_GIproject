
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import regionData from '../Data/region';




  

class S_Region extends Component {
    constructor(props){
        super(props);
        this.state = {
            region:[]           
        } 
       
        // if(this.props.selectedRegion.length>0){
        //     this.props.selectedRegion.map(element =>{
        //         let regionId = element.id;
        //         let updateRegion = [];
        //         regionData.getRegion(regionId).then(result=>{                  
        //             updateRegion.push(result.data);         
        //         })
        //         this.setState({region:updateRegion})
        //        
        //     })
        // }        
      }
    
    
    componentDidMount(){      
        regionData.getRegion().then(result=>{                  
           this.setState({region:result.data})        
        })           
    }

     

    render () { 
            
        return (
            <div className="row">
                <div className="col-md-12">                    
                    <div className="form-group">
                    <label className="textfont">Region</label>                    
                    <select className="form-control" multiple="multiple">
                    {
                    this.state.region.map(element=>
                      <option value={element.id} key={element.id}>{element.name}</option>) 
                    }                          
                    </select>
                   
                </div>
                </div>        
            </div>
        )
    }
}

export default S_Region