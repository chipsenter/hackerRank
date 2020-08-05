function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
      const re = /^(a|e|i|o|u).*\1$/;
  

  return re;
}
regexVar('bcd');
regexVar('abcd');
regexVar('abcda');
regexVar('abcdo');