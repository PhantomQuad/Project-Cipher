//each keypress do...
function doConvert(){
    //get users input
    let userString = document.getElementById("userMessage").value;
    //check if encode selected
    let encode = document.getElementById("encode");
    //check for key to use
    let userKey1 = document.getElementById("userKey1").value;
    let userKey2 = document.getElementById("userKey2").value;
    //remove space? convert to lower case
    let cleanString = (userString.trim()).toLowerCase();
    //create array
    let outputMessage = [];
    //default to decode
    let flag = true;
  
    if (encode.checked) {
      flag = true;
    } else{
    flag = false;
    }
    for (let i = 0; i < cleanString.length; i++){
      outputMessage.push(codeLetter(cleanString[i], userKey1, userKey2, i, flag));
    }
  
    document.getElementById("output").value = outputMessage.join("");
  }
  
  
  function convertIndexToLetter(index){
    let alphabet = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x", "y","z"];
    let letter = alphabet[index];
    return letter;
  }
  
  function convertLetterToIndex(letter){
    let alphabet = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x", "y","z"];
    index = alphabet.indexOf(letter);
    return index;
  }
  
  function calculateNewIndex(letter, userKey1, userKey2, i, encode){
    let index = Number(convertLetterToIndex(letter));
  
    if (encode) { 
      index = index + Number(userKey1) + i + Number(userKey2);
    } else {
      index = index - Number(userKey1) - i - Number(userKey2);
    }  
    
    if (index > 25){
      index = index - 26;
    } else if (index < 0) {
      index = index + 26;
    }
    return index;
  }
  
  function codeLetter(letter, userKey1, userKey2, i, flag){
    //deal with non letter like space or number
    let letterRegEx = /[^a-z]/;
    
    if (letterRegEx.test(letter)){
      return letter;
    } else {
      let newIndex = calculateNewIndex(letter, userKey1, userKey2, i, flag);
      let codedLetter = convertIndexToLetter(newIndex);
      return codedLetter;
    }
  };