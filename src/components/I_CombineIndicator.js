import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import I_Indicator from  './I_Indicator';
import I_Timber from './I_Timber';
import I_CollectProduct from './I_CollectProduct';
import I_Diversity from './I_Diversity';
import I_Carbon from './I_carbon';
import I_OtherIndicator from './I_OtherIndicator';



class I_CombineIndicator extends Component {
  render() {
    return (
      <div className="row well well-sm indicator">
        <div className="col-md-12">
            <I_Indicator />
            <I_Timber />
            <I_CollectProduct />
            <I_Diversity />
            <I_Carbon />
            <I_OtherIndicator />
        </div>        
      </div>
    );
  }
}

export default I_CombineIndicator;