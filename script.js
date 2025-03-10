function removeExtraSpaces(str) {
     return str.replace(/\s+/g, ' ').trim();
}
let text = "   Yo   What  up?     world!   How   are    you?   ";
let result = removeExtraSpaces(text);
console.log(result);  
  


function joinAndLowercaseWords() {
    let arr = ["iphone-16", "promax", "64gb"];
    let result = arr.join('-');  
    return result.toLowerCase(); 
  }
  
  console.log(joinAndLowercaseWords()); 




  