function salePrice(cost) {
  cost = Math.trunc(cost + (cost * 15) / 100)
    .toString()
    .split("");

  if (
    parseInt(cost[cost.length - 1]) === 0 ||
    parseInt(cost[cost.length - 1]) === 5
  ) {
    let newcost = "";
    for (let i = 0; i < cost.length; i++) {
      newcost += cost[i];
    }
    newcost = parseInt(newcost);
    return newcost;
  } else {
    if (parseInt(cost[cost.length - 1]) < 5) {
      let newcost = "";

      for (let i = 0; i < cost.length; i++) {
        if (i === cost.length - 1) newcost += 0;
        else newcost += cost[i];
      }
      newcost = parseInt(newcost);
      return newcost;
    } else {
      if (parseInt(cost[cost.length - 1]) > 5) {
        let newcost = "";

        for (let i = 0; i < cost.length; i++) {
          if (i !== cost.length - 2 && i !== cost.length - 1) {
            newcost += cost[i];
          }
          if (i === cost.length - 2) {
            newcost += ++cost[i];
          }
          if (i === cost.length - 1) {
            newcost += 0;
          }
        }
        newcost = parseInt(newcost);
        return newcost;
      }
    }
  }
}
console.log(salePrice(800)); //920
console.log(salePrice(600)); //690
console.log(salePrice(700)); //805
console.log(salePrice(120)); //140
console.log(salePrice(1002)); //140
console.log(salePrice(199));
