var word="";
export const keyPress=(value)=>{
    word = word.concat(value);
    return word
 
}

export const EnglishkeyboardkeyPress=(e)=>{
    if (e.key === "a") {
        word = word + "a";
        return word;
      } else if (e.key === "A") {
        word = word + "A";
        return word;
      } else if (e.key === "s") {
        word = word + "s";
        return word;
      } else if (e.key === "S") {
        word = word + "S";
        return word;
      } else if (e.key === "d") {
        word = word + "d";
        return word;
      } else if (e.key === "D") {
        word = word + "D";
        return word;
      } else if (e.key === "f") {
        word = word + "f";
        return word;
      } else if (e.key === "F") {
        word = word + "F";
        return word;
      } else if (e.key === "g") {
        word = word + "g";
        return word;
      } else if (e.key === "G") {
        word = word + "G";
        return word;
      } else if (e.key === "h") {
        word = word + "h";
        return word;
      } else if (e.key === "H") {
        word = word + "H";
        return word;
      } else if (e.key === "j") {
        word = word + "j";
        return word;
      } else if (e.key === "J") {
        word = word + "J";
        return word;
      } else if (e.key === "k") {
        word = word + "k";
        return word;
      } else if (e.key === "K") {
        word = word + "K";
        return word;
      } else if (e.key === "l") {
        word = word + "l";
        return word;
      } else if (e.key === "L") {
        word = word + "L";
        return word;
      } else if (e.key === "z") {
        word = word + "z";
        return word;
      } else if (e.key === "Z") {
        word = word + "z";
        return word;
      } else if (e.key === "x") {
        word = word + "x";
        return word;
      } else if (e.key === "X") {
        word = word + "X";
        return word;
      } else if (e.key === "c") {
        word = word + "c";
        return word;
      } else if (e.key === "C") {
        word = word + "C";
        return word;
      } else if (e.key === "v") {
        word = word + "v";
        return word;
      } else if (e.key === "V") {
        word = word + "V";
        return word;
      } else if (e.key === "b") {
        word = word + "b";
        return word;
      } else if (e.key === "B") {
        word = word + "B";
        return word;
      } else if (e.key === "n") {
        word = word + "n";
        return word;
      } else if (e.key === "N") {
        word = word + "N";
        return word;
      } else if (e.key === "m") {
        word = word + "m";
        return word;
      } else if (e.key === "M") {
        word = word + "M";
        return word;
      } else if (e.key === "q") {
        word = word + "q";
        return word;
      } else if (e.key === "Q") {
        word = word + "Q";
        return word;
      } else if (e.key === "w") {
        word = word + "w";
        return word;
      } else if (e.key === "W") {
        word = word + "W";
        return word;
      } else if (e.key === "e") {
        word = word + "e";
        return word;
      } else if (e.key === "E") {
        word = word + "E";
        return word;
      } else if (e.key === "r") {
        word = word + "r";
        return word;
      } else if (e.key === "R") {
        word = word + "R";
        return word;
      } else if (e.key === "t") {
        word = word + "t";
        return word;
      } else if (e.key === "T") {
        word = word + "T";
        return word;
      } else if (e.key === "y") {
        word = word + "y";
        return word;
      } else if (e.key === "Y") {
        word = word + "Y";
        return word;
      } else if (e.key === "i") {
        word = word + "i";
        return word;
      } else if (e.key === "I") {
        word = word + "I";
        return word;
      } else if (e.key === "1") {
        word = word + "1";
        return word;
      } else if (e.key === "2") {
        word = word + "2";
        return word;
      } else if (e.key === "3") {
        word = word + "3";
        return word;
      } else if (e.key === "4") {
        word = word + "4";
        return word;
      } else if (e.key === "5") {
        word = word + "5";
        return word;
      } else if (e.key === "6") {
        word = word + "6";
        return word;
      } else if (e.key === "7") {
        word = word + "7";
        return word;
      } else if (e.key === "8") {
        word = word + "8";
        return word;
      } else if (e.key === "9") {
        word = word + "9";
        return word;
      } else if (e.key === "0") {
        word = word + "0";
        return word;
      } else if (e.key === "-") {
        word = word + "-";
        return word;
      } else if (e.key === "=") {
        word = word + "=";
        return word;
      } else if (e.key === "!") {
        word = word + "!";
        return word;
      } else if (e.key === "@") {
        word = word + "@";
        return word;
      } else if (e.key === "#") {
        word = word + "#";
        return word;
      } else if (e.key === "$") {
        word = word + "$";
        return word;
      } else if (e.key === "%") {
        word = word + "%";
        return word;
      } else if (e.key === "^") {
        word = word + "^";
        return word;
      } else if (e.key === "&") {
        word = word + "&";
        return word;
      } else if (e.key === "*") {
        word = word + "*";
        return word;
      } else if (e.key === "(") {
        word = word + "(";
        return word;
      } else if (e.key === ")") {
        word = word + ")";
        return word;
      } else if (e.key === "`") {
        word = word + "`";
        return word;
      } else if (e.key === "~") {
        word = word + "~";
        return word;
      } else if (e.key === "Delete" || e.key === "Backspace") {
        word = word.substring(0, word.length - 1);
        return word;
      } else if (e.key === " ") {
        word = word + " ";
        return word;
      } else if (e.key === "]") {
        word = word + "]";
        return word;
      } else if (e.key === "[") {
        word = word + "[";
        return word;
      } else if (e.key === ":") {
        word = word + ":";
        return word;
      } else if (e.key === ";") {
        word = word + ";";
        return word;
      } else if (e.key === "'") {
        word = word + "'";
        return word;
      } else if (e.key === ",") {
        word = word + ",";
        return word;
      } else if (e.key === ".") {
        word = word + ".";
        return word;
      }else if (e.key==="o"){
        word = word + "o";
        return word;
        
      }else if(e.key==="O"){
        word=word+"O"
        return word
      }else if(e.key==="p"){
        word=word+"p"
        return word
      }else if(e.key==="P"){
        word=word+"P"
        return word
      }
    
}

export const HindiKeyboardPress=(e)=>{
  console.log(e.keyCode)
    if (e.key === "`") {
        word = word + "ॊ";
        return word;
      } else if (e.key === "1") {
        word = word + "1";
        return word;
      } else if (e.key === "2") {
        word = word + "2";
        return word;
      } else if (e.key === "3") {
        word = word + "3";
        return word;
      } else if (e.key === "4") {
        word = word + "4";
        return word;
      } else if (e.key === "5") {
        word = word + "5";
        return word;
      } else if (e.key === "6") {
        word = word + "6";
        return word;
      } else if (e.key === "7") {
        word = word + "7";
        return word;
      } else if (e.key === "8") {
        word = word + "8";
        return word;
      } else if (e.key === "9") {
        word = word + "9";
        return word;
      } else if (e.key === "0") {
        word = word + "0";
        return word;
      } else if (e.key === "-") {
        word = word + "-";
        return word;
      } else if (e.key === "=") {
        word = word + "ृ";
        return word;
      } else if (e.key === "a") {
        word = word + "ो";
        return word;
      } else if (e.key === "s") {
        word = word + "े";
        return word;
      } else if (e.key === "d") {
        word = word + "्";
        return word;
      } else if (e.key === "f") {
        word = word + "ि";
        return word;
      } else if (e.key === "g") {
        word = word + "ु";
        return word;
      } else if (e.key === "h") {
        word = word + "प";
        return word;
      } else if (e.key === "j") {
        word = word + "र";
        return word;
      } else if (e.key === "k") {
        word = word + "क";
        return word;
      } else if (e.key === "l") {
        word = word + "त";
        return word;
      } else if (e.key === ";") {
        word = word + "च";
        return word;
      } else if (e.key === "'") {
        word = word + "ट";
        return word;
      } else if (e.key === "q") {
        word = word + "ौ";
        return word;
      } else if (e.key === "w") {
        word = word + "ै";
        return word;
      } else if (e.key === "e") {
        word = word + "ा";
        return word;
      } else if (e.key === "r") {
        word = word + "ी";
        return word;
      } else if (e.key === "t") {
        word = word + "ू";
        return word;
      } else if (e.key === "y") {
        word = word + "ब";
        return word;
      } else if (e.key === "u") {
        word = word + "ह";
        return word;
      } else if (e.key === "i") {
        word = word + "ग";
        return word;
      } else if (e.key === "o") {
        word = word + "द";
        return word;
      } else if (e.key === "p") {
        word = word + "ज";
        return word;
      } else if (e.key === "[") {
        word = word + "ड";
        return word;
      } else if (e.key === "]") {
        word = word + "़";
        return word;
      } else if (e.keyCode === 220) {
        word = word + "ॉ";
        return word;
      } else if (e.key === "z") {
        word = word + "ॆ";
        return word;
      } else if (e.key === "x") {
        word = word + "ं";
        return word;
      } else if (e.key === "c") {
        word = word + "म";
        return word;
      } else if (e.key === "v") {
        word = word + "न";
        return word;
      } else if (e.key === "b") {
        word = word + "व";
        return word;
      } else if (e.key === "n") {
        word = word + "ल";
        return word;
      } else if (e.key === "m") {
        word = word + "स";
        return word;
      } else if (e.key === ",") {
        word = word + ",";
        return word;
      } else if (e.key === ".") {
        word = word + ".";
        return word;
      } else if (e.key === "/") {
        word = word + "य";
        return word;
      } else if (e.key === "~") {
        word = word + "ऒ";
        return word;
      } else if (e.key === "!") {
        word = word + "ऍ";
        return word;
      } else if (e.key === "@") {
        word = word + "ॅ";
        return word;
      } else if (e.key === "#") {
        word = word + "्र";
        return word;
      } else if (e.key === "$") {
        word = word + "र्";
        return word;
      } else if (e.key === "%") {
        word = word + "ज्ञ";
        return word;
      } else if (e.key === "^") {
        word = word + "त्र";
        return word;
      } else if (e.key === "&") {
        word = word + "क्ष";
        return word;
      } else if (e.key === "*") {
        word = word + "श्र";
        return word;
      } else if (e.key === "(") {
        word = word + "(";
        return word;
      } else if (e.key === ")") {
        word = word + ")";
        return word;
      } else if (e.key === "_") {
        word = word + "ः";
        return word;
      } else if (e.key === "+") {
        word = word + "ऋ";
        return word;
      } else if (e.key === "Q") {
        word = word + "औ";
        return word;
      } else if (e.key === "W") {
        word = word + "ऐ";
        return word;
      } else if (e.key === "E") {
        word = word + "आ";
        return word;
      } else if (e.key === "R") {
        word = word + "ई";
        return word;
      } else if (e.key === "T") {
        word = word + "ऊ";
        return word;
      } else if (e.key === "Y") {
        word = word + "भ";
        return word;
      } else if (e.key === "U") {
        word = word + "ङ";
        return word;
      } else if (e.key === "I") {
        word = word + "घ";
        return word;
      } else if (e.key === "O") {
        word = word + "ध";
        return word;
      } else if (e.key === "P") {
        word = word + "झ";
        return word;
      } else if (e.key === "Delete" || e.key === "Backspace") {
        word = word.substring(0, word.length - 1);
        return word;
      } else if (e.key === "{") {
        word = word + "ढ";
        return word;
      } else if (e.key === "}") {
        word = word + "ञ";
        return word;
      } else if (e.key === "|") {
        word = word + "ऑ";
        return word;
      } else if (e.key === "A") {
        word = word + "ओ";
        return word;
      } else if (e.key === "S") {
        word = word + "ए";
        return word;
      } else if (e.key === "D") {
        word = word + "अ";
        return word;
      } else if (e.key === "F") {
        word = word + "इ";
        return word;
      } else if (e.key === "G") {
        word = word + "उ";
        return word;
      }else if (e.key === "H") {
        word = word + "फ";
        return word;
      }else if (e.key === "J") {
        word = word + "ऱ";
        return word;
      }else if (e.key === "K") {
        word = word + "ख";
        return word;
      }else if (e.key === "L") {
        word = word + "थ";
        return word;
      }else if (e.key === ":") {
        word = word + "छ";
        return word;
      }else if (e.keyCode === 222) {
        word = word + "ठ";
        return word;
      }else if (e.key === "Z") {
        word = word + "ऎ";
        return word;
      }else if (e.key === "X") {
        word = word + "ँ";
        return word;
      }else if (e.key === "C") {
        word = word + "ण";
        return word;
      }else if (e.key === "V") {
        word = word + "ऩ";
        return word;
      }else if (e.key === "B") {
        word = word + "ऴ";
        return word;
      }else if (e.key === "N") {
        word = word + "ळ";
        return word;
      }else if (e.key === "M") {
        word = word + "श";
        return word;
      }else if (e.key === "<") {
        word = word + "ष";
        return word;
      }else if (e.key === ">") {
        word = word + "।";
        return word;
      }else if (e.key === "?") {
        word = word + "य़";
        return word;
      }else if (e.key === " ") {
        word = word + " ";
        return word;
      }
}

export const PunjabiKeyboardPress=(e)=>{
    if (e.key === "`") {
        word = word + "੊";
        return word;
      } else if (e.key === "1") {
        word = word + "1";
        return word;
      } else if (e.key === "2") {
        word = word + "2";
        return word;
      } else if (e.key === "3") {
        word = word + "3";
        return word;
      } else if (e.key === "4") {
        word = word + "4";
        return word;
      } else if (e.key === "5") {
        word = word + "5";
        return word;
      } else if (e.key === "6") {
        word = word + "6";
        return word;
      } else if (e.key === "7") {
        word = word + "7";
        return word;
      } else if (e.key === "8") {
        word = word + "8";
        return word;
      } else if (e.key === "9") {
        word = word + "9";
        return word;
      } else if (e.key === "0") {
        word = word + "0";
        return word;
      } else if (e.key === "-") {
        word = word + "-";
        return word;
      } else if (e.key === "=") {
        word = word + "੃";
        return word;
      } else if (e.key === "q") {
        word = word + "ੌ";
        return word;
      } else if (e.key === "w") {
        word = word + "ੈ";
        return word;
      } else if (e.key === "e") {
        word = word + "ਾ";
        return word;
      } else if (e.key === "r") {
        word = word + "ੀ";
        return word;
      } else if (e.key === "t") {
        word = word + "ੂ";
        return word;
      } else if (e.key === "y") {
        word = word + "ਬ";
        return word;
      } else if (e.key === "u") {
        word = word + "ਹ";
        return word;
      } else if (e.key === "i") {
        word = word + "ਗ";
        return word;
      } else if (e.key === "o") {
        word = word + "ਦ";
        return word;
      } else if (e.key === "p") {
        word = word + "ਜ";
        return word;
      } else if (e.key === "[") {
        word = word + "ਡ";
        return word;
      } else if (e.key === "]") {
        word = word + "਼";
        return word;
      } else if (e.keyCode === 220) {
        word = word + "੉";
        return word;
      } else if (e.key === "a") {
        word = word + "ੋ";
        return word;
      } else if (e.key === "s") {
        word = word + "ੇ";
        return word;
      } else if (e.key === "d") {
        word = word + "੍";
        return word;
      } else if (e.key === "f") {
        word = word + "ਿ";
        return word;
      } else if (e.key === "g") {
        word = word + "ੁ";
        return word;
      } else if (e.key === "h") {
        word = word + "ਪ";
        return word;
      } else if (e.key === "j") {
        word = word + "ਰ";
        return word;
      } else if (e.key === "k") {
        word = word + "ਕ";
        return word;
      } else if (e.key === "l") {
        word = word + "ਤ";
        return word;
      } else if (e.key === ";") {
        word = word + "ਚ";
        return word;
      } else if (e.key === "'") {
        word = word + "ਟ";
        return word;
      } else if (e.key === "z") {
        word = word + "੆";
        return word;
      } else if (e.key === "x") {
        word = word + "ਂ";
        return word;
      } else if (e.key === "c") {
        word = word + "ਮ";
        return word;
      } else if (e.key === "v") {
        word = word + "ਨ";
        return word;
      } else if (e.key === "b") {
        word = word + "ਵ";
        return word;
      } else if (e.key === "n") {
        word = word + "ਲ";
        return word;
      } else if (e.key === "m") {
        word = word + "ਸ";
        return word;
      } else if (e.key === ",") {
        word = word + ",";
        return word;
      } else if (e.key === ".") {
        word = word + ".";
        return word;
      } else if (e.key === "/") {
        word = word + "ਯ";
        return word;
      } else if (e.key === "~") {
        word = word + "਒";
        return word;
      } else if (e.key === "!") {
        word = word + "਍";
        return word;
      } else if (e.key === "@") {
        word = word + "@";
        return word;
      } else if (e.key === "#") {
        word = word + "੍ਰ";
        return word;
      } else if (e.key === "$") {
        word = word + "ਰ੍";
        return word;
      } else if (e.key === "%") {
        word = word + "ਜ੍ਞ";
        return word;
      } else if (e.key === "^") {
        word = word + "ਤ੍ਰ";
        return word;
      } else if (e.key === "&") {
        word = word + "ਕ੍਷";
        return word;
      } else if (e.key === "*") {
        word = word + "ਸ਼੍ਰ";
        return word;
      } else if (e.key === "(") {
        word = word + "(";
        return word;
      } else if (e.key === ")") {
        word = word + ")";
        return word;
      } else if (e.key === "_") {
        word = word + "ਃ";
        return word;
      } else if (e.key === "+") {
        word = word + "਋";
        return word;
      } else if (e.key === "Q") {
        word = word + "ਔ";
        return word;
      } else if (e.key === "W") {
        word = word + "ਐ";
        return word;
      } else if (e.key === "E") {
        word = word + "ਆ";
        return word;
      } else if (e.key === "R") {
        word = word + "ਈ";
        return word;
      } else if (e.key === "T") {
        word = word + "ਊ";
        return word;
      } else if (e.key === "Y") {
        word = word + "ਭ";
        return word;
      } else if (e.key === "U") {
        word = word + "ਙ";
        return word;
      } else if (e.key === "I") {
        word = word + "ਘ";
        return word;
      } else if (e.key === "O") {
        word = word + "ਧ";
        return word;
      } else if (e.key === "P") {
        word = word + "ਝ";
        return word;
      } else if (e.key === "Delete" || e.key === "Backspace") {
        word = word.substring(0, word.length - 1);
        return word;
      } else if (e.key === "{") {
        word = word + "ਢ";
        return word;
      } else if (e.key === "}") {
        word = word + "ਞ";
        return word;
      } else if (e.key ==="|" ) {
        word = word + "਑";
        return word;
      } else if (e.key === "A") {
        word = word + "ਓ";
        return word;
      } else if (e.key === "S") {
        word = word + "ਏ";
        return word;
      } else if (e.key === "D") {
        word = word + "ਅ";
        return word;
      } else if (e.key === "F") {
        word = word + "ਇ";
        return word;
      } else if (e.key === "G") {
        word = word + "ਉ";
        return word;
      }else if (e.key === "H") {
        word = word + "ਫ";
        return word;
      }else if (e.key === "J") {
        word = word + "਱";
        return word;
      }else if (e.key === "K") {
        word = word + "ਖ";
        return word;
      }else if (e.key === "L") {
        word = word + "ਥ";
        return word;
      }else if (e.key === ":") {
        word = word + "ਛ";
        return word;
      }else if (e.keyCode ===222 ) {
        word = word + "ਠ";
        return word;
      }else if (e.key === "Z") {
        word = word + "਎";
        return word;
      }else if (e.key === "X") {
        word = word + "ਁ";
        return word;
      }else if (e.key === "C") {
        word = word + "ਣ";
        return word;
      }else if (e.key === "V") {
        word = word + "਩";
        return word;
      }else if (e.key === "B") {
        word = word + "਩";
        return word;
      }else if (e.key === "N") {
        word = word + "ਲ਼";
        return word;
      }else if (e.key === "M") {
        word = word + "ਸ਼";
        return word;
      }else if (e.key === "<") {
        word = word + "਷";
        return word;
      }else if (e.key === ">") {
        word = word + "਷";
        return word;
      }else if (e.key === "?") {
        word = word + "੟";
        return word;
      }else if (e.key === " ") {
        word = word + " ";
        return word;
      }
}

export const GujaratiKeyboardPress=(e)=>{
  if (e.key === "q") {
      word = word + "ૌ";
      return word;
    } else if (e.key === "w") {
      word = word + "ૈ";
      return word;
    } else if (e.key === "e") {
      word = word + "ા";
      return word;
    } else if (e.key === "r") {
      word = word + "ી";
      return word;
    } else if (e.key === "t") {
      word = word + "ૂ";
      return word;
    } else if (e.key === "y") {
      word = word + "બ";
      return word;
    } else if (e.key === "u") {
      word = word + "હ";
      return word;
    } else if (e.key === "i") {
      word = word + "ગ";
      return word;
    } else if (e.key === "o") {
      word = word + "દ";
      return word;
    } else if (e.key === "p") {
      word = word + "જ";
      return word;
    } else if (e.key === "[") {
      word = word + "ડ";
      return word;
    } else if (e.key === "]") {
      word = word + "઼";
      return word;
    } else if (e.keyCode === 220) {
      word = word + "ૉ";
      return word;
    } else if (e.key === "a") {
      word = word + "ો";
      return word;
    } else if (e.key === "s") {
      word = word + "ે";
      return word;
    } else if (e.key === "d") {
      word = word + "્";
      return word;
    } else if (e.key === "f") {
      word = word + "િ";
      return word;
    } else if (e.key === "g") {
      word = word + "ુ";
      return word;
    } else if (e.key === "h") {
      word = word + "પ";
      return word;
    } else if (e.key === "j") {
      word = word + "ર";
      return word;
    } else if (e.key === "k") {
      word = word + "ક";
      return word;
    } else if (e.key === "l") {
      word = word + "ત";
      return word;
    } else if (e.key === ";") {
      word = word + "ચ";
      return word;
    } else if (e.key === "'") {
      word = word + "ટ";
      return word;
    } else if (e.key === "z") {
      word = word + "૆";
      return word;
    } else if (e.key === "x") {
      word = word + "ં";
      return word;
    } else if (e.key === "c") {
      word = word + "મ";
      return word;
    } else if (e.key === "v") {
      word = word + "ન";
      return word;
    } else if (e.key === "b") {
      word = word + "વ";
      return word;
    } else if (e.key === "n") {
      word = word + "લ";
      return word;
    } else if (e.key === "m") {
      word = word + "સ";
      return word;
    } else if (e.key === ",") {
      word = word + ",";
      return word;
    } else if (e.key === ".") {
      word = word + ".";
      return word;
    } else if (e.key === "/") {
      word = word + "ય";
      return word;
    } else if (e.key === "Escape") {
      word = word + "૊";
      return word;
    } else if (e.key === "1") {
      word = word + "1";
      return word;
    } else if (e.key === "2") {
      word = word + "2";
      return word;
    } else if (e.key === "3") {
      word = word + "3";
      return word;
    } else if (e.key === "4") {
      word = word + "4";
      return word;
    } else if (e.key === "5") {
      word = word + "5";
      return word;
    } else if (e.key === "6") {
      word = word + "6";
      return word;
    } else if (e.key === "7") {
      word = word + "7";
      return word;
    } else if (e.key === "8") {
      word = word + "8";
      return word;
    } else if (e.key === "9") {
      word = word + "9";
      return word;
    } else if (e.key === "0") {
      word = word + "0";
      return word;
    } else if (e.key === "-") {
      word = word + "-";
      return word;
    } else if (e.key === "=") {
      word = word + "ૃ";
      return word;
    } else if (e.key === "!") {
      word = word + "ઍ";
      return word;
    } else if (e.key === "@") {
      word = word + "ૅ";
      return word;
    } else if (e.key === "#") {
      word = word + "્ર";
      return word;
    } else if (e.key === "$") {
      word = word + "ર્";
      return word;
    } else if (e.key === "^") {
      word = word + "ત્ર";
      return word;
    } else if (e.key === "&") {
      word = word + "ક્ષ";
      return word;
    } else if (e.key === "*") {
      word = word + "શ્ર";
      return word;
    } else if (e.key === "(") {
      word = word + "(";
      return word;
    } else if (e.key === ")") {
      word = word + ")";
      return word;
    } else if (e.key === "_") {
      word = word + "ઃ";
      return word;
    } else if (e.key === "+") {
      word = word + "ઋ";
      return word;
    } else if (e.key === "Q") {
      word = word + "ઔ";
      return word;
    } else if (e.key === "W") {
      word = word + "ઐ";
      return word;
    } else if (e.key === "E") {
      word = word + "આ";
      return word;
    } else if (e.key === "R") {
      word = word + "ઈ";
      return word;
    } else if (e.key === "T") {
      word = word + "ઊ";
      return word;
    } else if (e.key === "Y") {
      word = word + "ભ";
      return word;
    } else if (e.key === "U") {
      word = word + "ઙ";
      return word;
    } else if (e.key === "I") {
      word = word + "ઘ";
      return word;
    } else if (e.key === "O") {
      word = word + "ધ";
      return word;
    } else if (e.key === "P") {
      word = word + "ઝ";
      return word;
    } else if (e.key === "{") {
      word = word + "ઢ";
      return word;
    } else if (e.key === "}") {
      word = word + "ઞ";
      return word;
    } else if (e.key === "Delete" || e.key === "Backspace") {
      word = word.substring(0, word.length - 1);
      return word;
    } else if (e.key === "|") {
      word = word + "ઑ";
      return word;
    } else if (e.key === "A") {
      word = word + "ઓ";
      return word;
    } else if (e.key === "S") {
      word = word + "એ";
      return word;
    } else if (e.key === "D") {
      word = word + "અ";
      return word;
    } else if (e.key === "F") {
      word = word + "ઇ";
      return word;
    } else if (e.key === "G") {
      word = word + "ઉ";
      return word;
    } else if (e.key === "H") {
      word = word + "ફ";
      return word;
    } else if (e.key === "J") {
      word = word + "઱";
      return word;
    }else if (e.key === "K") {
      word = word + "ખ";
      return word;
    }else if (e.key === "L") {
      word = word + "થ";
      return word;
    }else if (e.key === ":") {
      word = word + "છ";
      return word;
    }else if (e.key === 222) {
      word = word + "ઠ";
      return word;
    }else if (e.key === "Z") {
      word = word + "઱";
      return word;
    }else if (e.key === "X") {
      word = word + "ઁ";
      return word;
    }else if (e.key === "C") {
      word = word + "ણ";
      return word;
    }else if (e.key === "V") {
      word = word + "઩";
      return word;
    }else if (e.key === "B") {
      word = word + "઱";
      return word;
    }else if (e.key === "N") {
      word = word + "ળ";
      return word;
    }else if (e.key === "M") {
      word = word + "શ";
      return word;
    }else if (e.key === "<") {
      word = word + "ષ";
      return word;
    }else if (e.key === ">") {
      word = word + "઱";
      return word;
    }else if (e.key === "?") {
      word = word + "૟";
      return word;
    }else if (e.key === " ") {
      word = word + " ";
      return word;
    }
}

export const TamilKeyboardPress=(e)=>{
  console.log(e.keyCode)
  if (e.key === "q") {
      word = word + "ஆ";
      return word;
    } else if (e.key === "w") {
      word = word + "ஈ";
      return word;
    } else if (e.key === "e") {
      word = word + "ஊ";
      return word;
    } else if (e.key === "r") {
      word = word + "ஐ";
      return word;
    } else if (e.key === "t") {
      word = word + "ஏ";
      return word;
    } else if (e.key === "y") {
      word = word + "ள";
      return word;
    } else if (e.key === "u") {
      word = word + "ற";
      return word;
    } else if (e.key === "i") {
      word = word + "ன";
      return word;
    } else if (e.key === "o") {
      word = word + "ட";
      return word;
    } else if (e.key === "p") {
      word = word + "ண";
      return word;
    } else if (e.key === "[") {
      word = word + "ச";
      return word;
    } else if (e.key === "]") {
      word = word + "ஞ";
      return word;
    } else if (e.keyCode === 220) {
      
    } else if (e.key === "a") {
      word = word + "அ";
      return word;
    } else if (e.key === "s") {
      word = word + "இ";
      return word;
    } else if (e.key === "d") {
      word = word + "உ";
      return word;
    } else if (e.key === "f") {
      word = word + "்";
      return word;
    } else if (e.key === "g") {
      word = word + "எ";
      return word;
    } else if (e.key === "h") {
      word = word + "க";
      return word;
    } else if (e.key === "j") {
      word = word + "ப";
      return word;
    } else if (e.key === "k") {
      word = word + "ம";
      return word;
    } else if (e.key === "l") {
      word = word + "த";
      return word;
    } else if (e.key === ";") {
      word = word + "ந";
      return word;
    } else if (e.key === "'") {
      word = word + "ய";
      return word;
    } else if (e.key === "z") {
      word = word + "ஔ";
      return word;
    } else if (e.key === "x") {
      word = word + "ஓ";
      return word;
    } else if (e.key === "c") {
      word = word + "ஒ";
      return word;
    } else if (e.key === "v") {
      word = word + "வ";
      return word;
    } else if (e.key === "b") {
      word = word + "ங";
      return word;
    } else if (e.key === "n") {
      word = word + "ல";
      return word;
    } else if (e.key === "m") {
      word = word + "ர";
      return word;
    } else if (e.key === ",") {
      word = word + ",";
      return word;
    } else if (e.key === ".") {
      word = word + ".";
      return word;
    } else if (e.key === "/") {
      word = word + "ழ";
      return word;
    } else if (e.key === "`") {
      word = word + "`";
      return word;
    } else if (e.key === "1") {
      word = word + "1";
      return word;
    } else if (e.key === "2") {
      word = word + "2";
      return word;
    } else if (e.key === "3") {
      word = word + "3";
      return word;
    } else if (e.key === "4") {
      word = word + "4";
      return word;
    } else if (e.key === "5") {
      word = word + "5";
      return word;
    } else if (e.key === "6") {
      word = word + "6";
      return word;
    } else if (e.key === "7") {
      word = word + "7";
      return word;
    } else if (e.key === "8") {
      word = word + "8";
      return word;
    } else if (e.key === "9") {
      word = word + "ौ";
      return word;
    } else if (e.key === "0") {
      word = word + "0";
      return word;
    } else if (e.key === "-") {
      word = word + "-";
      return word;
    } else if (e.key === "=") {
      word = word + "=";
      return word;
    } else if (e.key === "~") {
      word = word + "~";
      return word;
    } else if (e.key === "!") {
      word = word + "!";
      return word;
    } else if (e.key === "@") {
      word = word + "@";
      return word;
    } else if (e.key === "#") {
      word = word + "#";
      return word;
    } else if (e.key === "^") {
      word = word + "త్ర";
      return word;
    } else if (e.key === "$") {
      word = word + "$";
      return word;
    } else if (e.key === "%") {
      word = word + "%";
      return word;
    } else if (e.key === "^") {
      word = word + "^";
      return word;
    } else if (e.key === "&") {
      word = word + "&";
      return word;
    } else if (e.key === "*") {
      word = word + "*";
      return word;
    } else if (e.key === "(") {
      word = word + "(";
      return word;
    } else if (e.key === ")") {
      word = word + ")";
      return word;
    } else if (e.key === "_") {
      word = word + "_";
      return word;
    } else if (e.key === "+") {
      word = word + "+";
      return word;
    } else if (e.key === "Q") {
      word = word + "ஸ";
      return word;
    } else if (e.key === "W") {
      word = word + "ஷ";
      return word;
    } else if (e.key === "E") {
      word = word + "ஜ";
      return word;
    } else if (e.key === "R") {
      word = word + "ஹ";
      return word;
    } else if (e.key === "T") {
      word = word + "ஸ்ரீ";
      return word;
    } else if (e.key === "Y") {
      word = word + "க்ஷ";
      return word;
    } else if (e.key === "U") {
      word = word + "";
      return word;
    } else if (e.key === "I") {
      word = word + "";
      return word;
    } else if (e.key === "O") {
      word = word + "[";
      return word;
    } else if (e.key === "Delete" || e.key === "Backspace") {
      word = word.substring(0, word.length - 1);
      return word;
    } else if (e.key === "P") {
      word = word + "]";
      return word;
    } else if (e.key === "{") {
      word = word + "{";
      return word;
    } else if (e.key === "}") {
      word = word + "}";
      return word;
    } else if (e.key === "|") {
      word = word + "|";
      return word;
    } else if (e.key === "A") {
      word = word + "௹";
      return word;
    } else if (e.key === "S") {
      word = word + "௺";
      return word;
    } else if (e.key === "D") {
      word = word + "௸";
      return word;
    } else if (e.key === "F") {
      word = word + "ஃ";
      return word;
    } else if (e.key === "G") {
      word = word + "";
      return word;
    } else if (e.key === "H") {
      word = word + "ஃ";
      return word;
    } else if (e.key === "J") {
      word = word + "ஃ";
      return word;
    } else if (e.key === "K") {
     
    } else if (e.key === "L") {
      word = word + ":";
      return word;
    } else if (e.key === ":") {
      word = word + "ந";
      return word;
    } else if (e.keyCode === 222) {
      word = word + "ఠ";
      return word;
    } else if (e.key === "Z") {
      word = word + "ఎ";
      return word;
    } else if (e.key === "X") {
      word = word + "ఁ";
      return word;
    } else if (e.key === "C") {
      word = word + "ణ";
      return word;
    } else if (e.key === "V") {
      word = word + "఩";
      return word;
    } else if (e.key === "B") {
      word = word + "ఴ";
      return word;
    } else if (e.key === "N") {
      word = word + "ళ";
      return word;
    }else if (e.key === "M") {
      word = word + "శ";
      return word;
    }else if (e.key === "<") {
      word = word + ",";
      return word;
    }else if (e.key === ">") {
      word = word + "౤";
      return word;
    }else if (e.key === "?") {
      word = word + "౟";
      return word;
    }else if (e.key === " ") {
      word = word + " ";
      return word;
    }
}

export const FrenchKeyboardPress =(e)=>{
  if (e.key === "`") {
      word = word + "²";
      return word;
    } else if (e.key === "1") {
      word = word + "&";
      return word;
    } else if (e.key === "2") {
      word = word + "é";
      return word;
    } else if (e.key === "3") {
      word = word + "";
      return word;
    } else if (e.key === "4") {
      word = word + "'";
      return word;
    } else if (e.key === "5") {
      word = word + "(";
      return word;
    } else if (e.key === "6") {
      word = word + "-";
      return word;
    } else if (e.key === "7") {
      word = word + "è";
      return word;
    } else if (e.key === "8") {
      word = word + "_";
      return word;
    } else if (e.key === "9") {
      word = word + "ç";
      return word;
    } else if (e.key === "0") {
      word = word + "à";
      return word;
    } else if (e.key === "-") {
      word = word + ")";
      return word;
    } else if (e.key === "=") {
      word = word + "=";
      return word;
    } else if (e.key === "q") {
      word = word + "a";
      return word;
    } else if (e.key === "w") {
      word = word + "z";
      return word;
    } else if (e.key === "e") {
      word = word + "e";
      return word;
    } else if (e.key === "r") {
      word = word + "r";
      return word;
    } else if (e.key === "t") {
      word = word + "t";
      return word;
    } else if (e.key === "y") {
      word = word + "y";
      return word;
    } else if (e.key === "u") {
      word = word + "u";
      return word;
    } else if (e.key === "i") {
      word = word + "i";
      return word;
    } else if (e.key === "o") {
      word = word + "o";
      return word;
    } else if (e.key === "p") {
      word = word + "p";
      return word;
    } else if (e.key === "[") {
      word = word + "^";
      return word;
    } else if (e.key === "]") {
      word = word + "$";
      return word;
    } else if (e.keyCode === 220) {
      word = word + "*";
      return word;
    } else if (e.key === "a") {
      word = word + "q";
      return word;
    } else if (e.key === "s") {
      word = word + "s";
      return word;
    } else if (e.key === "d") {
      word = word + "d";
      return word;
    } else if (e.key === "f") {
      word = word + "f";
      return word;
    } else if (e.key === "g") {
      word = word + "g";
      return word;
    } else if (e.key === "h") {
      word = word + "h";
      return word;
    } else if (e.key === "j") {
      word = word + "j";
      return word;
    } else if (e.key === "k") {
      word = word + "k";
      return word;
    } else if (e.key === "l") {
      word = word + "l";
      return word;
    } else if (e.key === ";") {
      word = word + "m";
      return word;
    } else if (e.key === "'") {
      word = word + "ù";
      return word;
    } else if (e.key === "z") {
      word = word + "w";
      return word;
    } else if (e.key === "x") {
      word = word + "x";
      return word;
    } else if (e.key === "c") {
      word = word + "c";
      return word;
    } else if (e.key === "v") {
      word = word + "v";
      return word;
    } else if (e.key === "b") {
      word = word + "b";
      return word;
    } else if (e.key === "n") {
      word = word + "n";
      return word;
    } else if (e.key === "m") {
      word = word + ",";
      return word;
    } else if (e.key === ",") {
      word = word + ";";
      return word;
    } else if (e.key === ".") {
      word = word + ":";
      return word;
    } else if (e.key === "/") {
      word = word + "!";
      return word;
    } else if (e.key === "~") {
      word = word + "²";
      return word;
    } else if (e.key === "!") {
      word = word + "1";
      return word;
    } else if (e.key === "@") {
      word = word + "2";
      return word;
    } else if (e.key === "#") {
      word = word + "3";
      return word;
    } else if (e.key === "$") {
      word = word + "4";
      return word;
    } else if (e.key === "%") {
      word = word + "5";
      return word;
    } else if (e.key === "^") {
      word = word + "6";
      return word;
    } else if (e.key === "&") {
      word = word + "7";
      return word;
    } else if (e.key === "*") {
      word = word + "8";
      return word;
    } else if (e.key === "(") {
      word = word + "9";
      return word;
    } else if (e.key === ")") {
      word = word + "0";
      return word;
    } else if (e.key === "_") {
      word = word + "°";
      return word;
    } else if (e.key === "+") {
      word = word + "+";
      return word;
    } else if (e.key === "Q") {
      word = word + "A";
      return word;
    } else if (e.key === "W") {
      word = word + "Z";
      return word;
    } else if (e.key === "E") {
      word = word + "E";
      return word;
    } else if (e.key === "R") {
      word = word + "R";
      return word;
    } else if (e.key === "T") {
      word = word + "T";
      return word;
    } else if (e.key === "Y") {
      word = word + "Y";
      return word;
    } else if (e.key === "U") {
      word = word + "U";
      return word;
    } else if (e.key === "I") {
      word = word + "I";
      return word;
    } else if (e.key === "O") {
      word = word + "O";
      return word;
    } else if (e.key === "P") {
      word = word + "P";
      return word;
    } else if (e.key === "Delete" || e.key === "Backspace") {
      word = word.substring(0, word.length - 1);
      return word;
    } else if (e.key === "{") {
      word = word + "¨";
      return word;
    } else if (e.key === "}") {
      word = word + "£";
      return word;
    } 
    else if (e.keyCode === 220) {
      word = word + "*";
      return word;
    } else if (e.key === "A") {
      word = word + "Q";
      return word;
    } else if (e.key === "S") {
      word = word + "S";
      return word;
    } else if (e.key === "D") {
      word = word + "D";
      return word;
    } else if (e.key === "F") {
      word = word + "F";
      return word;
    } else if (e.key === "G") {
      word = word + "G";
      return word;
    } else if (e.key === "H") {
      word = word + "H";
      return word;
    }else if (e.key === "J") {
      word = word + "J";
      return word;
    }else if (e.key === "K") {
      word = word + "K";
      return word;
    }else if (e.key === "L") {
      word = word + "L";
      return word;
    }else if (e.key === ":") {
      word = word + "M";
      return word;
    }else if (e.keyCode===223) {
      word = word + "%";
      return word;
    }else if (e.key === "Z") {
      word = word + "W";
      return word;
    }else if (e.key === "X") {
      word = word + "X";
      return word;
    }else if (e.key === "C") {
      word = word + "C";
      return word;
    }else if (e.key === "V") {
      word = word + "V";
      return word;
    }else if (e.key === "B") {
      word = word + "B";
      return word;
    }else if (e.key === "N") {
      word = word + "N";
      return word;
    }else if (e.key === "M") {
      word = word + "?";
      return word;
    }else if (e.key === "<") {
      word = word + ".";
      return word;
    }else if (e.key === ">") {
      word = word + "/";
      return word;
    }else if (e.key === "?") {
      word = word + "§";
      return word;
    }else if (e.key === " ") {
      word = word + " ";
      return word;
    }
}

export const SpanishKeyboardPress =(e)=>{
  if (e.key === "º") {
      word = word + "º";
      return word;
    } else if (e.key === "1") {
      word = word + "1";
      return word;
    } else if (e.key === "2") {
      word = word + "2";
      return word;
    } else if (e.key === "3") {
      word = word + "3";
      return word;
    } else if (e.key === "4") {
      word = word + "4";
      return word;
    } else if (e.key === "5") {
      word = word + "5";
      return word;
    } else if (e.key === "6") {
      word = word + "6";
      return word;
    } else if (e.key === "7") {
      word = word + "7";
      return word;
    } else if (e.key === "8") {
      word = word + "8";
      return word;
    } else if (e.key === "9") {
      word = word + "9";
      return word;
    } else if (e.key === "0") {
      word = word + "0";
      return word;
    } else if (e.key === "-") {
      word = word + "'";
      return word;
    } else if (e.key === "=") {
      word = word + "¡";
      return word;
    } else if (e.key === "q") {
      word = word + "q";
      return word;
    } else if (e.key === "w") {
      word = word + "w";
      return word;
    } else if (e.key === "e") {
      word = word + "e";
      return word;
    } else if (e.key === "r") {
      word = word + "r";
      return word;
    } else if (e.key === "t") {
      word = word + "t";
      return word;
    } else if (e.key === "y") {
      word = word + "y";
      return word;
    } else if (e.key === "u") {
      word = word + "u";
      return word;
    } else if (e.key === "i") {
      word = word + "i";
      return word;
    } else if (e.key === "o") {
      word = word + "o";
      return word;
    } else if (e.key === "p") {
      word = word + "p";
      return word;
    } else if (e.key === "[") {
      word = word + "`";
      return word;
    } else if (e.key === "]") {
      word = word + "+";
      return word;
    } else if (e.keyCode === 220) {
      word = word + "ç";
      return word;
    } else if (e.key === "a") {
      word = word + "a";
      return word;
    } else if (e.key === "s") {
      word = word + "s";
      return word;
    } else if (e.key === "d") {
      word = word + "d";
      return word;
    } else if (e.key === "f") {
      word = word + "f";
      return word;
    } else if (e.key === "g") {
      word = word + "g";
      return word;
    } else if (e.key === "h") {
      word = word + "h";
      return word;
    } else if (e.key === "j") {
      word = word + "j";
      return word;
    } else if (e.key === "k") {
      word = word + "k";
      return word;
    } else if (e.key === "l") {
      word = word + "l";
      return word;
    } else if (e.key === ";") {
      word = word + "ñ";
      return word;
    } else if (e.key === "'") {
      word = word + "´";
      return word;
    } else if (e.key === "z") {
      word = word + "z";
      return word;
    } else if (e.key === "x") {
      word = word + "x";
      return word;
    } else if (e.key === "c") {
      word = word + "c";
      return word;
    } else if (e.key === "v") {
      word = word + "v";
      return word;
    } else if (e.key === "b") {
      word = word + "b";
      return word;
    } else if (e.key === "n") {
      word = word + "n";
      return word;
    } else if (e.key === "m") {
      word = word + "´";
      return word;
    } else if (e.key === ",") {
      word = word + ",";
      return word;
    } else if (e.key === ".") {
      word = word + ".";
      return word;
    } else if (e.key === "/") {
      word = word + "-";
      return word;
    } else if (e.key === "~") {
      word = word + "ª";
      return word;
    } else if (e.key === "!") {
      word = word + "!";
      return word;
    } else if (e.key === "@") {
      word = word + "";
      return word;
    } else if (e.key === "#") {
      word = word + "·";
      return word;
    } else if (e.key === "$") {
      word = word + "$";
      return word;
    } else if (e.key === "%") {
      word = word + "%";
      return word;
    } else if (e.key === "^") {
      word = word + "&";
      return word;
    } else if (e.key === "&") {
      word = word + "/";
      return word;
    } else if (e.key === "*") {
      word = word + "(";
      return word;
    } else if (e.key === "(") {
      word = word + "=";
      return word;
    } else if (e.key === ")") {
      word = word + "=";
      return word;
    } else if (e.key === "_") {
      word = word + "?";
      return word;
    } else if (e.key === "+") {
      word = word + "¿";
      return word;
    } else if (e.key === "Q") {
      word = word + "Q";
      return word;
    } else if (e.key === "W") {
      word = word + "W";
      return word;
    } else if (e.key === "E") {
      word = word + "E";
      return word;
    } else if (e.key === "R") {
      word = word + "R";
      return word;
    } else if (e.key === "T") {
      word = word + "T";
      return word;
    } else if (e.key === "Y") {
      word = word + "Y";
      return word;
    } else if (e.key === "U") {
      word = word + "U";
      return word;
    } else if (e.key === "I") {
      word = word + "I";
      return word;
    } else if (e.key === "O") {
      word = word + "O";
      return word;
    } else if (e.key === "P") {
      word = word + "P";
      return word;
    } else if (e.key === "Delete" || e.key === "Backspace") {
      word = word.substring(0, word.length - 1);
      return word;
    } else if (e.key === "{") {
      word = word + "^";
      return word;
    } else if (e.key === "}") {
      word = word + "*";
      return word;
    } 
    else if (e.keyCode === 220) {
      word = word + "Ç";
      return word;
    } else if (e.key === "A") {
      word = word + "A";
      return word;
    } else if (e.key === "S") {
      word = word + "S";
      return word;
    } else if (e.key === "D") {
      word = word + "D";
      return word;
    } else if (e.key === "F") {
      word = word + "F";
      return word;
    } else if (e.key === "G") {
      word = word + "G";
      return word;
    } else if (e.key === "H") {
      word = word + "H";
      return word;
    }else if (e.key === "J") {
      word = word + "J";
      return word;
    }else if (e.key === "K") {
      word = word + "K";
      return word;
    }else if (e.key === "L") {
      word = word + "L";
      return word;
    }else if (e.key === ":") {
      word = word + "Ñ";
      return word;
    }else if (e.keyCode===223) {
      word = word + "¨";
      return word;
    }else if (e.key === "Z") {
      word = word + "Z";
      return word;
    }else if (e.key === "X") {
      word = word + "X";
      return word;
    }else if (e.key === "C") {
      word = word + "C";
      return word;
    }else if (e.key === "V") {
      word = word + "V";
      return word;
    }else if (e.key === "B") {
      word = word + "B";
      return word;
    }else if (e.key === "N") {
      word = word + "N";
      return word;
    }else if (e.key === "M") {
      word = word + "M";
      return word;
    }else if (e.key === "<") {
      word = word + ";";
      return word;
    }else if (e.key === ">") {
      word = word + ":";
      return word;
    }else if (e.key === "?") {
      word = word + "_";
      return word;
    }else if (e.key === " ") {
      word = word + " ";
      return word;
    }
}


export const TeluguKeyboardPress=(e)=>{
  if (e.key === "`") {
    word = word + "ొ";
    return word;
  } else if (e.key === "1") {
    word = word + "1";
    return word;
  } else if (e.key === "2") {
    word = word + "2";
    return word;
  } else if (e.key === "3") {
    word = word + "3";
    return word;
  } else if (e.key === "4") {
    word = word + "4";
    return word;
  } else if (e.key === "5") {
    word = word + "5";
    return word;
  } else if (e.key === "6") {
    word = word + "6";
    return word;
  } else if (e.key === "7") {
    word = word + "7";
    return word;
  } else if (e.key === "8") {
    word = word + "8";
    return word;
  } else if (e.key === "9") {
    word = word + "9";
    return word;
  } else if (e.key === "0") {
    word = word + "0";
    return word;
  } else if (e.key === "-") {
    word = word + "-";
    return word;
  } else if (e.key === "=") {
    word = word + "ృ";
    return word;
  } else if (e.key === "q") {
    word = word + "ౌ";
    return word;
  } else if (e.key === "w") {
    word = word + "ై";
    return word;
  } else if (e.key === "e") {
    word = word + "ా";
    return word;
  } else if (e.key === "r") {
    word = word + "ీ";
    return word;
  } else if (e.key === "t") {
    word = word + "ూ";
    return word;
  } else if (e.key === "y") {
    word = word + "బ";
    return word;
  } else if (e.key === "u") {
    word = word + "హ";
    return word;
  } else if (e.key === "i") {
    word = word + "గ";
    return word;
  } else if (e.key === "o") {
    word = word + "ద";
    return word;
  } else if (e.key === "p") {
    word = word + "జ";
    return word;
  } else if (e.key === "[") {
    word = word + "డ";
    return word;
  } else if (e.key === "]") {
    word = word + "఼";
    return word;
  } else if (e.keyCode === 220) {
    word = word + "఼";
    return word;
  } else if (e.key === "a") {
    word = word + "ో";
    return word;
  } else if (e.key === "s") {
    word = word + "ే";
    return word;
  } else if (e.key === "d") {
    word = word + "్";
    return word;
  } else if (e.key === "f") {
    word = word + "ి";
    return word;
  } else if (e.key === "g") {
    word = word + "ు";
    return word;
  } else if (e.key === "h") {
    word = word + "ప";
    return word;
  } else if (e.key === "j") {
    word = word + "ర";
    return word;
  } else if (e.key === "k") {
    word = word + "క";
    return word;
  } else if (e.key === "l") {
    word = word + "త";
    return word;
  } else if (e.key === ";") {
    word = word + "చ";
    return word;
  } else if (e.key === "'") {
    word = word + "ట";
    return word;
  } else if (e.key === "z") {
    word = word + "ె";
    return word;
  } else if (e.key === "x") {
    word = word + "ం";
    return word;
  } else if (e.key === "c") {
    word = word + "మ";
    return word;
  } else if (e.key === "v") {
    word = word + "న";
    return word;
  } else if (e.key === "b") {
    word = word + "వ";
    return word;
  } else if (e.key === "n") {
    word = word + "ల";
    return word;
  } else if (e.key === "m") {
    word = word + "స";
    return word;
  } else if (e.key === ",") {
    word = word + ",";
    return word;
  } else if (e.key === ".") {
    word = word + ".";
    return word;
  } else if (e.key === "/") {
    word = word + "య";
    return word;
  } else if (e.key === "~") {
    word = word + "ఒ";
    return word;
  } else if (e.key === "!") {
    word = word + "఍";
    return word;
  } else if (e.key === "@") {
    word = word + "౅";
    return word;
  } else if (e.key === "#") {
    word = word + "్ర";
    return word;
  } else if (e.key === "$") {
    word = word + "ర్";
    return word;
  } else if (e.key === "%") {
    word = word + "జ్ఞ";
    return word;
  } else if (e.key === "&") {
    word = word + "క్ష";
    return word;
  } else if (e.key === "*") {
    word = word + "శ్ర";
    return word;
  } else if (e.key === "(") {
    word = word + "(";
    return word;
  } else if (e.key === ")") {
    word = word + ")";
    return word;
  } else if (e.key === "_") {
    word = word + "ః";
    return word;
  } else if (e.key === "+") {
    word = word + "ఋ";
    return word;
  } else if (e.key === "Q") {
    word = word + "ఔ";
    return word;
  } else if (e.key === "W") {
    word = word + "ఐ";
    return word;
  } else if (e.key === "E") {
    word = word + "ఆ";
    return word;
  } else if (e.key === "R") {
    word = word + "ఈ";
    return word;
  } else if (e.key === "T") {
    word = word + "ఊ";
    return word;
  } else if (e.key === "Y") {
    word = word + "భ";
    return word;
  } else if (e.key === "U") {
    word = word + "ఙ";
    return word;
  } else if (e.key === "I") {
    word = word + "ఘ";
    return word;
  } else if (e.key === "O") {
    word = word + "ధ";
    return word;
  } else if (e.key === "P") {
    word = word + "ఝ";
    return word;
  } else if (e.key === "{") {
    word = word + "ఢ";
    return word;
  } else if (e.key === "Delete" || e.key === "Backspace") {
    word = word.substring(0, word.length - 1);
    return word;
  } else if (e.key === "}") {
    word = word + "ఞ";
    return word;
  } else if (e.keyCode === 220) {
    word = word + "౉";
    return word;
  } else if (e.key === "A") {
    word = word + "ఓ";
    return word;
  } else if (e.key === "S") {
    word = word + "ఏ";
    return word;
  } else if (e.key === "D") {
    word = word + "అ";
    return word;
  } else if (e.key === "F") {
    word = word + "ఇ";
    return word;
  } else if (e.key === "G") {
    word = word + "ఉ";
    return word;
  } else if (e.key === "H") {
    word = word + "ఫ";
    return word;
  }else if (e.key === "H") {
    word = word + "ఫ";
    return word;
  }else if (e.key === "J") {
    word = word + "ఱ";
    return word;
  }else if (e.key === "K") {
    word = word + "ఖ";
    return word;
  }else if (e.key === "L") {
    word = word + "థ";
    return word;
  }else if (e.key === ";") {
    word = word + "చ";
    return word;
  }else if (e.keyCode===223) {
    word = word + "ఫ";
    return word;
  }else if (e.key === "Z") {
    word = word + "ఎ";
    return word;
  }else if (e.key === "X") {
    word = word + "ఁ";
    return word;
  }else if (e.key === "C") {
    word = word + "ణ";
    return word;
  }else if (e.key === "V") {
    word = word + "఩";
    return word;
  }else if (e.key === "B") {
    word = word + "ఴ";
    return word;
  }else if (e.key === "N") {
    word = word + "ళ";
    return word;
  }else if (e.key === "M") {
    word = word + "శ";
    return word;
  }else if (e.key === "<") {
    word = word + "ష";
    return word;
  }else if (e.key === ">") {
    word = word + "౤";
    return word;
  }else if (e.key === "?") {
    word = word + "౟";
    return word;
  }else if (e.key === " ") {
    word = word + " ";
    return word;
  }
}

export const BangaliKeyboardPress=(e)=>{
  if (e.key === "`") {
    word = word + "৊";
    return word;
  } else if (e.key === "1") {
    word = word + "1";
    return word;
  } else if (e.key === "2") {
    word = word + "2";
    return word;
  } else if (e.key === "3") {
    word = word + "3";
    return word;
  } else if (e.key === "4") {
    word = word + "4";
    return word;
  } else if (e.key === "5") {
    word = word + "5";
    return word;
  } else if (e.key === "6") {
    word = word + "6";
    return word;
  } else if (e.key === "7") {
    word = word + "7";
    return word;
  } else if (e.key === "8") {
    word = word + "8";
    return word;
  } else if (e.key === "9") {
    word = word + "9";
    return word;
  } else if (e.key === "0") {
    word = word + "0";
    return word;
  } else if (e.key === "-") {
    word = word + "-";
    return word;
  } else if (e.key === "=") {
    word = word + "ৃ";
    return word;
  } else if (e.key === "q") {
    word = word + "ৌ";
    return word;
  } else if (e.key === "w") {
    word = word + "ৈ";
    return word;
  } else if (e.key === "e") {
    word = word + "া";
    return word;
  } else if (e.key === "r") {
    word = word + "ী";
    return word;
  } else if (e.key === "t") {
    word = word + "ূ";
    return word;
  } else if (e.key === "y") {
    word = word + "ব";
    return word;
  } else if (e.key === "u") {
    word = word + "হ";
    return word;
  } else if (e.key === "i") {
    word = word + "গ";
    return word;
  } else if (e.key === "o") {
    word = word + "দ";
    return word;
  } else if (e.key === "p") {
    word = word + "জ";
    return word;
  } else if (e.key === "[") {
    word = word + "ড";
    return word;
  } else if (e.key === "]") {
    word = word + "়";
    return word;
  } else if (e.keyCode === 220) {
    word = word + "৉";
    return word;
  } else if (e.key === "a") {
    word = word + "ো";
    return word;
  } else if (e.key === "s") {
    word = word + "ে";
    return word;
  } else if (e.key === "d") {
    word = word + "্";
    return word;
  } else if (e.key === "f") {
    word = word + "ি";
    return word;
  } else if (e.key === "g") {
    word = word + "ু";
    return word;
  } else if (e.key === "h") {
    word = word + "প";
    return word;
  } else if (e.key === "j") {
    word = word + "র";
    return word;
  } else if (e.key === "k") {
    word = word + "ক";
    return word;
  } else if (e.key === "l") {
    word = word + "ত";
    return word;
  } else if (e.key === ";") {
    word = word + "চ";
    return word;
  } else if (e.key === "'") {
    word = word + "ট";
    return word;
  } else if (e.key === "z") {
    word = word + "৆";
    return word;
  } else if (e.key === "x") {
    word = word + "ং";
    return word;
  } else if (e.key === "c") {
    word = word + "ম";
    return word;
  } else if (e.key === "v") {
    word = word + "ন";
    return word;
  } else if (e.key === "b") {
    word = word + "঵";
    return word;
  } else if (e.key === "n") {
    word = word + "ল";
    return word;
  } else if (e.key === "m") {
    word = word + "স";
    return word;
  } else if (e.key === ",") {
    word = word + ",";
    return word;
  } else if (e.key === ".") {
    word = word + ".";
    return word;
  } else if (e.key === "/") {
    word = word + "য";
    return word;
  } else if (e.key === "~") {
    word = word + "঒";
    return word;
  } else if (e.key === "!") {
    word = word + "঍";
    return word;
  } else if (e.key === "@") {
    word = word + "৅";
    return word;
  } else if (e.key === "#") {
    word = word + "্র";
    return word;
  } else if (e.key === "$") {
    word = word + "র্";
    return word;
  } else if (e.key === "%") {
    word = word + "জ্ঞ";
    return word;
  } else if (e.key === "^") {
    word = word + "ত্র";
    return word;
  }else if (e.key === "&") {
    word = word + "ক্ষ";
    return word;
  } else if (e.key === "*") {
    word = word + "শ্র";
    return word;
  } else if (e.key === "(") {
    word = word + "(";
    return word;
  } else if (e.key === ")") {
    word = word + ")";
    return word;
  } else if (e.key === "_") {
    word = word + "ঃ";
    return word;
  } else if (e.key === "+") {
    word = word + "ঋ";
    return word;
  } else if (e.key === "Q") {
    word = word + "ঔ";
    return word;
  } else if (e.key === "W") {
    word = word + "ঐ";
    return word;
  } else if (e.key === "E") {
    word = word + "আ";
    return word;
  } else if (e.key === "R") {
    word = word + "ঈ";
    return word;
  } else if (e.key === "T") {
    word = word + "ঊ";
    return word;
  } else if (e.key === "Y") {
    word = word + "ভ";
    return word;
  } else if (e.key === "U") {
    word = word + "ঙ";
    return word;
  } else if (e.key === "I") {
    word = word + "ঘ";
    return word;
  } else if (e.key === "O") {
    word = word + "ধ";
    return word;
  } else if (e.key === "P") {
    word = word + "ঝ";
    return word;
  } else if (e.key === "{") {
    word = word + "ঢ";
    return word;
  } else if (e.key === "Delete" || e.key === "Backspace") {
    word = word.substring(0, word.length - 1);
    return word;
  } else if (e.key === "}") {
    word = word + "ঞ";
    return word;
  } else if (e.keyCode === 220) {
    word = word + "঑";
    return word;
  } else if (e.key === "A") {
    word = word + "ও";
    return word;
  } else if (e.key === "S") {
    word = word + "এ";
    return word;
  } else if (e.key === "D") {
    word = word + "অ";
    return word;
  } else if (e.key === "F") {
    word = word + "ই";
    return word;
  } else if (e.key === "G") {
    word = word + "উ";
    return word;
  } else if (e.key === "H") {
    word = word + "ফ";
    return word;
  }else if (e.key === "J") {
    word = word + "঱";
    return word;
  }else if (e.key === "K") {
    word = word + "খ";
    return word;
  }else if (e.key === "L") {
    word = word + "থ";
    return word;
  }else if (e.key === ";") {
    word = word + "ছ";
    return word;
  }else if (e.keyCode===223) {
    word = word + "ঠ";
    return word;
  }else if (e.key === "Z") {
    word = word + "঎";
    return word;
  }else if (e.key === "X") {
    word = word + "ঁ";
    return word;
  }else if (e.key === "C") {
    word = word + "ণ";
    return word;
  }else if (e.key === "V") {
    word = word + "঩";
    return word;
  }else if (e.key === "B") {
    word = word + "঴";
    return word;
  }else if (e.key === "N") {
    word = word + "঳";
    return word
  }else if (e.key === "M") {
    word = word + "শ";
    return word;
  }else if (e.key === "<") {
    word = word + "ষ";
    return word
  }else if (e.key === ">") {
    word = word + "৤";
    return word;
  }else if (e.key === "?") {
    word = word + "য়";
    return word;
  }else if (e.key === " ") {
    word = word + " ";
    return word;
  }
}

export const JarmaniKeyboardPress =(e)=>{
  if (e.key === "`") {
      word = word + "§";
      return word;
    } else if (e.key === "1") {
      word = word + "1";
      return word;
    } else if (e.key === "2") {
      word = word + "2";
      return word;
    } else if (e.key === "3") {
      word = word + "3";
      return word;
    } else if (e.key === "4") {
      word = word + "4";
      return word;
    } else if (e.key === "5") {
      word = word + "5";
      return word;
    } else if (e.key === "6") {
      word = word + "6";
      return word;
    } else if (e.key === "7") {
      word = word + "7";
      return word;
    } else if (e.key === "8") {
      word = word + "8";
      return word;
    } else if (e.key === "9") {
      word = word + "9";
      return word;
    } else if (e.key === "0") {
      word = word + "0";
      return word;
    } else if (e.key === "-") {
      word = word + "'";
      return word;
    } else if (e.key === "=") {
      word = word + "^";
      return word;
    } else if (e.key === "q") {
      word = word + "q";
      return word;
    } else if (e.key === "w") {
      word = word + "w";
      return word;
    } else if (e.key === "e") {
      word = word + "e";
      return word;
    } else if (e.key === "r") {
      word = word + "r";
      return word;
    } else if (e.key === "t") {
      word = word + "t";
      return word;
    } else if (e.key === "y") {
      word = word + "z";
      return word;
    } else if (e.key === "u") {
      word = word + "u";
      return word;
    } else if (e.key === "i") {
      word = word + "i";
      return word;
    } else if (e.key === "o") {
      word = word + "o";
      return word;
    } else if (e.key === "p") {
      word = word + "p";
      return word;
    } else if (e.key === "[") {
      word = word + "ü";
      return word;
    } else if (e.key === "]") {
      word = word + "¨";
      return word;
    } else if (e.keyCode === 220) {
      word = word + "$";
      return word;
    } else if (e.key === "a") {
      word = word + "a";
      return word;
    } else if (e.key === "s") {
      word = word + "s";
      return word;
    } else if (e.key === "d") {
      word = word + "d";
      return word;
    } else if (e.key === "f") {
      word = word + "f";
      return word;
    } else if (e.key === "g") {
      word = word + "g";
      return word;
    } else if (e.key === "h") {
      word = word + "h";
      return word;
    } else if (e.key === "j") {
      word = word + "j";
      return word;
    } else if (e.key === "k") {
      word = word + "k";
      return word;
    } else if (e.key === "l") {
      word = word + "l";
      return word;
    } else if (e.key === ";") {
      word = word + "ö";
      return word;
    } else if (e.key === "'") {
      word = word + "ä";
      return word;
    } else if (e.key === "z") {
      word = word + "y";
      return word;
    } else if (e.key === "x") {
      word = word + "x";
      return word;
    } else if (e.key === "c") {
      word = word + "c";
      return word;
    } else if (e.key === "v") {
      word = word + "v";
      return word;
    } else if (e.key === "b") {
      word = word + "b";
      return word;
    } else if (e.key === "n") {
      word = word + "n";
      return word;
    } else if (e.key === "m") {
      word = word + "m";
      return word;
    } else if (e.key === ",") {
      word = word + ",";
      return word;
    } else if (e.key === ".") {
      word = word + ".";
      return word;
    } else if (e.key === "/") {
      word = word + "-";
      return word;
    } else if (e.key === "~") {
      word = word + "°";
      return word;
    } else if (e.key === "!") {
      word = word + "+";
      return word;
    } else if (e.key === "@") {
      word = word + "";
      return word;
    } else if (e.key === "#") {
      word = word + "*";
      return word;
    } else if (e.key === "$") {
      word = word + "ç";
      return word;
    } else if (e.key === "%") {
      word = word + "%";
      return word;
    } else if (e.key === "^") {
      word = word + "&";
      return word;
    } else if (e.key === "&") {
      word = word + "/";
      return word;
    } else if (e.key === "*") {
      word = word + "(";
      return word;
    } else if (e.key === "(") {
      word = word + ")";
      return word;
    } else if (e.key === ")") {
      word = word + "=";
      return word;
    } else if (e.key === "_") {
      word = word + "?";
      return word;
    } else if (e.key === "+") {
      word = word + "`";
      return word;
    } else if (e.key === "Q") {
      word = word + "Q";
      return word;
    } else if (e.key === "W") {
      word = word + "W";
      return word;
    } else if (e.key === "E") {
      word = word + "E";
      return word;
    } else if (e.key === "R") {
      word = word + "R";
      return word;
    } else if (e.key === "T") {
      word = word + "T";
      return word;
    } else if (e.key === "Y") {
      word = word + "Z";
      return word;
    } else if (e.key === "U") {
      word = word + "U";
      return word;
    } else if (e.key === "I") {
      word = word + "I";
      return word;
    } else if (e.key === "O") {
      word = word + "O";
      return word;
    } else if (e.key === "P") {
      word = word + "P";
      return word;
    } else if (e.key === "Delete" || e.key === "Backspace") {
      word = word.substring(0, word.length - 1);
      return word;
    } else if (e.key === "{") {
      word = word + "è";
      return word;
    } else if (e.key === "}") {
      word = word + "!";
      return word;
    } 
    else if (e.keyCode === 220) {
      word = word + "£";
      return word;
    } else if (e.key === "A") {
      word = word + "A";
      return word;
    } else if (e.key === "S") {
      word = word + "S";
      return word;
    } else if (e.key === "D") {
      word = word + "D";
      return word;
    } else if (e.key === "F") {
      word = word + "F";
      return word;
    } else if (e.key === "G") {
      word = word + "G";
      return word;
    } else if (e.key === "H") {
      word = word + "H";
      return word;
    }else if (e.key === "J") {
      word = word + "J";
      return word;
    }else if (e.key === "K") {
      word = word + "K";
      return word;
    }else if (e.key === "L") {
      word = word + "L";
      return word;
    }else if (e.key === ":") {
      word = word + "é";
      return word;
    }else if (e.keyCode===223) {
      word = word + "à";
      return word;
    }else if (e.key === "Z") {
      word = word + "Y";
      return word;
    }else if (e.key === "X") {
      word = word + "X";
      return word;
    }else if (e.key === "C") {
      word = word + "C";
      return word;
    }else if (e.key === "V") {
      word = word + "V";
      return word;
    }else if (e.key === "B") {
      word = word + "B";
      return word;
    }else if (e.key === "N") {
      word = word + "N";
      return word;
    }else if (e.key === "M") {
      word = word + "M";
      return word;
    }else if (e.key === "<") {
      word = word + ";";
      return word;
    }else if (e.key === ">") {
      word = word + ":";
      return word;
    }else if (e.key === "?") {
      word = word + "_";
      return word;
    }else if (e.key === " ") {
      word = word + " ";
      return word;
    }
}
