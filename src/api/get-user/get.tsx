import axios from 'axios'
import { BASE_URL } from '../BASE-URL'

async function GetUsers() {
    const response = await axios.get("http://localhost:3000/users")
    return response.data
}

export async function GetWheather(city : string) {
    try{
        const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=uk&key=A5P3SFCW5DYM637H5KWUSPMDY&contentType=json`)
        return response.data
    }
    catch (err) {
          console.log(`toTry  did not work ========`);
          return false
  
          
}
}


export async function GetCities() {
    const response = await axios.get("https://countriesnow.space/api/v0.1/countries/population/cities" )
    return response.data
}
export default GetUsers