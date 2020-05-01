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

console.log(merge([1,10,50,101,108], [2,14,19,100]))

