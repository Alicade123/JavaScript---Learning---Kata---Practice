function nthFibo(n) {
  // Return the n-th number in the Fibonacci Sequence
  let i = 3;
  let first_seq = 0;
  let second_seq = 1;

  let serie = [first_seq, second_seq];
  while (i <= n) {
    let next_seq = first_seq + second_seq;
    serie.push(next_seq);
    first_seq = second_seq;
    second_seq = serie[serie.length - 1];
    i++;
  }
  return serie[n - 1];
}
console.log(nthFibo(4));
