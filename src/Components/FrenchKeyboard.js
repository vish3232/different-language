import React,{useState} from 'react'
import {keyPress,FrenchKeyboardPress} from '../Functions/functions'
import Switch from "react-input-switch";


function FrenchKeyboard() {
    const [value, setValue] = useState(false);
 
    const [text,setText]=useState("")
    const [shift,setShift]=useState(false)
    const virtualKeyboardToggle=()=>{
      setValue(!value)
      
  }


const shiftPress=()=>{
    setShift(!shift)
}

    return (
        <div className="read-container">
        {value?
    <div className="container">
    <i onClick={virtualKeyboardToggle} className="material-icons cancel-icon">close</i>

<div className="keyboard-container">
<div className="key-container">
        <div onClick={() => setText( keyPress("²"))}>²</div>
        <div onClick={() => setText(keyPress(shift?"1":"&"))}>{shift?"1":"&"}</div>
        <div onClick={() => setText(keyPress(shift?"2":"é"))}>{shift?"2":"é"}</div>
        <div onClick={() => setText(keyPress(shift?"3":""))}>{shift?"3":""}</div>
<div onClick={() => setText(keyPress(shift?"4":"'"))}>{shift?"4":"'"} </div>
        <div onClick={() => setText(keyPress(shift?"5":"("))}>{shift?"5":"("}</div>
        <div onClick={() => setText(keyPress(shift?"6":"-"))}>{shift?"6":"-"}</div>
        <div onClick={() => setText(keyPress(shift?"7":"è"))}>{shift?"7":"è"}</div>
        <div onClick={() => setText(keyPress(shift?"8":"_"))}>{shift?"8":"_"}</div>
        <div onClick={() => setText(keyPress(shift?"9":"ç"))}>{shift?"9":"ç"}</div>
</div>

<div className="key-container">
        <div onClick={() => setText(keyPress(shift?"0":"à"))}>{shift?"0":"à"}</div>
        <div onClick={() => setText(keyPress(shift?"°":")"))}>{shift?"°":")"}</div>
<div onClick={() => setText(keyPress(shift?"+":"="))}>{shift?"+":"="} </div>
<div onClick={() => setText(keyPress(shift?"A":"a"))}>{shift?"A":"a"} </div>
<div onClick={() => setText(keyPress(shift?"Z":"z"))}>{shift?"Z":"z"} </div>
<div onClick={() => setText(keyPress(shift?"E":"e"))}>{shift?"E":"e"} </div>
        <div onClick={() => setText(keyPress(shift?"R":"r"))}>{shift?"R":"r"}</div>
        <div onClick={() => setText(keyPress(shift?"T":"t"))}>{shift?"T":"t"}</div>
        <div onClick={() => setText(keyPress(shift?"Y":"y"))}>{shift?"Y":"y"}</div>
        <div onClick={() => setText(keyPress(shift?"U":"u"))}>{shift?"U":"u"}</div>
<div onClick={() => setText(keyPress(shift?"I":"i"))}>{shift?"I":"i"} </div>
</div>


<div className="key-container">
        <div onClick={() => setText(keyPress(shift?"O":"o"))}>{shift?"O":"o"}</div>
        <div onClick={() => setText(keyPress(shift?"P":"p"))}>{shift?"P":"p"}</div>
<div onClick={() => setText(keyPress("^"))}>^</div>
<div onClick={() => setText(keyPress("$"))}>$</div>
<div onClick={() => setText(keyPress(shift?"Q":"q"))}>{shift?"Q":"q"} </div>
<div onClick={() => setText(keyPress(shift?"S":"s"))}>{shift?"S":"s"} </div>
        <div onClick={() => setText(keyPress(shift?"D":"d"))}>{shift?"D":"d"}</div>
<div onClick={() => setText(keyPress(shift?"F":"f"))}>{shift?"F":"f"} </div>

</div>

<div className="key-container">
<div onClick={()=>shiftPress()}>shift</div>
<div onClick={() => setText(keyPress(shift?"G":"g"))}>{shift?"G":"g"} </div>
        <div onClick={() => setText(keyPress(shift?"H":"h"))}>{shift?"H":"h"}</div>
        <div onClick={() => setText(keyPress(shift?"J":"j"))}>{shift?"J":"j"}</div>
<div onClick={() => setText(keyPress(shift?"K":"k"))}>{shift?"K":"k"} </div>
<div onClick={() => setText(keyPress(shift?"L":"l"))}>{shift?"L":"l"} </div>
<div onClick={() => setText(keyPress(shift?"M":"m"))}>{shift?"M":"m"} </div>
<div onClick={() => setText(keyPress(shift?"%":"ù"))}>{shift?"%":"ù"} </div>
<div onClick={() => setText(keyPress(shift?"W":"w"))}>{shift?"W":"w"} </div>
<div onClick={() => setText(keyPress(shift?"X":"x"))}>{shift?"X":"x"} </div>

<div onClick={() => setText(keyPress(shift?"C":"c"))}>{shift?"C":"c"} </div>
<div onClick={() => setText(keyPress(shift?"V":"v"))}>{shift?"V":"v"} </div>

</div>

<div className="key-container">
<div onClick={() => setText(keyPress(shift?"B":"b"))}>{shift?"B":"b"} </div>
<div onClick={() => setText(keyPress(shift?"N":"n"))}>{shift?"N":"n"} </div>
<div onClick={() => setText(keyPress(shift?",":"?"))}>{shift?",":"?"}</div>
        <div onClick={() => setText(keyPress(shift?";":"."))}>{shift?";":"."}</div>
<div onClick={() => setText(keyPress(shift?":":"/"))}>{shift?":":"/"} </div>

<div onClick={() => setText(keyPress(shift?"!":"§"))}>{shift?"!":"§"} </div>
</div>

               
</div>


</div>:<></>
}
<div className="button-container1">
    <div className="search-container">
      <input onKeyDown={(e) => setText(FrenchKeyboardPress(e))}
        value={text} placeholder="search" type="text" className="search-input" />
       
      <div >
      </div>
      
     
    </div>
    <div   className="toggle-container">
            <label className="virtual-keyboard-label">Virtual Keyboard</label>
            <Switch  on="yes" off="no" value={value} onChange={setValue} />
    </div>
    
</div>
  
</div>

    )
}

export default FrenchKeyboard
