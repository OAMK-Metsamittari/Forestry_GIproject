import React, { Component } from 'react';
import SelectSeranio from './SelectSeranio/SelectSeranio'
import 'bootstrap/dist/css/bootstrap.min.css';
import CombineIndicator from './SelectIndicator/CombineIndicator';
import Graph  from './Graph/Graph';


class Main extends Component {
  render() {
    return (

      <div className="row">
        <div className="col-md-3" > <SelectSeranio /></div>
        <div className="col-md-6"><Graph/></div>
        <div className="col-md-3">
           <CombineIndicator />
        </div>
      </div>
    );
  }
}

export default Main;