import React,{useState} from 'react'
import {EnglishkeyboardkeyPress} from '../Functions/functions'
function EnglishKeyboard() {
    const [text,setText]=useState("")
    return (
        <div>
            <div className="button-container1">
        <div className="search-container">
          <input onKeyDown={(e) => setText(EnglishkeyboardkeyPress(e))}
            value={text} placeholder="search" type="text" className="search-input" />
           
          <div >
          </div>
         
        </div>
    </div>

        </div>
    )
}

export default EnglishKeyboard
