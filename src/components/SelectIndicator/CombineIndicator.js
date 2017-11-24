import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Indicator from  './Indicator';
import Timber from './Timber';
import CollectProduct from './CollectProduct';
import Diversity from './Diversity';
import Carbon from './carbon';
import OtherIndicator from './OtherIndicator';
import './indicator_style.css';


class CombineIndicator extends Component {
  render() {
    return (
      <div className="row well well-sm indicator">
        <div className="col-md-12">
            <Indicator />
            <Timber />
            <CollectProduct />
            <Diversity />
            <Carbon />
            <OtherIndicator />
        </div>        
      </div>
    );
  }
}

export default CombineIndicator;