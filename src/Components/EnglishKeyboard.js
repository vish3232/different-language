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
                    <div onClick={()=>dispatch(concatCharacter(`${word+'`'}`))} className="key-container" >
                      <div  className="key-content" >
                      `
                      </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+'1'}`))} className="key-container" >
                      <div  className="key-content" >
                      1
                      </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+'2'}`))} className="key-container" >
                      <div  className="key-content" >
                      2
                      </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+'3'}`))} className="key-container" >
                      <div  className="key-content" >
                      3
                      </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+'4'}`))} className="key-container" >
                      <div  className="key-content" >
                      4
                      </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+'5'}`))} className="key-container" >
                      <div className="key-content" >
                      5
                      </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+'6'}`))} className="key-container" >
                      <div className="key-content" >
                      6
                      </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+'7'}`))} className="key-container" >
                      <div className="key-content" >
                      7
                      </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+'8'}`))} className="key-container" >
                      <div className="key-content" >
                      8
                      </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+'9'}`))} className="key-container" >
                      <div className="key-content" >
                      9
                      </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+'0'}`))} className="key-container" >
                      <div className="key-content" >
                      0
                      </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+'-'}`))} className="key-container" >
                      <div className="key-content" >
                      -
                      </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+'='}`))} className="key-container" >
                      <div className="key-content" >
                      =
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(word.slice(0,word.length-1)))}} className="delete-button-container" >
                      <div  className="delete-header" >
                      delete
                      </div>
                      
                    </div>
                </div>
                <div className="subcontainer2" >
                    <div onClick={()=>dispatch(concatCharacter(`${word+'  '}`))} className="tab-button-container" >
                       <div className="tab-header" >
                        tab
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"Q":"q"}`}`))} className="key-container" >
                       <div className="key-content" >
                        {capsLockEnable?"Q":"q"}
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"W":"w"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"W":"w"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"E":"e"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"E":"e"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"R":"r"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"R":"r"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=> dispatch(concatCharacter(`${word+`${capsLockEnable?"T":"t"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"T":"t"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"Y":"y"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"Y":"y"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"U":"u"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"U":"u"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"I":"i"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"I":"i"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"O":"o"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"O":"o"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"P":"p"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"P":"p"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`[`}`))} className="key-container" >
                       <div className="key-content" >
                        [
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`]`}`))} className="key-container" >
                       <div className="key-content" >
                        ]
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+` `}`))} className="key-container" >
                       <div className="key-content" >
                        \
                        </div>
                      
                    </div>
                    
                    
                </div>
                <div className="subcontainer3" >
                      <div onClick={()=>setcapsLockEnable(!capsLockEnable)} className="caps-button-container" >
                       <div  className="caps-header" >
                       caps
                        </div>
                      
                      </div>
                      <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"A":"a"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"A":"a"}
                        
                        </div>
                      
                      </div>
                      <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"S":"s"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"S":"s"}
                        
                        </div>
                      
                      </div>
                      <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"D":"d"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"D":"d"}
                        
                        </div>
                      
                      </div>
                      <div  onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"F":"f"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"F":"f"}
                        
                        </div>
                      
                      </div>
                      <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"G":"g"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"G":"g"}
                        
                        </div>
                      
                      </div>
                      <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"H":"h"}`}`))} className="key-container" >
                       <div className="key-content" >
                       
                       {capsLockEnable?"H":"h"}
                        
                        </div>
                      
                      </div>
                      <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"J":"j"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"J":"j"}
                        
                        </div>
                      
                      </div>
                      <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"K":"k"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"K":"k"}
                        
                        </div>
                      
                      </div>
                      <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"L":"l"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"L":"l"}
                        
                        </div>
                      
                      </div>
                      <div onClick={()=>dispatch(concatCharacter(`${word+`;`}`))} className="key-container" >
                       <div className="key-content" >
                       ;
                        </div>
                      
                      </div>
                      <div onClick={()=>dispatch(concatCharacter(`${word+`'`}`))} className="key-container" >
                       <div className="key-content" >
                       '
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
                       <div onClick={()=>setshiftEnable(!shiftEnable)} className="shift-header" >
                       shift
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"Z":"z"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"Z":"z"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"X":"x"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"X":"x"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"C":"c"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"C":"c"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"V":"v"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"V":"v"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"B":"b"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"B":"b"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"N":"n"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"N":"n"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`${capsLockEnable?"M":"m"}`}`))} className="key-container" >
                       <div className="key-content" >
                       {capsLockEnable?"M":"m"}
                        
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`,`}`))} className="key-container" >
                       <div className="key-content" >
                       ,
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`.`}`))} className="key-container" >
                       <div className="key-content" >
                       .
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`/`}`))} className="key-container" >
                       <div className="key-content" >
                       /
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
