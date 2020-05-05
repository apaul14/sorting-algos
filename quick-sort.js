//pivot or partition helper function

const pivot = (arr, start = 0, end = arr.length) => {
  let pivot = arr[start]
  let pivotIdx = 0

  const swap = (arr, i , j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
    swap(arr, pivotIdx, i)
      pivotIdx++
       }
    }
    swap(arr, start, pivotIdx)
    return pivotIdx
  }

 console.log(pivot([28,41,4,11,16,1,40,14,36,37,42,18]))

console.log(pivot([4,8,2,1,5,7,6,3]))