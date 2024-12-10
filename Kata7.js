function range(start, end, step = 1) {
    let result = [];
    for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
      result.push(i);
    }
    return result;
  }
  
  function sum(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) total += array[i];
    return total;
  }
  
  console.log(range(1, 10));
  console.log(range(5, 2, -1));
  console.log(sum(range(1, 10)));
  