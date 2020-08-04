function isVowel(letters) {
  return letters === "a" ||
         letters === "e" ||
         letters === "i" ||
         letters === "o" ||
         letters === "u"
}

function vowelsAndConsonants(s) {
  var consonants = [];
  var vowels = [];

  for (var letters of s) {
      if (isVowel(letters)) {
          vowels.push(letters)
      } else {
          consonants.push(letters)
      }
  }

  for (var vowel of vowels) {
      console.log(vowel);
  }

  for (var constant of consonants) {
      console.log(constant);
  }
}
vowelsAndConsonants('javascriptloopsisfun');