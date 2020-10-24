import React,{useState} from 'react'
import {keyPress,BangaliKeyboardPress} from '../Functions/functions'
import Switch from "react-input-switch";


function BangaliKeyboard() {
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
        <div onClick={() => setText( keyPress(shift?"৊":"৊"))}>{shift?"৊":"৊"} </div>
        <div onClick={() => setText(keyPress(shift?"৊":"1"))}>{shift?"৊":"1"}</div>
        <div onClick={() => setText(keyPress(shift?"৊":"2"))}>{shift?"৊":"2"}</div>
        <div onClick={() => setText(keyPress(shift?"্র":"3"))}>{shift?"্র":"3"}</div>
<div onClick={() => setText(keyPress(shift?"র্":"4"))}>{shift?"র্":"4"} </div>
        <div onClick={() => setText(keyPress(shift?"জ্ঞ":"5"))}>{shift?"জ্ঞ":"5"}</div>
        <div onClick={() => setText(keyPress(shift?"ত্র":"6"))}>{shift?"ত্র":"6"}</div>
        <div onClick={() => setText(keyPress(shift?"ক্ষ":"7"))}>{shift?"ক্ষ":"7"}</div>
        <div onClick={() => setText(keyPress(shift?"শ্র":"8"))}>{shift?"শ্র":"8"}</div>
        <div onClick={() => setText(keyPress(shift?"(":"9"))}>{shift?"(":"9"}</div>
</div>

<div className="key-container">
        <div onClick={() => setText(keyPress(shift?")":"0"))}>{shift?")":"0"}</div>
        <div onClick={() => setText(keyPress(shift?"ঃ":"'"))}>{shift?"ঃ":"'"}</div>
<div onClick={() => setText(keyPress(shift?"ঋ":"ৃ"))}>{shift?"ঋ":"ৃ"} </div>
<div onClick={() => setText(keyPress(shift?"ঔ":"ৌ"))}>{shift?"ঔ":"ৌ"} </div>
<div onClick={() => setText(keyPress(shift?"ঐ":"ৈ"))}>{shift?"ঐ":"ৈ"} </div>
<div onClick={() => setText(keyPress(shift?"আ":"া"))}>{shift?"আ":"া"} </div>
        <div onClick={() => setText(keyPress(shift?"ঈ":"ী"))}>{shift?"ঈ":"ী"}</div>
        <div onClick={() => setText(keyPress(shift?"ঊ":"ূ"))}>{shift?"ঊ":"ূ"}</div>
        <div onClick={() => setText(keyPress(shift?"ভ":"ব"))}>{shift?"ভ":"ব"}</div>
        <div onClick={() => setText(keyPress(shift?"ঙ":"হ"))}>{shift?"ঙ":"হ"}</div>
<div onClick={() => setText(keyPress(shift?"ঘ":"গ"))}>{shift?"ঘ":"গ"} </div>
</div>


<div className="key-container">
        <div onClick={() => setText(keyPress(shift?"ধ":"দ"))}>{shift?"ধ":"দ"}</div>
        <div onClick={() => setText(keyPress(shift?"ঝ":"জ"))}>{shift?"ঝ":"জ"}</div>
        <div onClick={() => setText(keyPress(shift?"ঢ":"ড"))}>{shift?"ঢ":"ড"}</div>
<div onClick={() => setText(keyPress(shift?"ঞ":"়"))}>{shift?"ঞ":"়"} </div>
<div onClick={() => setText(keyPress(shift?"঑":"৉"))}>{shift?"঑":"৉"} </div>
<div onClick={() => setText(keyPress(shift?"ও":"ো"))}>{shift?"ও":"ো"} </div>
        <div onClick={() => setText(keyPress(shift?"এ":"ে"))}>{shift?"এ":"ে"}</div>
<div onClick={() => setText(keyPress(shift?"অ":"্"))}>{shift?"অ":"্"} </div>

</div>

<div className="key-container">
<div onClick={()=>shiftPress()}>shift</div>
<div onClick={() => setText(keyPress(shift?"ই":"ি"))}>{shift?"ই":"ি"} </div>
        <div onClick={() => setText(keyPress(shift?"উ":"ু"))}>{shift?"উ":"ু"}</div>
        <div onClick={() => setText(keyPress(shift?"ফ":"প"))}>{shift?"ফ":"প"}</div>
<div onClick={() => setText(keyPress(shift?"঱":"র"))}>{shift?"঱":"র"} </div>
<div onClick={() => setText(keyPress(shift?"খ":"ক"))}>{shift?"খ":"ক"} </div>
<div onClick={() => setText(keyPress(shift?"থ":"ত"))}>{shift?"থ":"ত"} </div>
<div onClick={() => setText(keyPress(shift?"ছ":"চ"))}>{shift?"ছ":"চ"} </div>
<div onClick={() => setText(keyPress(shift?"ঠ":"ট"))}>{shift?"ঠ":"ট"} </div>
<div onClick={() => setText(keyPress(shift?"঎":"঎"))}>{shift?"঎":"঎"} </div>

<div onClick={() => setText(keyPress(shift?"ঁ":"ং"))}>{shift?"ঁ":"ং"} </div>
<div onClick={() => setText(keyPress(shift?"ণ":"ম"))}>{shift?"ণ":"ম"} </div>

</div>

<div className="key-container">
<div onClick={() => setText(keyPress(shift?"঩":"ন"))}>{shift?"঩":"ন"} </div>
<div onClick={() => setText(keyPress(shift?"঵":"঵"))}>{shift?"঵":"঵"} </div>
<div onClick={() => setText(keyPress(shift?"঳":"ল"))}>{shift?"঳":"ল"}</div>
        <div onClick={() => setText(keyPress(shift?"শ":"স"))}>{shift?"শ":"স"}</div>
<div onClick={() => setText(keyPress(shift?"ষ":","))}>{shift?"ষ":","} </div>

<div onClick={() => setText(keyPress(shift?"৤":"."))}>{shift?"৤":"."} </div>
<div onClick={() => setText(keyPress(shift?"য়":"য"))}>{shift?"য়":"য"} </div>

</div>

               
</div>


</div>:<></>
}
<div className="button-container1">
    <div className="search-container">
      <input onKeyDown={(e) => setText(BangaliKeyboardPress(e))}
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

export default BangaliKeyboard
