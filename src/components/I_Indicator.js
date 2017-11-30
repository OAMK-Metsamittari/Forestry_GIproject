import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Style.css';


class I_Indicator extends Component {

  render() {
    const {indicator} = this.props;  
    
    return (
      <div className="row">
        <div className="col-md-12">
          <h2 className="headIndicator">Select Indicators</h2>          
          <select multiple={true} className="form-control">             
          {
            indicator.map(element=>
              
                element.indicatorCategories.map(category=>   
                                                         
                category.indicators.map(function(indicator, index) {                                    
                    return <option value="{indicator.id}">{indicator.name}</option>;                                              
                 })                              
                )
              )
              
            }            
          </select>      
         </div>          
      </div>
    );
  }
}

export default I_Indicator;