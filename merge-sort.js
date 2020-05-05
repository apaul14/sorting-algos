//merge

const merge = (a,b) => {
  let i = 0
  let j = 0
  let newArr = []

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      newArr.push(a[i])
      i++
    } else {
      newArr.push(b[j])
      j++
    }
  }
  while (i < a.length) {
    newArr.push(a[i])
      i++
  }
  while (j < b.length) {
    newArr.push(b[j])
      j++
  }
  return newArr
}

const mergeSort = arr => {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length/2)
  let left = mergeSort(arr.slice(0,mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left,right)
}

console.log(merge([1,10,50,101,108], [2,14,19,100]))

console.log(mergeSort([5,645,634,345,3457,45,345,7456,24,5234,534,734,524,65345,72,3463,4573,45])
)