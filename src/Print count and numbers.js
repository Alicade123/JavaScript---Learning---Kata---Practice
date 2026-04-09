function countMe(data) {
  //your code here
  if (!data || !/^\d+$/.test(data)) return "";
  var result = "";
  let counter = 1;
  for (let i = 1; i <= data.length; i++) {
    if (data[i] === data[i - 1]) {
      counter++;
    } else {
      result += counter + data[i - 1];
      counter = 1;
    }
  }
  return result;
}
console.log(countMe("1122")); //2122
