import React, { Component } from 'react';
import { reactTranslateChangeLanguage } from 'translate-components';
import Translate from 'translate-components'; 

class S_Years extends Component {
    constructor(props){
        super(props);        
        this.selectHandler = this.selectHandler.bind(this);      
    }

    selectHandler(event){      
        let index = event.target.selectedIndex; 
        let text = event.target.options[index].text; 
        let value = event.target.options[index].value;      
        this.props.selectedYear(text,value);
   }   
    render () {
        const { year} =  this.props;
        return (
            <div className="row">
                <div className="col-md-12" >
                     <div className="list-group">
                     <label className="textfont"><Translate>Time Period</Translate> <span className="required">*</span></label> 
                        <select className="form-control"  onChange={this.selectHandler} >
                          <option><Translate>select the year</Translate></option>
                            {            
                            year.map(element=>
                                    element.timePeriods.map(value=>
                                    <option value={value.id} key={value.id} > {value.yearStart}-{value.yearEnd} </option>
                                    )
                                )
                            }
                        </select>              
                     </div>
                </div>
            </div>
        )
    }
}
export default S_Years