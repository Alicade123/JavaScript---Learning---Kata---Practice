const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const useFilter = (getArr) => {
  return getArr.filter((el) => el % 2 === 0);
};

const useMap = (getArr) => {
  return getArr.map((el) => el ** 2);
};

const useReduce = (getArr) => {
  return getArr.reduce((acc, val) => acc + val, 0);
};

const useSome = (getArr) => {
  return getArr.some((el) => el % 2 === 0);
};

const useEvery = (getArr) => {
  return getArr.every((el) => el <= 10);
};

const useFind = (getArr) => {
  return getArr.find((el) => el + 90 === 100);
};

const useFindIndex = (getArr) => {
  return getArr.findIndex((el) => el / 10 === 1);
};

const useReverse = (getArr) => {
  return getArr.reverse();
};

const useSort = (getArr) => {
  return getArr.sort((a, b) => a - b);
};

const useForEach = (getArr) => {
  console.log("The forEach() implementation:");
  getArr.forEach((el) => console.log([el]));
};
console.log(`The filter() implementation: ${useFilter(arr)}`);
console.log(`The map() implementation: ${useMap(arr)}`);
console.log(`The reduce() implementation: ${useReduce(arr)}`);
console.log(`The some() implementation: ${useSome(arr)}`);
console.log(`The every() implementation: ${useEvery(arr)}`);
console.log(`The find() implementation: ${useFind(arr)}`);
console.log(`The findIndex() implementation: ${useFindIndex(arr)}`);
console.log(`The reverse() implementation: ${useReverse(arr)}`);
console.log(`The sort() implementation: ${useSort(arr)}`);
`${useForEach(arr)}`;
