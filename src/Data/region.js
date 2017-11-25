import axios from 'axios';

function getRegion(){
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
    return new Promise((resolve,reject)=>{
      axios.get(proxyurl + "http://melatupa.azurewebsites.net/regionLevels/1/regions").
      then(result=>{        
        resolve(result);
      })
      .catch(error=>{
          console.log("error occured in region");
          reject();
      })
    })   
}

export default {getRegion}