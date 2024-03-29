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
  const [controlEnable,setcontrolEnable]=useState(false)
  
  
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
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                        controlEnable?"-":"ॊ"
                      }`}`));setcapsLockEnable(false)}} className="key-container" >
                      <div  className="key-content" >
                      {
                        controlEnable?"-":"ॊ"
                      }
                      
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"१":"1"}`:`${capsLockEnable?"ऍ":"1"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                      
                      <div  className="key-content" >
                        {
                          controlEnable?`${controlEnable?"१":"1"}`:`${capsLockEnable?"ऍ":"1"}`
                        }
                      
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"२":"2"}`:`${capsLockEnable?"ॅ":"2"}`
                      }`}`));setcapsLockEnable(false)}} className="key-container" >
                      <div  className="key-content" >
                      
                      {
                          controlEnable?`${controlEnable?"२":"2"}`:`${capsLockEnable?"ॅ":"2"}`
                      }
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"३":"3"}`:`${capsLockEnable?"्र":"3"}`
                      }`}`));setcapsLockEnable(false)}} className="key-container" >
                      <div  className="key-content" >
                      
                      {
                          controlEnable?`${controlEnable?"३":"3"}`:`${capsLockEnable?"्र":"3"}`
                      }
                     
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"४":"4"}`:`${capsLockEnable?"र्":"4"}`
                      }`}`));setcapsLockEnable(false)}} className="key-container" >
                      <div  className="key-content" >
                      {
                          controlEnable?`${controlEnable?"४":"4"}`:`${capsLockEnable?"र्":"4"}`
                      }
                     
                      
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"५":"5"}`:`${capsLockEnable?"ज्ञ":"5"}`
                      }`}`));setcapsLockEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      {
                          controlEnable?`${controlEnable?"५":"5"}`:`${capsLockEnable?"ज्ञ":"5"}`
                      }
                     
                      
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"६":"6"}`:`${capsLockEnable?"त्र":"6"}`
                      }
                     `}`));setcapsLockEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      {
                          controlEnable?`${controlEnable?"६":"6"}`:`${capsLockEnable?"त्र":"6"}`
                      }
                     
                      
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"७":"7"}`:`${capsLockEnable?"क्ष":"7"}`
                      }`}`));setcapsLockEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      
                      {
                          controlEnable?`${controlEnable?"७":"7"}`:`${capsLockEnable?"क्ष":"7"}`
                      }
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"८":"8"}`:`${capsLockEnable?"श्र":"8"}`
                      }`}`));setcapsLockEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      {
                          controlEnable?`${controlEnable?"८":"8"}`:`${capsLockEnable?"श्र":"8"}`
                      }
                      
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"९":"9"}`:`${capsLockEnable?"(":"9"}`
                      }`}`));setcapsLockEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      
                      {
                          controlEnable?`${controlEnable?"९":"9"}`:`${capsLockEnable?"(":"9"}`
                      }
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"०":"0"}`:`${capsLockEnable?")":"0"}`
                      }`}`));setcapsLockEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      
                      {
                          controlEnable?`${controlEnable?"०":"0"}`:`${capsLockEnable?")":"0"}`
                      }
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"-"}`:`${capsLockEnable?"ः":"-"}`
                      }`}`));setcapsLockEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      
                      {
                          controlEnable?`${controlEnable?"-":"-"}`:`${capsLockEnable?"ः":"-"}`
                      }
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"ॄ":"ृ"}`:`${capsLockEnable?"ऋ":"ृ"}`
                      }`}`));setcapsLockEnable(false)}} className="key-container" >
                      <div className="key-content" >
                      
                      {
                          controlEnable?`${controlEnable?"ॄ":"ृ"}`:`${capsLockEnable?"ऋ":"ृ"}`
                      }
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
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"औ":"ौ"}`
                      }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                        
                        {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"औ":"ौ"}`
                      }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऐ":"ै"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऐ":"ै"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"आ":"ा"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"आ":"ा"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"ॣ":"ृ"}`:`${capsLockEnable?"ई":"ी"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"ॣ":"ृ"}`:`${capsLockEnable?"ई":"ी"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=> {dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऊ":"ू"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऊ":"ू"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"भ":"ब"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"भ":"ब"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ङ":"ह"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ङ":"ह"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"ग़":"ृ"}`:`${capsLockEnable?"घ":"ग"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"ग़":"ृ"}`:`${capsLockEnable?"घ":"ग"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ध":"द"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ध":"द"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"ज़":"ृ"}`:`${capsLockEnable?"झ":"ज"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"ज़":"ृ"}`:`${capsLockEnable?"झ":"ज"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"ड़":"ृ"}`:`${capsLockEnable?"ढ":"ड"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                        
                        {
                          controlEnable?`${controlEnable?"ड़":"ृ"}`:`${capsLockEnable?"ढ":"ड"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ञ":"़"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                        
                        {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ञ":"़"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऑ":"ॉ"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                        
                        {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऑ":"ॉ"}`
                        }
                        </div>
                      
                    </div>
                    
                    
                </div>
                <div className="subcontainer3" >
                      <div  className="caps-button-container" >
                       <div  className="caps-header" >
                       caps
                       </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ओ":"ो"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ओ":"ो"}`
                        }
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ए":"े"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ए":"े"}`
                        }
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"अ":"्"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                      
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"अ":"्"}`
                        }
                        </div>
                      
                      </div>
                      <div  onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"ॢ":"ृ"}`:`${capsLockEnable?"इ":"ि"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"ॢ":"ृ"}`:`${capsLockEnable?"इ":"ि"}`
                        }
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"उ":"ु"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"उ":"ु"}`
                        }
                      
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"फ":"प"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"फ":"प"}`
                        }
                      
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऱ":"र"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऱ":"र"}`
                        }
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"क़":"ृ"}`:`${capsLockEnable?"ख":"क"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"क़":"ृ"}`:`${capsLockEnable?"ख":"क"}`
                        }
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"थ":"त"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"थ":"त"}`
                        }
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"":"ृ"}`:`${capsLockEnable?"छ":"च"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"f":"ृ"}`:`${capsLockEnable?"छ":"च"}`
                        }
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ठ": "ट"}`
                        }`}`))}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ठ": "ट"}`
                        }
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
                       <div onClick={()=>{setcapsLockEnable(!capsLockEnable);setcontrolEnable(false)}} className="shift-header" >
                       shift
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऎ":"ॆ"}`
                        }`}`))} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऎ":"ॆ"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ँ":"ं"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ँ":"ं"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ण":"म"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ण":"म"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऩ":"न"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऩ":"न"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऴ":"व"}`
                        }`}`));;setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऴ":"व"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ळ":"ल"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ळ":"ल"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"श":"स"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"श":"स"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"॰":"ृ"}`:`${capsLockEnable?"श":","}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"॰":"ृ"}`:`${capsLockEnable?"श":","}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"।":"."}`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"॥":"ृ"}`:`${capsLockEnable?"।":"."}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"य़":"य"}`
                        }`}`));setcapsLockEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"य़":"य"}`
                        }
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
                       <div onClick={()=>{setcontrolEnable(!controlEnable);setcapsLockEnable(false)}} className="key-content" >
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
