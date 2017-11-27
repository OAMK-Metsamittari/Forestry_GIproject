import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/Style.css';
import Header from './components/Header';
import S_Region from './components/S_Region';
import S_RegionLevel from './components/S_RegionLevel';
import S_SeranioCollection from './components/S_SeranioCollection';
import S_Seranio from './components/S_Seranio';
import S_Years from './components/S_Years';
import Graph  from './components/Graph';
import I_Indicator from  './components/I_Indicator';
import I_Timber from './components/I_Timber';
import I_CollectProduct from './components/I_CollectProduct';
import I_Diversity from './components/I_Diversity';
import I_Carbon from './components/I_carbon';
import I_OtherIndicator from './components/I_OtherIndicator';

class App extends Component {
  constructor(props){
    super(props); 
    this.state = {
      selectedRegion:[]
    }
    this.selectHandler = this.selectHandler.bind(this);  
  } 

  selectHandler = (value) => {
    console.log(value);
    this.setState({selectedRegion:value})
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
                  <S_RegionLevel selectHandler={this.selectHandler}/>                
                  <S_Region selectedRegion={this.state.selectedRegion}/>
                  <S_SeranioCollection />               
                  <S_Seranio />
                  <S_Years />    
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
