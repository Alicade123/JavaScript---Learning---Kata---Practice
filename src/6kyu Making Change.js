const makeChange = (amount) => {
  const results = {};
  let H = Math.trunc(amount / 50);
  if (H) results.H = H;
  amount = amount % 50;
  let Q = Math.trunc(amount / 25);
  if (Q) results.Q = Q;
  amount = amount % 25;
  let D = Math.trunc(amount / 10);
  if (D) results.D = D;
  amount = amount % 10;
  let N = Math.trunc(amount / 5);
  if (N) results.N = N;
  amount = amount % 5;
  if (amount) results.P = amount;

  return results;
};

console.log(makeChange(0)); //input = 0  => output = {}
console.log(makeChange(1)); //input = 1  => output = {'P': 1}
console.log(makeChange(43)); //input = 43 => output = {'Q': 1, 'D': 1, 'N': 1, 'P': 3}
console.log(makeChange(91)); //input = 91 => output = {'H': 1, 'Q': 1, 'D': 1, 'N': 1, 'P': 1}
