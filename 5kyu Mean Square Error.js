const solution = function (firstArray, secondArray) {
    let sum = 0.0;
    for(let i=0 ;i < firstArray.length;i++){
        let x = firstArray[i]-secondArray[i];
        sum += Math.pow(x,2);
    }
    return sum/firstArray.length;
};

  console.log(solution( [1, 2, 3], [4, 5, 6] )); //9.0
        console.log(solution( [10, 20, 10, 2], [10, 25, 5, -2] ));//16.5
        console.log(solution( [0, -1], [-1, 0] ));//1.0
        console.log(solution( [10, 10], [10, 10] ));//0.0