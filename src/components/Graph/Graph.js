import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import graph from './graph.jpg';
import './graph.css'


class Graph extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
            <div className="jumbotron">
              <h3>Bar Heading Goes Here</h3>
                <img className="img-responsive" src={graph} alt="Placeholder for Graph" />
                <div className="btn-group pull-left">
                  <button className="btn btn-primary btn-xs ">Plt Graph</button>
                  <button className="btn btn-success btn-xs ">Bar Graph</button>
                  <button className="btn btn-primary btn-xs ">Compare</button>
                  <button className="btn btn-primary btn-xs ">Table</button>
                </div>
                <div className="btn-group pull-right">
                  <button className="btn btn-primary btn-xs ">Save</button>
                  <button className="btn btn-primary btn-xs ">Download</button>
                </div>
            </div>
        </div>        
      </div>
    );
  }
}

export default Graph;