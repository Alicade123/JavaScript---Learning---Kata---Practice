const Rot13 = (text) => {
  return text
    .split("")
    .map((char) => {
      let charCodeNumber = char.charCodeAt(0);

      if (charCodeNumber >= 65 && charCodeNumber <= 90)
        return String.fromCharCode(((charCodeNumber - 65 + 13) % 26) + 65);
      else if (charCodeNumber >= 97 && charCodeNumber <= 122)
        return String.fromCharCode(((charCodeNumber - 97 + 13) % 26) + 97);
      else return char;
    })
    .join("");
};

console.log(Rot13("EBG13 rknzcyr.")); //ROT13 example.

//ROT13(c) = (c + 13) % 26
//ROT13(c) = ((charCode - base + 13) % 26) + base
