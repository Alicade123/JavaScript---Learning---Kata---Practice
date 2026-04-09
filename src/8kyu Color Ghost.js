let Ghost = function () {
  let colors = ["white", "yellow", "purple", "red"];
  this.color = colors[Math.floor(Math.random() * colors.length)];
};

let ghost = new Ghost();
console.log(ghost.color); // "white", "yellow", "purple", or "red"
