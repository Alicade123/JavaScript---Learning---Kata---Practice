function incrementString(str) {
  let i = str.length - 1;

  
  while (i >= 0 && str[i] >= "0" && str[i] <= "9") {
    i--;
  }

  const prefix = str.slice(0, i + 1);
  const number = str.slice(i + 1);

  if (number === "") {
    return str + "1"; 
  }

  const incremented = (parseInt(number) + 1).toString();
  const zeros = number.length - incremented.length;

  return prefix + "0".repeat(Math.max(0, zeros)) + incremented;
}

console.log(incrementString("foobar000023"));
