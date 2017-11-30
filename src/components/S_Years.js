import React, { Component } from 'react'

class S_Years extends Component {
    render () {
        const { year} =  this.props;
        return (
            <div className="row">
                <div className="col-md-12" >
                     <div className="list-group">
                     <label className="textfont">Time Period</label> 
                        <select className="form-control" >
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