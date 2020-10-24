import React,{useState} from 'react'
import '../Css/HindiKeyboard.css'
import {keyPress,HindiKeyboardPress} from '../Functions/functions'
import Switch from "react-input-switch";

function HindiKeyboard() {
  const [value, setValue] = useState(false);
 
    const [text,setText]=useState("")
    const [HindiKeyboard,setHindiKeyboard]=useState(false)
    const virtualKeyboardToggle=()=>{
      setValue(!value)
   
      
  }

  const displayGurbhaniKeyboard = () => {
    setHindiKeyboard(!HindiKeyboard);
    
  
};

    return (
        <div className="read-container">
            {value?
        <div className="container">
        <i onClick={virtualKeyboardToggle} className="material-icons cancel-icon">close</i>

   <div className="keyboard-container">
<div className="key-container">
 <div onClick={() => setText( keyPress("अ"))}>अ</div>
 <div onClick={() => setText(keyPress("आ"))}>आ</div>
 <div onClick={() => setText(keyPress("ए"))}>ए</div>
 <div onClick={() => setText(keyPress("ई"))}>ई</div>
 <div onClick={() => setText(keyPress("ऍ"))}>ऍ</div>
 <div onClick={() => setText(keyPress("ऎ"))}>ऎ</div>
 <div onClick={() => setText(keyPress("इ"))}>इ</div>
 <div onClick={() => setText(keyPress("ओ"))}>ओ</div>
 <div onClick={() => setText(keyPress("ऑ"))}>ऑ</div>
 <div onClick={() => setText(keyPress("ऒ"))}>ऒ</div>
</div>

<div className="key-container">
 <div onClick={() => setText(keyPress("ऊ"))}>ऊ</div>
 <div onClick={() => setText(keyPress("औ"))}>औ</div>
 <div onClick={() => setText(keyPress("उ"))}>उ</div>
 <div onClick={() => setText(keyPress("क"))}>क</div>
 <div onClick={() => setText(keyPress("ख "))}>ख</div>
 <div onClick={() => setText(keyPress("ग"))}>ग</div>
 <div onClick={() => setText(keyPress("घ"))}>घ</div>
 <div onClick={() => setText(keyPress("ङ"))}>ङ</div>
 <div onClick={() => setText(keyPress("च"))}>च</div>
 <div onClick={() => setText(keyPress("छ"))}>छ</div>
 <div onClick={() => setText(keyPress("ज"))}>ज</div>
</div>


<div className="key-container">
 <div onClick={() => setText(keyPress("झ"))}>झ</div>
 <div onClick={() => setText(keyPress("ञ"))}>ञ</div>
 <div onClick={() => setText(keyPress("ट"))}>ट</div>
 <div onClick={() => setText(keyPress("ठ"))}>ठ</div>
 <div onClick={() => setText(keyPress("ड"))}>ड</div>
 <div onClick={() => setText(keyPress("ढ"))}>ढ</div>
 <div onClick={() => setText(keyPress("ण"))}>ण</div>
 <div onClick={() => setText(keyPress("त"))}>त</div>
 <div onClick={() => setText(keyPress("थ"))}>थ</div>
 <div onClick={() => setText(keyPress("द"))}>द</div>
 
</div>

<div className="key-container">
 <div onClick={() => setText(keyPress("ध"))}>ध</div>
 <div onClick={() => setText(keyPress("न"))}>न</div>
 <div onClick={() => setText(keyPress("प"))}>प</div>
 <div onClick={() => setText(keyPress("फ"))}>फ</div>
 <div onClick={() => setText(keyPress("ब"))}>ब</div>
 <div onClick={() => setText(keyPress("भ"))}>भ</div>
 <div onClick={() => setText(keyPress("म"))}>म</div>
 <div onClick={() => setText(keyPress("य"))}>य</div>
 <div onClick={() => setText(keyPress("र"))}>र</div>
 <div onClick={() => setText(keyPress("ल"))}>ल</div>
 
</div>

<div className="key-container">
 <div onClick={() => setText(keyPress("व"))}>व</div>
 <div onClick={() => setText(keyPress("श"))}>श</div>
 <div onClick={() => setText(keyPress("ष"))}>ष</div>
 <div onClick={() => setText(keyPress("स"))}>स</div>
 <div onClick={() => setText(keyPress("ह"))}>ह</div>
 <div onClick={() => setText(keyPress("क्ष"))}>क्ष</div>
 <div onClick={() => setText(keyPress("त्र"))}>त्र</div>
 <div onClick={() => setText(keyPress("ज्ञ"))}>ज्ञ</div>

 <div onClick={() => setText(keyPress("ा"))}>ा</div>
 <div onClick={() => setText(keyPress("ि"))}>ि</div>
 
</div>

<div className="key-container">
 <div onClick={() => setText(keyPress("ी"))}>ी</div>
 <div onClick={() => setText(keyPress("ु"))}>ु</div>
 <div onClick={() => setText(keyPress("ू"))}>ू</div>
 <div onClick={() => setText(keyPress("ृ"))}>ृ</div>
 <div onClick={() => setText(keyPress("े"))}>े</div>
 <div onClick={() => setText(keyPress("ै"))}>ै</div>
 <div onClick={() => setText(keyPress("ो"))}>ो</div>
 <div onClick={() => setText(keyPress("ौ"))}>ौ</div>
 
 <div >←</div>
</div>
</div>


</div>:<></>
}
<div className="button-container1">
        <div className="search-container">
          <input onKeyDown={(e) => setText(HindiKeyboardPress(e))}
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

export default HindiKeyboard
