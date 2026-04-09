function solveQuadratic(A, B, C) {
  if (A === 0) {
    if (B === 0) {
      return C === 0 ? undefined : undefined; // 0 = 0 has infinite solutions, but problem asks for x values only
    }
    return [-C / B]; // Linear equation: Bx + C = 0
  }

  const discriminant = B * B - 4 * A * C;

  if (discriminant < 0) {
    return undefined; // No real roots
  } else if (discriminant === 0) {
    return [-B / (2 * A)]; // One repeated real root
  } else {
    const sqrtD = Math.sqrt(discriminant); // Use sqrt only once!
    const twoA = 2 * A;
    return [(-B + sqrtD) / twoA, (-B - sqrtD) / twoA];
  }
}
console.log(solveQuadratic(1, -3, 2)); // [2, 1]
console.log(solveQuadratic(1, 2, 1)); // [-1]
console.log(solveQuadratic(1, 0, 1)); // undefined (no real root)
console.log(solveQuadratic(0, 4, -8)); // [2]
console.log(solveQuadratic(0, 0, 0)); // undefined (infinite solutions but no x to return)
