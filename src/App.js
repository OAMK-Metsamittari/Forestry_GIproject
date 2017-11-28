import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/Style.css';
import Header from './components/Header';
import S_Region from './components/S_Region';
import S_RegionLevel from './components/S_RegionLevel';
import S_SeranioCollection from './components/S_SeranioCollection';
import S_Seranio  from './components/S_Seranio ';
import S_Years from './components/S_Years';
import Graph  from './components/Graph';
import I_Indicator from  './components/I_Indicator';
import I_Timber from './components/I_Timber';
import I_CollectProduct from './components/I_CollectProduct';
import I_Diversity from './components/I_Diversity';
import I_Carbon from './components/I_carbon';
import I_OtherIndicator from './components/I_OtherIndicator';
import scenarioData from './Data/scenario.js';
import regionData from './Data/region';
import regionLevelData from './Data/regionLevel';
import yearData from './Data/year';
class App extends Component {
  constructor(props){
    super(props); 
    this.state = {
      selectedRegion:[],
      scenario:[],
      region:[],
      regionLevel:[],
      year:[],
      updateSCollectionById:''
    }

  this.selectedRegionLevelId =  this.selectedRegionLevelId.bind(this);    
  this.selectedRegionId = this.selectedRegionId.bind(this);
  } 

  componentDidMount(){

    regionData.getRegion().then(result=>{                  
      this.setState({region:result.data})        
   })  

    scenarioData.getScenario().then(result=>{           
      this.setState({scenario:result.data})            
    })  
    
    regionLevelData.getRegionLevel().then(result=>{           
      this.setState({regionLevel:result.data})          
    })  
    yearData.getYear().then(result=>{           
      this.setState({year:result.data})          
    })     
    
  }

  selectedRegionLevelId(regionId){ 
      regionData.getRegion(regionId).then(result=>{                  
        this.setState({region:result.data})        
    })
  }

  selectedRegionId(regionId){ 
    this.setState({updateSCollectionById:regionId})
}
  
  render() {
    return (
     <div>        
        <div className="row">      
        <div className="col-md-12" >
          <Header />
        </div>      
        </div>
        <div className="row">       
          <div className="col-md-3 well well-sm indicator" >  
            <div className="col-md-12">                  
                  <S_RegionLevel regionLevel={this.state.regionLevel}
                                 selectedRegionLevelId={this.selectedRegionLevelId}
                  />                
                  <S_Region region={this.state.region}
                            selectedRegionId={this.selectedRegionId}                  
                  />
                  <S_SeranioCollection SeranioCollection={this.state.region}
                                       updateSCollectionById={this.state.updateSCollectionById}
                  />               
                  <S_Seranio scenario = {this.state.scenario}/>
                  <S_Years year = {this.state.year} />                
            </div>         
          </div>       
          <div className="col-md-6">
            <Graph/>
          </div>
          <div className="col-md-3 well well-sm indicator">
            <div className="col-md-12">  
              <I_Indicator />
              <I_Timber />
              <I_CollectProduct />
              <I_Diversity />
              <I_Carbon />
              <I_OtherIndicator />
            </div>
          </div>       
        </div>
    </div>
    );
  }
}

export default App;
