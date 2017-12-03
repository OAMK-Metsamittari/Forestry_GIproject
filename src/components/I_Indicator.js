import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Style.css';
import _ from 'lodash';


class I_Indicator extends Component {

  constructor(props){
    super(props);
    this.state = {
      totalSelectedIndicator:[]
    }
    this.selectHandler = this.selectHandler.bind(this);
  }

  selectHandler(event){    
    let result = []; 
    let final = [];
    const selectedNumberOfSeranio = this.props.seranioNumber;
    
    let iLen = event.target.options.length;
    for (var count=0; count<iLen; count++) {
        var opt = event.target.options[count]; 
        console.log(this.state.totalSelectedIndicator.includes(opt.value));
        if(this.state.totalSelectedIndicator.includes(opt.value)){
          let index = this.state.totalSelectedIndicator.indexOf(opt.value)
          this.state.totalSelectedIndicator.splice(index, 1);          
        }       
        if (opt.selected) {
          result.push(opt.value || opt.text);
        }
      }  
      
    final = this.state.totalSelectedIndicator.concat(result);
   
  
    this.setState({totalSelectedIndicator:final},function(){     
      if(this.state.totalSelectedIndicator.length*selectedNumberOfSeranio>20){
        alert("Minimum choice is" + 20/selectedNumberOfSeranio);
      }
    }); 
          
  }

  render() {
    const {indicator} = this.props;  
        return(
          <div className="row">
              <div className="col-md-12">
                <h2 className="headIndicator">Select Indicators</h2>
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
