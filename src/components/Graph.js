import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
const ReactHighcharts = require('react-highcharts');



class Graph extends Component {
  render() {
    const config = {      
          chart: {
              type: 'column'
          },
      
          title: {
              text: 'Styling axes and columns'
          },
      
          yAxis: [{
              className: 'highcharts-color-0',
              title: {
                  text: 'Primary axis'
              }
          }, {
              className: 'highcharts-color-1',
              opposite: true,
              title: {
                  text: 'Secondary axis'
              }
          }],
      
          plotOptions: {
              column: {
                  borderRadius: 5
              }
          },
      
          series: [{
              data: [1, 3, 2, 4]
          }, {
              data: [324, 124, 547, 221],
              yAxis: 1
          }]
      
      }
    return (
     <div >
      <div className="row sidespace">
        <div className="col-md-12 well well-sm bggraph">
           <ReactHighcharts config = {config}></ReactHighcharts>
           <RadioGroup onChange={ this.onChange } horizontal>
      <RadioButton value="placeholder">
      placeholder
      </RadioButton>
      <RadioButton value="placeholder">
      placeholder
      </RadioButton>
      <RadioButton value="placeholder">
      placeholder
      </RadioButton>
      <RadioButton value="placeholder">
      placeholder
      </RadioButton>
    </RadioGroup>
        </div>        
      </div>
    </div>
    );
  }
}

export default Graph;