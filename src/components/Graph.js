import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import Highcharts from 'highcharts';
import axios from 'axios';
import ReactTable from 'reacttable';


class Graph extends Component {
    chart1= () => {
        Highcharts.chart('chart', {
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
                data: [1, 3, 2, 4, 5]
            }]
        });
    }


  render() {
    const Url = "http://melatupa.azurewebsites.net";
    
            axios.get( 'https://cors-anywhere.herokuapp.com/' + Url + '/regionLevels')
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
      
    return (
        <div className="col-md-6">
        <h2 className="text-center">Placeholder</h2>

<div className="row">

<div id="chart" className="col-md-12" > 
    <figure className="text-left" >

    </figure>
</div>
</div>
     <div >
      <div className="row sidespace">
           <RadioGroup onChange={ this.onChange } horizontal>
      <RadioButton value="singlescenario" onChange={this.chart1}>
      placeholder
      </RadioButton>
      <RadioButton value="manyscenariossep" onChange={this.chart1}>
      placeholder
      </RadioButton>
      <RadioButton value="manyscenarioschart" onChange={this.chart1}>
      placeholder
      </RadioButton>
      <RadioButton value="manyscenariosbar" onChange={this.chart1}>
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