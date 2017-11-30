import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/Style.css';
import _ from 'lodash';


class I_Indicator extends Component {

  constructor(props){
    super(props);
  }

  selectHandler(event){
    var selectedValue =event.target.value;
    console.log(selectedValue);
    var selectedLength = selectedValue.length;
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
       // console.log(this.props);
        return _.map(this.props.indicator, element =>
          element.indicatorCategories.map(category=>
                {
                  //console.log(category)
                return (
                  <div  className="list" key={category.name}>
                      <h4>{category.name}</h4>
                      <select className="form-control" multiple={true} >
                        {this.renderIndicators(category)}
                      </select>
                  </div>
                );
        }));
      }
 
      renderIndicators(category) {
        return _.map(category.indicators, indicate => {
              return (
                <option value={indicate.id}>
                    <p>{indicate.name}</p>
                </option>
              );
        });
      }


}
export default I_Indicator;
