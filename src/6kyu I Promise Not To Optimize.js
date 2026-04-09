function antiOptimizeAsync(task) {
  const result = Promise.resolve(task());

  return new Promise((resolve) => {
    setTimeout(() => {
      result.then(resolve);
    }, 11000 + Math.random() * 1000);
  });
}

const slowTask = () => Promise.resolve("Solved by Alicade");
const slowTask2 = () => "Solved by Alicade";
antiOptimizeAsync(slowTask);
antiOptimizeAsync(slowTask2);
