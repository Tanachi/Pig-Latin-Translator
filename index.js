module.exports  = translator;

var quote = 'is-Thay ig-Pay atin-Lay ase-phray ill-way e-bay anslated-tray ack-bay into-ay e-thay ative-nay anguage-lay -asay -aay ing.-stray';
var quote2 = 'This Pig Latin phrase will be translated back into the native language as a string.';
function translator(phrase){
  var newString;
  var words = '';
  var isPig = 0;
  if(typeof phrase === typeof ''){
    // Split sentances into array of words
    newString = phrase.split(' ');
    // check the first word to see if it's in pig langauge
    if(newString[0].charAt(newString[0].length - 2) + newString[0].charAt(newString[0].length - 1) === 'ay'){
      isPig = 1;
    }
    // translates each word into the other langauge
    newString.forEach(function(element,index,array){
      // translates from pig to english
      if(isPig === 1){
        var pigSplit = element.split('-');
        var ayyyy = pigSplit[1].split('ay');
        words += (ayyyy[0] + pigSplit[0] + ' ');
      }
      // translates from english to pig
      else{
        // checks to see if a word starts with a vowel
        if(element.charAt(0) === 'i'  || element.charAt(0) === 'I' ||
           element.charAt(0) === 'a'  || element.charAt(0) === 'A' ||
           element.charAt(0) === 'e'  || element.charAt(0) === 'E' ||
           element.charAt(0) === 'o'  || element.charAt(0) === 'O' ||
           element.charAt(0) === 'u'  || element.charAt(0) === 'U'){
            element += '-ay';
        }
        // checks for the first vowel in each word.
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
          // splits word from first vowel
          var spliceLetters = element.slice(0, vowelIndex);
          var otherLetters = element.slice(vowelIndex,element.length);
          // translates word into pig
          element = otherLetters + '-' + spliceLetters + 'ay';
          // puncuation for finish sentances
          var dotSplit = element.split('.');
          if(dotSplit.length > 1)
            element = dotSplit[0] + dotSplit[1] + '.';
        }
        // add new word into sentance
        words += element + ' ';
      }
    });
  }
  console.log(words + '\n');
}
translator(quote);
translator(quote2);