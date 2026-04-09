const comes_after = (string, l) => {
  const parttern = l.toLowerCase();
  const leters = string.split("");

  let result = "";

  for (let i = 0; i < leters.length; i++) {
    const nextmatchChar = leters[i + 1];
    if (leters[i].toLowerCase() === parttern && i < leters.length - 1) {
      result += nextmatchChar;
    }
  }
  return result.split("").filter((char) => {
    return /[A-Za-z]/.test(char);
  });
};
console.log(comes_after("are you really learning Ruby?", "r"));
console.log(comes_after("Katy Perry is on the radio!", "R"));
console.log(comes_after("d8u d._ rly 2d1s", "D"));
console.log(comes_after("nothing to be found here", "z"));
