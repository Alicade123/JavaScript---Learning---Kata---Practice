function biggest(nums) {
  return (
    nums
      .map(String)
      .sort((a, b) => (b + a).localeCompare(a + b))
      .join("")
      .replace(/^0+/, "") || "0"
  );
}
console.log(biggest([1, 2, 3])); // "321";
console.log(biggest([121, 12, 9, 7, 9, 8])); // "12121";
console.log(biggest([3, 30, 34, 5, 9])); // "9534330";
