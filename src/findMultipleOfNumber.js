function findMultiples(n, limit) {
    let result = [];
    for (let i = n; i <= limit; i += n) {
        result.push(i);
    }
    return result;
}

// Example Usage
console.log(findMultiples(3, 30)); // Output: [2, 4, 6]
console.log(findMultiples(2, 5)); // Output: [2, 4]
console.log(findMultiples(3, 10)); // Output: [3, 6, 9]
