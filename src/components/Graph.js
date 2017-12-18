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
import fileSaver from 'file-saver';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import $ from "jquery";
const ReactHighcharts = require('react-highcharts');

require('highcharts/modules/exporting')(Highcharts);

HighchartsMore(Highcharts)


class Graph extends Component {
    constructor(props){
        super(props); 
        this.state = { show: false };
        this.getValueForGraph = this.getValueForGraph.bind(this); 
        this.PrintGraph = this.PrintGraph.bind(this); 
        this.handleClick = this.handleClick.bind(this);
        this.GraphPolar = this.GraphPolar.bind(this); 
        this.GraphBar = this.GraphBar.bind(this);                       
    }   

   
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

    singlepolar = () =>{
     
        Highcharts.chart('chart', {
            
                chart: {
                    polar: true
                },
            
                title: {
                    text: this.props.regionName +"(" + this.props.period +")"
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
    

    GraphPolar(){        
        $( "#chart" ).show();
        $( "#tablechart" ).hide();
        $("#GraphPolar").hide();
        $("#GraphTable").show();
        $("#GraphBar").show();       
    } 
    
    GraphBar(){        
        $( "#chart" ).show();
        $( "#tablechart" ).hide();
        $("#GraphBar").hide();
        $("#GraphTable").show();
        $("#GraphPolar").show();
    }
  
    handleClick() {        
        $( "#tablechart" ).show();  
        $( "#chart" ).hide();
        $("#GraphTable").hide();  
        $("#GraphBar").show();
        $("#GraphPolar").show();  
    };

      
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
        <div className="row well well-sm indicator"> 
            <div id="showgraph" className="col-md-12" >
                <div className="row">
                <div className="col-md-6" id="GraphTable"> 
                    <div className="graphRepresent">
                        <RadioButton value="manyscenariosbar">                        
                            <p className="graphName"><img src={require("../assets/table.png")} className="chartlogo"/><Translate>Table chart</Translate></p>                                
                        </RadioButton> 
                    </div>
                </div>    
                <div className="col-md-6" id="GraphBar">                   
                    <div className="graphRepresent" >                                      
                        <RadioButton value="manyscenarioschart" >
                            <p className="graphName"><img src={require("../assets/bar.png")} className="chartlogo"/><Translate>Bar chart</Translate></p>
                        </RadioButton>                          
                    </div>     
                </div> 
               </div> 
               <div className="row">
                <div className="col-sm-3"></div>
               <div className="col-md-7" id="GraphPolar">                   
                    <div className="graphRepresent" >                                      
                        <RadioButton value="singlescenario">
                        <p className="graphName"><img src={require("../assets/pie.png")} className="chartlogo"/><Translate>Polar chart(single)</Translate></p> 
                        </RadioButton>                           
                    </div>     
                </div> 
                <div className="col-sm-2"></div>  
                </div>             
            </div> 
            <div id="chart" className="col-md-12" > 
                <figure>
                </figure>
            </div> 
            <div >
            <ToggleDisplay show={this.state.show} id="tablechart">   
                <div id="printGraph">                 
                    <div>
                       <h3 className="locationHeader" id="fileName">{this.props.regionName}({this.props.period})</h3>
                    </div>                    
                    <table className="table table-bordered " id="table-to-xls">                            
                        <thead>                                                               
                            {
                                Indicator.map(element=> 
                                <th className="indicatorHeader">{element}</th>                                                                
                                )
                            }  
                            <th> </th>                                                                                      
                        </thead>
                       <tbody>                             
                                 {this.renderData(this.getValueForTable())}                                                                                  
                        </tbody>
                    </table>  
                </div>                    
                    
                    <div className="col-md-12">
                        <div className="col-md-8">
                        </div>
                        <div className="col-md-3">
                        <ReactHTMLTableToExcel
                            id="test-table-xls-button"
                            className="download-table-xls-button btndownload"
                            table="table-to-xls"
                            filename="statisticTable"
                            sheet="tablexls"
                            buttonText="Download"/> 
                        <button type="button" class="btn btn-default btn-sm btndownload" onClick={this.PrintGraph}>
                            <span class="glyphicon glyphicon-print"></span>                        
                        </button>                            
                        </div>                       
                        <div className="col-md-1">
                           
                        </div>                       
                    </div>                  
            </ToggleDisplay>
            </div>  
            <div id="btngraph">         
                <div className="col-md-4" id="GraphTable"> 
                    <div className="graphRepresent" onClick={ () => this.handleClick() }>
                        <RadioButton value="manyscenariosbar">                        
                            <p className="graphName"><img src={require("../assets/table.png")} className="chartlogo"/><Translate>Table chart</Translate></p>                                
                        </RadioButton> 
                    </div>
                </div>    
                <div className="col-md-4" id="GraphBar">                   
                    <div className="graphRepresent" onClick={ () => this.GraphBar() }>                                      
                        <RadioButton value="manyscenarioschart" onChange={this.barchart}>
                            <p className="graphName"><img src={require("../assets/bar.png")} className="chartlogo"/><Translate>Bar chart</Translate></p>
                        </RadioButton>                          
                    </div>     
                </div> 
                <div className="col-md-4" id="GraphPolar">                   
                    <div className="graphRepresent" onClick={ () => this.GraphPolar() }>                                      
                        <RadioButton value="singlescenario"  onChange={this.singlepolar}>
                        <p className="graphName"><img src={require("../assets/pie.png")} className="chartlogo"/><Translate>Polar chart(single)</Translate></p> 
                        </RadioButton>                           
                    </div>     
                </div>
            </div>             
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
