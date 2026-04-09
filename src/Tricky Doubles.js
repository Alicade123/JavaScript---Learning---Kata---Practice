function trickyDoubles(n) {
  const str = n.toString();

  // Check if the length is even (only even-length numbers can be evenly split)
  if (str.length % 2 === 0) {
    const half = str.length / 2;
    const firstHalf = str.slice(0, half);
    const secondHalf = str.slice(half);

    if (firstHalf === secondHalf) {
      return n; // It's a tricky double
    }
  }

  return n * 2; // Not a tricky double
}

// Test cases
console.log(trickyDoubles(15)); // 30
console.log(trickyDoubles(100)); // 200
console.log(trickyDoubles(4343)); // 4343
console.log(trickyDoubles(1212)); // 1212
console.log(trickyDoubles(1234)); // 2468
