import axios from 'axios';

function getRegionLevel(){
    return new Promise((resolve,reject)=>{
      axios.get("https://cors-anywhere.herokuapp.com/"+"http://melatupa.azurewebsites.net/regionLevels").
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