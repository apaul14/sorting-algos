const selectionSort = arr => {
  const swapHelper = (arr, i, j, min) => {
    let temp = arr[i]
    arr[i] = min
    arr[j] = temp
  }

  for (let i = 0; i < arr.length; i++) {
    let min = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j]
      }
      if (min !== arr[i]) {
        swapHelper(arr, i, j, min)
        min = arr[i]
      }
    }
  }
  return arr
}

console.log(selectionSort([3,5,7,7,45,345,234,356,345,6345,5,6,7,2,2,5,6,7]))


