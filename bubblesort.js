const bubbleSort = arr => {
  const swapHelper = (arr, a, b) => {
    let temp = arr[b]
    arr[b] = arr[a]
    arr[a] = temp
  }
  let swap
  for (let i = arr.length; i > 0; i--) {
    swap = false
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        swapHelper(arr, j, j+1)
        swap = true
      }
    }
    if (!swap) break
  }
  return arr
}

console.log(bubbleSort([4,623,1234,6,41,7,1,6,1,98,45,6,0]))