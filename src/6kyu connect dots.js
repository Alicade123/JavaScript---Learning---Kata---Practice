function connectTheDots(paper) {
  let drawing = "";
  for (let i = 0; i < paper.length; i++) {
    const str = "*";
    drawing = drawing + str * paper.length;
  }
  return drawing;
}

console.log(connectTheDots(["a", "b", "c"]));
