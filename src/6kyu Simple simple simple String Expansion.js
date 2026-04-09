function expandString(input) {
  if (!input) return "";

  let result = "";
  let repeatCount = 1;
  let buffer = [];

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (!isNaN(char)) {
      // It's a digit
      // Collect digits until a non-digit is found
      while (!isNaN(input[i + 1])) {
        i++;
      }
      repeatCount = parseInt(input[i], 10);
    } else {
      // It's a letter, push it to buffer
      buffer.push(char);
      // Look ahead: if next character is a digit or end of string
      if (isNaN(input[i + 1]) || i + 1 === input.length) {
        // Repeat the buffer
        result += buffer.map((c) => c.repeat(repeatCount)).join("");
        buffer = [];
        repeatCount = 1;
      }
    }
  }

  return result;
}

console.log(expandString("111111"));
console.log(expandString("abcde"));

/*
"3D2a5d2f"  -->  "DDDaadddddff"    # basic example: 3 * "D" + 2 * "a" + 5 * "d" + 2 * "f"
"3abc"      -->  "aaabbbccc"       # not "aaabc", nor "abcabcabc"; 3 * "a" + 3 * "b" + 3 * "c"
"3d332f2a"  -->  "dddffaa"         # multiple consecutive digits: 3 * "d" + 2 * "f" + 2 * "a"
"abcde"     -->  "abcde"           # no digits
"1111"      -->  ""                # no characters to repeat
""          -->  ""                # empty string
*/
