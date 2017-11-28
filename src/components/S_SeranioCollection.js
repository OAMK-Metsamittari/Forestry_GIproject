import React, { Component } from 'react'

class S_SeranioCollection extends Component {
    constructor(props){
        super(props);
    }

    render () {
        const {SeranioCollection,updateSCollectionById} =  this.props;
        const sceneriosCollect = [];
        if(updateSCollectionById){            
            SeranioCollection.forEach(element=>{               
                if(element.id == updateSCollectionById){                    
                element.scenarioCollections.forEach(value=>{                    
                    var indexvalue =  sceneriosCollect.findIndex(scenerio => scenerio.name === value.name);
                    if(indexvalue == -1 ){
                        sceneriosCollect.push(value);
                    }
                }) 
               }          
             })           
        }else{
        SeranioCollection.forEach(element=>{       
            element.scenarioCollections.forEach(value=>{
                var indexvalue =  sceneriosCollect.findIndex(scenerio => scenerio.name === value.name);
                if(indexvalue == -1){
                    sceneriosCollect.push(value);
                }
            })           
         })

        }        
        
        return (
            <div>            
                <div className="RegionLevel">                      
                    <label className="textfont">Scenario Collection</label>            
                    <div className="form-group">                    
                         <select className="form-control"   onChange={this.selectSeranioHandler} > 
                            {
                               sceneriosCollect.map(element=>
                                <option value={element.id} key={element.id}>{element.name}</option>                                                            
                            ) 
                            }                       
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default S_SeranioCollection