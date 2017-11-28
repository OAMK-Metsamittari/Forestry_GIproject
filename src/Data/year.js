import axios from 'axios';

function getYear(){
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
    return new Promise((resolve,reject)=>{
      axios.get(proxyurl + "http://melatupa.azurewebsites.net/scenarioCollection/4/region/1").
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