function isVowel(letter) {
  return letter === "a" ||
         letter === "e" ||
         letter === "i" ||
         letter === "o" ||
         letter === "u"
}

function print(x) {
  console.log(x)
}

function vowelsAndConsonants(s) {
  var consonants = [];
  var vowels = [];

  for (var letter of s) {
      isVowel(letter)
          ? vowels.push(letter)
          : consonants.push(letter)
  }

  vowels.forEach(print)
  consonants.forEach(print)
}