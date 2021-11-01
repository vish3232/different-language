import React,{useState,useEffect,useRef} from 'react'
import {EnglishkeyboardkeyPress} from '../Functions/functions'
import '../Css/EnglishKeyboard.css'
import {keyPress,HindiKeyboardPress} from '../Functions/functions'
import {concatCharacter,currentKey} from '../Redux/EnglishKeyboardActions'
import {useDispatch,useSelector} from 'react-redux'
function EnglishKeyboard() {
  const dispatch=useDispatch()
  const word = useSelector(state => state.EnglishKeyboard.word)
     console.log(word);
     const selectedKey = useSelector(state => state.EnglishKeyboard.selectedKey)
  
    const [text,setText]=useState("")
    const [pressed, setPressed] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})
  const [capsLockEnable,setcapsLockEnable]=useState(false)
  const [shiftEnable,setshiftEnable]=useState(false)
  const [isVirtual,setVirtual]=useState(false)
  const ref = useRef()
  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
    }
  }, [position])

  const EnglishkeyboardkeyPressed=(e)=>{
    if (e.key === "a") {
      dispatch(currentKey("a"))
        dispatch(concatCharacter(`${word+"a"}`))
      } else if (e.key === "A") {
        dispatch(concatCharacter(`${word+"A"}`))
        dispatch(currentKey("A"))
     
      } else if (e.key === "s") {
        dispatch(concatCharacter(`${word+"s"}`))
        dispatch(currentKey("s"))
        } else if (e.key === "S") {
          dispatch(concatCharacter(`${word+"S"}`))
          dispatch(currentKey("S"))
       
      } else if (e.key === "d") {
        dispatch(concatCharacter(`${word+"d"}`))
     
      } else if (e.key === "D") {
        dispatch(concatCharacter(`${word+"D"}`))
     
      } else if (e.key === "f") {
        dispatch(concatCharacter(`${word+"f"}`))
     
      } else if (e.key === "F") {
        dispatch(concatCharacter(`${word+"F"}`))
     
      } else if (e.key === "g") {
        dispatch(concatCharacter(`${word+"g"}`))
     
      } else if (e.key === "G") {
        dispatch(concatCharacter(`${word+"G"}`))
     
      } else if (e.key === "h") {
        dispatch(concatCharacter(`${word+"h"}`))
     
      } else if (e.key === "H") {
        dispatch(concatCharacter(`${word+"H"}`))
     
      } else if (e.key === "j") {
        dispatch(concatCharacter(`${word+"j"}`))
     
      } else if (e.key === "J") {
        dispatch(concatCharacter(`${word+"J"}`))
     
      } else if (e.key === "k") {
        dispatch(concatCharacter(`${word+"k"}`))
     
      } else if (e.key === "K") {
        dispatch(concatCharacter(`${word+"K"}`))
     
      } else if (e.key === "l") {
        dispatch(concatCharacter(`${word+"l"}`))
     
      } else if (e.key === "L") {
        dispatch(concatCharacter(`${word+"L"}`))
     
      } else if (e.key === "z") {
        dispatch(concatCharacter(`${word+"z"}`))
     
      } else if (e.key === "Z") {
        dispatch(concatCharacter(`${word+"Z"}`))
     
      } else if (e.key === "x") {
        dispatch(concatCharacter(`${word+"x"}`))
     
      } else if (e.key === "X") {
        dispatch(concatCharacter(`${word+"X"}`))
     
      } else if (e.key === "c") {
        dispatch(concatCharacter(`${word+"c"}`))
     
      } else if (e.key === "C") {
        dispatch(concatCharacter(`${word+"C"}`))
     
      } else if (e.key === "v") {
        dispatch(concatCharacter(`${word+"v"}`))
     
      } else if (e.key === "V") {
        dispatch(concatCharacter(`${word+"V"}`))
     
      } else if (e.key === "b") {
        dispatch(concatCharacter(`${word+"b"}`))
     
      } else if (e.key === "B") {
        dispatch(concatCharacter(`${word+"B"}`))
     
      } else if (e.key === "n") {
        dispatch(concatCharacter(`${word+"n"}`))
     
      } else if (e.key === "N") {
        dispatch(concatCharacter(`${word+"N"}`))
     
      } else if (e.key === "m") {
        dispatch(concatCharacter(`${word+"m"}`))
     
       } else if (e.key === "M") {
        dispatch(concatCharacter(`${word+"M"}`))
     
      } else if (e.key === "q") {
        dispatch(concatCharacter(`${word+"q"}`))
      
      } else if (e.key === "Q") {
        dispatch(concatCharacter(`${word+"Q"}`))
     
      } else if (e.key === "w") {
        dispatch(concatCharacter(`${word+"w"}`))
     
      } else if (e.key === "W") {
        dispatch(concatCharacter(`${word+"W"}`))
     
      } else if (e.key === "e") {
        dispatch(concatCharacter(`${word+"e"}`))
      
      } else if (e.key === "E") {
        dispatch(concatCharacter(`${word+"E"}`))
     
      } else if (e.key === "r") {
        dispatch(concatCharacter(`${word+"r"}`))
     
      } else if (e.key === "R") {
        dispatch(concatCharacter(`${word+"R"}`))
     
      } else if (e.key === "t") {
        dispatch(concatCharacter(`${word+"t"}`))
     
      } else if (e.key === "T") {
        dispatch(concatCharacter(`${word+"T"}`))
     
      } else if (e.key === "y") {
        dispatch(concatCharacter(`${word+"y"}`))
     
      } else if (e.key === "Y") {
        dispatch(concatCharacter(`${word+"Y"}`))
     
      } else if (e.key === "i") {
        dispatch(concatCharacter(`${word+"i"}`))
     
      } else if (e.key === "I") {
        dispatch(concatCharacter(`${word+"I"}`))
     
      } else if (e.key === "1") {
        dispatch(concatCharacter(`${word+"1"}`))
     
      } else if (e.key === "2") {
        dispatch(concatCharacter(`${word+"2"}`))
     
      } else if (e.key === "3") {
        dispatch(concatCharacter(`${word+"3"}`))
     
      } else if (e.key === "4") {
        dispatch(concatCharacter(`${word+"4"}`))
     
      } else if (e.key === "5") {
        dispatch(concatCharacter(`${word+"5"}`))
     
      } else if (e.key === "6") {
        dispatch(concatCharacter(`${word+"6"}`))
     
      } else if (e.key === "7") {
        dispatch(concatCharacter(`${word+"7"}`))
     
      } else if (e.key === "8") {
        dispatch(concatCharacter(`${word+"8"}`))
     
      } else if (e.key === "9") {
        dispatch(concatCharacter(`${word+"9"}`))
     
      } else if (e.key === "0") {
        dispatch(concatCharacter(`${word+"0"}`))
     
      } else if (e.key === "-") {
        dispatch(concatCharacter(`${word+"-"}`))
     
      } else if (e.key === "=") {
        dispatch(concatCharacter(`${word+"="}`))
     
      } else if (e.key === "!") {
        dispatch(concatCharacter(`${word+"!"}`))
     
      } else if (e.key === "@") {
        dispatch(concatCharacter(`${word+"@"}`))
     
      } else if (e.key === "#") {
        dispatch(concatCharacter(`${word+"#"}`))
     
      } else if (e.key === "$") {
        dispatch(concatCharacter(`${word+"$"}`))
     
      } else if (e.key === "%") {
        dispatch(concatCharacter(`${word+"%"}`))
     
      } else if (e.key === "^") {
        dispatch(concatCharacter(`${word+"^"}`))
     
      } else if (e.key === "&") {
        dispatch(concatCharacter(`${word+"&"}`))
     
      } else if (e.key === "*") {
        dispatch(concatCharacter(`${word+"*"}`))
     
      } else if (e.key === "(") {
        dispatch(concatCharacter(`${word+"("}`))
     
      } else if (e.key === ")") {
        dispatch(concatCharacter(`${word+")"}`))
     
      } else if (e.key === "`") {
        dispatch(concatCharacter(`${word+"'"}`))
     
      } else if (e.key === "~") {
        dispatch(concatCharacter(`${word+"~"}`))
     
      } else if (e.key === "Delete" || e.key === "Backspace") {
        dispatch(concatCharacter(word.slice(0,word.length-1)))
        dispatch(currentKey(""))
      } else if (e.key === " ") {
        
        dispatch(concatCharacter(`${word+" "}`))
     
      } else if (e.key === "]") {
        dispatch(concatCharacter(`${word+"]"}`))
     
      } else if (e.key === "[") {
        dispatch(concatCharacter(`${word+"["}`))
     
      } else if (e.key === ":") {
        dispatch(concatCharacter(`${word+":"}`))
     
      } else if (e.key === ";") {
        dispatch(concatCharacter(`${word+";"}`))
     
      } else if (e.key === "'") {
        dispatch(concatCharacter(`${word+"'"}`))
     
      } else if (e.key === ",") {
        dispatch(concatCharacter(`${word+","}`))
     
      } else if (e.key === ".") {
        dispatch(concatCharacter(`${word+"."}`))
     
      }else if (e.key==="o"){
        dispatch(concatCharacter(`${word+"o"}`))
      
      }else if(e.key==="O"){
        dispatch(concatCharacter(`${word+"O"}`))
     
      }else if(e.key==="p"){
        dispatch(concatCharacter(`${word+"p"}`))
     
      }else if(e.key==="P"){
        dispatch(concatCharacter(`${word+"P"}`))
     
      }
    
}
  
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
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}} >
          <input 
          
          onKeyDown={(e)=>{EnglishkeyboardkeyPressed(e)}}
            value={word} placeholder="search" type="text" className="search-input" />
        <div onClick={()=>setVirtual(!isVirtual)} >virtual keyboard</div>
        </div>
        {isVirtual?
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
                    <div onClick={()=>{dispatch(concatCharacter(word.slice(0,word.length-1)));dispatch(currentKey(""))}} className="delete-button-container" >
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
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"|":""} `}`));setshiftEnable(false)}} className="key-container" >
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
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"A":"a"}`:`${capsLockEnable?"A":"a"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"A":"a"}`:`${capsLockEnable?"A":"a"}`}`? "key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       {shiftEnable?`${shiftEnable?"A":"a"}`:`${capsLockEnable?"A":"a"}`} 
                        
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"S":"s"}`:`${capsLockEnable?"S":"s"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"S":"s"}`:`${capsLockEnable?"S":"s"}`}`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       {shiftEnable?`${shiftEnable?"S":"s"}`:`${capsLockEnable?"S":"s"}`}  
                        
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"D":"d"}`:`${capsLockEnable?"D":"d"}`}  `}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"D":"d"}`:`${capsLockEnable?"D":"d"}`}  
                        </div>
                      
                      </div>
                      <div  onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"F":"f"}`:`${capsLockEnable?"F":"f"}`}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"F":"f"}`:`${capsLockEnable?"F":"f"}`}  
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"G":"g"}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"G":"g"}`:`${capsLockEnable?"G":"g"}`}  
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"H":"h"}`:`${capsLockEnable?"H":"h"}`}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       
                       {shiftEnable?`${shiftEnable?"H":"h"}`:`${capsLockEnable?"H":"h"}`}  
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"J":"j"}`:`${capsLockEnable?"J":"j"}`}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"J":"j"}`:`${capsLockEnable?"J":"j"}`}  
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"K":"k"}`:`${capsLockEnable?"K":"k"}`}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"K":"k"}`:`${capsLockEnable?"K":"k"}`}  
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"L":"l"}`:`${capsLockEnable?"L":"l"}`}`}`));setshiftEnable(false)}} className="key-container" >
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
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"C":"c"}`:`${capsLockEnable?"C":"c"}`}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"C":"c"}`:`${capsLockEnable?"C":"c"}`} 
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"V":"v"}`:`${capsLockEnable?"V":"v"}`}`}`));setshiftEnable(false)}} className="key-container" >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"V":"v"}`:`${capsLockEnable?"V":"v"}`} 
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"B":"b"}`:`${capsLockEnable?"B":"b"}`}`}`));setshiftEnable(false)}} className="key-container" >
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
        </div>:<></>
        }
        </div>
    )
}

export default EnglishKeyboard
