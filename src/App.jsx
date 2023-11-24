import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css"
import Button from "@mui/material/Button"
import RatingDemo from "./RatingDemo"
import FormDemo from "./FormDemo"
import SliderDemo from "./SliderDemo"
import NavBar from "./NavBar"


function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <NavBar/>
      <RatingDemo/>
      <FormDemo/>

      <Button variant="contained">Contained</Button>
      <Button color="secondary" variant="text" size="small" >Contained</Button>
      <Button color="warning" variant="outlined">Contained</Button>
      <Button color="primary" variant="outlined">Containended</Button>
      <SliderDemo/>
      </div>   

  )
}

export default App;

