function countArara(n) {
    let one = "anane";
    let two = "adak";

    let result = [];

    // Add "adak" for every pair of 2
    for (let i = 0; i < Math.floor(n / 2); i++) {
        result.push(two);
    }

    // If n is odd, add "anane" at the end
    if (n % 2 !== 0) {
        result.push(one);
    }

    // Join with spaces
    return result.join(" ");
}

console.log(countArara(1)); // Output: "anane"
console.log(countArara(2)); // Output: "adak"
console.log(countArara(3)); // Output: "adak anane"
console.log(countArara(4)); // Output: "adak adak"
console.log(countArara(5)); // Output: "adak adak anane"
console.log(countArara(6)); // Output: "adak adak adak"
console.log(countArara(7)); // Output: "adak adak adak anane"
console.log(countArara(8)); // Output: "adak adak adak adak"
