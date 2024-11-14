import { useState } from "react"

const Parent =({theme , ToggleTheme})=>{


        return(
        <div style ={{backgroundColor: theme == "light" ? "lightcoral" : "pink" ,
            color: theme =="light" ? "midnightblue" : "tomato",
padding : "10px"
  }}>
            <h1>Parent component</h1>
            <button onClick={ToggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default Parent;