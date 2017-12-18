import axios from 'axios';
import Translate from 'translate-components';
import { reactTranslateChangeLanguage } from 'translate-components';
import React, { Component}  from 'react';
import $ from 'jquery';



function getRegionLevel(language){

    var language = language || "en";
    var config = {
      headers: {'Accept-Language':language}
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