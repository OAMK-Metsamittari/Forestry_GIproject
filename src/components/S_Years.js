import React, { Component } from 'react'

class S_Years extends Component {
    render () {
        const { year} =  this.props;
        return (
            <div className="row">
                <div className="col-md-12" >
                     <div className="list-group">
                     <label className="textfont">Time Period</label> 
                        <ul className="list-group"  multiple={true}>

                            {            
                            year.map(element=>
                                    element.timePeriods.map(value=>
                                    <li className="list-group-item" value={value.id} key={value.id} > {value.yearStart}-{value.yearEnd} </li>
                                    )
                                )
                            }
                        </ul>               
                     </div>
                </div>
            </div>
        )
    }
}
export default S_Years