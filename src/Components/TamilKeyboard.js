import React,{useState} from 'react'
import {keyPress,TamilKeyboardPress} from '../Functions/functions'
import Switch from "react-input-switch";

function TamilKeyboard() {
  const [value, setValue] = useState(false);

    const [TamilKeyboard,setTamilKeyboard]=useState(false)
    const [text,setText]=useState("")
    const virtualKeyboardToggle=()=>{
      setValue(!value)
    
    
}

const displayGurbhaniKeyboard = () => {
  setTamilKeyboard(!TamilKeyboard);
  

};

    return (
        <div className="read-container">
        {value?
    <div className="container">
    <i onClick={virtualKeyboardToggle} className="material-icons cancel-icon">close</i>

<div className="keyboard-container">
<div className="key-container">
<div onClick={() => setText( keyPress("அ"))}>அ</div>
<div onClick={() => setText(keyPress("ஆ"))}>ஆ</div>
<div onClick={() => setText(keyPress("இ"))}>இ</div>
<div onClick={() => setText(keyPress("ஈ"))}>ஈ</div>
<div onClick={() => setText(keyPress("உ"))}>உ</div>
<div onClick={() => setText(keyPress("ஊ"))}>ஊ</div>
<div onClick={() => setText(keyPress("எ"))}>எ</div>
<div onClick={() => setText(keyPress("ஏ"))}>ஏ</div>
<div onClick={() => setText(keyPress("ஐ"))}>ஐ</div>
<div onClick={() => setText(keyPress("ஒ"))}>ஒ</div>
</div>

<div className="key-container">
<div onClick={() => setText(keyPress("ஔ"))}>ஔ</div>
<div onClick={() => setText(keyPress("அஃ"))}>அஃ</div>
<div onClick={() => setText(keyPress("அஂ"))}>அஂ</div>
<div onClick={() => setText(keyPress("க்"))}>க்</div>
<div onClick={() => setText(keyPress("ங்"))}>ங்</div>
<div onClick={() => setText(keyPress("ச்"))}>ச்</div>
<div onClick={() => setText(keyPress("ஞ்"))}>ஞ்</div>
<div onClick={() => setText(keyPress("ட்"))}>ட்</div>
<div onClick={() => setText(keyPress("ண்"))}>ண்</div>
<div onClick={() => setText(keyPress("த்"))}>த்</div>
<div onClick={() => setText(keyPress("ந்"))}>ந்</div>
</div>


<div className="key-container">
<div onClick={() => setText(keyPress("ப்"))}>ப்</div>
<div onClick={() => setText(keyPress("ம்"))}>ம்</div>
<div onClick={() => setText(keyPress("ய்"))}>ய்</div>
<div onClick={() => setText(keyPress("ர்"))}>ர்</div>
<div onClick={() => setText(keyPress("ல்"))}>ல்</div>
<div onClick={() => setText(keyPress("வ்"))}>வ்</div>
<div onClick={() => setText(keyPress("ழ்"))}>ழ்</div>
<div onClick={() => setText(keyPress("ள்"))}>ள்</div>
<div onClick={() => setText(keyPress("ற்"))}>ற்</div>
<div onClick={() => setText(keyPress("ன்"))}>ன்</div>

</div>

<div className="key-container">
<div onClick={() => setText(keyPress("ஶ்"))}>ஶ்</div>
<div onClick={() => setText(keyPress("ஜ்"))}>ஜ்</div>
<div onClick={() => setText(keyPress("ஷ்"))}>ஷ்</div>
<div onClick={() => setText(keyPress("ஸ்"))}>ஸ்</div>
<div onClick={() => setText(keyPress("ஹ்"))}>ஹ்</div>
<div onClick={() => setText(keyPress("க்ஷ்"))}>க்ஷ்</div>
<div onClick={() => setText(keyPress("ா"))}>ா</div>
<div onClick={() => setText(keyPress("ி"))}>ி</div>
<div onClick={() => setText(keyPress("ீ"))}>ீ</div>

</div>

<div className="key-container">
<div onClick={() => setText(keyPress("ு"))}>ு</div>
<div onClick={() => setText(keyPress("ூ"))}>ூ</div>
<div onClick={() => setText(keyPress("ெ"))}>ெ</div>
<div onClick={() => setText(keyPress("ே"))}>ே</div>
<div onClick={() => setText(keyPress("ை"))}>ை</div>
<div onClick={() => setText(keyPress("ொ"))}>ொ</div>
<div onClick={() => setText(keyPress("ோ"))}>ோ</div>
<div onClick={() => setText(keyPress("ௌ"))}>ௌ</div>

<div onClick={() => setText(keyPress("ஃ"))}>ஃ</div>
<div onClick={() => setText(keyPress("ஂ"))}>ஂ</div>

</div>

<div className="key-container">
                <div onClick={() => setText(keyPress("௧"))}>௧</div>
                  <div onClick={() => setText(keyPress("௨"))}>௨</div>
                  <div onClick={() => setText(keyPress("௩"))}>௩</div>
                  <div onClick={() => setText(keyPress("௪"))}>௪</div>
                  <div onClick={() => setText(keyPress("௫"))}>௫</div>
                  <div onClick={() => setText(keyPress("௬"))}>௬</div>
                  <div onClick={() => setText(keyPress("௭"))}>௭</div>
                  <div onClick={() => setText(keyPress("௮"))}>௮</div>
                  <div onClick={() => setText(keyPress("௯"))}>௯</div>
                  <div onClick={() => setText(keyPress("௰"))}>௰</div>
                 
                </div>


</div>


</div>:<></>
}
<div className="button-container1">
    <div className="search-container">
      <input onKeyDown={(e) => setText(TamilKeyboardPress(e))}
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

export default TamilKeyboard
