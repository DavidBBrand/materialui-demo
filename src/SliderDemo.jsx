import Slider from "@mui/material/Slider"
import { useState } from "react"

export default function SliderDemo(){
    const [volume, setVolume] = useState(50)
    const handleChange = (evt, newVal) => {
        setVolume(newVal)
    }

    return (
        <div>
            <h2>Volume: {volume}</h2>
            <Slider aria-label="Volume" value={volume} onChange={handleChange} />
        </div>
    )
}