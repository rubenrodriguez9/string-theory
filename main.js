/******************
 * YOUR CODE HERE *
 ******************/
const indexedChars = function(str){
  let result ='';
  for(let i = 0; i < str.length; i++){
  result = result + i + str[i]
}
return result
}

const exclaim = function(str){
  let result = '';
  for(let i = 0; i < str.length; i++){
    if(str[i] === '?'){
      result = result + '!'
    } else if(str[i] === '.'){
      result = result + '!'
    }else result = result + str[i]
    
  }
  return result
}  

const repeatIt = function(str, times){
  let result = '';

  for(let i = 0;i < times; i++){
    result = result + str 
  }
  return result
}

const truncate = function(str){
  let result = '';
  for(let i = 0;i < str.length; i++){
    if(i < 15 && str.length > 17){
      result = result + str[i]
    }else if(i === 16 && str.length > 17){
      return result + '...'
    }else if(str.length < 18 && i < 18){
        result = result + str[i];
  } 

  }
  return result
} 

const ciEmailify = function(str){
  let result = '';
  let email = '@codeimmersives.com'
  for(let i = 0;i < str.length;i++){
    if(i < str.length && str[i] !== ' '){
      result = result + str[i];
    }else if(str[i] === ' '){
      result = result + '.'
    }else if(i < str.length){
      result = result + str[i]
    }
  }
  result = result.toLocaleLowerCase() + email
  return result

}

const reverse = function(str){
  let result = '';
  for(let i = str.length- 1;i >= 0;i--){
    result = result + str[i]
  }
  return result
}

const onlyVowels = function(str){
  let vowels = 'aeiou';
  let upper = 'AEIOU'
  let result = '';
  for(i = 0;i < str.length; i++){
    if(vowels.includes(str[i]) || upper.includes(str[i])){
      result = result + str[i]

    }
  }
  return result
}

const numberedChars = function(str){
  let result = '';
  let num = 1
  let left = "(";
  let right = ')'
  for(let i = 0; i < str.length; i++){

    result = result + left + num + right + str[i];
    num = num + 1
  }
  return result

}

const crazyCase = function(str){
  let result = '';
  for(let i = 0;i < str.length;i++){
    if(i === 0){
      result = result + str[i].toLocaleLowerCase()
    }else if(i % 2 === 1){
      result = result +str[i].toUpperCase()
    }else if(i % 2 === 0){
        result = result +str[i].toLocaleLowerCase()
      }
  }
  return result
}

const titleCase = function(str){
  let result = '';
  for(let i = 0;i < str.length;i++){
    if(i === 0){
      result = result + str[i].toUpperCase()
    }else if(str[i] === ' '){
      i = i + 1
      result = result + ' ' + str[i].toUpperCase();
    }else if(i < str.length){
      result = result + str[i].toLowerCase()
    }
    
  }
return result
}

      
      
       

 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  indexedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  numberedChars,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
