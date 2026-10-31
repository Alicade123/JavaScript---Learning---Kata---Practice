function maxConsecutiveSequenceLength(array) {
  const lengths = Array(array.length).fill(1);
  console.log(lengths);
  
  let longest = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      const difference = array[i] - array[j];
      if (difference >= 0 && difference <= 1) {
        lengths[i] = Math.max(lengths[i], lengths[j] + 1);
      }
    }
    longest = Math.max(longest, lengths[i]);
  }

  return longest;
}

console.log(maxConsecutiveSequenceLength([1, 1, 2, 5, 3])); // 4
console.log(maxConsecutiveSequenceLength([3,2,1]));// 1
// console.log(maxConsecutiveSequenceLength([-4,-4,-4,-3]));// 4
// console.log(maxConsecutiveSequenceLength([6,1,9,4,2,6,0,7,8]));// 4     // sequence is [6,6,7,8]
// console.log(maxConsecutiveSequenceLength([3,2,1,2,3,3,2,2,2,3,4]));// 7 // one eligible sequence is [2,2,2,2,2,3,4]
// console.log(maxConsecutiveSequenceLength([10]));// 1
// console.log(maxConsecutiveSequenceLength([]));// 0
