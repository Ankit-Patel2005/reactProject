// import './App.css'
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Alert from '@mui/material/Alert';
// function App() {
//   let handleClick=()=>{
//     console.log("button was clicked");
//   }

//   return (
//     <>
//       <h1>Material UI demo !</h1>
//       <Button variant="contained" onClick={handleClick}>Click Me!</Button>
//       <Button variant="contained" onClick={handleClick} disabled >Click Me!</Button>
//       <Button variant="contained" onClick={handleClick}  color='error' size='small'>Click Me 2!</Button>
//       <Button variant="contained" startIcon={<DeleteIcon />} onClick={handleClick}>Delete!</Button>
//       <Alert severity="error">This is an error Alert.</Alert>
//     </>
//   )
// }

// export default App



//Mini Project:Weather app
import "./App.css";
import SearchBox from './SearchBox.jsx'
import InfoBox from "./InfoBox.jsx";
import Weather from "./Weather.jsx";
function App() {
 
  return (
    <>
<Weather/>
    </>
  )
}

export default App