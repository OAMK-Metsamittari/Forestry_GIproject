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
import scenarioData from './Data/scenario.js';
import regionData from './Data/region';
import regionLevelData from './Data/regionLevel';
import yearData from './Data/year';
import Translate from 'translate-components'
import { reactTranslateChangeLanguage } from 'translate-components'




class App extends Component {
  constructor(props){
    super(props); 
    this.state = {
      selectedRegion:[],
      scenario:[],
      region:[],
      regionLevel:[],
      year:[],
      indicator:[],
      selectedSeranioId:[],
      selectedSeranioName:[],
      selectedIndicator:[],
      selectedIndicatorName:[],
      updateSCollectionById:'',
      seranioNumber:0,
      regionName:'',
      period:'' ,
      periodId:'',             
    }
    

  this.selectedRegionLevelId =  this.selectedRegionLevelId.bind(this);    
  this.selectedRegionId = this.selectedRegionId.bind(this);
  this.seranioRegionId = this.seranioRegionId.bind(this);
  this.selectedSeranioNumber = this.selectedSeranioNumber.bind(this);
  this.selectedYear = this.selectedYear.bind(this);
  this.selectedIndicator = this.selectedIndicator.bind(this);  
  } 

  componentDidMount(){   
    
    regionData.getRegion().then(result=>{                  
      this.setState({region:result.data})       
      this.setState({regionName:result.data[0].name});   
   })  

    scenarioData.getScenario().then(result=>{                
      this.setState({scenario:result.data})
      this.setState({indicator:result.data})                     
    })  
    
    regionLevelData.getRegionLevel().then(result=>{           
      this.setState({regionLevel:result.data})          
    })  
    yearData.getYear().then(result=>{           
      this.setState({year:result.data})
      let timePeriods = result.data[0].timePeriods;
      let timeStart = result.data[0].timePeriods[0].yearStart;
      let timeEnd = result.data[0].timePeriods[0].yearEnd;
      this.setState({period:timeStart+"-"+timeEnd});       
    }) 
   
    
  }

  selectedRegionLevelId(regionId){ 
      regionData.getRegion(regionId).then(result=>{                  
        this.setState({region:result.data})
        this.setState({regionName:result.data[0].name});              
    })
    this.setState({updateSCollectionById:''});  
   
  }

  selectedRegionId(regionId,rName){ 
    this.setState({updateSCollectionById:regionId})
    this.setState({regionName:rName});
  }

  seranioRegionId(sId,rId){    
    scenarioData.getScenario(sId,rId).then(result=>{                  
      this.setState({scenario:result.data}) 
      this.setState({year:result.data})
      this.setState({indicator:result.data})          
    })
  }

  selectedSeranioNumber(result,sName){  
    this.setState({seranioNumber:result.length}); 
    this.setState({selectedSeranioId:result}); 
    this.setState({selectedSeranioName:sName});       
  }

  selectedYear(year,id){
    this.setState({period:year});
    this.setState({periodId:id});
  }

  selectedIndicator(indicator,indicatorName){
    this.setState({selectedIndicator:indicator});
    this.setState({selectedIndicatorName:indicatorName});    
  }
 
  
  render() {    
    return (
     <div className="App">                 
        <div className="row">      
        <div className="col-md-12" >
        <div id="react-no-print">Regular Stuff Before Printing</div>
	      <div id="print-mount"></div>
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
                                       seranioRegionId={this.seranioRegionId}
                  />               
                  <S_Seranio scenario = {this.state.scenario}
                             selectedSeranioNumber = {this.selectedSeranioNumber}
                  />
                  <S_Years year={this.state.year}
                           selectedYear={this.selectedYear}
                   />                
            </div>         
          </div>       
          <div className="col-md-6">
            <Graph
             regionName={this.state.regionName}
             period={this.state.period}
             selectedSeranio={this.state.selectedSeranioId}
             SeranioName={this.state.selectedSeranioName}
             Indicator={this.state.selectedIndicator}
             IndicatorName = {this.state.selectedIndicatorName}
             scenario = {this.state.scenario}
             yearId = {this.state.periodId}            
            />
          </div>
          <div className="col-md-3 well well-sm indicator">
            <div className="col-md-12">  
              <I_Indicator indicator={this.state.indicator} 
                           seranioNumber={this.state.seranioNumber} 
                           selectedIndicator={this.selectedIndicator}                   
               />             
            </div>
          </div>       
        </div>
    </div>
    );
  }
}

export default App;
