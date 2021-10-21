import React,{useState,useEffect,useRef} from 'react'
import {EnglishkeyboardkeyPress} from '../Functions/functions'
import '../Css/EnglishKeyboard.css'
import {keyPress,HindiKeyboardPress} from '../Functions/functions'
import {concatCharacter} from '../Redux/EnglishKeyboardActions'
import {useDispatch,useSelector} from 'react-redux'
function EnglishKeyboard() {
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
                  <div className="language-dropdown-selection-header" >English</div>
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
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"~":"`"}`}`));setshiftEnable(false)}} className="key-container" >
                      <div  className="key-content" >
                      {shiftEnable?"~":"`"} 
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"!":"1"}`}`));setshiftEnable(false)}} className="key-container" >
                      <div  className="key-content" >
                      {shiftEnable?"!":"1"} 
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"@":"2"}`}`));setshiftEnable(false)}} className="key-container" >
                      <div  className="key-content" >
                      {shiftEnable?"@":"2"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"#":"3"}`}`));setshiftEnable(false)}} className="key-container" >
                      <div  className="key-content" >
                      {shiftEnable?"#":"3"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"$":"4"}`}`));setshiftEnable(false)}} className="key-container" >
                      <div  className="key-content" >
                      {shiftEnable?"$":"4"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"%":"5"}`}`));setshiftEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      {shiftEnable?"%":"5"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"^":"6"}`}`));setshiftEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      {shiftEnable?"^":"6"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"&":"7"}`}`));setshiftEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      {shiftEnable?"&":"7"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"*":"8"}`}`));setshiftEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      {shiftEnable?"*":"8"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"(":"9"}`}`));setshiftEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      {shiftEnable?"(":"9"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?")":"0"}`}`));setshiftEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      {shiftEnable?")":"0"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"_":"-"}`}`));setshiftEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      {shiftEnable?"_":"-"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"+":"="}`}`));setshiftEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      {shiftEnable?"+":"="}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(word.slice(0,word.length-1)))}} className="delete-button-container" >
                      <div  className="delete-header" >
                      delete
                      </div>
                      
                    </div>
                </div>
                <div className="subcontainer2" >
                    <div onClick={()=>{dispatch(concatCharacter(`${word+'  '}`));setshiftEnable(false)}} className="tab-button-container" >
                       <div className="tab-header" >
                        tab
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"Q":"q"}`:`${capsLockEnable?"Q":"q"}`}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                        {shiftEnable?`${shiftEnable?"Q":"q"}`:`${capsLockEnable?"Q":"q"}`} 
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"W":"w"}`:`${capsLockEnable?"W":"w"}`}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {shiftEnable?`${shiftEnable?"W":"w"}`:`${capsLockEnable?"W":"w"}`} 
                       
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"E":"e"}`:`${capsLockEnable?"E":"e"}`}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"E":"e"}`:`${capsLockEnable?"E":"e"}`} 
                       
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"R":"r"}`:`${capsLockEnable?"R":"r"}`}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"R":"r"}`:`${capsLockEnable?"R":"r"}`}
                        </div>
                      
                    </div>
                    <div onClick={()=> {dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"T":"t"}`:`${capsLockEnable?"T":"t"}`}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"T":"t"}`:`${capsLockEnable?"T":"t"}`}
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"Y":"y"}`:`${capsLockEnable?"Y":"y"}`}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"Y":"y"}`:`${capsLockEnable?"Y":"y"}`}
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"Y":"y"}`:`${capsLockEnable?"U":"u"}`}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"U":"u"}`:`${capsLockEnable?"U":"u"}`}
                      
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"I":"i"}`:`${capsLockEnable?"I":"i"}`}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"I":"i"}`:`${capsLockEnable?"I":"i"}`}
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"O":"o"}`:`${capsLockEnable?"O":"o"}`}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {shiftEnable?`${shiftEnable?"O":"o"}`:`${capsLockEnable?"O":"o"}`}
                      
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"P":"p"}`:`${capsLockEnable?"P":"p"}`}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"P":"p"}`:`${capsLockEnable?"P":"p"}`}
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"{":"["}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                        {shiftEnable?"{":"["}
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"}":"]"}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                        {shiftEnable?"}":"]"}
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"|":<>\</>} `}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                        {shiftEnable?"|":<>\</>} 
                        </div>
                      
                    </div>
                    
                    
                </div>
                <div className="subcontainer3" >
                      <div onClick={()=>{setcapsLockEnable(!capsLockEnable);setshiftEnable(false)}} className="caps-button-container" >
                       <div  className="caps-header" >
                       caps
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"A":"a"}`:`${capsLockEnable?"A":"a"}`} `}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {shiftEnable?`${shiftEnable?"A":"a"}`:`${capsLockEnable?"A":"a"}`} 
                        
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"S":"s"}`:`${capsLockEnable?"S":"s"}`}  `}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {shiftEnable?`${shiftEnable?"S":"s"}`:`${capsLockEnable?"S":"s"}`}  
                        
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"D":"d"}`:`${capsLockEnable?"D":"d"}`}  `}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"D":"d"}`:`${capsLockEnable?"D":"d"}`}  
                        </div>
                      
                      </div>
                      <div  onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"F":"f"}`:`${capsLockEnable?"F":"f"}`}  `}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"F":"f"}`:`${capsLockEnable?"F":"f"}`}  
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"G":"g"}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"G":"g"}`:`${capsLockEnable?"G":"g"}`}  
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"H":"h"}`:`${capsLockEnable?"H":"h"}`}  `}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       
                       {shiftEnable?`${shiftEnable?"H":"h"}`:`${capsLockEnable?"H":"h"}`}  
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"J":"j"}`:`${capsLockEnable?"J":"j"}`}  `}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"J":"j"}`:`${capsLockEnable?"J":"j"}`}  
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"K":"k"}`:`${capsLockEnable?"K":"k"}`}  `}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"K":"k"}`:`${capsLockEnable?"K":"k"}`}  
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"L":"l"}`:`${capsLockEnable?"L":"l"}`}  `}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {shiftEnable?`${shiftEnable?"L":"l"}`:`${capsLockEnable?"L":"l"}`}  
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?":":";"}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {shiftEnable?":":";"}
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?<>"</>:"'"}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {shiftEnable?<>"</>:"'"}
                        </div>
                      
                      </div>
                      <div  className="enter-button-container" >
                       <div className="enter-header" >
                       enter
                        </div>
                      
                      </div>
                   
                   
                </div>
                <div className="subcontainer4" >
                    <div onClick={()=>{setshiftEnable(!shiftEnable);setcapsLockEnable(false)}} className="shift-button-container" >
                       <div  className="shift-header" >
                       shift
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"Z":"z"}`:`${capsLockEnable?"Z":"z"}`}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                        
                        {shiftEnable?`${shiftEnable?"Z":"z"}`:`${capsLockEnable?"Z":"z"}`}   
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"X":"x"}`:`${capsLockEnable?"X":"x"}`}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"X":"x"}`:`${capsLockEnable?"X":"x"}`}
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"C":"c"}`:`${capsLockEnable?"C":"c"}`} `}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"C":"c"}`:`${capsLockEnable?"C":"c"}`} 
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"V":"v"}`:`${capsLockEnable?"V":"v"}`} `}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"V":"v"}`:`${capsLockEnable?"V":"v"}`} 
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"B":"b"}`:`${capsLockEnable?"B":"b"}`} `}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"B":"b"}`:`${capsLockEnable?"B":"b"}`} 
                       
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"N":"n"}`:`${capsLockEnable?"N":"n"}`}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"N":"n"}`:`${capsLockEnable?"N":"n"}`} 
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"M":"m"}`:`${capsLockEnable?"M":"m"}`}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"M":"m"}`:`${capsLockEnable?"M":"m"}`}
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"<":","}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {shiftEnable?"<":","} 
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?">":"."}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {shiftEnable?">":"."} 
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"?":"/"}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {shiftEnable?"?":"/"}
                        </div>
                      
                    </div>
                    <div onClick={()=>{setshiftEnable(!shiftEnable);setcapsLockEnable(false)}}  className="shift-button-container" >
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
                    <div onClick={()=>dispatch(concatCharacter(`${word+` `}`))} className="space-button-container" >
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

export default EnglishKeyboard
