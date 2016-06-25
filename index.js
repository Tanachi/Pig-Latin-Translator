module.exports  = translator;

var quote = 'is-Thay ig-Pay atin-Lay ase-phray ill-way e-bay anslated-tray ack-bay into-ay e-thay ative-nay anguage-lay -asay -aay ing.-stray';

function translator(phrase){
  var newString;
  var words = '';
  if(typeof phrase === typeof ''){
    newString = phrase.split(' ');
    newString.forEach(function(element,index,array){
      var pigSplit = element.split('-');
      var ayyyy = pigSplit[1].split('ay');
      words += (ayyyy[0] + pigSplit[0] + ' ');
    });
    console.log(words);
  }
}
translator(quote);