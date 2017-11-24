import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import graph from './graph.jpg';


class Graph extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
            <img src={graph}/>
        </div>        
      </div>
    );
  }
}

export default Graph;