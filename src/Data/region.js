import axios from 'axios';

function getRegion(regionId){

  const rId = regionId || 1;  
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
    return new Promise((resolve,reject)=>{
      axios.get(proxyurl + "http://melatupa.azurewebsites.net/regionLevels/"+rId+"/regions").
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