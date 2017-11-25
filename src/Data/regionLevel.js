import axios from 'axios';

function getRegionLevel(){
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
    return new Promise((resolve,reject)=>{
      axios.get(proxyurl + "http://melatupa.azurewebsites.net/regionLevels").
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