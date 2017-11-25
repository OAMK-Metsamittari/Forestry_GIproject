import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




class Graph extends Component {
  render() {
    return (
     <div className="">
      <div className="row  sidespace">
        <div className="col-md-12 well well-sm bggraph">
            <img src={require("../assets/graph.jpg")}/>
        </div>        
      </div>
    </div>
    );
  }
}

export default Graph;