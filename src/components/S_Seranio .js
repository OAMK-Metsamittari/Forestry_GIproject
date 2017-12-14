import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Translate from 'translate-components';
import { reactTranslateChangeLanguage } from 'translate-components';


class S_Seranio  extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedSerenio:0,
            selectedIndicator:0
        }
        this.selectHandler = this.selectHandler.bind(this);
    }
    selectHandler(event){ 
        let result = [];
        let SeranioName = []; 
        let iLen = event.target.options.length;      
        for (var count=0; count<iLen; count++) {
            var opt = event.target.options[count];        
            if (opt.selected) {
              result.push(opt.value || opt.text);             
              SeranioName.push(opt.text);
            }
          }      
        if(result.length>20){
            alert("Maximum choice can be 20 ");            
        } else{
            this.props.selectedSeranioNumber(result,SeranioName);
        }  
            
      }
    render () {
        const { scenario} =  this.props;
        return (
            <div className="row">
                <div className="col-md-12" >
                     <div className="form-group">
                     <label className="textfont"><Translate>scenarios</Translate></label> 
                        <select className="form-control" id="Example" multiple={true} onChange={this.selectHandler}>
                            {            
                            scenario.map(element=>
                                    element.scenarios.map(value=>
                                    <option value={value.id} key={value.id} > {value.name}</option>
                                     
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

export default S_Seranio 