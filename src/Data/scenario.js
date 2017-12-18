import axios from 'axios';
import Translate from 'translate-components';
import { reactTranslateChangeLanguage } from 'translate-components';

function getScenario(sId,rId,language){  
    const scenarioCollectionId = sId || 6;
    const regionId = rId || 24;

    var language = language || "en";
    var config = {
      headers: {'Accept-Language':language}
    };
    return new Promise((resolve,reject)=>{
      axios.get("https://cors-anywhere.herokuapp.com/"+"http://melatupa.azurewebsites.net/scenarioCollection/"+scenarioCollectionId +"/region/"+regionId,config).
      then(result=>{        
        resolve(result);
      })
      .catch(error=>{
          console.log("error occured in serenio");
          reject();
      })
    })   
}

export default {getScenario}