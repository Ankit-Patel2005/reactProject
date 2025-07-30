import { useState } from "react";
import InfoBox from "./InfoBox.jsx";
import SearchBox from "./SearchBox.jsx";
export default function Weather(){
    let [weatherInfo,setWeatherInfo]=useState(
        {
        city:"delhi",
        temp:24,
        tempMin:23,
        tempMax:25,
        humidity:67,
        feelsLike:28.8,
        weather:"clouds"
    }
    );
    let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
    }
    return(<div>
        <h2>Weather App</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>)
}