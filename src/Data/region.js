import axios from 'axios';

function getRegion(rId){
  const regionId = rId || 1;
    return new Promise((resolve,reject)=>{
      axios.get("http://melatupa.azurewebsites.net/regionLevels/"+regionId+"/regions").
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