import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/js/highcharts-more.js'
import axios from 'axios';
import '../assets/Style.css';
import Translate from 'translate-components';
import { reactTranslateChangeLanguage } from 'translate-components';
import ToggleDisplay from 'react-toggle-display';
import _ from 'lodash';
import PrintTemplate from 'react-print';



HighchartsMore(Highcharts)


class Graph extends Component {
    constructor(props){
        super(props); 
        this.state = { show: false };
        this.getValueForGraph = this.getValueForGraph.bind(this); 
        this.PrintGraph = this.PrintGraph.bind(this); 
        this.handleClick = this.handleClick.bind(this);       
    }

    handleClick() {
        this.setState({
          show: !this.state.show
        })};

   
    getValueForGraph(){
        const finalValue = [];
        this.props.scenario.forEach(element=>{           
            const{Indicator} = this.props;          
            element.values.map(value=>{              
                let valIndicator = value.indicatorId.toString();
                let valSeranio = value.scenarioId.toString(); 
                let valTime = value.timePeriodId.toString();            
                if((this.props.Indicator.includes(valIndicator))&&(this.props.selectedSeranio.includes(valSeranio))&&(this.props.yearId.includes(valTime))){
                    finalValue.push(value);
                }           
            })         
          finalValue.sort(function(a, b) { 
             return a.indicatorId - b.indicatorId;                
           });             
        })   
       
        let final = [],result =[],scenarioId = [];  
        finalValue.map((element,index)=>{      
         final = [];               
         if((scenarioId.includes(element.scenarioId))!=true){       
             finalValue.map((checkelement)=>{
                 if(element.scenarioId == checkelement.scenarioId){
                     final.push(checkelement.value);
                 }                  
             }) 
             let seranioName = this.props.SeranioName[index];             
             result.push({
                 name:seranioName,
                 data:final
             })
             scenarioId.push(element.scenarioId);       
         }     
        })                  
        return result;
    }

    getValueForTable(){
        const finalValue = [];
        this.props.scenario.forEach(element=>{           
            const{Indicator} = this.props;          
            element.values.map(value=>{              
                let valIndicator = value.indicatorId.toString();
                let valSeranio = value.scenarioId.toString(); 
                let valTime = value.timePeriodId.toString();            
                if((this.props.Indicator.includes(valIndicator))&&(this.props.selectedSeranio.includes(valSeranio))&&(this.props.yearId.includes(valTime))){
                    finalValue.push(value);
                }           
            })         
          finalValue.sort(function(a, b) { 
             return a.indicatorId - b.indicatorId;                
           });             
        })   
       
        let final = [],result =[],scenarioId = [];  
        finalValue.map((element,index)=>{      
         final = []; 
         let seranioName = this.props.SeranioName[index];                   
         if((scenarioId.includes(element.scenarioId))!=true){       
            finalValue.map((checkelement)=>{
                if(element.scenarioId == checkelement.scenarioId){
                    final.push(checkelement.value);
                }                  
            }) 
            let seranioName = this.props.SeranioName[index];
            final.push(seranioName);             
            result.push({
                name:seranioName,
                data:final
            })
            scenarioId.push(element.scenarioId);       
        }     
       })               
       return result;    
    }

    barchart= () => {
      

        Highcharts.chart('chart', {
            chart: {
                type: 'column'
            },
            title: {
                text:this.props.regionName +"(" + this.props.period +")"
            },            
            xAxis: {
                categories:this.props.IndicatorName,
                crosshair: false
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series:this.getValueForGraph()             
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
            
                series: this.getValueForGraph()
            });
    }


    PrintGraph(){
        window.frames["print_frame"].document.body.innerHTML = document.getElementById("printGraph").innerHTML;
        window.frames["print_frame"].window.focus();
        window.frames["print_frame"].window.print();
    }
  render() {   
    const divStyle = {
        color: 'blue',
    }; 
    const{IndicatorName} = this.props;
    var Indicator = [];
    
    IndicatorName.forEach(function(obj) {
        if (Indicator.indexOf(obj) === -1) Indicator.push(obj);
    });    
    
    return (
        <div className="col-md-12 well well-sm indicator">
              <div className="row">
                <div id="chart" className="col-md-12" > 
                    <figure>
                    </figure>
                </div>
                <div className="col-md-12" >               
                    <ToggleDisplay show={this.state.show}>   
                     <div id="printGraph">                 
                       <div>
                           <h3 className="locationHeader">{this.props.regionName}({this.props.period})</h3>
                       </div>                    
                        <table className="table table-bordered ">
                            <thead>                                                               
                                    {
                                        Indicator.map(element=> 
                                            <th className="indicatorHeader">{element}</th>                                                                
                                        )
                                    }  
                                <th></th>                                                                                      
                            </thead>
                            <tbody>                             
                                 {this.renderData(this.getValueForTable())}                                                                                  
                            </tbody>
                        </table>  
                    </div>                    
                    
                    <div className="col-md-12">
                        <div className="col-md-8">
                        </div>
                        <div className="col-md-1">
                            <button type="button" class="btn btn-default btn-sm btndownload">
                                <span class="glyphicon glyphicon-cloud-download icondownload"></span>  
                            </button>
                        </div>
                        <div className="col-md-1">
                            <button type="button" class="btn btn-default btn-sm btndownload" onClick={this.PrintGraph}>
                                <span class="glyphicon glyphicon-print"></span>                        
                            </button>
                        </div>
                        <div className="col-md-2">                        
                        </div>
                    </div>                  
                    </ToggleDisplay>                    
                </div>
             </div>
            <div > 
              
            <RadioGroup onChange={ this.onChange }  horizontal>
                <div className="row sidespace">
                    <div className="col-md-12">                    
                        <div className="graphRepresent">                                      
                            <RadioButton value="singlescenario"  onChange={this.singlepolar}>
                             <p className="graphName"><Translate>Polar column chart(single)</Translate></p> 
                            </RadioButton>                           
                        </div>                       
                        <div className="graphRepresent"> 
                            <RadioButton value="manyscenariossep" onChange={this.manypolars}>
                                <p className="graphName"><Translate>Polar column chart(many)</Translate></p>
                            </RadioButton>
                         </div>
                    </div>
                </div>
                <div className="row sidespace">
                    <div className="col-md-12">                       
                        <div className="graphRepresent">
                            <RadioButton value="manyscenarioschart" onChange={this.barchart}>
                                <p className="graphName"><Translate>Bar chart</Translate></p>
                            </RadioButton>
                        </div>
                        <div className="graphRepresent" onClick={ () => this.handleClick() }>
                            <RadioButton value="manyscenariosbar">
                                <p className="graphName"><Translate>Table chart</Translate></p>                                
                            </RadioButton> 
                        </div>                                                 
                    </div>
                </div>
            </RadioGroup> 
            </div>
            <iframe name="print_frame" width="0" height="0" frameborder="0" src="about:blank"></iframe>
        </div>
      
    );   
  }
  renderData(Indicator) {         
    return _.map(Indicator, indicate => {       
          return (            
            <tr>               
                {this.getData(indicate)}                
            </tr>            
          );        
    });
  }

    getData(Indicator) {          
    return _.map(Indicator.data, indicate => {       
            return (        
                <td className="data" >
                    {indicate}
                </td>
                      
            );        
    });
    }
}

export default Graph;
