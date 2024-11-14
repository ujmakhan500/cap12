import { useState } from "react"
import Parent from "./parent"

const GrandParent =()=>{

    const [theme , setTheme] = useState("light")

    const ToggleTheme =()=>{

        setTheme((prev) => prev ==="light" ? "dark" : "light")
    }

        return(
        <div style ={{backgroundColor: theme == "light" ? "aqua" : "teal" ,
            color: theme =="light" ? "midnightblue" : "white" ,
            padding : "10px"
        }}>
            <h1>GrandParent component</h1>
            <button onClick={ToggleTheme}>Toggle Theme</button>
       
       <Parent theme={theme} ToggleTheme={ToggleTheme}/>
       
        </div>
    )
}

export default GrandParent;