import axios from 'axios';
import Translate from 'translate-components';
import { reactTranslateChangeLanguage } from 'translate-components';

function getYear(){
  var config = {
    headers: {'Accept-Language':"en"}
  };
    return new Promise((resolve,reject)=>{
      axios.get("https://cors-anywhere.herokuapp.com/"+"http://melatupa.azurewebsites.net/scenarioCollection/6/region/24",config).
      then(result=>{        
        resolve(result);
      })
      .catch(error=>{
          console.log("error occured in serenio");
          reject();
      })
    })   
}

export default {getYear};