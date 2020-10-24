import React,{useState} from 'react'
import HindiKeyboard from './Components/HindiKeyboard'
import EnglishKeyboard from './Components/EnglishKeyboard';
import PunjabiKeyboard from './Components/PunjabiKeyboard';
import TamilKeyboard from './Components/TamilKeyboard';
import Gujarati from './Components/Gujarati';
import TeleguKeyboard from './Components/TeleguKeyboard';
import FrenchKeyboard from './Components/FrenchKeyboard';
import SpanishKeyboard from './Components/SpanishKeyboard';
import BangaliKeyboard from './Components/BangaliKeyboard';
import JarmaniKeyboard from './Components/JarmaniKeyboard';

function App() {
  const [category,setCategory]=useState("English");
  const handleCategoryChange = (category) => {
    setCategory(category);
    console.log(category);
}

  return (
    <div >
       <select style={{margin:20}} name="category" value={category}  onChange={event => handleCategoryChange(event.target.value)} >
            <option  id="0" >Hindi</option>
            <option id="1" >English</option>
            <option id="2" >Punjabi</option>
            <option id="3" >Tamil</option>
            <option id="4" >Gujarati</option>
            <option id="5" >Telugu</option>
            <option id="6" >French</option>
            <option id="6" >Spanish</option>
            <option id="7" >Bangali</option>
            <option id="8" >Jarmani</option>
            
            
        </select>

        

      {
        category==="English"?
        
        <EnglishKeyboard/>
        
        :<></>
      }
      {
        category==="Hindi"?
        <HindiKeyboard/>:
        <></>
      }
      {
        category==="Punjabi"?
        <PunjabiKeyboard/>:<></>
      }
      {
        category==="Tamil"?
        <TamilKeyboard/>:<></>
      }
      {
        category==="Gujarati"?
        <Gujarati/>:<></>
      }
      {
        category==="Telugu"?
        <TeleguKeyboard/>:<></>
      }
      {
        category==="French"?
        <FrenchKeyboard/>:<></>
      }
      {
        category==="Spanish"?
        <SpanishKeyboard/>:<></>
      }
      {
        category==="Bangali"?
        <BangaliKeyboard/>:<></>
      }
      {
        category==="Jarmani"?
        <JarmaniKeyboard/>:<></>
      }
    </div>
  )
}

export default App
