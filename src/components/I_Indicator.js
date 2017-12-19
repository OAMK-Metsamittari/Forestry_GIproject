import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Style.css';
import _ from 'lodash';
import Translate from 'translate-components';
import { reactTranslateChangeLanguage } from 'translate-components';
import $ from "jquery";


class I_Indicator extends Component {

  constructor(props){
    super(props);
    this.state = {
      totalSelectedIndicator:[],
      totalSelectedIndicatorName:[]     
    }
    this.selectHandler = this.selectHandler.bind(this);
  }

  selectHandler(event){    
    let result = []; 
    let final = [];
    let indicatorName = [];
    let finalName = [];
    
    const selectedNumberOfSeranio = this.props.seranioNumber;   
    var iLen = event.target.options.length;

    for (var count=0; count<iLen; count++) {
        var opt = event.target.options[count];        
              
        if(this.state.totalSelectedIndicator.includes(opt.value)|| this.state.totalSelectedIndicatorName.includes(opt.text)){
          let index = this.state.totalSelectedIndicator.indexOf(opt.value)
          this.state.totalSelectedIndicator.splice(index, 1);
          let valueIndex =   this.state.totalSelectedIndicatorName.indexOf(opt.text);           
          this.state.totalSelectedIndicatorName.splice(valueIndex,1);         
        }       
        if(opt.selected){          
          result.push(opt.value || opt.text);                    
        }
        
      }  
      
    final = this.state.totalSelectedIndicator.concat(result).sort(); 
    
   
    final.forEach(id=>{      
      this.props.indicator.forEach(element=>{      
        element.indicatorCategories.forEach(value=>{
          value.indicators.forEach(indicator=>{
             if(id==indicator.id){
              indicatorName.push(indicator.name);
             }
          })
        })
       
     })
    })    
    
    this.setState({totalSelectedIndicatorName:indicatorName});
    this.setState({totalSelectedIndicator:final},function(){     
      if(this.state.totalSelectedIndicator.length*selectedNumberOfSeranio>20){
        alert("Maximum Choice Of Indicator is" +" " +  Math.floor(20/selectedNumberOfSeranio));
      }else{
        let indicatorName = (this.state.totalSelectedIndicatorName);       
        this.props.selectedIndicator(final,indicatorName);       
      }
    }); 
     $('#btngraph').css("display","block");
     $("#showgraph").css("display","none");     
  }

  render() {
    const {indicator} = this.props;  
        return(
          <div className="row">
              <div className="col-md-12">
                <h2 className="headIndicator"><Translate>Select Indicators</Translate> <span>*</span></h2>
                <ul>
                  {this.renderIndicatorCatagory()}
                </ul>
              </div>
          </div>
        );

  } 
      renderIndicatorCatagory() {      
        return _.map(this.props.indicator, element =>
          element.indicatorCategories.map(category=>
                {                  
                return (
                  <div  className="list" key={category.name}>
                      <h4>{category.name}</h4>
                      <select className="form-control" multiple={true} onChange={this.selectHandler}>
                        <option></option>                        
                        {this.renderIndicators(category)}
                       
                      </select>
                  </div>
                );
        }));
      }
 
      renderIndicators(category) {
        return _.map(category.indicators, indicate => {
              return (
                <option value={indicate.id} key={indicate.id}>
                    <p>{indicate.name}</p>
                </option>
              );
        });
      }


}
export default I_Indicator;
