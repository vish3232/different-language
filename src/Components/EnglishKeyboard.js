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
    console.log(e.keyCode)
    if(e.key===" "){
      dispatch(currentKey("space"))
      dispatch(concatCharacter(`${word+" "}`))
      setTimeout(() => {   // ***
        dispatch(currentKey(""))
        // *** If you want to clear the error message as well
    }, 2000);
    }else
    if(e.key==="Enter"){
      dispatch(currentKey("enter"))
      dispatch(concatCharacter(`${word+"\n"}`))
      setTimeout(() => {   // ***
        dispatch(currentKey(""))
        // *** If you want to clear the error message as well
    }, 2000);
    }else
    if(e.key==="Tab"){
      dispatch(currentKey("tab"))
      dispatch(concatCharacter(`${word+'  '}`))
      setTimeout(() => {   // ***
        dispatch(currentKey(""))
        // *** If you want to clear the error message as well
    }, 2000);
    }else
    if(e.key==="CapsLock"){
      setcapsLockEnable(true)
      setTimeout(() => {   // ***
        dispatch(currentKey(""))
        // *** If you want to clear the error message as well
    }, 2000);
    }else
    if(e.key==="Shift"){
      setshiftEnable(true)
      setTimeout(() => {   // ***
        dispatch(currentKey(""))
       
        // *** If you want to clear the error message as well
    }, 2000);
    }else
    if (e.key === "a") {
      dispatch(currentKey("a"))
        dispatch(concatCharacter(`${word+"a"}`))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "A") {
        dispatch(concatCharacter(`${word+"A"}`))
        dispatch(currentKey("A"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "s") {
        dispatch(concatCharacter(`${word+"s"}`))
        dispatch(currentKey("s"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
        } else if (e.key === "S") {
          dispatch(concatCharacter(`${word+"S"}`))
          dispatch(currentKey("S"))
          setTimeout(() => {   // ***
            dispatch(currentKey(""))
            setshiftEnable(false)
       
            // *** If you want to clear the error message as well
        }, 2000);
      } else if (e.key === "d") {
        dispatch(concatCharacter(`${word+"d"}`))
        dispatch(currentKey("d"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "D") {
        dispatch(concatCharacter(`${word+"D"}`))
        dispatch(currentKey("D"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "f") {
        dispatch(concatCharacter(`${word+"f"}`))
        dispatch(currentKey("f"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "F") {
        dispatch(concatCharacter(`${word+"F"}`))
        dispatch(currentKey("F"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "g") {
        dispatch(concatCharacter(`${word+"g"}`))
        dispatch(currentKey("g"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "G") {
        dispatch(concatCharacter(`${word+"G"}`))
        dispatch(currentKey("G"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "h") {
        dispatch(concatCharacter(`${word+"h"}`))
        dispatch(currentKey("h"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "H") {
        dispatch(concatCharacter(`${word+"H"}`))
        dispatch(currentKey("H"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "j") {
        dispatch(concatCharacter(`${word+"j"}`))
        dispatch(currentKey("j"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "J") {
        dispatch(concatCharacter(`${word+"J"}`))
        dispatch(currentKey("J"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "k") {
        dispatch(concatCharacter(`${word+"k"}`))
        dispatch(currentKey("k"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "K") {
        dispatch(concatCharacter(`${word+"K"}`))
        dispatch(currentKey("K"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "l") {
        dispatch(concatCharacter(`${word+"l"}`))
        dispatch(currentKey("l"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "L") {
        dispatch(concatCharacter(`${word+"L"}`))
        dispatch(currentKey("L"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "z") {
        dispatch(concatCharacter(`${word+"z"}`))
        dispatch(currentKey("z"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
      
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "Z") {
        dispatch(concatCharacter(`${word+"Z"}`))
        dispatch(currentKey("Z"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "x") {
        dispatch(currentKey("x"))
        dispatch(concatCharacter(`${word+"x"}`))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "X") {
        dispatch(concatCharacter(`${word+"X"}`))
        dispatch(currentKey("X"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
        
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "c") {
        dispatch(concatCharacter(`${word+"c"}`))
        dispatch(currentKey("c/"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "C") {
        dispatch(concatCharacter(`${word+"C"}`))
        dispatch(currentKey("C"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
        
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "v") {
        dispatch(concatCharacter(`${word+"v"}`))
        dispatch(currentKey("v"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "V") {
        dispatch(concatCharacter(`${word+"V"}`))
        dispatch(currentKey("V"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
        
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "b") {
        dispatch(concatCharacter(`${word+"b"}`))
        dispatch(currentKey("b"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
      
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "B") {
        dispatch(concatCharacter(`${word+"B"}`))
        dispatch(currentKey("B"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "n") {
        dispatch(concatCharacter(`${word+"n"}`))
        dispatch(currentKey("n"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
     
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "N") {
        dispatch(concatCharacter(`${word+"N"}`))
        dispatch(currentKey("N"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
        
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "m") {
        dispatch(concatCharacter(`${word+"m"}`))
        dispatch(currentKey("m"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
      
          // *** If you want to clear the error message as well
      }, 2000);
       } else if (e.key === "M") {
        dispatch(concatCharacter(`${word+"M"}`))
        dispatch(currentKey("M"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
      
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "q") {
        dispatch(concatCharacter(`${word+"q"}`))
        dispatch(currentKey("q"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "Q") {
        dispatch(concatCharacter(`${word+"Q"}`))
        dispatch(currentKey("Q"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "w") {
        dispatch(concatCharacter(`${word+"w"}`))
        dispatch(currentKey("w"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "W") {
        dispatch(concatCharacter(`${word+"W"}`))
        dispatch(currentKey("W"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "e") {
        dispatch(concatCharacter(`${word+"e"}`))
        dispatch(currentKey("e"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "E") {
        dispatch(concatCharacter(`${word+"E"}`))
        dispatch(currentKey("E"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
        
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "r") {
        dispatch(concatCharacter(`${word+"r"}`))
        dispatch(currentKey("r"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
        
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "R") {
        dispatch(concatCharacter(`${word+"R"}`))
        dispatch(currentKey("R"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
      
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "t") {
        dispatch(concatCharacter(`${word+"t"}`))
        dispatch(currentKey("t"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
      
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "T") {
        dispatch(concatCharacter(`${word+"T"}`))
        dispatch(currentKey("T"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "y") {
        dispatch(concatCharacter(`${word+"y"}`))
        dispatch(currentKey("y"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
      
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "Y") {
        dispatch(concatCharacter(`${word+"Y"}`))
        dispatch(currentKey("Y"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "i") {
        dispatch(concatCharacter(`${word+"i"}`))
        dispatch(currentKey("i"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "I") {
        dispatch(concatCharacter(`${word+"I"}`))
        dispatch(currentKey("I"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "1") {
        dispatch(concatCharacter(`${word+"1"}`))
        dispatch(currentKey("1"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
      
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "2") {
        dispatch(concatCharacter(`${word+"2"}`))
        dispatch(currentKey("2"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
        
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "3") {
        dispatch(concatCharacter(`${word+"3"}`))
        dispatch(currentKey("3"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "4") {
        dispatch(concatCharacter(`${word+"4"}`))
        dispatch(currentKey("4"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
      
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "5") {
        dispatch(concatCharacter(`${word+"5"}`))
        dispatch(currentKey("5"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "6") {
        dispatch(concatCharacter(`${word+"6"}`))
        dispatch(currentKey("6"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "7") {
        dispatch(concatCharacter(`${word+"7"}`))
        dispatch(currentKey("7"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "8") {
        dispatch(concatCharacter(`${word+"8"}`))
        dispatch(currentKey("8"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "9") {
        dispatch(concatCharacter(`${word+"9"}`))
        dispatch(currentKey("9"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "0") {
        dispatch(concatCharacter(`${word+"0"}`))
        dispatch(currentKey("0"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "-") {
        dispatch(concatCharacter(`${word+"-"}`))
        dispatch(currentKey("-"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
        
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "=") {
        dispatch(concatCharacter(`${word+"="}`))
        dispatch(currentKey("="))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "!") {
        dispatch(concatCharacter(`${word+"!"}`))
        dispatch(currentKey("!"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
        
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "@") {
        dispatch(concatCharacter(`${word+"@"}`))
        dispatch(currentKey("@"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "#") {
        dispatch(concatCharacter(`${word+"#"}`))
        dispatch(currentKey("#"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "$") {
        dispatch(concatCharacter(`${word+"$"}`))
        dispatch(currentKey("$"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
        
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "%") {
        dispatch(concatCharacter(`${word+"%"}`))
        dispatch(currentKey("%"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
      
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "^") {
        dispatch(concatCharacter(`${word+"^"}`))
        dispatch(currentKey("^"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
    
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "&") {
        dispatch(concatCharacter(`${word+"&"}`))
        dispatch(currentKey("&"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "*") {
        dispatch(concatCharacter(`${word+"*"}`))
        dispatch(currentKey("*"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
      
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "(") {
        dispatch(concatCharacter(`${word+"("}`))
        dispatch(currentKey("("))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
      
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === ")") {
        dispatch(concatCharacter(`${word+")"}`))
        dispatch(currentKey(")"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "`") {
        dispatch(concatCharacter(`${word+"'"}`))
        dispatch(currentKey("`"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          // *** If you want to clear the error message as well
          setshiftEnable(false)
     
      }, 2000);
      } else if (e.key === "~") {
        dispatch(concatCharacter(`${word+"~"}`))
        dispatch(currentKey("~"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "Delete" || e.key === "Backspace") {
        dispatch(concatCharacter(word.slice(0,word.length-1)))
        dispatch(currentKey("delete"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === " ") {
        
        dispatch(concatCharacter(`${word+" "}`))
        dispatch(currentKey(" "))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
     
      } else if (e.key === "]") {
        dispatch(concatCharacter(`${word+"]"}`))
        dispatch(currentKey("]"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "[") {
        dispatch(concatCharacter(`${word+"["}`))
        dispatch(currentKey("["))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
        
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === ":") {
        dispatch(concatCharacter(`${word+":"}`))
        dispatch(currentKey(":"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
      
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === ";") {
        dispatch(concatCharacter(`${word+";"}`))
        dispatch(currentKey(";"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
      
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === "'") {
        dispatch(concatCharacter(`${word+"'"}`))
        dispatch(currentKey("'"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
      
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === ",") {
        dispatch(concatCharacter(`${word+","}`))
        dispatch(currentKey(","))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
      
          // *** If you want to clear the error message as well
      }, 2000);
      } else if (e.key === ".") {
        dispatch(concatCharacter(`${word+"."}`))
        dispatch(currentKey("."))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
        
          // *** If you want to clear the error message as well
      }, 2000);
      }else if (e.key==="o"){
        dispatch(concatCharacter(`${word+"o"}`))
        dispatch(currentKey("o"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      }else if(e.key==="O"){
        dispatch(concatCharacter(`${word+"O"}`))
        dispatch(currentKey("O"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      }else if(e.key==="p"){
        dispatch(concatCharacter(`${word+"p"}`))
        dispatch(currentKey("p"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      }else if(e.key==="P"){
        dispatch(concatCharacter(`${word+"P"}`))
        dispatch(currentKey("P"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      }else if(e.key==="u"){
        dispatch(concatCharacter(`${word+"u"}`))
        dispatch(currentKey("u"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
       
          // *** If you want to clear the error message as well
      }, 2000);
      }else if(e.key==="U"){
        dispatch(concatCharacter(`${word+"U"}`))
        dispatch(currentKey("U"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
      
          // *** If you want to clear the error message as well
      }, 2000);
      }else if(e.key==="x"){
        dispatch(concatCharacter(`${word+"x"}`))
        dispatch(currentKey("x"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
      
          // *** If you want to clear the error message as well
      }, 2000);
      }else if(e.key==="X"){
        dispatch(concatCharacter(`${word+"X"}`))
        dispatch(currentKey("X"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
      
          // *** If you want to clear the error message as well
      }, 2000);
      }else if(e.key==="c"){
        dispatch(concatCharacter(`${word+"c"}`))
        dispatch(currentKey("c"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
      
          // *** If you want to clear the error message as well
      }, 2000);
      }else if(e.key==="C"){
        dispatch(concatCharacter(`${word+"C"}`))
        dispatch(currentKey("C"))
        setTimeout(() => {   // ***
          dispatch(currentKey(""))
          setshiftEnable(false)
      
          // *** If you want to clear the error message as well
      }, 2000);
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
          <textarea 
          
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
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"~":"`"}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?"~":"`"}`? "key-container key-container-active":"key-container"} >
                      <div  className="key-content" >
                      {shiftEnable?"~":"`"} 
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"!":"1"}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?"!":"1"}`? "key-container key-container-active":"key-container"} >
                      <div  className="key-content" >
                      {shiftEnable?"!":"1"} 
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"@":"2"}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?"@":"2"}`? "key-container key-container-active":"key-container"} >
                      <div  className="key-content" >
                      {shiftEnable?"@":"2"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"#":"3"}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?"#":"3"}`? "key-container key-container-active":"key-container"} >
                      <div  className="key-content" >
                      {shiftEnable?"#":"3"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"$":"4"}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?"$":"4"}`? "key-container key-container-active":"key-container"} >
                      <div  className="key-content" >
                      {shiftEnable?"$":"4"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"%":"5"}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?"%":"5"}`? "key-container key-container-active":"key-container"} >
                      <div className="key-content" >
                      {shiftEnable?"%":"5"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"^":"6"}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?"^":"6"}`? "key-container key-container-active":"key-container"} >
                      <div className="key-content" >
                      {shiftEnable?"^":"6"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"&":"7"}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?"&":"7"}`? "key-container key-container-active":"key-container"} >
                      <div className="key-content" >
                      {shiftEnable?"&":"7"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"*":"8"}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?"*":"8"}`? "key-container key-container-active":"key-container"} >
                      <div className="key-content" >
                      {shiftEnable?"*":"8"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"(":"9"}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?"(":"9"}`? "key-container key-container-active":"key-container"} >
                      <div className="key-content" >
                      {shiftEnable?"(":"9"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?")":"0"}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?")":"0"}`? "key-container key-container-active":"key-container"} >
                      <div className="key-content" >
                      {shiftEnable?")":"0"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"_":"-"}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?"_":"-"}`? "key-container key-container-active":"key-container"} >
                      <div className="key-content" >
                      {shiftEnable?"_":"-"}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"+":"="}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?"+":"="}`? "key-container key-container-active":"key-container"} >
                      <div className="key-content" >
                      {shiftEnable?"+":"="}
                      </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(word.slice(0,word.length-1)));dispatch(currentKey(""))}} className={selectedKey==="delete"? "delete-button-container-selected delete-button-container":"delete-button-container"} >
                      <div  className="delete-header" >
                      delete
                      </div>
                      
                    </div>
                </div>
                <div className="subcontainer2" >
                    <div onClick={()=>{dispatch(concatCharacter(`${word+'  '}`));setshiftEnable(false)}} className={selectedKey==="tab"?"tab-button-container tab-button-container-selected":"tab-button-container"} >
                       <div className="tab-header" >
                        tab
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"Q":"q"}`:`${capsLockEnable?"Q":"q"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"Q":"q"}`:`${capsLockEnable?"Q":"q"}`}`? "key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                        {shiftEnable?`${shiftEnable?"Q":"q"}`:`${capsLockEnable?"Q":"q"}`} 
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"W":"w"}`:`${capsLockEnable?"W":"w"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"W":"w"}`:`${capsLockEnable?"W":"w"}`}`? "key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       {shiftEnable?`${shiftEnable?"W":"w"}`:`${capsLockEnable?"W":"w"}`} 
                       
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"E":"e"}`:`${capsLockEnable?"E":"e"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"E":"e"}`:`${capsLockEnable?"E":"e"}`}`? "key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"E":"e"}`:`${capsLockEnable?"E":"e"}`} 
                       
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"R":"r"}`:`${capsLockEnable?"R":"r"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"R":"r"}`:`${capsLockEnable?"R":"r"}`}`? "key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"R":"r"}`:`${capsLockEnable?"R":"r"}`}
                        </div>
                      
                    </div>
                    <div onClick={()=> {dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"T":"t"}`:`${capsLockEnable?"T":"t"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"T":"t"}`:`${capsLockEnable?"T":"t"}`}`? "key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"T":"t"}`:`${capsLockEnable?"T":"t"}`}
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"Y":"y"}`:`${capsLockEnable?"Y":"y"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"Y":"y"}`:`${capsLockEnable?"Y":"y"}`}`? "key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"Y":"y"}`:`${capsLockEnable?"Y":"y"}`}
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"Y":"y"}`:`${capsLockEnable?"U":"u"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"U":"u"}`:`${capsLockEnable?"U":"u"}`}`? "key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"U":"u"}`:`${capsLockEnable?"U":"u"}`}
                      
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"I":"i"}`:`${capsLockEnable?"I":"i"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"I":"i"}`:`${capsLockEnable?"I":"i"}`}`? "key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"I":"i"}`:`${capsLockEnable?"I":"i"}`}
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"O":"o"}`:`${capsLockEnable?"O":"o"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"O":"o"}`:`${capsLockEnable?"O":"o"}`}`? "key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       {shiftEnable?`${shiftEnable?"O":"o"}`:`${capsLockEnable?"O":"o"}`}
                      
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"P":"p"}`:`${capsLockEnable?"P":"p"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"P":"p"}`:`${capsLockEnable?"P":"p"}`}`? "key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"P":"p"}`:`${capsLockEnable?"P":"p"}`}
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"{":"["}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?"{":"["}`? "key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                        {shiftEnable?"{":"["}
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"}":"]"}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?"}":"]"}`? "key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                        {shiftEnable?"}":"]"}
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"|":""} `}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"Y":"y"}`:`${capsLockEnable?"Y":"y"}`}`? "key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                        {shiftEnable?"|":<>\</>} 
                        </div>
                      
                    </div>
                    
                    
                </div>
                <div className="subcontainer3" >
                      <div onClick={()=>{setcapsLockEnable(!capsLockEnable);setshiftEnable(false)}} className={capsLockEnable?"caps-button-container-selected caps-button-container":"caps-button-container"}  >
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
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"D":"d"}`:`${capsLockEnable?"D":"d"}`}  `}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"D":"d"}`:`${capsLockEnable?"D":"d"}`}`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"D":"d"}`:`${capsLockEnable?"D":"d"}`}  
                        </div>
                      
                      </div>
                      <div  onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"F":"f"}`:`${capsLockEnable?"F":"f"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"F":"f"}`:`${capsLockEnable?"F":"f"}`}`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"F":"f"}`:`${capsLockEnable?"F":"f"}`}  
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${capsLockEnable?"G":"g"}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"G":"g"}`:`${capsLockEnable?"G":"g"}`}`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"G":"g"}`:`${capsLockEnable?"G":"g"}`}  
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"H":"h"}`:`${capsLockEnable?"H":"h"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"H":"h"}`:`${capsLockEnable?"H":"h"}`}`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       
                       {shiftEnable?`${shiftEnable?"H":"h"}`:`${capsLockEnable?"H":"h"}`}  
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"J":"j"}`:`${capsLockEnable?"J":"j"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"J":"j"}`:`${capsLockEnable?"J":"j"}`}`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"J":"j"}`:`${capsLockEnable?"J":"j"}`}  
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"K":"k"}`:`${capsLockEnable?"K":"k"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"K":"k"}`:`${capsLockEnable?"K":"k"}`}`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"K":"k"}`:`${capsLockEnable?"K":"k"}`}  
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"L":"l"}`:`${capsLockEnable?"L":"l"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"L":"l"}`:`${capsLockEnable?"L":"l"}`}`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       {shiftEnable?`${shiftEnable?"L":"l"}`:`${capsLockEnable?"L":"l"}`}  
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?":":";"}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?":":";"}`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       {shiftEnable?":":";"}
                        </div>
                      
                      </div>
                      <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?<>"</>:"'"}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?<>"</>:"'"}`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       {shiftEnable?<>"</>:"'"}
                        </div>
                      
                      </div>
                      <div onClick={()=> dispatch(concatCharacter(`${word+"\n"}`))} className={selectedKey==="enter"? "enter-button-container enter-button-container-selected":"enter-button-container"} >
                       <div className="enter-header" >
                       enter
                        </div>
                      
                      </div>
                   
                   
                </div>
                <div className="subcontainer4" >
                    <div onClick={()=>{setshiftEnable(!shiftEnable);setcapsLockEnable(false)}} className={shiftEnable?"shift-button-container shift-button-container-selected":"shift-button-container"}  >
                       <div  className="shift-header" >
                       shift
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"Z":"z"}`:`${capsLockEnable?"Z":"z"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"Z":"z"}`:`${capsLockEnable?"Z":"z"}`}`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                        
                        {shiftEnable?`${shiftEnable?"Z":"z"}`:`${capsLockEnable?"Z":"z"}`}   
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"X":"x"}`:`${capsLockEnable?"X":"x"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"X":"x"}`:`${capsLockEnable?"X":"x"}`}`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"X":"x"}`:`${capsLockEnable?"X":"x"}`}
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"C":"c"}`:`${capsLockEnable?"C":"c"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"C":"c"}`:`${capsLockEnable?"C":"c"}`}`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"C":"c"}`:`${capsLockEnable?"C":"c"}`} 
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"V":"v"}`:`${capsLockEnable?"V":"v"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"V":"v"}`:`${capsLockEnable?"V":"v"}`}`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"V":"v"}`:`${capsLockEnable?"V":"v"}`} 
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"B":"b"}`:`${capsLockEnable?"B":"b"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"B":"b"}`:`${capsLockEnable?"B":"b"}`}`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"B":"b"}`:`${capsLockEnable?"B":"b"}`} 
                       
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"N":"n"}`:`${capsLockEnable?"N":"n"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"N":"n"}`:`${capsLockEnable?"N":"n"}`}`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"N":"n"}`:`${capsLockEnable?"N":"n"}`} 
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?`${shiftEnable?"M":"m"}`:`${capsLockEnable?"M":"m"}`}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?`${shiftEnable?"M":"m"}`:`${capsLockEnable?"M":"m"}`}`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       
                       {shiftEnable?`${shiftEnable?"M":"m"}`:`${capsLockEnable?"M":"m"}`}
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"<":","}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?"<":","}`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       {shiftEnable?"<":","} 
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?">":"."}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?">":"."}`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       {shiftEnable?">":"."} 
                        </div>
                      
                    </div>
                    <div onClick={()=>{dispatch(concatCharacter(`${word+`${shiftEnable?"?":"/"}`}`));setshiftEnable(false)}} className={selectedKey===`${shiftEnable?"?":"/"}`?"key-container key-container-active":"key-container"} >
                       <div className="key-content" >
                       {shiftEnable?"?":"/"}
                        </div>
                      
                    </div>
                    <div onClick={()=>{setshiftEnable(!shiftEnable);setcapsLockEnable(false)}} className={shiftEnable?"shift-button-container shift-button-container-selected":"shift-button-container"}  >
                       <div  className="shift-header" >
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
                       ctrl
                        </div>
                      
                    </div>
                    
                    <div className="command-button-container" >
                       <div className="command-header" >
                       cmd
                        </div>
                      
                    </div>
                    <div onClick={()=>dispatch(concatCharacter(`${word+` `}`))} className={selectedKey==="space"?"space-button-container space-button-container-selected":"space-button-container"} >
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
