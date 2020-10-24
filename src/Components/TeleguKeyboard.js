import React,{useState} from 'react'
import {keyPress,TeluguKeyboardPress} from '../Functions/functions'
import Switch from "react-input-switch";

function TeleguKeyboard() {
  const [value, setValue] = useState(false);
  
    const [TeluguKeyboard,setTeluguKeyboard]=useState(false)
    const [text,setText]=useState("")
    const virtualKeyboardToggle=()=>{
        setValue(!value)
    
}

const displayGurbhaniKeyboard = () => {
  setValue(!value);
  

};

    return (
        <div className="read-container">
        { value?
    <div className="container">
    <i onClick={virtualKeyboardToggle} className="material-icons cancel-icon">close</i>

<div className="keyboard-container">
<div className="key-container">
<div onClick={() => setText( keyPress("అ"))}>అ</div>
<div onClick={() => setText(keyPress("ఆ"))}>ఆ</div>
<div onClick={() => setText(keyPress("ఇ"))}>ఇ</div>
<div onClick={() => setText(keyPress("ఈ"))}>ఈ</div>
<div onClick={() => setText(keyPress("ఉ"))}>ఉ</div>
<div onClick={() => setText(keyPress("ఊ"))}>ఊ</div>
<div onClick={() => setText(keyPress("ఋ"))}>ఋ</div>
<div onClick={() => setText(keyPress("ౠ"))}>ౠ</div>
<div onClick={() => setText(keyPress("ఌ"))}>ఌ</div>
<div onClick={() => setText(keyPress("ౡ"))}>ౡ</div>
</div>

<div className="key-container">
<div onClick={() => setText(keyPress("ఎ"))}>ఎ</div>
<div onClick={() => setText(keyPress("ఏ"))}>ఏ</div>
<div onClick={() => setText(keyPress("ఐ"))}>ఐ</div>
<div onClick={() => setText(keyPress("ఒ"))}>ఒ</div>
<div onClick={() => setText(keyPress("ఓ"))}>ఓ</div>
<div onClick={() => setText(keyPress("ఔ"))}>ఔ</div>
<div onClick={() => setText(keyPress("క"))}>క</div>
<div onClick={() => setText(keyPress("ఖ"))}>ఖ</div>
<div onClick={() => setText(keyPress("గ"))}>గ</div>
<div onClick={() => setText(keyPress("ఘ"))}>ఘ</div>
<div onClick={() => setText(keyPress("ఙ"))}>ఙ</div>
</div>


<div className="key-container">
<div onClick={() => setText(keyPress("చ"))}>చ</div>
<div onClick={() => setText(keyPress("ఛ"))}>ఛ</div>
<div onClick={() => setText(keyPress("జ"))}>జ</div>
<div onClick={() => setText(keyPress("ఝ"))}>ఝ</div>
<div onClick={() => setText(keyPress("ఞ"))}>ఞ</div>
<div onClick={() => setText(keyPress("ట"))}>ట</div>
<div onClick={() => setText(keyPress("ఠ"))}>ఠ</div>
<div onClick={() => setText(keyPress("డ"))}>డ</div>
<div onClick={() => setText(keyPress("ఢ"))}>ఢ</div>
<div onClick={() => setText(keyPress("ణ"))}>ణ</div>

</div>

<div className="key-container">
<div onClick={() => setText(keyPress("త"))}>త</div>
<div onClick={() => setText(keyPress("థ"))}>థ</div>
<div onClick={() => setText(keyPress("ద"))}>ద</div>
<div onClick={() => setText(keyPress("ధ"))}>ధ</div>
<div onClick={() => setText(keyPress("న"))}>న</div>
<div onClick={() => setText(keyPress("ప"))}>ప</div>
<div onClick={() => setText(keyPress("ఫ"))}>ఫ</div>
<div onClick={() => setText(keyPress("బ"))}>బ</div>
<div onClick={() => setText(keyPress("మ"))}>మ</div>

</div>

<div className="key-container">
<div onClick={() => setText(keyPress("య"))}>య</div>
<div onClick={() => setText(keyPress("ర"))}>ర</div>
<div onClick={() => setText(keyPress("ఱ"))}>ఱ</div>
<div onClick={() => setText(keyPress("ల"))}>ల</div>
<div onClick={() => setText(keyPress("ళ"))}>ళ</div>
<div onClick={() => setText(keyPress("వ"))}>వ</div>
<div onClick={() => setText(keyPress("శ"))}>శ</div>
<div onClick={() => setText(keyPress("ష"))}>ష</div>

<div onClick={() => setText(keyPress("స"))}>స</div>
<div onClick={() => setText(keyPress("హ"))}>హ</div>

</div>

<div className="key-container">
                <div onClick={() => setText(keyPress("ా"))}>ా</div>
                  <div onClick={() => setText(keyPress("ి"))}>ి</div>
                  <div onClick={() => setText(keyPress("ీ"))}>ీ</div>
                  <div onClick={() => setText(keyPress("ు"))}>ు</div>
                  <div onClick={() => setText(keyPress("ూ"))}>ూ</div>
                  <div onClick={() => setText(keyPress("ృ"))}>ృ</div>
                  <div onClick={() => setText(keyPress("ౄ"))}>ౄ</div>
                  <div onClick={() => setText(keyPress("ె"))}>ె</div>
                  <div onClick={() => setText(keyPress("ే"))}>ే</div>
                  <div onClick={() => setText(keyPress("ై"))}>ై</div>
                  <div onClick={() => setText(keyPress("ొ"))}>ొ</div>
                  <div onClick={() => setText(keyPress("ో"))}>ో</div>
                  <div onClick={() => setText(keyPress("ౌ"))}>ౌ</div>
                  <div onClick={() => setText(keyPress("ఁ"))}>ఁ</div>
                  <div onClick={() => setText(keyPress("ం"))}>ం</div>
                  <div onClick={() => setText(keyPress("ః"))}>ః</div>
                 
                </div>

                <div className="key-container">
                <div onClick={() => setText(keyPress("౦"))}>౦</div>
                  <div onClick={() => setText(keyPress("౧"))}>౧</div>
                  <div onClick={() => setText(keyPress("౨"))}>౨</div>
                  <div onClick={() => setText(keyPress("౩"))}>౩</div>
                  <div onClick={() => setText(keyPress("౪"))}>౪</div>
                  <div onClick={() => setText(keyPress("౫"))}>౫</div>
                  <div onClick={() => setText(keyPress("౬"))}>౬</div>
                  <div onClick={() => setText(keyPress("౭"))}>౭</div>
                  <div onClick={() => setText(keyPress("౮"))}>౮</div>
                  <div onClick={() => setText(keyPress("౯"))}>౯</div>
                 
                </div>

</div>


</div>:<></>
}
<div className="button-container1">
    <div className="search-container">
      <input onKeyDown={(e) => setText(TeluguKeyboardPress(e))}
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

export default TeleguKeyboard
