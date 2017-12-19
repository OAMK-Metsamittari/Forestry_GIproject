import axios from 'axios';

function getRegion(rId,language,){
  const regionId = rId || 1;
  var language = language || "en";
  
  var config = {
    headers: {'Accept-Language':language}
  };
    return new Promise((resolve,reject)=>{
      axios.get("https://cors-anywhere.herokuapp.com/"+"http://melatupa.azurewebsites.net/regionLevels/"+regionId+"/regions",config).
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
