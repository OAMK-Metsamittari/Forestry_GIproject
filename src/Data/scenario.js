import axios from 'axios';

function getScenario(){
    return new Promise((resolve,reject)=>{
      axios.get("http://melatupa.azurewebsites.net/scenarioCollection/4/region/1").
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