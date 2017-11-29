import React, { Component } from 'react'

class S_SeranioCollection extends Component {
    constructor(props){
        super(props); 
        this.state = {
            regionId:''                   
        }             
        this.selectSeranioHandler = this.selectSeranioHandler.bind(this);
    }
    
   
    selectSeranioHandler(event){
        if(this.props.updateSCollectionById){       
            this.props.seranioRegionId(event.target.value,this.props.updateSCollectionById);            
        }else{                
            this.props.seranioRegionId(event.target.value,this.state.regionId.id);
        }
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
            this.state.regionId = SeranioCollection[0];              
            SeranioCollection.forEach((element,index)=>{                                
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