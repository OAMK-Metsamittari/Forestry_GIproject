import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import regionData from '../Data/region';

class S_Region extends Component {
    constructor(props){
        super(props);
        this.state = {
            region:[]
        }   
             
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
                    <select className="form-control">
                    {
                    this.state.region.map(element=>
                      <option value={element.id}>{element.name}</option>) 
                    }                          
                    </select>
                </div>
                </div>        
            </div>
        )
    }
}

export default S_Region