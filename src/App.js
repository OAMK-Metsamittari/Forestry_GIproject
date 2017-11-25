import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import S_SelectSeranio from './components/S_SelectSeranio';
import Graph  from './components/Graph';
import I_CombineIndicator  from './components/I_CombineIndicator';
import Header from './components/Header';
import './assets/Style.css';
import regionLevelData from './Data/regionLevel';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        regionLevel:[]
    }   
         
  }

componentDidMount(){
    regionLevelData.getRegionLevel().then(result=>{
        console.log(result);
      this.setState({regionLevel:result})
    })
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
          <div className="col-md-3" >
            <S_SelectSeranio />
          </div>       
          <div className="col-md-6">
            <Graph/>
          </div>
          <div className="col-md-3">
            <I_CombineIndicator />
          </div>       
        </div>
    </div>
    );
  }
}

export default App;
