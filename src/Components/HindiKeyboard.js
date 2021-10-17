import React,{useState,useEffect,useRef} from 'react'
import {EnglishkeyboardkeyPress} from '../Functions/functions'
import '../Css/EnglishKeyboard.css'
import {keyPress,HindiKeyboardPress} from '../Functions/functions'
import {concatCharacter} from '../Redux/EnglishKeyboardActions'
import {useDispatch,useSelector} from 'react-redux'
function HindiKeyboard() {
  const dispatch=useDispatch()
  const word = useSelector(state => state.EnglishKeyboard.word)
     console.log(word);
    const [text,setText]=useState("")
    const [pressed, setPressed] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})
  const [capsLockEnable,setcapsLockEnable]=useState(false)
  const [shiftEnable,setshiftEnable]=useState(false)
  
  
  const ref = useRef()
  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
    }
  }, [position])
  
  useEffect(() => {
  }, [text])
  
  // Update the current position if mouse is down
  const onMouseMove = (event) => {
    if (pressed) {
      setPosition({
        x: position.x + event.movementX,
        y: position.y + event.movementY
      })
    }
  }
    return (
      <div>
          <input 
          onChange={(e)=>dispatch(concatCharacter(e.target.value))}
            value={word} placeholder="search" type="text" className="search-input" />
        
        <div 
        ref={ref}
        onMouseMove={ onMouseMove }
      onMouseDown={ () => setPressed(true) }
      onMouseUp={ () => setPressed(false) }
        className="english-keyboard-main-container" >
          { /*language-and-font-and-cancel-container-start */}
          
          <div className="language-and-font-and-cancel-container" >
          { /*language-and-font-main-container-start */}
             
            <div className="language-and-font-main-container" >
                
                {/*language-dropdown-container-start */}
                <div className="language-dropdown-select-container" >
                  <div className="language-dropdown-selection-header" >Hindi</div>
                  <div>
                      <i class="material-icons dropdown-icons">expand_more</i>
                  </div>
                </div>
                {/*language-dropdown-container-end */}
                
                {/*font-dropdown-container-start */}
                
                <div className="font-dropdown-select-container" >
                  <div className="font-dropdown-selection-header" >Poppins</div>
                  <div>
                      <i class="material-icons font-dropdown-icons">expand_more</i>
                  </div>
                </div>
                { /*font-dropdown-container-end */}
                
              </div> 
              { /*language-and-font-main-container-start */}
          
              { /*cancel-main-container-start */}
              
              <div className="cancel-main-container cancel-icons" >X</div>
              { /*cancel-main-container-end */}
             
            </div>
            { /*language-and-font-and-cancel-container-start */}
          
            <div className="keyboard-main-container" >
                <div className="subcontainer1" >
                    <div onClick={()=>{dispatch(concatCharacter(`${word+''}`));setcapsLockEnable(false)}} className="key-container" >
                      <div  className="key-content" >
                      f
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"ऍ":"1"}`}`));setcapsLockEnable(false)}} className="key-container" >
                      
                      <div  className="key-content" >
                      {capsLockEnable?"ऍ":"1"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"ॅ":"2"}`}`));setcapsLockEnable(false)}} className="key-container" >
                      <div  className="key-content" >
                      {capsLockEnable?"ॅ":"2"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"्र":"3"}`}`));setcapsLockEnable(false)}} className="key-container" >
                      <div  className="key-content" >
                      {capsLockEnable?"्र":"3"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"र्":"4"}`}`));setcapsLockEnable(false)}} className="key-container" >
                      <div  className="key-content" >
                      {capsLockEnable?"र्":"4"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"ज्ञ":"5"}`}`));setcapsLockEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      {capsLockEnable?"ज्ञ":"5"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"त्र":"6"}`}`));setcapsLockEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      {capsLockEnable?"त्र":"6"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"क्ष":"7"}`}`));setcapsLockEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      {capsLockEnable?"क्ष":"7"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"श्र":"8"}`}`));setcapsLockEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      {capsLockEnable?"श्र":"8"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"(":"9"}`}`));setcapsLockEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      {capsLockEnable?"(":"9"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?")":"0"}`}`));setcapsLockEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      {capsLockEnable?")":"0"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"ः":"-"}`}`));setcapsLockEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      {capsLockEnable?"ः":"-"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"ऋ":"ृ"}`}`));setcapsLockEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      {capsLockEnable?"ऋ":"ृ"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(word.slice(0,word.length-1)));setcapsLockEnable(false)}} className="delete-button-container" >
                      <div  className="delete-header" >
                      delete
                      </div>
                      
                    </div>
                </div>
                <div className="subcontainer2" >
                    <div onClick={()=>{dispatch(concatCharacter(`${word+'  '}`));setcapsLockEnable(false)}} className="tab-button-container" >
                       <div className="tab-header" >
                        tab
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"औ":"ौ"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                        {capsLockEnable?"औ":"ौ"}
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"ऐ":"ै"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"ऐ":"ै"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"आ":"ा"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"आ":"ा"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"ई":"ी"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"ई":"ी"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=> {dispatch(concatCharacter(`${word+`${capsLockEnable?"ऊ":"ू"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"ऊ":"ू"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"भ":"ब"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"भ":"ब"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"ङ":"ह"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"ङ":"ह"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"घ":"ग"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"घ":"ग"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"ध":"द"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"ध":"द"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"झ":"ज"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"झ":"ज"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"ढ":"ड"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                        {capsLockEnable?"ढ":"ड"}
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"ञ":"़"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                        {capsLockEnable?"ञ":"़"}
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"ऑ":"ॉ"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                        {capsLockEnable?"ऑ":"ॉ"}
                        </div>
                      
                    </div>
                    
                    
                </div>
                <div className="subcontainer3" >
                      <div  className="caps-button-container" >
                       <div  className="caps-header" >
                       caps
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"ओ":"ो"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"ओ":"ो"}
                        
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"ए":"े"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"ए":"े"}
                        
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"अ":"्"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"अ":"्"}
                        
                        </div>
                      
                      </div>
                      <div  onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"इ":"ि"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"इ":"ि"}
                        
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"उ":"ु"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"उ":"ु"}
                        
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"फ":"प"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {capsLockEnable?"फ":"प"}
                        
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"ऱ":"र"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"ऱ":"र"}
                        
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"ख":"क"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"ख":"क"}
                        
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"थ":"त"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"थ":"त"}
                        
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"छ":"च"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"छ":"च"}
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"ठ": "ट"}`}`))}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"ठ": "ट"}
                        </div>
                      
                      </div>
                      <div  className="enter-button-container" >
                       <div className="enter-header" >
                       enter
                        </div>
                      
                      </div>
                   
                   
                </div>
                <div className="subcontainer4" >
                    <div className="shift-button-container" >
                       <div onClick={()=>setcapsLockEnable(!capsLockEnable)} className="shift-header" >
                       shift
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"f":"f"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"f":"f"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"ँ":"ं"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"ँ":"ं"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"ण":"म"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"ण":"म"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"ऩ":"न"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"ऩ":"न"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"ऴ":"व"}`}`));;setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"ऴ":"व"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"ळ":"ल"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"ळ":"ल"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"श":"स"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"श":"स"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"श":","}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"श":","}
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"।":"."}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"।":"."}
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"य़":"य"}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"य़":"य"}
                        </div>
                      
                    </div>
                    <div className="shift-button-container" >
                       <div className="shift-header" >
                       shift
                        </div>
                      
                    </div>
                    
                    
                </div>
                <div className="subcontainer5" >
                    <div className="key-container" >
                       <div className="key-content" >
                        
                        </div>
                      
                    </div>
                    <div className="key-container" >
                       <div className="key-content" >
                       control
                        </div>
                      
                    </div>
                    <div className="key-container" >
                       <div className="key-content" >
                       option
                        </div>
                      
                    </div>
                    <div className="command-button-container" >
                       <div className="command-header" >
                       command
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+` `}`));setcapsLockEnable(false)}} className="space-button-container" >
                       <div className="space-header" >
                       space
                        </div>
                      
                    </div>
                    <div className="key-container" >
                       <div className="key-content" >
                       
                        </div>
                      
                    </div>
                    <div className="key-container" >
                       <div className="key-content" >
                       
                        </div>
                      
                    </div>
                    <div className="key-container" >
                       <div className="key-content" >
                       
                        </div>
                      
                    </div>
                    
                    <div className="key-container" >
                       <div className="key-content" >
                       
                        </div>
                      
                    </div>
                    
                    <div className="key-container" >
                       <div className="key-content" >
                       
                        </div>
                      
                    </div>

                    <div className="key-container" >
                       <div className="key-content" >
                       
                        </div>
                      
                    </div>
                    
                    
                    
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default HindiKeyboard
