function balance(left, right) {
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < left.length; i++) {
    if (left[i] == "!") leftSum += 2;
    else leftSum += 3;
  }
  for (let i = 0; i < right.length; i++) {
    if (right[i] == "!") rightSum += 2;
    else rightSum += 3;
  }
  if (leftSum > rightSum) return "Left";
  else if (leftSum < rightSum) return "Right";
  else return "Balance";
}
console.log(balance("!!", "??")); // "Right"
console.log(balance("!??", "?!!")); // "Left"
console.log(balance("!?!!", "?!?")); // "Left"
console.log(balance("!!???!????", "??!!?!!!!!!!")); // "Balance"
