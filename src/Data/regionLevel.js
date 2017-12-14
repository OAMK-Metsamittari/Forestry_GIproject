import axios from 'axios';
import Translate from 'translate-components';
import { reactTranslateChangeLanguage } from 'translate-components';
import React, { Component}  from 'react';


function getRegionLevel(){ 
  
  var config = {
    headers: {'Accept-Language':"en"}
  };  
    return new Promise((resolve,reject)=>{
      axios.get("https://cors-anywhere.herokuapp.com/"+"http://melatupa.azurewebsites.net/regionLevels",config).
      then(result=>{        
        resolve(result);
      })
      .catch(error=>{
          console.log("error occured in region level");
          reject();
      })
    })   
}



export default {getRegionLevel}