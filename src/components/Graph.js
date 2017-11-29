import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import Highcharts from 'highcharts';
import axios from 'axios';
import ReactTable from 'reacttable';
import '../assets/Style.css';


class Graph extends Component {
    chart3= () => {
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

    chart2 = () =>{
        Highcharts.chart('chart', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Browser market shares. January, 2015 to May, 2015'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        },
                        connectorColor: 'silver'
                    }
                }
            },
            series: [{
                name: 'Brands',
                data: [
                    { name: 'IE', y: 56.33 },
                    {
                        name: 'Chrome',
                        y: 24.03,
                        sliced: true,
                        selected: true
                    },
                    { name: 'Firefox', y: 10.38 },
                    { name: 'Safari', y: 4.77 },
                    { name: 'Opera', y: 0.91 },
                    { name: 'Other', y: 0.2 }
                ]
            }]
        });
    }


  render() {
    const Url = "http://melatupa.azurewebsites.net";    
    axios.get( 'https://cors-anywhere.herokuapp.com/' + Url + '/regionLevels')
        .then(function (response) {
            console.log("inside graph");
        })
        .catch(function (error) {
           console.log(error);
        });
    const divStyle = {
        color: 'blue',
    };  
    return (
        <div className="col-md-12 well well-sm indicator">
            <div className="row">
                <div id="chart" className="col-md-12" > 
                    <figure>

                    </figure>
                </div>
             </div>
            <div >
            <RadioGroup onChange={ this.onChange } horizontal>
                <div className="row sidespace">
                    <div className="col-md-12"> 
                        <div className="graphRepresent">                       
                            <RadioButton value="singlescenario"  onChange={this.chart2}>
                                <p className="graphName">Polar column chart(combine)</p>
                            </RadioButton>
                        </div>
                        <div className="graphRepresent"> 
                            <RadioButton value="manyscenariossep" onChange={this.chart2}>
                                <p className="graphName"> Polar column chart(separate)</p>
                            </RadioButton>
                         </div>
                    </div>
                </div>
                <div className="row sidespace">
                    <div className="col-md-12">
                        <div className="graphRepresent">
                            <RadioButton value="manyscenarioschart" onChange={this.chart3}>
                                <p className="graphName"> Bar chart</p>
                            </RadioButton>
                        </div>
                        <div className="graphRepresent">
                            <RadioButton value="manyscenariosbar" onChange={this.chart3}>
                                <p className="graphName"> Table chart</p>
                            </RadioButton> 
                        </div>                         
                    </div>
                </div>
            </RadioGroup> 
            </div>
        </div>
    );
  }
}

export default Graph;