import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './graph_style.css';
import logo from './graph.jpg';


class Graph extends Component {
  render() {
    return (
     <div className="">
      <div className="row  sidespace">
        <div className="col-md-12 well well-sm bggraph">
            <img src={logo}/>
        </div>        
      </div>
    </div>
    );
  }
}

export default Graph;