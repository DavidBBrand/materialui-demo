
import TextField from "@mui/material/TextField";
import { useState } from "react";


export default function FormDemo() {
    const [name, setName] = useState("");
    const [volume, setVolume] = useState(50);
    const updateName = (e) => {
        setName(e.target.value);
    };
    
    return (
        <div>
          <h1>Name is: {name}</h1>
          <TextField 
            id="outlined-basic" 
            placeholder="Elsa" 
            label="Puppy Name" 
            variant="outlined" 
            value={name}
            onChange={updateName}
          />
           
        </div>
        

            
      
    )
}