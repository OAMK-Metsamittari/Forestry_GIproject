import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/js/highcharts-more.js'
import axios from 'axios';
import ReactTable from 'reacttable';
import '../assets/Style.css';
HighchartsMore(Highcharts)


class Graph extends Component {
    barchart= () => {
        Highcharts.chart('chart', {
            chart: {
                type: 'bar',
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

    manypolars = () =>{
        Highcharts.chart('chart', {
            
            title: {
                text: 'Combination chart'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
            },
            labels: {
                items: [{
                    html: 'Total fruit consumption',
                    style: {
                        left: '50px',
                        top: '18px',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                    }
                }]
            },
            series: [{
                type: 'column',
                name: 'Jane',
                data: [3, 2, 1, 3, 4]
            }, {
                type: 'column',
                name: 'John',
                data: [2, 3, 5, 7, 6]
            }, {
                type: 'column',
                name: 'Joe',
                data: [4, 3, 3, 9, 0]
            }, {
                type: 'spline',
                name: 'Average',
                data: [3, 2.67, 3, 6.33, 3.33],
                marker: {
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[3],
                    fillColor: 'white'
                }
            }, {
                type: 'pie',
                name: 'Total consumption',
                data: [{
                    name: 'Jane',
                    y: 13,
                    color: Highcharts.getOptions().colors[0] // Jane's color
                }, {
                    name: 'John',
                    y: 23,
                    color: Highcharts.getOptions().colors[1] // John's color
                }, {
                    name: 'Joe',
                    y: 19,
                    color: Highcharts.getOptions().colors[2] // Joe's color
                }],
                center: [100, 80],
                size: 100,
                showInLegend: false,
                dataLabels: {
                    enabled: false
                }
            }]
        });
    }

    singlepolar = () =>{
        Highcharts.chart('chart', {
            
                chart: {
                    polar: true
                },
            
                title: {
                    text: 'Highcharts Polar Chart'
                },
            
                pane: {
                    startAngle: 0,
                    endAngle: 360
                },
            
                xAxis: {
                    tickInterval: 45,
                    min: 0,
                    max: 360,
                    labels: {
                        formatter: function () {
                            return this.value + '°';
                        }
                    }
                },
            
                yAxis: {
                    min: 0
                },
            
                plotOptions: {
                    series: {
                        pointStart: 0,
                        pointInterval: 45
                    },
                    column: {
                        pointPadding: 0,
                        groupPadding: 0
                    }
                },
            
                series: [{
                    type: 'column',
                    name: 'Column',
                    data: [8, 7, 6, 5, 4, 3, 2, 1],
                    pointPlacement: 'between'
                }, {
                    type: 'area',
                    name: 'Area',
                    data: [1, 8, 2, 7, 3, 6, 4, 5]
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
                            <RadioButton value="singlescenario"  onChange={this.singlepolar}>
                                <p className="graphName">Polar column chart(single)</p>
                            </RadioButton>
                        </div>
                        <div className="graphRepresent"> 
                            <RadioButton value="manyscenariossep" onChange={this.manypolars}>
                                <p className="graphName"> Polar column chart(many)</p>
                            </RadioButton>
                         </div>
                    </div>
                </div>
                <div className="row sidespace">
                    <div className="col-md-12">
                        <div className="graphRepresent">
                            <RadioButton value="manyscenarioschart" onChange={this.barchart}>
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