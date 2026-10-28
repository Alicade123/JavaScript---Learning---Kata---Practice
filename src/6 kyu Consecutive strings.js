function longestConsec(strarr, k) {
  const n = strarr.length;
  if (k <= 0 || k > n || n === 0) return "";
  else {
    let results = [];
    for (let i = 0; i <= strarr.length - k; i++) {
      let x = 0;
      let str = "";
      while (x < k) {
        str = str + strarr[i + x];
        x++;
      }
      results.push(str);
    }
    return results.reduce((a, b) => (a.length >= b.length ? a : b));
  }
}
console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2),
); //abigailtheta
console.log(
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh",
    ],
    1,
  ),
); // oocccffuucccjjjkkkjyyyeehh
console.log(longestConsec([], 3)); // ""
console.log(
  longestConsec(
    [
      "itvayloxrp",
      "wkppqsztdkmvcuwvereiupccauycnjutlv",
      "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
    ],
    2,
  ),
); // "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
console.log(
  longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2),
); // "wlwsasphmxxowiaxujylentrklctozmymu"
console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2),
); // ""
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)); // "ixoyx3452zzzzzzzzzzzz"
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15),
); // ""
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0)); // ""
