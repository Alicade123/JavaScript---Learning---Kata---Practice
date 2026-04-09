function printNums(...args) {
  const maxLength = Math.max(...args.map((num) => num.toString().length));
  const result = args
    .map((num) => num.toString().padStart(maxLength, "0"))
    .join("\n");
  console.log(result);
}
printNums(1, 23, 2, 17, 102);
