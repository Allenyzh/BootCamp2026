function times(a, b, delay) {
  const result = a * b;
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result), delay * 1000);
  });
}

function divide(a, b, delay) {
  const result = a / b;
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result), delay * 1000);
  });
}

// then chain
times(2, 6, 2)
  .then((result) => {
    console.log(`乘法结果是 ${result}`);
    return divide(result, 3, 2);
  })
  .then((result) => {
    console.log(`除法结果是 ${result}`);
    return result;
  });

// 嵌套
times(2, 6, 2).then((result) => {
  console.log(`乘法结果是 ${result} [嵌套]`);
  divide(result, 3, 2).then((re) => console.log(`除法结果是 ${re} [嵌套]`));
});
