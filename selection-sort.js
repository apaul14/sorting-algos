const selectionSort = arr => {
  const swapHelper = (arr, a, b) => {
    let temp = arr[b]
    arr[b] = arr[a]
    arr[a] = temp
  }
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        swapHelper(arr, i, j)
     }
   }
  }
return arr
}

console.log(selectionSort([3,5,7,7,45,345,234,356,345,6345,5,6,7,2,2,5,6,7]))