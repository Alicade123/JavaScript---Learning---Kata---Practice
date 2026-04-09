function sumDigPow(a, b) {
 
    let results =[];
       for(let  i = a; i<= b ; i++){
       let numberX = i.toString();
       let sum =0;
       for(let j = 0; j<numberX.length; j++){
      let z = Number.parseInt(numberX.charAt(j));
       sum += Math.pow(z,j+1);
       }
       if(sum==i){
           results.push(sum);
       }
       }
        return results;
}
        console.log(sumDigPow(1, 10));//new long[] {1, 2, 3, 4, 5, 6, 7, 8, 9}
        console.log(sumDigPow(1, 100));// new long[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 89});
        console.log(sumDigPow(10, 100));//,  new long[] {89});
        console.log(sumDigPow(90, 100));//, new long[] {});
        console.log(sumDigPow(90, 150));//, new long[] {135});
        console.log(sumDigPow(50, 150));//, new long[] {89, 135});
        console.log(sumDigPow(10, 150));//, new long[] {89, 135});
