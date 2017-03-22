  function sumArray(array) {
    /// TODO 算法写这里
    if (!array || array.length < 3) {
      return 0;
    }

    array.sort(function(a, b) {
      return a - b
    })

    return array.slice(1, -1).reduce(function(pre, curr) {
      return pre + curr
    })

  }


  module.exports = sumArray
