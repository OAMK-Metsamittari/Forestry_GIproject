import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';


class I_Indicator extends Component {

  render() {
    console.log(this.props);

    const {indicator} = this.props;
    let userMessage = (
      <span>

        <p>You can visit settings to reset your password</p>
      </span>

    )
   
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
                  <li  className="list" key={category.name}>
                      {category.name}
                      <ul className="list">
                        {this.renderIndicators(category)}
                      </ul>
                  </li>
                );
        }));
      }
 
      renderIndicators(category) {
        return _.map(category.indicators, indicate => {
              return (
                <li className="list" key={indicate.name}>
                    <p>{indicate.name}</p>
                </li>
              );
        });
      }


}
export default I_Indicator;
