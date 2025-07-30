import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({info}){
    const Init_Img="https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=612x612&w=0&k=20&c=RoUDM9BMwqW8NkPXjzAzlDKCHPOmdZhmmeT3jGA2EaM="
    
    const cold_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgGNcwKcUKuJaLCaMxeEl2zR9pqYhz4xm6UQ&s";
    const rain_url="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";
    const hot_url="https://png.pngtree.com/thumb_back/fh260/background/20250611/pngtree-hot-summer-sun-setting-with-thermometer-showing-high-temperature-image_17416668.jpg";
    return(
        <div className="InfoBox">
          <br></br><br></br>
        <div className="CardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?rain_url:info.temp>15?hot_url:cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{info.city}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}component="div">
          <p>Temperature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>Min Temperature={info.tempMin}&deg;C</p>
          <p>Max Temperature={info.tempMax}&deg;C</p>
          <p>The weather can be described as <b> {info.weather}</b> and feels like={info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    )
}