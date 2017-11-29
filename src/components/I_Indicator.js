import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class I_Indicator extends Component {

  render() {
    const {indicator} = this.props; 
    let userMessage = (
      <span>
       
        <p>You can visit settings to reset your password</p>
      </span>
    ) 
    return (
      <div className="row">
        <div className="col-md-12">
          <h2 className="headIndicator">Select Indicators</h2>               
          {
            indicator.map(element=>
                element.indicatorCategories.map(category=>                   
                 <h3>{category.name}</h3>         
                )
              )
              
            }     
         </div>          
      </div>
    );
  }
}

export default I_Indicator;