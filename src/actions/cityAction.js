import {FETCH_CITIES} from "./type"
import axios from "axios";

let fetchURL="https://api.openweathermap.org/data/2.5/forecast";

export const fetchCities=(q)=>dispatch=>{

  axios.get(fetchURL,{
    params:{
            q:"Delhi"||q,
            APPID:"fc58ba73fc193a3d2fdf7f1e0f35d074",
            units:"metric",
         }
  })
  .then(res=>{
    dispatch({
      type:FETCH_CITIES,
      payload:res.data
    })
  }).catch(err=>{
    console.log("fetch err: ",err)

  })

}