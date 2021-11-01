import React,{useState} from 'react'
import '../Css/HindiKeyboard.css'
import {keyPress,PunjabiKeyboardPress} from '../Functions/functions'
import Switch from "react-input-switch";

function PunjabiKeyboard() {
  const [value, setValue] = useState(false);
 
    const [PunjabiKeyboard,setPunjabiKeyboard]=useState(false)
    const [text,setText]=useState("")
   
    const virtualKeyboardToggle=()=>{
      setValue(!value)
   
    
}

const displayGurbhaniKeyboard = () => {
  setPunjabiKeyboard(!PunjabiKeyboard);
  

};
    return (
        <div className="read-container">
            {
                value?<div className="container">
                     <i onClick={virtualKeyboardToggle} className="material-icons cancel-icon">close</i>
                <div className="keyboard-container">
                <div className="key-container">
                  <div onClick={() => setText(keyPress("ਕ"))}>ਕ</div>
                  <div onClick={() => setText(keyPress("ਖ"))}>ਖ</div>
                  <div onClick={() => setText(keyPress("ਗ"))}>ਗ</div>
                  <div onClick={() => setText(keyPress("ਘ"))}>ਘ</div>
                  <div onClick={() => setText(keyPress("ਙ"))}>ਙ</div>
                  <div onClick={() => setText(keyPress("ਚ"))}>ਚ</div>
                  <div onClick={() => setText(keyPress("ਛ"))}>ਛ</div>
                  <div onClick={() => setText(keyPress("ਜ"))}>ਜ</div>
                  <div onClick={() => setText(keyPress("ਝ"))}>ਝ</div>
                  <div onClick={() => setText(keyPress("ਞ"))}>ਞ</div>
                  <div onClick={() => setText(keyPress("ਟ"))}>ਟ</div>
                  <div onClick={() => setText(keyPress("ਠ"))}>ਠ</div>
                  <div onClick={() => setText(keyPress("ਡ"))}>ਡ</div>
                  <div onClick={() => setText(keyPress("ਢ"))}>ਢ</div>
                  
                </div>
    
                <div className="key-container">
                <div onClick={() => setText(keyPress("ਣ"))}>ਣ</div>
                  <div onClick={() => setText(keyPress("ਤ"))}>ਤ</div>
                  <div onClick={() => setText(keyPress("ਥ"))}>ਥ</div>
                  <div onClick={() => setText(keyPress("ਦ"))}>ਦ</div>
                  <div onClick={() => setText(keyPress("ਧ"))}>ਧ</div>
                  <div onClick={() => setText(keyPress("ਨ"))}>ਨ</div>
                  <div onClick={() => setText(keyPress("ਪ"))}>ਪ</div>
                  <div onClick={() => setText(keyPress("ਫ"))}>ਫ</div>
                  <div onClick={() => setText(keyPress("ਬ"))}>ਬ</div>
                  <div onClick={() => setText(keyPress("ਭ"))}>ਭ</div>
                  <div onClick={() => setText(keyPress("ਮ"))}>ਮ</div>
                  <div onClick={() => setText(keyPress("ਯ"))}>ਯ</div>
                  <div onClick={() => setText(keyPress("ਰ"))}>ਰ</div>
               
                 </div>
    
                <div className="key-container">
                <div onClick={() => setText(keyPress("ਲ"))}>ਲ</div>
                  <div onClick={() => setText(keyPress("ਲ਼"))}>ਲ਼</div>
                  <div onClick={() => setText(keyPress("ਵ"))}>ਵ</div>
                  <div onClick={() => setText(keyPress("ਸ਼"))}>ਸ਼</div>
                  <div onClick={() => setText(keyPress("ਸ"))}>ਸ</div>
                  
                  <div onClick={() => setText(keyPress("ਹ"))}>ਹ</div>
                  <div onClick={() => setText(keyPress("ਖ਼"))}>ਖ਼</div>
                  <div onClick={() => setText(keyPress("ਗ਼"))}>ਗ਼</div>
                  <div onClick={() => setText(keyPress("ਜ਼"))}>ਜ਼</div>
                  <div onClick={() => setText(keyPress("ੜ"))}>ੜ</div>
                  <div onClick={() => setText(keyPress("ਫ਼"))}>ਫ਼</div>
                 
                </div>
    
                <div className="key-container">
                <div onClick={() => setText(keyPress("ਅ"))}>ਅ</div>
                  <div onClick={() => setText(keyPress("ਆ"))}>ਆ</div>
                  <div onClick={() => setText(keyPress("ਇ"))}>ਇ</div>
                  <div onClick={() => setText(keyPress("ਈ"))}>ਈ</div>
                  <div onClick={() => setText(keyPress("ਉ"))}>ਉ</div>
                  <div onClick={() => setText(keyPress("ਊ"))}>ਊ</div>
                  <div onClick={() => setText(keyPress("ਏ"))}>ਏ</div>
                  <div onClick={() => setText(keyPress("ਐ"))}>ਐ</div>
                  <div onClick={() => setText(keyPress("ਓ"))}>ਓ</div>
                  <div onClick={() => setText(keyPress("ਔ"))}>ਔ</div>
                  <div onClick={() => setText(keyPress("ੲ"))}>ੲ</div>
                  <div onClick={() => setText(keyPress("ੳ"))}>ੳ</div>
                  <div onClick={() => setText(keyPress(" "))}>space</div>
                  
                </div>
    
                <div className="key-container">
                <div onClick={() => setText(keyPress("ਂ"))}>ਂ</div>
                  <div onClick={() => setText(keyPress("਼"))}>਼</div>
                  <div onClick={() => setText(keyPress("ਾ"))}>ਾ</div>
                  <div onClick={() => setText(keyPress("ਿ"))}>ਿ</div>
                  <div onClick={() => setText(keyPress("ੀ"))}>ੀ</div>
                  <div onClick={() => setText(keyPress("ੁ"))}>ੁ</div>
                  <div onClick={() => setText(keyPress("ੂ"))}>ੂ</div>
                  <div onClick={() => setText(keyPress("ੇ"))}>ੇ</div>
                  <div onClick={() => setText(keyPress("ੈ"))}>ੈ</div>
                  <div onClick={() => setText(keyPress("ੋ"))}>ੋ</div>
                  <div onClick={() => setText(keyPress("ੲ"))}>ੌ</div>
                  <div onClick={() => setText(keyPress("ੰ"))}>੍</div>
                  <div onClick={() => setText(keyPress("ੰ"))}>ੰ</div>
                  <div onClick={() => setText(keyPress("ੱ"))}>ੱ</div>
                
                </div>
              
                <div className="key-container">
                <div onClick={() => setText(keyPress("ੴ"))}>ੴ</div>
                  <div onClick={() => setText(keyPress("੦"))}>੦</div>
                  <div onClick={() => setText(keyPress("੧"))}>੧</div>
                  <div onClick={() => setText(keyPress("੨"))}>੨</div>
                  <div onClick={() => setText(keyPress("੩"))}>੩</div>
                  <div onClick={() => setText(keyPress("੪"))}>੪</div>
                  <div onClick={() => setText(keyPress("੫"))}>੫</div>
                  <div onClick={() => setText(keyPress("੬"))}>੬</div>
                  <div onClick={() => setText(keyPress("੭"))}>੭</div>
                  <div onClick={() => setText(keyPress("੮"))}>੮</div>
                  <div onClick={() => setText(keyPress("੯"))}>੯</div>
                  <div onClick={() => setText(keyPress("☬"))}>☬</div>
                 
                </div>
                </div>
              
              </div>
             :<></>
            }
<div className="button-container1">
        <div className="search-container">
          <input onKeyDown={(e) => setText(PunjabiKeyboardPress(e))}
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

export default PunjabiKeyboard
