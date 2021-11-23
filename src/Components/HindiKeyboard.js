import React,{useState,useEffect,useRef} from 'react'
import {EnglishkeyboardkeyPress} from '../Functions/functions'
import '../Css/EnglishKeyboard.css'
import {keyPress,HindiKeyboardPress} from '../Functions/functions'
import {concatCharacter,currentKey} from '../Redux/EnglishKeyboardActions'
import {useDispatch,useSelector} from 'react-redux'
function HindiKeyboard() {
  const dispatch=useDispatch()
  const word = useSelector(state => state.EnglishKeyboard.word)
  const selectedKey = useSelector(state => state.EnglishKeyboard.selectedKey)
    const [text,setText]=useState("")
    const [pressed, setPressed] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})
  const [capsLockEnable,setcapsLockEnable]=useState(false)
  const [controlEnable,setcontrolEnable]=useState(false)
  const [isVirtual,setVirtual]=useState(false)
  const ref = useRef()
  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
    }
  }, [position])
  
  useEffect(() => {
  }, [text])

  const HindiKeyboardPress=(e)=>{
    console.log(e.key)
    if(e.key==="Control"){
      setcontrolEnable(!controlEnable)
        
      
      
    }else{
    if(e.key===" "){
      dispatch(currentKey("space"))
      dispatch(concatCharacter(`${word+" "}`))
      setTimeout(() => {   // ***
        dispatch(currentKey(""))
        setcontrolEnable(false)
    }, 2000);
    }else
    if(e.key==="Enter"){
      dispatch(currentKey("enter"))
      dispatch(concatCharacter(`${word+"\n"}`))
      setTimeout(() => {   // ***
        dispatch(currentKey(""))
        setcontrolEnable(false)
    }, 2000);
    }else
    if(e.key==="Tab"){
      dispatch(currentKey("tab"))
      dispatch(concatCharacter(`${word+'  '}`))
      setTimeout(() => {   // ***
        dispatch(currentKey(""))
        setcontrolEnable(false)
    }, 2000);
    }else
    if(e.key==="CapsLock"){
      setcapsLockEnable(true)
      setTimeout(() => {   // ***
        dispatch(currentKey(""))
        setcontrolEnable(false)
    }, 2000);
    }else
    if(e.key==="Shift"){
      setcapsLockEnable(true)
      setTimeout(() => {   // ***
        dispatch(currentKey(""))
       setcapsLockEnable(false)
    }, 2000);
    }else
    
      if (e.key === "`") {
        dispatch(currentKey("ॊ"))
        dispatch(concatCharacter(`${word+"ॊ"}`))
       
        } else if (e.key === "1") {
          dispatch(currentKey("1"))
        dispatch(concatCharacter(`${word+"1"}`))
        
        } else if (e.key === "2") {
          dispatch(currentKey("2"))
          dispatch(concatCharacter(`${word+"2"}`))
          
        } else if (e.key === "3") {
          dispatch(currentKey("3"))
        dispatch(concatCharacter(`${word+"3"}`))
        
        } else if (e.key === "4") {
          dispatch(currentKey("4"))
          dispatch(concatCharacter(`${word+"4"}`))
          
        } else if (e.key === "5") {
          dispatch(currentKey("5"))
          dispatch(concatCharacter(`${word+"5"}`))
          
        } else if (e.key === "6") {
          dispatch(currentKey("6"))
        dispatch(concatCharacter(`${word+"6"}`))
        
        } else if (e.key === "7") {
          dispatch(currentKey("7"))
        dispatch(concatCharacter(`${word+"7"}`))
        
        } else if (e.key === "8") {
          dispatch(currentKey("8"))
        dispatch(concatCharacter(`${word+"8"}`))
        
        } else if (e.key === "9") {
          dispatch(currentKey("9"))
        dispatch(concatCharacter(`${word+"9"}`))
        
        } else if (e.key === "0") {
          dispatch(currentKey("0"))
        dispatch(concatCharacter(`${word+"0"}`))
        
        } else if (e.key === "-") {
          dispatch(currentKey("-"))
        dispatch(concatCharacter(`${word+"-"}`))
        
        } else if (e.key === "=") {
          dispatch(currentKey("="))
        dispatch(concatCharacter(`${word+"="}`))
        
        } else if (e.key === "a") {
          dispatch(currentKey("ो"))
          dispatch(concatCharacter(`${word+"ो"}`))
          
        } else if (e.key === "s") {
          dispatch(currentKey("े"))
          dispatch(concatCharacter(`${word+"े"}`))
        
        } else if (e.key === "d") {
          dispatch(currentKey("्"))
          dispatch(concatCharacter(`${word+"्"}`))
        
        } else if (e.key === "f") {
          if(controlEnable){
            dispatch(currentKey("ॢ"))
            dispatch(concatCharacter(`${word+"ॢ"}`))
           
          }else{
          dispatch(currentKey("ि"))
          dispatch(concatCharacter(`${word+"ि"}`))
          }
        } else if (e.key === "g") {
          dispatch(currentKey("ु"))
          dispatch(concatCharacter(`${word+"ु"}`))
        
        } else if (e.key === "h") {
          dispatch(currentKey("प"))
          dispatch(concatCharacter(`${word+"प"}`))
        
        } else if (e.key === "j") {
          dispatch(currentKey("र"))
          dispatch(concatCharacter(`${word+"र"}`))
        
        } else if (e.key === "k") {
          if(controlEnable){
            dispatch(currentKey("क़"))
            dispatch(concatCharacter(`${word+"क़"}`))
           
          }else{
          dispatch(currentKey("क"))
          dispatch(concatCharacter(`${word+"क"}`))
          }
        } else if (e.key === "l") {
          dispatch(currentKey("त"))
          dispatch(concatCharacter(`${word+"त"}`))
        
        } else if (e.key === ";") {
          dispatch(currentKey("च"))
          dispatch(concatCharacter(`${word+"च"}`))
          
        } else if (e.key === "'") {
          dispatch(currentKey("ट"))
          dispatch(concatCharacter(`${word+"ट"}`))
        
        } else if (e.key === "q") {
          dispatch(currentKey("ौ"))
          dispatch(concatCharacter(`${word+"ौ"}`))
        
        } else if (e.key === "w") {
          dispatch(currentKey("ै"))
          dispatch(concatCharacter(`${word+"ै"}`))
      
        } else if (e.key === "e") {
          dispatch(currentKey("ा"))
          dispatch(concatCharacter(`${word+"ा"}`))
      
        } else if (e.key === "r") {
          if(controlEnable){
            dispatch(currentKey("ॣ"))
            dispatch(concatCharacter(`${word+"ॣ"}`))
            
          }else{
          dispatch(currentKey("ी"))
          dispatch(concatCharacter(`${word+"ी"}`))
          }
        } else if (e.key === "t") {
          dispatch(currentKey("ू"))
          dispatch(concatCharacter(`${word+"ू"}`))
      
        } else if (e.key === "y") {
          dispatch(currentKey("ब"))
          dispatch(concatCharacter(`${word+"ब"}`))
      
        } else if (e.key === "u") {
          dispatch(currentKey("ह"))
          dispatch(concatCharacter(`${word+"ह"}`))
      
        } else if (e.key === "i") {
          if(controlEnable){
            dispatch(currentKey("ग़"))
            dispatch(concatCharacter(`${word+"ग़"}`))
        
          }else{
          dispatch(currentKey("ग"))
          dispatch(concatCharacter(`${word+"ग"}`))
          }
      
        } else if (e.key === "o") {
          dispatch(currentKey("द"))
          dispatch(concatCharacter(`${word+"द"}`))
      
        } else if (e.key === "p") {
          if(controlEnable){
            dispatch(currentKey("ज़"))
            dispatch(concatCharacter(`${word+"ज़"}`))
        
          }else{
          dispatch(currentKey("ज"))
          dispatch(concatCharacter(`${word+"ज"}`))
          }
        } else if (e.key === "[") {
          if(controlEnable){
            dispatch(currentKey("ड़"))
          dispatch(concatCharacter(`${word+"ड़"}`))
      
          }else{
          dispatch(currentKey("ड"))
          dispatch(concatCharacter(`${word+"ड"}`))
          }
        } else if (e.key === "]") {
          dispatch(currentKey("़"))
          dispatch(concatCharacter(`${word+"़"}`))
      
        } else if (e.keyCode === 220) {
          dispatch(currentKey("ॉ"))
          dispatch(concatCharacter(`${word+"ॉ"}`))
      
        } else if (e.key === "z") {
          dispatch(currentKey("ॆ"))
          dispatch(concatCharacter(`${word+"ॆ"}`))
          
        } else if (e.key === "x") {
          dispatch(currentKey("ं"))
          dispatch(concatCharacter(`${word+"ं"}`))
      
        } else if (e.key === "c") {
          dispatch(currentKey("म"))
          dispatch(concatCharacter(`${word+"म"}`))
      
        } else if (e.key === "v") {
          dispatch(currentKey("न"))
          dispatch(concatCharacter(`${word+"न"}`))
      
        } else if (e.key === "b") {
          dispatch(currentKey("व"))
          dispatch(concatCharacter(`${word+"व"}`))
      
        } else if (e.key === "n") {
          dispatch(currentKey("ल"))
          dispatch(concatCharacter(`${word+"ल"}`))
      
        } else if (e.key === "m") {
          dispatch(currentKey("स"))
          dispatch(concatCharacter(`${word+"स"}`))
      
        } else if (e.key === ",") {
          if(controlEnable){
            dispatch(currentKey("॰"))
            dispatch(concatCharacter(`${word+"॰"}`))
            
          }else{
          dispatch(currentKey(","))
          dispatch(concatCharacter(`${word+","}`))
          }
        } else if (e.key === ".") {
          if(controlEnable){
            dispatch(currentKey("॥"))
            dispatch(concatCharacter(`${word+"॥"}`))
            
          }else{
          dispatch(currentKey("."))
          dispatch(concatCharacter(`${word+"."}`))
          }
        } else if (e.key === "/") {
          dispatch(currentKey("य"))
          dispatch(concatCharacter(`${word+"य"}`))
      
        } else if (e.key === "~") {
          dispatch(currentKey("ऒ"))
          dispatch(concatCharacter(`${word+"ऒ"}`))
      
        } else if (e.key === "!") {
          dispatch(currentKey("ऍ"))
          dispatch(concatCharacter(`${word+"ऍ"}`))
      
        } else if (e.key === "@") {
          dispatch(currentKey("ॅ"))
          dispatch(concatCharacter(`${word+"ॅ"}`))
      
        } else if (e.key === "#") {
          dispatch(currentKey("्र"))
          dispatch(concatCharacter(`${word+"्र"}`))
      
        } else if (e.key === "$") {
          dispatch(currentKey("र्"))
          dispatch(concatCharacter(`${word+"र्"}`))
      
        } else if (e.key === "%") {
          dispatch(currentKey("ज्ञ"))
          dispatch(concatCharacter(`${word+"ज्ञ"}`))
      
        } else if (e.key === "^") {
          dispatch(currentKey("क्ष"))
          dispatch(concatCharacter(`${word+"क्ष"}`))
      
        } else if (e.key === "*") {
          dispatch(currentKey("श्र"))
          dispatch(concatCharacter(`${word+"श्र"}`))
      
        } else if (e.key === "(") {
          dispatch(currentKey("("))
          dispatch(concatCharacter(`${word+"("}`))
      
        } else if (e.key === ")") {
          dispatch(currentKey(")"))
          dispatch(concatCharacter(`${word+")"}`))
      
        } else if (e.key === "_") {
          dispatch(currentKey("ः"))
          dispatch(concatCharacter(`${word+"ः"}`))
      
        } else if (e.key === "+") {
          dispatch(currentKey("ऋ"))
          dispatch(concatCharacter(`${word+"ऋ"}`))
      
        } else if (e.key === "Q") {
          dispatch(currentKey("औ"))
          dispatch(concatCharacter(`${word+"औ"}`))
      
        } else if (e.key === "W") {
          dispatch(currentKey("ऐ"))
          dispatch(concatCharacter(`${word+"ऐ"}`))
      
        } else if (e.key === "E") {
          dispatch(currentKey("आ"))
          dispatch(concatCharacter(`${word+"आ"}`))
      
        } else if (e.key === "R") {
          dispatch(currentKey("ई"))
          dispatch(concatCharacter(`${word+"ई"}`))
      
        } else if (e.key === "T") {
          dispatch(currentKey("ऊ"))
          dispatch(concatCharacter(`${word+"ऊ"}`))
      
        } else if (e.key === "Y") {
          dispatch(currentKey("भ"))
          dispatch(concatCharacter(`${word+"भ"}`))
      
        } else if (e.key === "U") {
          dispatch(currentKey("ङ"))
          dispatch(concatCharacter(`${word+"ङ"}`))
      
        } else if (e.key === "I") {
          dispatch(currentKey("घ"))
          dispatch(concatCharacter(`${word+"घ"}`))
      
        } else if (e.key === "O") {
          dispatch(currentKey("ध"))
          dispatch(concatCharacter(`${word+"ध"}`))
      
        } else if (e.key === "P") {
          dispatch(currentKey("झ"))
          dispatch(concatCharacter(`${word+"झ"}`))
      
        } else if (e.key === "Delete" || e.key === "Backspace") {
          dispatch(concatCharacter(word.slice(0,word.length-1)))
          dispatch(currentKey("delete"))
         
        } else if (e.key === "{") {
          dispatch(currentKey("ढ"))
          dispatch(concatCharacter(`${word+"ढ"}`))
      
        } else if (e.key === "}") {
          dispatch(currentKey("ञ"))
          dispatch(concatCharacter(`${word+"ञ"}`))
      
        } else if (e.key === "|") {
          dispatch(currentKey("ऑ"))
          dispatch(concatCharacter(`${word+"ऑ"}`))
      
        } else if (e.key === "A") {
          dispatch(currentKey("ओ"))
          dispatch(concatCharacter(`${word+"ओ"}`))
      
        } else if (e.key === "S") {
          dispatch(currentKey("ए"))
          dispatch(concatCharacter(`${word+"ए"}`))
      
        } else if (e.key === "D") {
          dispatch(currentKey("अ"))
          dispatch(concatCharacter(`${word+"अ"}`))
      
        } else if (e.key === "F") {
          dispatch(currentKey("इ"))
          dispatch(concatCharacter(`${word+"इ"}`))
      
        } else if (e.key === "G") {
          dispatch(currentKey("उ"))
          dispatch(concatCharacter(`${word+"उ"}`))
      
        }else if (e.key === "H") {
          dispatch(currentKey("फ"))
          dispatch(concatCharacter(`${word+"फ"}`))
      
        }else if (e.key === "J") {
          dispatch(currentKey("ऱ"))
          dispatch(concatCharacter(`${word+"ऱ"}`))
      
        }else if (e.key === "K") {
          dispatch(currentKey("ख"))
          dispatch(concatCharacter(`${word+"ख"}`))
      
        }else if (e.key === "L") {
          dispatch(currentKey("थ"))
          dispatch(concatCharacter(`${word+"थ"}`))
      
        }else if (e.key === ":") {
          dispatch(currentKey("छ"))
          dispatch(concatCharacter(`${word+"छ"}`))
      
        }else if (e.keyCode === 222) {
          dispatch(currentKey("ठ"))
          dispatch(concatCharacter(`${word+"ठ"}`))
      
        }else if (e.key === "Z") {
          dispatch(currentKey("ऎ"))
          dispatch(concatCharacter(`${word+"ऎ"}`))
      
        }else if (e.key === "X") {
          dispatch(currentKey("ँ"))
          dispatch(concatCharacter(`${word+"ँ"}`))
      
        }else if (e.key === "C") {
          dispatch(currentKey("ण"))
          dispatch(concatCharacter(`${word+"ण"}`))
      
        }else if (e.key === "V") {
          dispatch(currentKey("ऩ"))
          dispatch(concatCharacter(`${word+"ऩ"}`))
      
        }else if (e.key === "B") {
          dispatch(currentKey("ऴ"))
          dispatch(concatCharacter(`${word+"ऴ"}`))
      
        }else if (e.key === "N") {
          dispatch(currentKey("ळ"))
          dispatch(concatCharacter(`${word+"ळ"}`))
      
        }else if (e.key === "M") {
          dispatch(currentKey("श"))
          dispatch(concatCharacter(`${word+"श"}`))
      
        }else if (e.key === "<") {
          dispatch(currentKey("ष"))
          dispatch(concatCharacter(`${word+"ष"}`))
      
        }else if (e.key === ">") {
          dispatch(currentKey("।"))
          dispatch(concatCharacter(`${word+"।"}`))
      
        }else if (e.key === "?") {
          dispatch(currentKey("य़"))
          dispatch(concatCharacter(`${word+"य़"}`))
      
        }else if (e.key === " ") {
          dispatch(currentKey(" "))
          dispatch(concatCharacter(`${word+" "}`))
      
        }
      }
  }
  
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
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}} >
          <input 
          onKeyDown={(e)=>{HindiKeyboardPress(e)}}
            value={word} placeholder="search" type="text" className="search-input" />
          <div onClick={()=>setVirtual(!isVirtual)} >virtual keyboard</div>
        </div>
        {
          isVirtual?
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
                      }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                        controlEnable?"-":"ॊ"
                      }`?"key-container key-container-active":"key-container"}  >
                      <div  className="key-content" >
                      {
                        controlEnable?"-":"ॊ"
                      }
                      
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"१":"1"}`:`${capsLockEnable?"ऍ":"1"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${controlEnable?`${controlEnable?"१":"1"}`:`${capsLockEnable?"ऍ":"1"}`}`?"key-container key-container-active":"key-container"}  >
                      
                      <div  className="key-content" >
                        {
                          controlEnable?`${controlEnable?"१":"1"}`:`${capsLockEnable?"ऍ":"1"}`
                        }
                      
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"२":"2"}`:`${capsLockEnable?"ॅ":"2"}`
                      }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"२":"2"}`:`${capsLockEnable?"ॅ":"2"}`
                      }`?"key-container key-container-active" :"key-container"} >
                      <div  className="key-content" >
                      
                      {
                          controlEnable?`${controlEnable?"२":"2"}`:`${capsLockEnable?"ॅ":"2"}`
                      }
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"३":"3"}`:`${capsLockEnable?"्र":"3"}`
                      }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"३":"3"}`:`${capsLockEnable?"्र":"3"}`
                      }`?"key-container key-container-active":"key-container"}  >
                      <div  className="key-content" >
                      
                      {
                          controlEnable?`${controlEnable?"३":"3"}`:`${capsLockEnable?"्र":"3"}`
                      }
                     
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"४":"4"}`:`${capsLockEnable?"र्":"4"}`
                      }`}`));setcapsLockEnable(false)}} className={selectedKey===`${    controlEnable?`${controlEnable?"४":"4"}`:`${capsLockEnable?"र्":"4"}`
                      }`?"key-container key-container-active":"key-container"} >
                      <div  className="key-content" >
                      {
                          controlEnable?`${controlEnable?"४":"4"}`:`${capsLockEnable?"र्":"4"}`
                      }
                     
                      
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"५":"5"}`:`${capsLockEnable?"ज्ञ":"5"}`
                      }`}`));setcapsLockEnable(false)}} className={selectedKey===`${    controlEnable?`${controlEnable?"५":"5"}`:`${capsLockEnable?"ज्ञ":"5"}`}`?"key-container key-container-active": "key-container"} >
                      <div className="key-content" >
                      {
                          controlEnable?`${controlEnable?"५":"5"}`:`${capsLockEnable?"ज्ञ":"5"}`
                      }
                     
                      
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"६":"6"}`:`${capsLockEnable?"त्र":"6"}`
                      }
                     `}`));setcapsLockEnable(false)}} className={selectedKey===`${    controlEnable?`${controlEnable?"६":"6"}`:`${capsLockEnable?"त्र":"6"}`
                     }`?"key-container key-container-active":"key-container"} >
                      <div className="key-content" >
                      {
                          controlEnable?`${controlEnable?"६":"6"}`:`${capsLockEnable?"त्र":"6"}`
                      }
                     
                      
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"७":"7"}`:`${capsLockEnable?"क्ष":"7"}`
                      }`}`));setcapsLockEnable(false)}} className={selectedKey===`${    controlEnable?`${controlEnable?"७":"7"}`:`${capsLockEnable?"क्ष":"7"}`
                      }`?"key-container key-container-active":"key-container"} >
                      <div className="key-content" >
                      
                      {
                          controlEnable?`${controlEnable?"७":"7"}`:`${capsLockEnable?"क्ष":"7"}`
                      }
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"८":"8"}`:`${capsLockEnable?"श्र":"8"}`
                      }`}`));setcapsLockEnable(false)}} className={selectedKey===`${controlEnable?`${controlEnable?"८":"8"}`:`${capsLockEnable?"श्र":"8"}`}`?"key-container key-container-active":"key-container"} >
                      <div className="key-content" >
                      {
                          controlEnable?`${controlEnable?"८":"8"}`:`${capsLockEnable?"श्र":"8"}`
                      }
                      
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"९":"9"}`:`${capsLockEnable?"(":"9"}`
                      }`}`));setcapsLockEnable(false)}} className={selectedKey===`${controlEnable?`${controlEnable?"९":"9"}`:`${capsLockEnable?"(":"9"}`
                     }`?"key-container key-container-active":"key-container"} >
                      <div className="key-content" >
                      
                      {
                          controlEnable?`${controlEnable?"९":"9"}`:`${capsLockEnable?"(":"9"}`
                      }
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"०":"0"}`:`${capsLockEnable?")":"0"}`
                      }`}`));setcapsLockEnable(false)}} className={selectedKey===`${    controlEnable?`${controlEnable?"०":"0"}`:`${capsLockEnable?")":"0"}`
                      }`?"key-container key-container-active": "key-container"} >
                      <div className="key-content" >
                      
                      {
                          controlEnable?`${controlEnable?"०":"0"}`:`${capsLockEnable?")":"0"}`
                      }
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"-"}`:`${capsLockEnable?"ः":"-"}`
                      }`}`));setcapsLockEnable(false)}} className={selectedKey===`${    controlEnable?`${controlEnable?"-":"-"}`:`${capsLockEnable?"ः":"-"}`
                      }`?"key-container key-container-active":"key-container"} >
                      <div className="key-content" >
                      
                      {
                          controlEnable?`${controlEnable?"-":"-"}`:`${capsLockEnable?"ः":"-"}`
                      }
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"ॄ":"ृ"}`:`${capsLockEnable?"ऋ":"ृ"}`
                      }`}`));setcapsLockEnable(false)}} className={selectedKey===`${controlEnable?`${controlEnable?"ॄ":"ृ"}`:`${capsLockEnable?"ऋ":"ृ"}`}`? "key-container key-container-active":"key-container"} >
                      <div className="key-content" >
                      
                      {
                          controlEnable?`${controlEnable?"ॄ":"ृ"}`:`${capsLockEnable?"ऋ":"ृ"}`
                      }
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(word.slice(0,word.length-1)));setcapsLockEnable(false)}} className={selectedKey==="delete"? "delete-button-container-selected delete-button-container":"delete-button-container"} >
                      <div  className="delete-header" >
                      delete
                      </div>
                      
                    </div>
                </div>
                <div className="subcontainer2" >
                    <div onClick={()=>{dispatch(concatCharacter(`${word+'  '}`));setcapsLockEnable(false)}} className={selectedKey==="tab"?"tab-button-container tab-button-container-selected":"tab-button-container"} >
                       <div className="tab-header" >
                        tab
                       </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"औ":"ौ"}`
                      }`}`));setcapsLockEnable(false)}} className={selectedKey===`${controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"औ":"ौ"}`}`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                        
                      {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"औ":"ौ"}`
                      }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऐ":"ै"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऐ":"ै"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऐ":"ै"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"आ":"ा"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"आ":"ा"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"आ":"ा"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"ॣ":"ृ"}`:`${capsLockEnable?"ई":"ी"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"ॣ":"ृ"}`:`${capsLockEnable?"ई":"ी"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"ॣ":"ृ"}`:`${capsLockEnable?"ई":"ी"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=> {dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऊ":"ू"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऊ":"ू"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऊ":"ू"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"भ":"ब"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"भ":"ब"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"भ":"ब"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ङ":"ह"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ङ":"ह"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ङ":"ह"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"ग़":"ृ"}`:`${capsLockEnable?"घ":"ग"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"ग़":"ृ"}`:`${capsLockEnable?"घ":"ग"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"ग़":"ृ"}`:`${capsLockEnable?"घ":"ग"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ध":"द"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ध":"द"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ध":"द"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"ज़":"ृ"}`:`${capsLockEnable?"झ":"ज"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"ज़":"ृ"}`:`${capsLockEnable?"झ":"ज"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"ज़":"ृ"}`:`${capsLockEnable?"झ":"ज"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"ड़":"ृ"}`:`${capsLockEnable?"ढ":"ड"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"ड़":"ृ"}`:`${capsLockEnable?"ढ":"ड"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                        
                        {
                          controlEnable?`${controlEnable?"ड़":"ृ"}`:`${capsLockEnable?"ढ":"ड"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ञ":"़"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ञ":"़"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                        
                        {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ञ":"़"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऑ":"ॉ"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऑ":"ॉ"}`
                        }`?"key-container key-container-active":"key-container"} >
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
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ओ":"ो"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ओ":"ो"}`
                        }
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ए":"े"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ए":"े"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ए":"े"}`
                        }
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"अ":"्"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"अ":"्"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                      
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"अ":"्"}`
                        }
                        </div>
                      
                      </div>
                      <div  onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"ॢ":"ृ"}`:`${capsLockEnable?"इ":"ि"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"ॢ":"ृ"}`:`${capsLockEnable?"इ":"ि"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"ॢ":"ृ"}`:`${capsLockEnable?"इ":"ि"}`
                        }
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"उ":"ु"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"उ":"ु"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"उ":"ु"}`
                        }
                      
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"फ":"प"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"फ":"प"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"फ":"प"}`
                        }
                      
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऱ":"र"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऱ":"र"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऱ":"र"}`
                        }
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"क़":"ृ"}`:`${capsLockEnable?"ख":"क"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"क़":"ृ"}`:`${capsLockEnable?"ख":"क"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"क़":"ृ"}`:`${capsLockEnable?"ख":"क"}`
                        }
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"थ":"त"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"थ":"त"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"थ":"त"}`
                        }
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"":"ृ"}`:`${capsLockEnable?"छ":"च"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"f":"ृ"}`:`${capsLockEnable?"छ":"च"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"f":"ृ"}`:`${capsLockEnable?"छ":"च"}`
                        }
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ठ": "ट"}`
                        }`}`))}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ठ": "ट"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ठ": "ट"}`
                        }
                        </div>
                      
                      </div>
                      <div  className={selectedKey==="enter"? "enter-button-container enter-button-container-selected":"enter-button-container"} >
                       <div className="enter-header" >
                       enter
                        </div>
                      
                      </div>
                   
                   
                </div>
                <div className="subcontainer4" >
                    <div className={capsLockEnable?"shift-button-container shift-button-container-selected":"shift-button-container"} >
                       <div onClick={()=>{setcapsLockEnable(!capsLockEnable);setcontrolEnable(false)}} className="shift-header" >
                       shift
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऎ":"ॆ"}`
                        }`}`))} className={selectedKey===`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऎ":"ॆ"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऎ":"ॆ"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ँ":"ं"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ँ":"ं"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ँ":"ं"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ण":"म"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ण":"म"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ण":"म"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऩ":"न"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऩ":"न"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऩ":"न"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऴ":"व"}`
                        }`}`));;setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऴ":"व"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ऴ":"व"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ळ":"ल"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ळ":"ल"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"ळ":"ल"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"श":"स"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"श":"स"}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"श":"स"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"॰":"ृ"}`:`${capsLockEnable?"श":","}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"॰":"ृ"}`:`${capsLockEnable?"श":","}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"॰":"ृ"}`:`${capsLockEnable?"श":","}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"।":"."}`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"॥":"ृ"}`:`${capsLockEnable?"।":"."}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"॥":"ृ"}`:`${capsLockEnable?"।":"."}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"य़":"य"}`
                        }`}`));setcapsLockEnable(false)}} className={selectedKey===`${
                          controlEnable?`${controlEnable?"॥":"ृ"}`:`${capsLockEnable?"।":"."}`
                        }`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {
                          controlEnable?`${controlEnable?"-":"ृ"}`:`${capsLockEnable?"य़":"य"}`
                        }
                        </div>
                      
                    </div>
                    <div onClick={()=>setcapsLockEnable(!capsLockEnable)} className={capsLockEnable?"shift-button-container shift-button-container-selected":"shift-button-container"} >
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
                    <div onClick={()=>{dispatch(concatCharacter(`${word+` `}`));setcapsLockEnable(false)}} className={selectedKey==="space"?"space-button-container space-button-container-selected":"space-button-container"} >
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
        :<></>
        }
        </div>
    )
}

export default HindiKeyboard
