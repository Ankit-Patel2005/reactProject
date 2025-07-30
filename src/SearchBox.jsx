import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_kEY="1614ee61cea9ab1c0cd7635e4ddb26a6";
  

    let getWeatherInfo =async()=>{
        try{
      let response= await fetch(`${API_URL}?q=${city}&appid=${API_kEY}&units=metric`)  ;
      let jsonResponse=await response.json();
      console.log(jsonResponse);
      let result={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description
      }
      console.log(result);
      return result;}catch(err){
        throw err;
      }
    }
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    };
    let handleSubmit=async(evt)=>{
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
      let newInfo= await getWeatherInfo();
      updateInfo(newInfo);}
      catch(err){
        setError(true);
        setTimeout(()=>{
          setError(false)
        },1200);
      }
    };

    return(<div className='SearchBox'>
        <h4>Search weather for</h4>
        <form onSubmit={handleSubmit} >
            <TextField id="city" label="City Name" variant="outlined"  value={city} onChange={handleChange}/>
            <br></br> <br></br>
            <Button variant="contained" type='submit' > Search</Button>
            {error && <p style={{color:"red"}}>No information about this place</p>}
        </form>
    </div>)
}