function comes_after(str, l) {
  const parttern = l.toLowerCase();
  const text = str.split("");
  const result = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i].toLowerCase() === parttern) {
      const nextChar = str[i + 1];
      if (/[a-zA-Z]/.test(nextChar)) {
        result.push(nextChar);
      }
    }
  }
  return result.length > 0 ? result.join("") : "";
}
console.log(comes_after("are you really learning Ruby?", "r"));
console.log(comes_after("Katy Perry is on the radio!", "R"));
console.log(comes_after("d8u d._ rly 2d1s", "D"));
console.log(comes_after("nothing to be found here", "z"));
