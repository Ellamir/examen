import axios from 'axios';

export const apiCall = async function(parametro1){
    try {
        //https://cors-anywhere.herokuapp.com/ para problemas con cors
        // dashboard https://cors-anywhere.herokuapp.com/http://157.230.190.251/api/v1/cmodels/secure/dashboard
        // ordenes https://cors-anywhere.herokuapp.com/http://157.230.190.251/api/v1/cmodels/secure/
        let base_url = `https://cors-anywhere.herokuapp.com/http://157.230.190.251/api/v1/cmodels/secure`;
        let response = await axios.get(`${base_url}/${parametro1}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


/* export async function apiCall(parameters) 
{



    
  // si bloquea CORS usar https://cors-anywhere.herokuapp.com/http://157.230.190.251/api/v1/cmodels/secure/ordenes/
   let api = 'http://localhost:8080/api/';
  try 
  {
    const res = await axios.get(
      `${api}${parameters}`);
    
    
    return res
    
  } 
  catch (error) 
  {
    console.log(error);
  } 
} */