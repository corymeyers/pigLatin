function pigLatinator(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
  var startLetter = word.charAt(0);
  var result;
    vowels.forEach(function(vowel) {
      if (vowel === startLetter) {
        result = word.concat("ay");
      }
    });
    consonants.forEach(function(consonant) {
      if(consonant === startLetter) {
      var vowelPlace = word.search("o"||"e"||"i"||"a"||"u");
      var a = word.slice(0, vowelPlace);
console.log(a)
      result = a.concat(firstLetter+"ay");
        // var firstLetter = word.slice(0,1);
        // var restLetters = word.slice(1, (word.length));
        //
      }
    });
    return result;

}
