module.exports  = translator;

var quote = 'is-Thay ig-Pay atin-Lay ase-phray ill-way e-bay anslated-tray ack-bay into-ay e-thay ative-nay anguage-lay -asay -aay ing.-stray';
var quote2 = 'This Pig Latin phrase will be translated back into the native language as a string.';
function translator(phrase){
  var newString;
  var words = '';
  var isPig = 0;
  if(typeof phrase === typeof ''){
    newString = phrase.split(' ');
    if(newString[0].charAt(newString[0].length - 2) + newString[0].charAt(newString[0].length - 1) === 'ay'){
      isPig = 1;
    }
    newString.forEach(function(element,index,array){
      if(isPig === 1){
        var pigSplit = element.split('-');
        var ayyyy = pigSplit[1].split('ay');
        words += (ayyyy[0] + pigSplit[0] + ' ');
      }
      else{
        if(element.charAt(0) === 'i'  || element.charAt(0) === 'I' ||
           element.charAt(0) === 'a'  || element.charAt(0) === 'A' ||
           element.charAt(0) === 'e'  || element.charAt(0) === 'E' ||
           element.charAt(0) === 'o'  || element.charAt(0) === 'O' ||
           element.charAt(0) === 'u'  || element.charAt(0) === 'U'){
            element += '-ay';
        }
        else{
          var letterSplit = element.split('');
          var position = 0;
          var vowelIndex =0;
          while(position === 0 ){
            if(letterSplit[vowelIndex] === 'u'  ||
               letterSplit[vowelIndex] === 'o'  ||
               letterSplit[vowelIndex] === 'i'  ||
               letterSplit[vowelIndex] === 'e'  ||
               letterSplit[vowelIndex] === 'a'  ||
               letterSplit[vowelIndex] === 'y'){
                position = 1;
            }
            else{
              vowelIndex++;
            }
          }
          var spliceLetters = element.slice(0, vowelIndex);
          var otherLetters = element.slice(vowelIndex,element.length);
          element =otherLetters + '-' + spliceLetters + 'ay';
        }
        words += element + ' ';
      }
    });
  }
  console.log(words);
}
translator(quote2);