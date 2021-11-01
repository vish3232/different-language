import React,{useState} from 'react'
import {keyPress,GujaratiKeyboardPress} from '../Functions/functions'
import Switch from "react-input-switch";

function Gujarati() {
  const [value, setValue] = useState(false);
 
    const [text,setText]=useState("")
    const [GujaratiKeyboard,setGujaratiKeyboard]=useState(false)
    const virtualKeyboardToggle=()=>{
      setValue(!value)
      
  }

  const displayGurbhaniKeyboard = () => {
    setGujaratiKeyboard(!GujaratiKeyboard);
    
  
};

    return (
        <div className="read-container">
        {value?
    <div className="container">
    <i onClick={virtualKeyboardToggle} className="material-icons cancel-icon">close</i>

<div className="keyboard-container">
<div className="key-container">
<div onClick={() => setText( keyPress("અ"))}>અ</div>
<div onClick={() => setText(keyPress("આ"))}>આ</div>
<div onClick={() => setText(keyPress("ઇ"))}>ઇ</div>
<div onClick={() => setText(keyPress("ઈ"))}>ઈ</div>
<div onClick={() => setText(keyPress("ઉ"))}>ઉ</div>
<div onClick={() => setText(keyPress("ઊ"))}>ઊ</div>
<div onClick={() => setText(keyPress("એ"))}>એ</div>
<div onClick={() => setText(keyPress("ઐ"))}>ઐ</div>
<div onClick={() => setText(keyPress("ઓ"))}>ઓ</div>
<div onClick={() => setText(keyPress("ઔ"))}>ઔ</div>
</div>

<div className="key-container">
<div onClick={() => setText(keyPress("અં"))}>અં</div>
<div onClick={() => setText(keyPress("અઃ"))}>અઃ</div>
<div onClick={() => setText(keyPress("उ"))}>उ</div>
<div onClick={() => setText(keyPress("ક"))}>ક</div>
<div onClick={() => setText(keyPress("ખ"))}>ખ</div>
<div onClick={() => setText(keyPress("ગ"))}>ગ</div>
<div onClick={() => setText(keyPress("ઘ"))}>ઘ</div>
<div onClick={() => setText(keyPress("ઙ"))}>ઙ</div>
<div onClick={() => setText(keyPress("ચ"))}>ચ</div>
<div onClick={() => setText(keyPress("છ"))}>છ</div>
<div onClick={() => setText(keyPress("જ"))}>જ</div>
</div>


<div className="key-container">
<div onClick={() => setText(keyPress("ઝ"))}>ઝ</div>
<div onClick={() => setText(keyPress("ઞ"))}>ઞ</div>
<div onClick={() => setText(keyPress("ટ"))}>ટ</div>
<div onClick={() => setText(keyPress("ઠ"))}>ઠ</div>
<div onClick={() => setText(keyPress("ડ"))}>ડ</div>
<div onClick={() => setText(keyPress("ઢ"))}>ઢ</div>
<div onClick={() => setText(keyPress("ણ"))}>ણ</div>
<div onClick={() => setText(keyPress("ત"))}>ત</div>
<div onClick={() => setText(keyPress("થ"))}>થ</div>
<div onClick={() => setText(keyPress("દ"))}>દ</div>

</div>

<div className="key-container">
<div onClick={() => setText(keyPress("ધ"))}>ધ</div>
<div onClick={() => setText(keyPress("ન"))}>ન</div>
<div onClick={() => setText(keyPress("પ"))}>પ</div>
<div onClick={() => setText(keyPress("ફ"))}>ફ</div>
<div onClick={() => setText(keyPress("બ"))}>બ</div>
<div onClick={() => setText(keyPress("ભ"))}>ભ</div>
<div onClick={() => setText(keyPress("મ"))}>મ</div>
<div onClick={() => setText(keyPress("ય"))}>ય</div>
<div onClick={() => setText(keyPress("ર"))}>ર</div>
<div onClick={() => setText(keyPress("લ"))}>લ</div>

</div>

<div className="key-container">
<div onClick={() => setText(keyPress("व"))}>વ</div>
<div onClick={() => setText(keyPress("શ"))}>શ</div>
<div onClick={() => setText(keyPress("ષ"))}>ષ</div>
<div onClick={() => setText(keyPress("સ"))}>સ</div>
<div onClick={() => setText(keyPress("હ"))}>હ</div>
<div onClick={() => setText(keyPress("ળ"))}>ળ</div>
<div onClick={() => setText(keyPress("ક્ષ"))}>ક્ષ</div>
<div onClick={() => setText(keyPress("જ્ઞ"))}>જ્ઞ</div>

<div onClick={() => setText(keyPress("ા"))}>ા</div>
<div onClick={() => setText(keyPress("િ"))}>િ</div>

</div>

<div className="key-container">
<div onClick={() => setText(keyPress("ી"))}>ી</div>
<div onClick={() => setText(keyPress("ુ"))}>ુ</div>
<div onClick={() => setText(keyPress("ૂ"))}>ૂ</div>
<div onClick={() => setText(keyPress("ૃ"))}>ૃ</div>
<div onClick={() => setText(keyPress("ે"))}>ે</div>
<div onClick={() => setText(keyPress("ૈ"))}>ૈ</div>
<div onClick={() => setText(keyPress("ો"))}>ો</div>
<div onClick={() => setText(keyPress("ૌ"))}>ૌ</div>
<div onClick={() => setText(keyPress("ૅ"))}>ૅ</div>
<div onClick={() => setText(keyPress("ૉ"))}>ૉ</div>

<div >←</div>
</div>

<div className="key-container">
                <div onClick={() => setText(keyPress("૦"))}>૦</div>
                  <div onClick={() => setText(keyPress("૧"))}>૧</div>
                  <div onClick={() => setText(keyPress("૨"))}>૨</div>
                  <div onClick={() => setText(keyPress("૩"))}>૩</div>
                  <div onClick={() => setText(keyPress("૪"))}>૪</div>
                  <div onClick={() => setText(keyPress("૫"))}>૫</div>
                  <div onClick={() => setText(keyPress("૬"))}>૬</div>
                  <div onClick={() => setText(keyPress("૭"))}>૭</div>
                  <div onClick={() => setText(keyPress("૮"))}>૮</div>
                  <div onClick={() => setText(keyPress("૯"))}>૯</div>
                 
                </div>
               
</div>


</div>:<></>
}
<div className="button-container1">
    <div className="search-container">
      <input onKeyDown={(e) => setText(GujaratiKeyboardPress(e))}
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

export default Gujarati
